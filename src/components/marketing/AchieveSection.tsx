"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { achieveTabs } from "@/content/marketing";
import { TabIcon } from "@/components/marketing/MarketingIcons";

export function AchieveSection() {
  const [active, setActive] = useState(0);
  const tab = achieveTabs[active]!;

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <h2 className="max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What do you want to <span className="text-brand-orange">achieve?</span>
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-3 lg:col-span-5">
            {achieveTabs.map((t, i) => {
              const isOn = i === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`flex w-full gap-4 rounded-xl border bg-white p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                    isOn
                      ? "border-neutral-200 shadow-sm"
                      : "border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <span
                    className={`w-1 shrink-0 self-stretch rounded-full ${
                      isOn ? "bg-brand-orange" : "bg-transparent"
                    }`}
                    aria-hidden
                  />
                  <span className="flex min-w-0 flex-1 gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
                      <TabIcon name={t.icon} className="h-5 w-5 text-foreground" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-foreground">{t.title}</span>
                      <span className="mt-0.5 block text-sm text-muted">{t.subtitle}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 sm:px-8 sm:py-10">
              <div className="h-1 w-full rounded-full bg-brand-orange" aria-hidden />
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {tab.panelTitle}
              </h3>
              <p className="mt-4 text-base leading-7 text-foreground">{tab.panelIntro}</p>
              <ul className="mt-6 space-y-3">
                {tab.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-6 text-foreground sm:text-base">
                    <span className="mt-1.5 h-0 w-0 shrink-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-brand-orange" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
