import Link from "next/link";
import { brand, nav } from "@/content/site";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2">
          <div className="space-y-3">
            <div className="text-lg font-bold tracking-tight text-brand-navy">TESTYANTRA</div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Future-proof quality assurance—managed QA, automation, and training built for modern
              delivery.
            </p>
            <div className="text-sm text-muted">
              <a
                className="rounded transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                href={`mailto:${brand.emailPrimary}`}
              >
                {brand.emailPrimary}
              </a>
              <span className="mx-2 text-neutral-300">•</span>
              <a
                className="rounded transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                href="tel:+919742490958"
              >
                {brand.phoneIndia}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:justify-self-end">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted">Explore</div>
              <div className="flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit rounded py-1 text-sm text-muted transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted">Company</div>
              <div className="flex flex-col gap-1">
                <Link
                  href="/company/leadership"
                  className="w-fit rounded py-1 text-sm text-muted transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                >
                  Leadership
                </Link>
                <Link
                  href="/company/locations"
                  className="w-fit rounded py-1 text-sm text-muted transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                >
                  Locations
                </Link>
                <Link
                  href="/services"
                  className="w-fit rounded py-1 text-sm text-muted transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="w-fit rounded py-1 text-sm text-muted transition hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-neutral-200 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {brand.legalName}
          </div>
          <div className="text-neutral-400">Built with Next.js</div>
        </div>
      </Container>
    </footer>
  );
}
