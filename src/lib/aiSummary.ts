import { changeText, type Dashboard } from "@/lib/adminData";

const SECTION_NAME: Record<string, string> = {
  gateway: "the home page (where visitors choose a service)",
  qe: "Quality Engineering & Testing",
  ai: "Application Engineering & AI",
  company: "company pages (contact, insights)",
  other: "other pages",
};

/** Compact, de-identified view of the dashboard for the model: no names, emails or IPs leave the server. */
function digest(d: Dashboard) {
  const t = d.totals;
  const p = d.previous;
  return {
    periodDays: d.days,
    thisPeriod: {
      pageViews: t.pageviews,
      uniqueVisitors: t.visitors,
      visits: t.sessions,
      enquiries: t.leads,
      enquiriesPerHundredVisits: t.sessions ? +((t.leads / t.sessions) * 100).toFixed(1) : 0,
    },
    previousPeriod: p,
    changeVsPrevious: {
      pageViews: changeText(t.pageviews, p.pageviews, d.days),
      uniqueVisitors: changeText(t.visitors, p.visitors, d.days),
      enquiries: changeText(t.leads, p.leads, d.days),
    },
    viewsBySection: d.sections.map((s) => ({ section: SECTION_NAME[s.label] ?? s.label, views: s.views, visitors: s.visitors })),
    topPages: d.pages.slice(0, 8),
    whereVisitorsCameFrom: d.sources.slice(0, 6),
    countries: d.countries.slice(0, 5),
    viewsPerDay: d.daily.map((x) => `${x.day}: ${x.views} views, ${x.leads} enquiries`),
    companyIdentificationSwitchedOn: d.companyLookupEnabled,
    companiesLookingAtTheSite: d.companies.slice(0, 15).map((c) => ({
      company: c.company,
      pageViews: c.views,
      visits: c.sessions,
      interestAreas: c.sections.split(",").map((k) => SECTION_NAME[k] ?? k),
      pagesViewed: c.pages,
    })),
    newEnquiries: d.leads.slice(0, 25).map((l) => ({
      date: l.createdAt.slice(0, 10),
      companyFromEmailDomain: l.emailDomain,
      companyIdentifiedFromVisit: l.visitorCompany,
      wantsHelpWith: l.interest,
      industry: l.industry,
      areaOfSite: SECTION_NAME[l.section ?? ""] ?? l.section,
      submittedOnPage: l.sourcePath,
      foundUsVia: l.utmSource ?? l.referrer ?? "direct visit",
      statusInOurTracker: l.status,
      messageExcerpt: (l.message ?? "").slice(0, 220),
    })),
  };
}

const INSTRUCTIONS = `You write the website report for TestYantra's leadership, sales and marketing team. TestYantra has two service lines: Quality Engineering & Testing, and Application Engineering & AI. Readers are busy and NOT technical. They must understand every line without asking anyone.

WRITING RULES
- Plain, short sentences. No jargon. If you must use a term, explain it in brackets the first time: "page views (pages opened)", "unique visitors (different people or devices)", "visits (one browsing session)", "enquiries (contact-form submissions)".
- For every finding give three things: WHAT happened (with the number), WHAT IT MEANS, and WHAT TO DO. Never leave a number without saying whether it is good, bad or too small to judge.
- Always compare with the previous period using the supplied changeVsPrevious text. Say plainly "up", "down" or "no change".
- When numbers are tiny (for example fewer than 20 visits, or fewer than 3 enquiries), say the sample is too small to draw firm conclusions. Never overstate a trend.
- Use ONLY the supplied data. Never invent companies, numbers or reasons. If something is not in the data, say it is not available and say what would fix that.
- For each company, explain why the pages they viewed suggest interest (for example "read the managed QA page, so likely evaluating outsourced testing") and give one specific next step. Mark them as a hot, warm or early signal and say why.
- For each enquiry give: who (company), what they want, how they found us, and a priority (High / Medium / Low) with a one-line reason. Say who should reply first.

FORMAT — use exactly this restricted markdown and nothing else (no tables, no code):
## In one minute
(3 bullets: traffic, enquiries, and the single most important takeaway)
## How the website did
## Which service is attracting attention
## Companies looking at us
## New enquiries
## What to do this week
(numbered list, maximum 4, each says who should do it: Sales, Marketing or Management)
## Keep in mind
(1–3 short bullets on data limits: small numbers, own-office visits excluded, company identification only catches visitors on business networks, work-from-home visitors are not named)

Use "- " for bullets, "1. " for numbered items, and **bold** for company names, numbers that matter and priority labels.`;

function fallbackSummary(d: Dashboard): string {
  const t = d.totals;
  const p = d.previous;
  const per = t.sessions ? ((t.leads / t.sessions) * 100).toFixed(1) : "0";
  const sec = (k: string) => d.sections.find((x) => x.label === k)?.views ?? 0;
  const qe = sec("qe");
  const ai = sec("ai");
  const small = t.sessions < 20;
  const out: string[] = [];

  out.push("## In one minute");
  out.push(`- **Traffic:** ${t.pageviews} page views (pages opened) from ${t.visitors} unique visitors (different people or devices) in the last ${d.days} days — ${changeText(t.pageviews, p.pageviews, d.days)}.`);
  out.push(`- **Enquiries:** ${t.leads} contact-form submissions — ${changeText(t.leads, p.leads, d.days)}.`);
  out.push(
    t.pageviews === 0
      ? "- **Takeaway:** no visits have been recorded yet. Check that the site is live and the tracker is working."
      : qe === ai
        ? "- **Takeaway:** interest is evenly split between the two services."
        : `- **Takeaway:** visitors are looking more at **${qe > ai ? "Quality Engineering & Testing" : "Application Engineering & AI"}** (${Math.max(qe, ai)} views vs ${Math.min(qe, ai)}).`,
  );

  out.push("## How the website did");
  out.push(`- ${t.sessions} visits (one visit = one browsing session). ${t.leads} of them led to an enquiry, which is **${per} enquiries per 100 visits**.`);
  if (d.sources[0]) out.push(`- Most visitors came from **${d.sources[0].label}** (${d.sources[0].views} page views). That is where to keep investing.`);
  if (d.pages[0]) out.push(`- The most-read page was **${d.pages[0].label}** (${d.pages[0].views} views).`);
  if (small) out.push("- The numbers are still small, so treat them as early signs, not firm trends.");

  out.push("## Which service is attracting attention");
  out.push(`- Quality Engineering & Testing: **${qe}** page views. Application Engineering & AI: **${ai}** page views. Home page: ${sec("gateway")}.`);

  out.push("## Companies looking at us");
  if (d.companies.length) {
    for (const c of d.companies.slice(0, 6)) {
      const where = c.sections.split(",").map((k) => SECTION_NAME[k] ?? k).join(" and ");
      out.push(`- **${c.company}** viewed ${c.views} pages over ${c.sessions} visit${c.sessions === 1 ? "" : "s"}, mainly ${where}. Top pages: ${c.pages.slice(0, 3).join(", ")}. ${c.sessions > 1 ? "They came back, which is a warm signal — worth a personal outreach." : "A single visit so far — an early signal; keep an eye on them."}`);
    }
  } else if (!d.companyLookupEnabled) {
    out.push("- Company names are **not available** because company identification is switched off. Adding an IPinfo token on the server would show which businesses visit.");
  } else {
    out.push("- No business networks were identified this period. Visitors on home or mobile networks cannot be named.");
  }

  out.push("## New enquiries");
  if (d.leads.length) {
    for (const l of d.leads.slice(0, 6)) {
      const who = l.visitorCompany ?? l.emailDomain ?? "unknown company";
      out.push(`- **${who}** wants help with **${l.interest ?? "a general enquiry"}**${l.industry ? ` (${l.industry})` : ""}. Found us via ${l.utmSource ?? l.referrer ?? "a direct visit"}. Status: ${l.status}.`);
    }
    out.push("- Reply to the newest enquiry first — people who hear back within a day are far more likely to convert.");
  } else {
    out.push("- No enquiries this period.");
  }

  out.push("## What to do this week");
  const todo: string[] = [];
  if (d.leads.some((l) => l.status === "new")) todo.push("**Sales:** reply to every enquiry still marked \"new\" in the list below.");
  if (d.companies.length) todo.push(`**Sales:** reach out to **${d.companies[0].company}**, the most active company.`);
  if (t.leads === 0 && t.sessions > 0) todo.push("**Marketing:** visitors are arriving but nobody is enquiring — review the contact page and the call-to-action buttons.");
  if (!todo.length) todo.push("**Marketing:** keep sharing the site; there is not enough activity yet to act on.");
  todo.forEach((x, i) => out.push(`${i + 1}. ${x}`));

  out.push("## Keep in mind");
  out.push("- Visits from our own office are excluded, as are search-engine robots.");
  out.push("- Company names only appear for visitors on business networks, so the real list of interested companies is larger.");
  out.push("- This is an automatic summary. Add a Claude or OpenAI key on the server for a fuller written analysis.");
  return out.join("\n");
}

export async function generateSummary(d: Dashboard): Promise<{ text: string; source: "ai" | "basic"; error?: string }> {
  let error: string | undefined;
  const prompt = `${INSTRUCTIONS}\n\nDATA (JSON):\n${JSON.stringify(digest(d), null, 1)}`;

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
          max_tokens: 2000,
          messages: [{ role: "user", content: prompt }],
        }),
        signal: AbortSignal.timeout(60_000),
      });
      if (res.ok) {
        const j = (await res.json()) as { content?: { type: string; text?: string }[] };
        const text = j.content?.filter((c) => c.type === "text").map((c) => c.text).join("\n").trim();
        if (text) return { text, source: "ai" };
      } else {
        error = `Claude API returned ${res.status}`;
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
        signal: AbortSignal.timeout(60_000),
      });
      if (res.ok) {
        const j = (await res.json()) as { choices?: { message?: { content?: string } }[] };
        const text = j.choices?.[0]?.message?.content?.trim();
        if (text) return { text, source: "ai" };
      } else {
        error = `OpenAI API returned ${res.status}`;
        console.error("[summary] openai", res.status, await res.text());
      }
    }
  } catch (err) {
    error = "Could not reach the AI service";
    console.error("[summary] failed", err);
  }
  return { text: fallbackSummary(d), source: "basic", error };
}
