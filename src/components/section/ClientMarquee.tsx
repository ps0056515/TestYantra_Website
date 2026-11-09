"use client";

import { useState } from "react";
import { getClientLogoSources, MIN_LOGO_PX } from "@/lib/clientLogos";
import type { TrustedClient } from "@/content/site";

function LogoTile({ client, dark }: { client: TrustedClient; dark?: boolean }) {
  const sources = getClientLogoSources(client.logoDomain ?? client.domain);
  const [i, setI] = useState(0);
  const showImg = !client.wordmarkOnly && i < sources.length;
  const next = () => setI((v) => v + 1);

  return (
    <div
      title={client.name}
      className={`flex h-14 shrink-0 items-center gap-3 rounded-xl border px-5 ${
        dark ? "border-white/10 bg-white/[0.06] text-white/80" : "border-[var(--border)] bg-white text-slate-600"
      }`}
    >
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={sources[i]}
          alt=""
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          onError={next}
          onLoad={(e) => {
            const img = e.currentTarget;
            if (i < sources.length - 1 && (img.naturalWidth < MIN_LOGO_PX || img.naturalHeight < MIN_LOGO_PX)) next();
          }}
          className="h-7 w-7 rounded-md bg-white object-contain"
        />
      ) : null}
      <span className="whitespace-nowrap text-sm font-bold tracking-tight">{client.name}</span>
    </div>
  );
}

export function ClientMarquee({ clients, dark = false }: { clients: TrustedClient[]; dark?: boolean }) {
  return (
    <div
      className="ty-marquee overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="ty-marquee-track gap-4 py-1">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-4 pr-4" aria-hidden={copy === 1}>
            {clients.map((c) => (
              <LogoTile key={`${copy}-${c.name}`} client={c} dark={dark} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
