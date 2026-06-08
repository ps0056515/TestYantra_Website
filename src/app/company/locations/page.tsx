"use client";

import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";
import { locations } from "@/content/site";

function getCountryCode(country: string) {
  const codes: Record<string, string> = {
    "India": "in",
    "United States": "us",
    "United Kingdom": "gb",
    "Ireland": "ie",
    "Netherlands": "nl",
    "Canada": "ca",
    "Australia": "au",
  };
  return codes[country] || "un";
}

export default function LocationsPage() {
  return (
    <V2InnerShell>
      {/* HERO SECTION */}
      <div className="relative overflow-hidden mb-16 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-[var(--accent)]/5 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollAnimate direction="up">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20">
              Global Presence
            </div>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text)] leading-tight mb-6">
              Closer to your teams, wherever you ship.
            </h1>
          </ScrollAnimate>
          
          <ScrollAnimate direction="up" delay={200}>
            <p className="text-base md:text-lg text-[var(--muted2)] leading-relaxed max-w-2xl mx-auto">
              Delivery and support across six regions — TestYantra HQ, TechnoElevate development center, and follow-the-sun coverage worldwide.
            </p>
          </ScrollAnimate>
        </div>
      </div>

      {/* LOCATIONS GRID */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-20">
        {locations.map((loc, i) => (
          <ScrollAnimate 
            key={`${loc.country}-${loc.city}`} 
            direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"} 
            delay={i * 100}
          >
            <div className="group relative h-full flex flex-col rounded-2xl border border-[var(--border2)] bg-[var(--surface)] p-8 hover:bg-[var(--bg)] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
              
              <div className="absolute top-8 right-8 w-9 h-9 rounded-full overflow-hidden border border-[var(--border2)] shadow-sm z-20 group-hover:border-[var(--accent)] transition-colors duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`https://flagcdn.com/w40/${getCountryCode(loc.country)}.png`} 
                  alt={`${loc.country} flag`}
                  className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10">
                {loc.unit ? (
                  <div className="mb-6">
                    {loc.unit === "TechnoElevate" ? (
                      <a
                        href="https://technoelevate.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] border border-[var(--accent)]/20 hover:bg-[var(--accent)] hover:text-white transition-colors"
                      >
                        {loc.unit} ↗
                      </a>
                    ) : (
                      <span className="inline-block rounded-full bg-[var(--bg2)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] border border-[var(--border)]">
                        {loc.unit}
                      </span>
                    )}
                  </div>
                ) : <div className="mb-6 h-6" />}
                
                <h2 className="text-2xl font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {loc.country}
                </h2>
                <div className="mt-1 mb-6 text-sm font-semibold tracking-wider uppercase text-[var(--muted)]">
                  {loc.city}
                </div>
                
                <div className="space-y-1.5 text-sm leading-relaxed text-[var(--muted2)] mb-8">
                  {loc.addressLines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
              </div>

              {loc.phone && (
                <div className="mt-auto relative z-10 pt-6 border-t border-[var(--border)]">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">Contact</div>
                  <a
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors"
                    href={`tel:${loc.phone.replace(/[^\d+]/g, "")}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {loc.phone}
                  </a>
                </div>
              )}
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </V2InnerShell>
  );
}
