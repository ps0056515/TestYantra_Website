import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { groupExternalUrls, Innovexce } from "@/content/site";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";
import { AnimatedCounter } from "@/components/v2/AnimatedCounter";

export default function DevelopmentPage() {
  const { aiHub } = Innovexce;

  return (
    <V2InnerShell>
      <div className="bg-dot-grid relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 space-y-32">
        {/* Decorative ambient auras */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--indigo)] to-[var(--accent)] opacity-[0.05] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.7% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* HERO SECTION */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center relative">
          <div className="lg:col-span-7 space-y-6">
            <ScrollAnimate direction="left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--indigo)]/20 bg-[var(--indigo)]/5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--indigo)] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--indigo)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--indigo)]"></span>
                </span>
                A Test Yantra Company · Product Engineering Studio
              </div>
            </ScrollAnimate>
            <ScrollAnimate direction="left" delay={100}>
              <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl font-display leading-[1.15]">
                {Innovexce.tagline}
              </h1>
            </ScrollAnimate>
            <ScrollAnimate direction="left" delay={125}>
              <p className="text-lg sm:text-xl text-[var(--indigo)] font-semibold max-w-2xl leading-snug">
                {Innovexce.heroSubline}
              </p>
            </ScrollAnimate>
            <ScrollAnimate direction="left" delay={150}>
              <p className="text-base leading-7 text-[var(--muted2)] sm:text-lg max-w-2xl font-medium">
                {Innovexce.description}
              </p>
            </ScrollAnimate>
            <ScrollAnimate direction="left" delay={200}>
              <p className="text-sm text-[var(--muted2)] font-semibold">
                Choose your path below — managed product engineering or talent
                from our bench.
              </p>
            </ScrollAnimate>

            {/* Stats Pill Matrix */}
            <ScrollAnimate direction="left" delay={250}>
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4 shadow-sm hover:border-[var(--indigo)]/20 transition">
                  <div className="text-2xl font-extrabold text-[var(--indigo)]">
                    <AnimatedCounter value="900" />+
                  </div>
                  <div className="text-xs font-semibold text-[var(--muted)] mt-1">
                    Developers
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4 shadow-sm hover:border-[var(--indigo)]/20 transition">
                  <div className="text-2xl font-extrabold text-[var(--indigo)]">
                    <AnimatedCounter value="100" />%
                  </div>
                  <div className="text-xs font-semibold text-[var(--muted)] mt-1">
                    Quality-first
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4 shadow-sm hover:border-[var(--indigo)]/20 transition">
                  <div className="text-2xl font-extrabold text-[var(--indigo)]">
                    <AnimatedCounter value="7" />
                  </div>
                  <div className="text-xs font-semibold text-[var(--muted)] mt-1">
                    Service lines
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4 shadow-sm hover:border-[var(--indigo)]/20 transition">
                  <div className="text-2xl font-extrabold text-[var(--indigo)]">
                    <AnimatedCounter value="6" />
                  </div>
                  <div className="text-xs font-semibold text-[var(--muted)] mt-1">
                    Global locations
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--indigo)] to-[var(--accent)] opacity-[0.08] blur-3xl rounded-full -z-10 animate-pulse" />
            <ScrollAnimate direction="right" delay={150}>
              <div className="relative group w-full max-w-md aspect-square rounded-3xl p-1.5 border border-[var(--border2)] bg-[var(--surface)] shadow-2xl transition duration-500 hover:scale-[1.03] hover:border-[var(--indigo)]/60">
                {/* Tech corners */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[var(--indigo)] rounded-tl-3xl z-10" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[var(--indigo)] rounded-tr-3xl z-10" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[var(--indigo)] rounded-bl-3xl z-10" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[var(--indigo)] rounded-br-3xl z-10" />

                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--indigo)]/10 to-transparent opacity-50 group-hover:opacity-80 transition duration-500 rounded-3xl" />

                <img
                  src="/images/dev_hero.png"
                  alt="Innovexce Overview"
                  className="w-full h-full object-cover mix-blend-lighten rounded-[22px]"
                />
              </div>
            </ScrollAnimate>
          </div>
        </div>

        {/* CHOOSE YOUR PATH */}
        <div className="space-y-8 scroll-mt-24" id="choose-path">
          <ScrollAnimate direction="up">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--indigo)]">
              Start here
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)] mt-2">
              What are you looking for?
            </h2>
            <p className="text-sm text-[var(--muted2)] font-semibold mt-2 max-w-2xl">
              Two clear engagement models — pick the one that matches how you
              buy.
            </p>
          </ScrollAnimate>
          <div className="grid gap-6 lg:grid-cols-2">
            {Innovexce.clientPaths.map((path, i) => (
              <ScrollAnimate key={path.id} direction="up" delay={i * 80}>
                <div className="te-path-card h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--indigo)]">
                        {path.eyebrow}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--text)] mt-1 flex items-center gap-2">
                        <span aria-hidden>{path.icon}</span>
                        {path.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted2)] font-semibold leading-relaxed mt-4 flex-1">
                    {path.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {path.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-xs font-semibold text-[var(--muted2)]"
                      >
                        <span className="text-[var(--indigo)] mt-0.5">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] font-bold text-[var(--muted)] mt-5 uppercase tracking-wide">
                    Best for:{" "}
                    <span className="text-[var(--text)] normal-case">
                      {path.bestFor}
                    </span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={path.href}
                      className="btn-accent text-sm shadow-lg shadow-[var(--indigo)]/15"
                      style={{
                        background: "var(--indigo)",
                        borderColor: "var(--indigo)",
                      }}
                    >
                      {path.cta} →
                    </Link>
                    <a
                      href={`#${path.sectionId}`}
                      className="btn-outline text-sm hover:bg-[var(--bg2)]"
                    >
                      See how it works ↓
                    </a>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* GROUP DIFFERENTIATOR — early */}
        <div className="rounded-3xl border border-[var(--indigo)]/20 bg-gradient-to-br from-[var(--indigo)]/5 to-[var(--bg2)] p-8 sm:p-10 space-y-8">
          <ScrollAnimate direction="up">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--indigo)]">
              {Innovexce.differentiator.eyebrow}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)] mt-2 max-w-3xl">
              {Innovexce.differentiator.title}
            </h2>
            <p className="text-sm sm:text-base text-[var(--muted2)] font-semibold mt-3 max-w-3xl leading-relaxed">
              {Innovexce.differentiator.subtitle}
            </p>
          </ScrollAnimate>
          <div className="grid gap-5 sm:grid-cols-3">
            {Innovexce.differentiator.points.map((pt, i) => (
              <ScrollAnimate key={pt.title} direction="up" delay={i * 60}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 h-full">
                  <h4 className="text-sm font-bold text-[var(--text)]">
                    {pt.title}
                  </h4>
                  <p className="text-xs text-[var(--muted2)] mt-2 leading-relaxed font-semibold">
                    {pt.description}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* PROOF — client programmes */}
        <div
          className="space-y-10 border-t border-[var(--border)] pt-24"
          id="proof"
        >
          <ScrollAnimate direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent)]">
                  Delivery proof
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl mt-2">
                  Production programmes, not slide decks
                </h2>
                <p className="text-sm text-[var(--muted2)] font-semibold mt-3">
                  {Innovexce.announcement}
                </p>
              </div>
              <Link
                href="/client-success"
                className="link-arrow text-sm font-semibold shrink-0"
              >
                More case studies
              </Link>
            </div>
          </ScrollAnimate>
          <div className="grid gap-6 lg:grid-cols-3">
            {Innovexce.teCaseStudies.map((cs, i) => (
              <ScrollAnimate key={cs.title} direction="up" delay={i * 60}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 h-full flex flex-col shadow-sm hover:border-[var(--indigo)]/25 transition">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--indigo)]">
                      {cs.client}
                    </span>
                    <span className="text-[10px] font-bold text-[var(--muted)]">
                      {cs.industry}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text)] leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-[var(--muted2)] mt-3 font-semibold leading-relaxed flex-1">
                    {cs.problem}
                  </p>
                  <p className="text-xs text-[var(--muted2)] mt-2 font-semibold leading-relaxed">
                    <span className="text-[var(--text)]">Approach: </span>
                    {cs.approach}
                  </p>
                  <div className="mt-5 pt-4 border-t border-[var(--border)] grid grid-cols-3 gap-2">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <div className="text-xs font-extrabold text-[var(--accent)]">
                          {r.value}
                        </div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted)] mt-0.5">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="space-y-8">
          <ScrollAnimate direction="up">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted)]">
              Who we work with
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--text)] mt-2">
              Built for buyers with real delivery pressure
            </h2>
          </ScrollAnimate>
          <div className="grid gap-4 sm:grid-cols-3">
            {Innovexce.idealFor.map((row, i) => (
              <ScrollAnimate key={row.label} direction="up" delay={i * 50}>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  <h4 className="text-sm font-bold text-[var(--text)]">
                    {row.label}
                  </h4>
                  <p className="text-xs text-[var(--muted2)] mt-2 font-semibold leading-relaxed">
                    {row.detail}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* DELIVERY MODELS — build path */}
        <div
          id="delivery-models"
          className="space-y-10 border-t border-[var(--border)] pt-24 scroll-mt-24"
        >
          <ScrollAnimate direction="up">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--indigo)]">
              Build with us
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl mt-2">
              How we deliver managed projects
            </h2>
            <p className="text-sm text-[var(--muted2)] font-semibold mt-3 max-w-2xl">
              Four commercial models — from a dedicated squad on your backlog to
              a fixed-scope MVP or AI platform build.
            </p>
          </ScrollAnimate>
          <div className="grid gap-4 sm:grid-cols-2">
            {Innovexce.deliveryModels.map((m, i) => (
              <ScrollAnimate key={m.num} direction="up" delay={i * 40}>
                <div className="delivery-row rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 hover:border-[var(--indigo)]/30 transition">
                  <span className="delivery-num">{m.num}</span>
                  <div>
                    <h4 className="text-base font-bold text-[var(--text)]">
                      {m.title}
                    </h4>
                    <p className="text-xs text-[var(--muted2)] mt-2 font-semibold leading-relaxed">
                      {m.description}
                    </p>
                    <p className="text-[10px] font-bold text-[var(--indigo)] mt-3 uppercase tracking-wide">
                      {m.bestFor}
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
          <ScrollAnimate direction="up">
            <Link
              href="/contact?interest=development"
              className="inline-flex btn-accent text-sm"
              style={{
                background: "var(--indigo)",
                borderColor: "var(--indigo)",
              }}
            >
              Discuss your programme →
            </Link>
          </ScrollAnimate>
        </div>

        {/* SEVEN SERVICE LINES SECTION */}
        <div className="space-y-12 border-t border-[var(--border)] pt-24">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
            <div className="max-w-2xl space-y-4">
              <ScrollAnimate direction="up">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--indigo)]">
                  Core Engineering
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl mt-2">
                  Seven Service Lines.
                  <br />
                  End-to-End Delivery.
                </h2>
              </ScrollAnimate>
            </div>
            <div className="max-w-md">
              <ScrollAnimate direction="up" delay={100}>
                <p className="text-xs sm:text-sm text-[var(--muted2)] font-semibold leading-relaxed">
                  From strategy and consulting through app development, cloud
                  infrastructure, event-driven data systems, and managed
                  operations — we imagine, engineer, modernize, and manage.
                </p>
              </ScrollAnimate>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Innovexce.services.map((svc, i) => (
              <ScrollAnimate key={svc.title} direction="up" delay={i * 50}>
                <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-md hover:border-[var(--indigo)]/30 hover:shadow-xl hover:shadow-[var(--indigo)]/5 transition-all duration-300 group overflow-hidden h-full flex flex-col justify-between">
                  <div className="absolute top-4 right-4 text-3xl font-extrabold text-[var(--text)]/5 group-hover:text-[var(--indigo)]/15 transition duration-300 select-none">
                    0{i + 1}
                  </div>

                  <div className="space-y-4">
                    <div className="text-3xl">{svc.icon}</div>
                    <h3 className="text-lg font-bold text-[var(--text)]">
                      {svc.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--muted2)] font-semibold">
                      {svc.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.pills.map((p) => (
                        <span
                          key={p}
                          className="inline-block rounded-lg bg-[var(--surface)] px-2 py-0.5 text-[10px] font-bold text-[var(--muted2)] border border-[var(--border)]"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* AI HUB — when your build needs AI */}
        <div
          id="ai-hub"
          className="space-y-12 border-t border-[var(--border)] pt-24 scroll-mt-24"
        >
          <div className="max-w-3xl space-y-4">
            <ScrollAnimate direction="up">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--teal)]">
                Optional specialization · {aiHub.eyebrow}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl mt-2">
                {aiHub.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--muted2)] sm:text-base font-medium">
                {aiHub.subtitle}
              </p>
            </ScrollAnimate>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiHub.capabilities.map((cap, i) => (
              <ScrollAnimate key={cap.title} direction="up" delay={i * 50}>
                <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-md hover:border-[var(--teal)]/30 hover:shadow-xl hover:shadow-[var(--teal)]/5 transition-all duration-300 group overflow-hidden h-full flex flex-col justify-between">
                  <div className="absolute -right-8 -bottom-8 w-20 h-20 bg-gradient-to-tr from-[var(--teal)]/5 to-[var(--indigo)]/5 rounded-full blur-xl group-hover:scale-150 transition duration-500" />
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--teal)] to-[var(--indigo)] opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div className="space-y-4">
                    <div className="text-3xl">{cap.icon}</div>
                    <h3 className="text-lg font-bold text-[var(--text)]">
                      {cap.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--muted2)] font-semibold">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border)] space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cap.pills.map((p) => (
                        <span
                          key={p}
                          className="inline-block rounded-lg bg-[var(--surface)] px-2 py-0.5 text-[10px] font-bold text-[var(--muted2)] border border-[var(--border)]"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                    {"link" in cap && cap.link ? (
                      <Link
                        href={cap.link}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:underline"
                      >
                        TestYantra AI validation &rarr;
                      </Link>
                    ) : null}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate direction="up" className="pt-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-4">
                Real-world AI we build
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {aiHub.useCases.map((uc) => (
                  <div
                    key={uc.label}
                    className="border-l-2 border-[var(--teal)] pl-4"
                  >
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--text)]">
                      {uc.label}
                    </div>
                    <div className="text-xs text-[var(--muted2)] mt-1 font-semibold">
                      {uc.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* TALENT PLATFORM — Staff your team */}
        <div
          id={Innovexce.talentPlatform.id}
          className="space-y-12 border-t border-[var(--border)] pt-24 scroll-mt-24"
        >
          <div className="max-w-3xl space-y-4">
            <ScrollAnimate direction="up">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent)]">
                Staff your team
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl mt-2">
                {Innovexce.talentPlatform.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--muted2)] sm:text-base font-medium mt-4">
                {Innovexce.talentPlatform.subtitle}
              </p>
            </ScrollAnimate>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Innovexce.talentPlatform.poolStats.map((s, i) => (
              <ScrollAnimate key={s.label} direction="up" delay={i * 40}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 text-center shadow-sm">
                  <div className="text-2xl font-extrabold text-[var(--accent)]">
                    {s.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] mt-1">
                    {s.label}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <div>
            <ScrollAnimate direction="up">
              <h3 className="text-lg font-bold text-[var(--text)] mb-2">
                Choose how you engage
              </h3>
              <p className="text-xs text-[var(--muted2)] font-semibold mb-6 max-w-2xl">
                Six flexible models — from a single specialist to a full squad
                built from our bench and academy pipeline.
              </p>
            </ScrollAnimate>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Innovexce.talentPlatform.engagementOptions.map((opt, i) => (
                <ScrollAnimate key={opt.title} direction="up" delay={i * 40}>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 h-full hover:border-[var(--accent)]/30 transition shadow-sm">
                    <div className="text-2xl mb-3">{opt.icon}</div>
                    <h4 className="text-base font-bold text-[var(--text)]">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-[var(--muted2)] mt-2 leading-relaxed font-semibold">
                      {opt.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[var(--border)]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">
                        Best for{" "}
                      </span>
                      <span className="text-[10px] font-semibold text-[var(--accent)]">
                        {opt.bestFor}
                      </span>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>

          <ScrollAnimate direction="up">
            <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--bg2)] to-[var(--bg3)] p-8 sm:p-10">
              <h3 className="text-lg font-bold text-[var(--text)]">
                How it works
              </h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {Innovexce.talentPlatform.howItWorks.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="text-3xl font-extrabold text-[var(--accent)]/20 font-display">
                      {step.step}
                    </div>
                    <h4 className="text-sm font-bold text-[var(--text)] mt-1">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-[var(--muted2)] mt-1 leading-relaxed font-semibold">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>

          <div>
            <ScrollAnimate direction="up">
              <h3 className="text-lg font-bold text-[var(--text)] mb-2">
                Technology bench
              </h3>
              <p className="text-xs text-[var(--muted2)] font-semibold mb-6 max-w-2xl">
                Form teams across the stacks you run — from legacy enterprise to
                modern cloud and AI.
              </p>
            </ScrollAnimate>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Innovexce.talentPlatform.techBench.map((row, i) => (
                <ScrollAnimate key={row.category} direction="up" delay={i * 30}>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--indigo)]">
                      {row.category}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {row.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-[var(--bg2)] px-2 py-0.5 text-[10px] font-bold text-[var(--muted2)] border border-[var(--border)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>

          <ScrollAnimate direction="up">
            <div className="rounded-3xl border border-[var(--teal)]/30 bg-[var(--teal)]/5 p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-2xl">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--teal)]">
                  Academy pipeline
                </div>
                <p className="text-sm text-[var(--muted2)] mt-3 font-semibold leading-relaxed">
                  {Innovexce.talentPlatform.academyNote}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href={groupExternalUrls.academy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  Explore Academy ↗
                </a>
                <Link
                  href="/contact?interest=talent"
                  className="btn-accent text-sm"
                >
                  Request a bench shortlist
                </Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* VALUES SECTION */}
        <div className="space-y-12 border-t border-[var(--border)] pt-24">
          <div className="max-w-3xl space-y-4">
            <ScrollAnimate direction="up">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--indigo)]">
                Why Innovexce
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl mt-2">
                Engineering that works at enterprise scale
              </h2>
            </ScrollAnimate>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Innovexce.values.map((v, i) => (
              <ScrollAnimate key={v.title} direction="up" delay={i * 50}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 h-full shadow-sm hover:border-[var(--indigo)]/20 hover:shadow-md transition">
                  <h4 className="text-base font-bold text-[var(--text)] mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs text-[var(--muted2)] leading-relaxed font-semibold">
                    {v.description}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="border-t border-[var(--border)] pt-24 pb-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 space-y-6">
              <ScrollAnimate direction="up">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--indigo)]">
                  Partner with us
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl mt-2">
                  Build with quality built in
                </h2>
                <p className="text-sm leading-relaxed text-[var(--muted2)] font-semibold mt-4">
                  Innovexce + TestYantra = one partner for product engineering,
                  AI, and validation. No handoffs. No gaps.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--muted2)]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--indigo)]/10 text-[var(--indigo)]">
                      ✓
                    </span>
                    AI Hub — LLM, RAG, agents, ML, and computer vision
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--muted2)]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--indigo)]/10 text-[var(--indigo)]">
                      ✓
                    </span>
                    TestYantra AI validation on every production AI deployment
                  </li>
                </ul>
              </ScrollAnimate>
            </div>

            <div className="lg:col-span-5">
              <ScrollAnimate direction="up" delay={100}>
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 shadow-xl">
                  <h3 className="text-lg font-bold text-[var(--text)]">
                    Contact Innovexce
                  </h3>
                  <p className="text-xs text-[var(--muted)] mt-1 font-semibold">
                    Bangalore development center · Global delivery via Test
                    Yantra
                  </p>

                  <div className="mt-6 space-y-4 text-sm font-semibold text-[var(--muted2)]">
                    <div>
                      <div className="text-[10px] uppercase text-[var(--muted)]">
                        Email
                      </div>
                      <a
                        href={`mailto:${Innovexce.email}`}
                        className="text-[var(--indigo)] hover:underline mt-1 block"
                      >
                        {Innovexce.email}
                      </a>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-[var(--muted)]">
                        Phone
                      </div>
                      <a
                        href={`tel:${Innovexce.phone.replace(/\s/g, "")}`}
                        className="text-[var(--indigo)] hover:underline mt-1 block"
                      >
                        {Innovexce.phone}
                      </a>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-[var(--muted)]">
                        Address
                      </div>
                      <p className="text-[var(--muted2)] mt-1 leading-relaxed">
                        #88, 3rd Floor, Brigade Chambers,
                        <br />
                        Gandhi Bazaar Main Rd, Basavanagudi, Bangalore-560004
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/company/locations"
                    className="btn-accent mt-8 w-full text-center block"
                    style={{
                      background: "var(--indigo)",
                      borderColor: "var(--indigo)",
                    }}
                  >
                    All Global Locations
                  </Link>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <ScrollAnimate direction="up">
          <div className="rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-to-br from-[var(--indigo)] via-[#2A1F6E] to-[#1E1452] shadow-2xl text-white">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.05]" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl relative z-10">
              Ship software with quality
              <br />
              <em className="text-[var(--teal)] not-italic">
                built in from day one.
              </em>
            </h2>
            <p className="mt-4 text-sm text-white/80 font-semibold relative z-10 max-w-xl mx-auto">
              Managed product engineering or talent from our bench — one group,
              one conversation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
              <Link
                href="/contact?interest=development"
                className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[var(--indigo)] hover:bg-white/90 shadow-lg transition"
              >
                Start a project →
              </Link>
              <Link
                href="/contact?interest=talent"
                className="rounded-xl border border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
              >
                Build your team →
              </Link>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </V2InnerShell>
  );
}
