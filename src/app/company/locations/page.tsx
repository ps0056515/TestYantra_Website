import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { locations } from "@/content/site";

export default function LocationsPage() {
  return (
    <V2InnerShell>
      <div className="max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Global presence
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
          Closer to your teams, wherever you ship.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[var(--muted2)] sm:text-base">
          Delivery and support across six regions — TestYantra HQ, TechnoElevate development center,
          and follow-the-sun coverage worldwide.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <div
            key={`${loc.country}-${loc.city}`}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6"
          >
            {loc.unit ? (
              <span className="inline-block rounded-full bg-[var(--surface)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--indigo)]">
                {loc.unit}
              </span>
            ) : null}
            <div className="mt-2 text-sm font-semibold tracking-tight text-[var(--text)]">{loc.country}</div>
            <div className="mt-1 text-sm text-[var(--muted)]">{loc.city}</div>
            <div className="mt-4 space-y-1 text-sm leading-6 text-[var(--muted2)]">
              {loc.addressLines.map((l) => (
                <div key={l}>{l}</div>
              ))}
            </div>
            {loc.phone ? (
              <div className="mt-4 text-sm">
                <a
                  className="text-[var(--muted2)] transition hover:text-[var(--accent)]"
                  href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`}
                >
                  {loc.phone}
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </V2InnerShell>
  );
}
