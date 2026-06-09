import Link from "next/link";
import { V2InnerShell } from "@/components/v2/V2InnerShell";
import { technoElevate, businessUnits } from "@/content/site";
import { ScrollAnimate } from "@/components/v2/ScrollAnimate";
import { AnimatedCounter } from "@/components/v2/AnimatedCounter";

export default function DevelopmentPage() {
  const teUnit = businessUnits.find((u) => u.id === "technoelevate");
  const { aiHub } = technoElevate;

  return (
    <V2InnerShell>
      <div className="bg-dot-grid relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 space-y-32">
        {/* Decorative ambient auras */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--indigo)] to-[var(--accent)] opacity-[0.05] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.7% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
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
                {technoElevate.tagline}
                <span className="block text-[var(--indigo)]">with AI at the core</span>
              </h1>
            </ScrollAnimate>
            <ScrollAnimate direction="left" delay={150}>
              <p className="text-base leading-7 text-[var(--muted2)] sm:text-lg max-w-2xl font-medium">
                {technoElevate.description}
              </p>
            </ScrollAnimate>
            <ScrollAnimate direction="left" delay={200}>
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#ai-hub" className="btn-accent shadow-lg shadow-[var(--indigo)]/15 hover:shadow-[var(--indigo)]/30 hover:scale-[1.02] transition duration-300" style={{ background: "var(--indigo)", borderColor: "var(--indigo)" }}>
                  Explore AI Hub
                </a>
                <Link href="/contact?interest=development" className="btn-outline hover:bg-[var(--bg2)] hover:scale-[1.02] transition duration-300">
                  Start a Project
                </Link>
                <Link href="/contact?interest=talent" className="btn-outline hover:bg-[var(--bg2)] hover:scale-[1.02] transition duration-300">
                  Build Your Team
                </Link>
              </div>
            </ScrollAnimate>

            {/* Stats Pill Matrix */}
            <ScrollAnimate direction="left" delay={250}>
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4 shadow-sm hover:border-[var(--indigo)]/20 transition">
                  <div className="text-2xl font-extrabold text-[var(--indigo)]">
                    <AnimatedCounter value="900" />+
                  </div>
                  <div className="text-xs font-semibold text-[var(--muted)] mt-1">Developers</div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4 shadow-sm hover:border-[var(--indigo)]/20 transition">
                  <div className="text-2xl font-extrabold text-[var(--indigo)]">
                    <AnimatedCounter value="100" />%
                  </div>
                  <div className="text-xs font-semibold text-[var(--muted)] mt-1">Quality-first</div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4 shadow-sm hover:border-[var(--indigo)]/20 transition">
                  <div className="text-2xl font-extrabold text-[var(--indigo)]">
                    <AnimatedCounter value="7" />
                  </div>
                  <div className="text-xs font-semibold text-[var(--muted)] mt-1">Service lines</div>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-4 shadow-sm hover:border-[var(--indigo)]/20 transition">
                  <div className="text-2xl font-extrabold text-[var(--indigo)]">AI</div>
                  <div className="text-xs font-semibold text-[var(--muted)] mt-1">Production-ready</div>
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
                  alt="TechnoElevate Overview"
                  className="w-full h-full object-cover mix-blend-lighten rounded-[22px]"
                />
              </div>
            </ScrollAnimate>
          </div>
        </div>

        {/* AI HUB SECTION */}
        <div id="ai-hub" className="space-y-12 border-t border-[var(--border)] pt-24 scroll-mt-24">
          <div className="max-w-3xl space-y-4">
            <ScrollAnimate direction="up">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--teal)]">
                {aiHub.eyebrow}
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
                    <h3 className="text-lg font-bold text-[var(--text)]">{cap.title}</h3>
                    <p className="text-xs leading-relaxed text-[var(--muted2)] font-semibold">{cap.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border)] space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cap.pills.map((p) => (
                        <span key={p} className="inline-block rounded-lg bg-[var(--surface)] px-2 py-0.5 text-[10px] font-bold text-[var(--muted2)] border border-[var(--border)]">
                          {p}
                        </span>
                      ))}
                    </div>
                    {"link" in cap && cap.link ? (
                      <Link href={cap.link} className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] hover:underline">
                        TestYantra AI validation &rarr;
                      </Link>
                    ) : null}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          {/* Real-world AI use cases */}
          <ScrollAnimate direction="up" className="pt-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-4">Real-world AI we build</div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {aiHub.useCases.map((uc) => (
                  <div key={uc.label} className="border-l-2 border-[var(--teal)] pl-4">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--text)]">{uc.label}</div>
                    <div className="text-xs text-[var(--muted2)] mt-1 font-semibold">{uc.detail}</div>
                  </div>
                ))}
              </div>
            </div>
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
                  Seven Service Lines.<br />End-to-End Delivery.
                </h2>
              </ScrollAnimate>
            </div>
            <div className="max-w-md">
              <ScrollAnimate direction="up" delay={100}>
                <p className="text-xs sm:text-sm text-[var(--muted2)] font-semibold leading-relaxed">
                  From strategy and consulting through app development, cloud infrastructure, event-driven data systems, and managed operations — we imagine, engineer, modernize, and manage.
                </p>
              </ScrollAnimate>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technoElevate.services.map((svc, i) => (
              <ScrollAnimate key={svc.title} direction="up" delay={i * 50}>
                <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 shadow-md hover:border-[var(--indigo)]/30 hover:shadow-xl hover:shadow-[var(--indigo)]/5 transition-all duration-300 group overflow-hidden h-full flex flex-col justify-between">
                  {/* Watermark index */}
                  <div className="absolute top-4 right-4 text-3xl font-extrabold text-[var(--text)]/5 group-hover:text-[var(--indigo)]/15 transition duration-300 select-none">
                    0{i + 1}
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-3xl">{svc.icon}</div>
                    <h3 className="text-lg font-bold text-[var(--text)]">{svc.title}</h3>
                    <p className="text-xs leading-relaxed text-[var(--muted2)] font-semibold">{svc.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.pills.map((p) => (
                        <span key={p} className="inline-block rounded-lg bg-[var(--surface)] px-2 py-0.5 text-[10px] font-bold text-[var(--muted2)] border border-[var(--border)]">
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

        {/* TALENT PLATFORM — Staffing & team building */}
        <div id={technoElevate.talentPlatform.id} className="space-y-12 border-t border-[var(--border)] pt-24 scroll-mt-24">
          <div className="max-w-3xl space-y-4">
            <ScrollAnimate direction="up">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--accent)]">
                {technoElevate.talentPlatform.eyebrow}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl mt-2">
                {technoElevate.talentPlatform.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--muted2)] sm:text-base font-medium mt-4">
                {technoElevate.talentPlatform.subtitle}
              </p>
            </ScrollAnimate>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {technoElevate.talentPlatform.poolStats.map((s, i) => (
              <ScrollAnimate key={s.label} direction="up" delay={i * 40}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-5 text-center shadow-sm">
                  <div className="text-2xl font-extrabold text-[var(--accent)]">{s.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] mt-1">{s.label}</div>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <div>
            <ScrollAnimate direction="up">
              <h3 className="text-lg font-bold text-[var(--text)] mb-2">Choose how you engage</h3>
              <p className="text-xs text-[var(--muted2)] font-semibold mb-6 max-w-2xl">
                Six flexible models — from a single specialist to a full squad built from our bench and academy pipeline.
              </p>
            </ScrollAnimate>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {technoElevate.talentPlatform.engagementOptions.map((opt, i) => (
                <ScrollAnimate key={opt.title} direction="up" delay={i * 40}>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 h-full hover:border-[var(--accent)]/30 transition shadow-sm">
                    <div className="text-2xl mb-3">{opt.icon}</div>
                    <h4 className="text-base font-bold text-[var(--text)]">{opt.title}</h4>
                    <p className="text-xs text-[var(--muted2)] mt-2 leading-relaxed font-semibold">{opt.description}</p>
                    <div className="mt-4 pt-3 border-t border-[var(--border)]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">Best for </span>
                      <span className="text-[10px] font-semibold text-[var(--accent)]">{opt.bestFor}</span>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>

          <ScrollAnimate direction="up">
            <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--bg2)] to-[var(--bg3)] p-8 sm:p-10">
              <h3 className="text-lg font-bold text-[var(--text)]">How it works</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {technoElevate.talentPlatform.howItWorks.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="text-3xl font-extrabold text-[var(--accent)]/20 font-display">{step.step}</div>
                    <h4 className="text-sm font-bold text-[var(--text)] mt-1">{step.title}</h4>
                    <p className="text-[11px] text-[var(--muted2)] mt-1 leading-relaxed font-semibold">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>

          <div>
            <ScrollAnimate direction="up">
              <h3 className="text-lg font-bold text-[var(--text)] mb-2">Technology bench</h3>
              <p className="text-xs text-[var(--muted2)] font-semibold mb-6 max-w-2xl">
                Form teams across the stacks you run — from legacy enterprise to modern cloud and AI.
              </p>
            </ScrollAnimate>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {technoElevate.talentPlatform.techBench.map((row, i) => (
                <ScrollAnimate key={row.category} direction="up" delay={i * 30}>
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--indigo)]">{row.category}</div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {row.skills.map((skill) => (
                        <span key={skill} className="rounded-md bg-[var(--bg2)] px-2 py-0.5 text-[10px] font-bold text-[var(--muted2)] border border-[var(--border)]">
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
                <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--teal)]">Academy pipeline</div>
                <p className="text-sm text-[var(--muted2)] mt-3 font-semibold leading-relaxed">
                  {technoElevate.talentPlatform.academyNote}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link href="/academy" className="btn-outline text-sm">
                  Explore Academy →
                </Link>
                <Link href="/contact?interest=talent" className="btn-accent text-sm">
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
                Why TechnoElevate
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl mt-2">
                Engineering that works at enterprise scale
              </h2>
            </ScrollAnimate>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technoElevate.values.map((v, i) => (
              <ScrollAnimate key={v.title} direction="up" delay={i * 50}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg2)] p-6 h-full shadow-sm hover:border-[var(--indigo)]/20 hover:shadow-md transition">
                  <h4 className="text-base font-bold text-[var(--text)] mb-2">{v.title}</h4>
                  <p className="text-xs text-[var(--muted2)] leading-relaxed font-semibold">{v.description}</p>
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
                  TechnoElevate + TestYantra = one partner for development, AI, and validation. No handoffs. No gaps.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--muted2)]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--indigo)]/10 text-[var(--indigo)]">✓</span>
                    AI Hub — LLM, RAG, agents, ML, and computer vision
                  </li>
                  <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--muted2)]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--indigo)]/10 text-[var(--indigo)]">✓</span>
                    TestYantra AI validation on every production AI deployment
                  </li>
                </ul>
              </ScrollAnimate>
            </div>

            <div className="lg:col-span-5">
              <ScrollAnimate direction="up" delay={100}>
                <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg2)] p-8 shadow-xl">
                  <h3 className="text-lg font-bold text-[var(--text)]">Contact TechnoElevate</h3>
                  <p className="text-xs text-[var(--muted)] mt-1 font-semibold">Bangalore development center · Global delivery via Test Yantra</p>
                  
                  <div className="mt-6 space-y-4 text-sm font-semibold text-[var(--muted2)]">
                    <div>
                      <div className="text-[10px] uppercase text-[var(--muted)]">Email</div>
                      <a href={`mailto:${technoElevate.email}`} className="text-[var(--indigo)] hover:underline mt-1 block">{technoElevate.email}</a>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-[var(--muted)]">Phone</div>
                      <a href={`tel:${technoElevate.phone.replace(/\s/g, "")}`} className="text-[var(--indigo)] hover:underline mt-1 block">{technoElevate.phone}</a>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase text-[var(--muted)]">Address</div>
                      <p className="text-[var(--muted2)] mt-1 leading-relaxed">
                        Gopalan CoWorks, #92/9, 3rd Floor,<br />
                        80 feet Road, Kathriguppe, Bangalore 560085
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/company/locations"
                    className="btn-accent mt-8 w-full text-center block"
                    style={{ background: "var(--indigo)", borderColor: "var(--indigo)" }}
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
              Ship AI-powered software<br />
              <em className="text-[var(--teal)] not-italic">validated from day one.</em>
            </h2>
            <div className="mt-8 flex justify-center gap-4 relative z-10">
              <Link href="/contact?interest=development" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-[var(--indigo)] hover:bg-white/90 shadow-lg transition">
                Talk to TechnoElevate &rarr;
              </Link>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </V2InnerShell>
  );
}
