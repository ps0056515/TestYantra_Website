import Link from "next/link";
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
        <p className="mt-4 text-base leading-7 text-[var(--muted2)]">
          TestYantra operates across 7 global locations, providing follow-the-sun delivery, local
          engagement, and responsive support for enterprises across North America, Europe, Asia-Pacific,
          and the Middle East.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <div
            key={`${loc.country}-${loc.city}`}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              {loc.country}
            </div>
            <div className="mt-1 text-base font-semibold tracking-tight text-[var(--text)]">
              {loc.city}
            </div>
            <div className="mt-4 space-y-1 text-sm leading-6 text-[var(--muted2)]">
              {loc.addressLines.map((l) => (
                <div key={l}>{l}</div>
              ))}
            </div>
            {loc.phone ? (
              <div className="mt-4">
                <a
                  className="text-sm text-[var(--muted2)] transition hover:text-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`}
                >
                  {loc.phone}
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Work with us
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight text-[var(--text)]">
              Ready to engage with the team nearest you?
            </div>
            <p className="mt-2 text-sm leading-6 text-[var(--muted2)]">
              Reach out to start a conversation about your quality engineering challenges. Our teams
              across all locations are ready to help.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/contact"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:w-auto"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </V2InnerShell>
  );
}
