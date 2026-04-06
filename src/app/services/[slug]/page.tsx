import { notFound } from "next/navigation";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { services } from "@/content/site";

type Params = { slug: string };

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">Service</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{service.name}</h1>
        <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">{service.summary}</p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 lg:col-span-2">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">What you get</div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {service.bullets.map((b) => (
              <li
                key={b}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--muted2)]"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6">
          <div className="text-sm font-semibold tracking-tight text-[var(--text)]">Expected outcomes</div>
          <ul className="mt-4 grid gap-3">
            {service.outcomes.map((o) => (
              <li key={o} className="text-sm leading-6 text-[var(--muted2)]">
                <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-[var(--teal)]" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </V2InnerShell>
  );
}
