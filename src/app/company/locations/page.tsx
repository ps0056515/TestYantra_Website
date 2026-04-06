import { Container } from "@/components/Container";
import { locations } from "@/content/site";

export default function LocationsPage() {
  return (
    <div className="bg-white pb-12 pt-[124px] text-foreground sm:pb-16 sm:pt-[132px]">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">
            Global presence
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Closer to your teams, wherever you ship.
          </h1>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            Delivery and support across multiple regions—built for responsiveness and collaboration.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc) => (
            <div
              key={`${loc.country}-${loc.city}`}
              className="rounded-2xl border border-card-border bg-card p-6"
            >
              <div className="text-sm font-semibold tracking-tight">{loc.country}</div>
              <div className="mt-1 text-sm text-muted">{loc.city}</div>
              <div className="mt-4 space-y-1 text-sm leading-6 text-muted">
                {loc.addressLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
              {loc.phone ? (
                <div className="mt-4 text-sm">
                  <a
                    className="rounded text-muted transition hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`}
                  >
                    {loc.phone}
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

