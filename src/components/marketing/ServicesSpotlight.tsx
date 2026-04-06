"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { serviceCards } from "@/content/marketing";

export function ServicesSpotlight() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? 0;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <p className="max-w-3xl text-lg font-medium leading-relaxed text-foreground">
          From strategy to execution, we deliver end-to-end quality engineering solutions designed for
          speed, scale, and reliability.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card, i) => {
            const isActive = active === i;
            const isFeatured = Boolean(card.featured);
            return (
              <article
                key={card.id}
                className={`flex min-h-[240px] flex-col rounded-xl border p-6 transition focus-within:ring-2 focus-within:ring-brand-orange ${
                  isActive
                    ? "border-brand-orange/50 bg-brand-peach-strong shadow-sm"
                    : "border-neutral-900/20 bg-white hover:border-neutral-400"
                }`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white text-lg">
                  {card.emoji}
                </div>
                <h3
                  className={`mt-4 text-lg font-bold text-foreground ${isActive && isFeatured ? "underline decoration-brand-orange decoration-2 underline-offset-4" : ""}`}
                >
                  {card.title}
                </h3>

                {isActive && isFeatured && card.sublinks ? (
                  <ul className="mt-4 flex flex-col gap-2">
                    {card.sublinks.map((s) => (
                      <li key={s.label}>
                        <Link
                          href={s.href}
                          className="text-sm font-medium text-foreground transition hover:text-brand-orange"
                        >
                          {s.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                      {card.description ||
                        "Advisory engagements that align quality strategy, tooling, and roadmaps to your delivery goals."}
                    </p>
                    <Link
                      href="/services"
                      className="mt-6 inline-flex text-xs font-semibold uppercase tracking-wide text-brand-orange"
                    >
                      Learn more →
                    </Link>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
