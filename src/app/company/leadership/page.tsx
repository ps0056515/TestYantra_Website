import { Container } from "@/components/Container";

const leadershipPoints = [
  "Built multiple business verticals to support enterprise QA needs across domains and technologies.",
  "Established a crowd testing service platform for flexible and fast QA coverage across B2B and B2C apps.",
  "Created a training organization supporting large-scale hiring and capability development for IT companies.",
  "Grew a high-performing leadership team spanning key lines of business and delivery functions.",
  "Scaled delivery with a large, globally distributed testing organization and engineering footprint.",
];

export default function LeadershipPage() {
  return (
    <div className="bg-white pb-12 pt-[124px] text-foreground sm:pb-16 sm:pt-[132px]">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            Company
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Leadership that turns strategy into execution.
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            The story behind Test Yantra is a delivery-first mindset: translate vision into
            repeatable systems—teams, platforms, and practices—that consistently improve outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-card-border bg-card p-6 lg:col-span-2">
            <div className="text-sm font-semibold tracking-tight">What this leadership built</div>
            <ul className="mt-4 grid gap-3">
              {leadershipPoints.map((p) => (
                <li key={p} className="text-sm leading-6 text-muted">
                  <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-[rgba(174,120,255,0.7)]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-card-border bg-card p-6">
            <div className="text-sm font-semibold tracking-tight">Operating principles</div>
            <div className="mt-4 grid gap-3">
              {[
                { k: "Clarity", v: "Simple systems, measurable gates." },
                { k: "Speed", v: "Fail early, learn fast, automate deeply." },
                { k: "Trust", v: "Transparent delivery, predictable outcomes." },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-xl border border-card-border/60 bg-black/10 p-4"
                >
                  <div className="text-sm font-semibold tracking-tight">{x.k}</div>
                  <div className="mt-1 text-sm text-muted">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

