import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";

const leadershipPoints = [
  "Built multiple business verticals to support enterprise QA needs across domains and technologies.",
  "Established a crowd testing service platform for flexible and fast QA coverage across B2B and B2C apps.",
  "Created a training organization supporting large-scale hiring and capability development for IT companies.",
  "Launched TechnoElevate as the group's software development unit — 900+ engineers delivering quality-first builds.",
  "Grew a high-performing leadership team spanning QE, development, training, and delivery functions.",
  "Scaled delivery with a large, globally distributed testing and engineering organization.",
];

export default function LeadershipPage() {
  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Company</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Leadership that turns strategy into execution.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">
          The story behind Test Yantra is a delivery-first mindset: translate vision into repeatable
          systems — TestYantra, TechnoElevate, and Academy — that consistently improve outcomes.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 lg:col-span-2">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">What this leadership built</div>
          <ul className="mt-4 grid gap-3">
            {leadershipPoints.map((p) => (
              <li key={p} className="text-sm leading-6 text-[var(--muted2)]">
                <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-[var(--teal)]" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">Operating principles</div>
          <div className="mt-4 grid gap-3">
            {[
              { k: "Clarity", v: "Simple systems, measurable gates." },
              { k: "Speed", v: "Fail early, learn fast, automate deeply." },
              { k: "Trust", v: "Transparent delivery, predictable outcomes." },
            ].map((x) => (
              <div key={x.k} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <div className="text-sm font-semibold tracking-tight text-[var(--text)]">{x.k}</div>
                <div className="mt-1 text-sm text-[var(--muted2)]">{x.v}</div>
              </div>
            ))}
          </div>
          <Link href="/#ecosystem" className="mt-6 inline-block text-sm font-semibold text-[var(--accent)]">
            Explore the group →
          </Link>
        </div>
      </div>
    </V2InnerShell>
  );
}
