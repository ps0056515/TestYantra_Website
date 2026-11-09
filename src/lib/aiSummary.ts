import type { Dashboard } from "@/lib/adminData";

/** Compact, de-identified view of the dashboard for the model: no names, emails or IPs leave the server. */
function digest(d: Dashboard) {
  return {
    periodDays: d.days,
    totals: d.totals,
    conversionPct: d.totals.sessions ? +((d.totals.leads / d.totals.sessions) * 100).toFixed(2) : 0,
    viewsBySection: d.sections,
    topPages: d.pages.slice(0, 8),
    trafficSources: d.sources.slice(0, 6),
    countries: d.countries.slice(0, 5),
    dailyViews: d.daily.map((x) => `${x.day}:${x.views}v/${x.leads}l`).join(" "),
    companiesVisiting: d.companies.slice(0, 15).map((c) => ({
      company: c.company,
      views: c.views,
      sessions: c.sessions,
      sections: c.sections,
      pages: c.pages,
    })),
    enquiries: d.leads.slice(0, 25).map((l) => ({
      when: l.createdAt.slice(0, 10),
      companyFromEmailDomain: l.emailDomain,
      identifiedVisitorCompany: l.visitorCompany,
      interest: l.interest,
      industry: l.industry,
      section: l.section,
      fromPage: l.sourcePath,
      source: l.utmSource ?? l.referrer ?? "direct",
      messageExcerpt: (l.message ?? "").slice(0, 220),
    })),
  };
}

const INSTRUCTIONS = `You are the growth analyst for TestYantra, a B2B firm with two lines: Quality Engineering & Testing (/qe) and Application Engineering & AI (/ai).
Write a concise executive summary for the sales and marketing leadership from the website data provided. Use these headings:
1. Headline (2 sentences: traffic, enquiries, conversion)
2. Which section is winning (QE vs AI) and why
3. Accounts to watch (named companies viewing the site, what they looked at, suggested follow-up)
4. New enquiries (themes, urgency, who to call first)
5. Recommended actions this week (max 4 bullets)
Be specific and numerical. If data is thin or company identification is off, say so plainly instead of guessing. Do not invent data.`;

function fallbackSummary(d: Dashboard): string {
  const t = d.totals;
  const conv = t.sessions ? ((t.leads / t.sessions) * 100).toFixed(1) : "0";
  const sec = (k: string) => d.sections.find((x) => x.label === k)?.views ?? 0;
  const lines = [
    `**Headline** — In the last ${d.days} days the site had ${t.pageviews} page views from ${t.visitors} unique visitors (${t.sessions} sessions) and received ${t.leads} enquiries (${conv}% of sessions).`,
    `**Sections** — Quality Engineering: ${sec("qe")} views · Application Engineering & AI: ${sec("ai")} views · Gateway: ${sec("gateway")} views.`,
  ];
  if (d.pages[0]) lines.push(`**Top page** — ${d.pages[0].label} (${d.pages[0].views} views).`);
  if (d.sources[0]) lines.push(`**Top source** — ${d.sources[0].label} (${d.sources[0].views} views).`);
  if (d.companies.length) {
    lines.push(
      "**Accounts to watch** — " +
        d.companies
          .slice(0, 5)
          .map((c) => `${c.company} (${c.views} views: ${c.pages.slice(0, 2).join(", ")})`)
          .join("; ") +
        ".",
    );
  } else {
    lines.push(
      d.companyLookupEnabled
        ? "**Accounts to watch** — no business networks identified in this period."
        : "**Accounts to watch** — company identification is switched off. Add IPINFO_TOKEN to see which companies visit.",
    );
  }
  if (d.leads.length) {
    lines.push(
      "**Latest enquiries** — " +
        d.leads
          .slice(0, 5)
          .map((l) => `${l.emailDomain ?? "unknown"} → ${l.interest ?? "General"}`)
          .join("; ") +
        ".",
    );
  }
  lines.push("_Basic summary. Add ANTHROPIC_API_KEY or OPENAI_API_KEY for an AI-written analysis._");
  return lines.join("\n\n");
}

export async function generateSummary(d: Dashboard): Promise<{ text: string; source: "ai" | "basic" }> {
  const prompt = `${INSTRUCTIONS}\n\nDATA (JSON):\n${JSON.stringify(digest(d))}`;

  try {
    if (process.env.ANTHROPIC_API_KEY) {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.AI_SUMMARY_MODEL ?? "claude-sonnet-4-5",
          max_tokens: 1200,
          messages: [{ role: "user", content: prompt }],
        }),
        signal: AbortSignal.timeout(45_000),
      });
      if (res.ok) {
        const j = (await res.json()) as { content?: { type: string; text?: string }[] };
        const text = j.content?.filter((c) => c.type === "text").map((c) => c.text).join("\n").trim();
        if (text) return { text, source: "ai" };
      } else {
        console.error("[summary] anthropic", res.status, await res.text());
      }
    } else if (process.env.OPENAI_API_KEY) {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "content-type": "application/json" },
        body: JSON.stringify({
          model: process.env.AI_SUMMARY_MODEL ?? "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
        }),
        signal: AbortSignal.timeout(45_000),
      });
      if (res.ok) {
        const j = (await res.json()) as { choices?: { message?: { content?: string } }[] };
        const text = j.choices?.[0]?.message?.content?.trim();
        if (text) return { text, source: "ai" };
      } else {
        console.error("[summary] openai", res.status, await res.text());
      }
    }
  } catch (err) {
    console.error("[summary] failed", err);
  }
  return { text: fallbackSummary(d), source: "basic" };
}
