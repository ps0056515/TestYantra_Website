"use client";

import { useState } from "react";
import { getClientLogoSources, MIN_LOGO_PX } from "@/lib/clientLogos";

type ClientLogoCellProps = {
  name: string;
  domain: string;
  logoDomain?: string;
  wordmarkOnly?: boolean;
};

export function ClientLogoCell({ name, domain, logoDomain, wordmarkOnly }: ClientLogoCellProps) {
  const lookupDomain = logoDomain ?? domain;
  const sources = getClientLogoSources(lookupDomain);
  const [sourceIndex, setSourceIndex] = useState(0);
  const exhausted = wordmarkOnly || sourceIndex >= sources.length;

  const tryNext = () => setSourceIndex((i) => i + 1);

  const isDarkAdjust = name === "Canara HSBC" || name === "EaseMyTrip";

  return (
    <div
      className={`logo-cell ${exhausted ? "logo-cell-text" : "logo-cell-logo"}`}
      title={name}
    >
      {!exhausted ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sources[sourceIndex]}
            alt={name}
            className={`logo-img-external ${isDarkAdjust ? "dark-adjust" : ""}`}
            loading="lazy"
            decoding="async"
            onError={tryNext}
            onLoad={(e) => {
              const img = e.currentTarget;
              if (
                sourceIndex < sources.length - 1 &&
                (img.naturalWidth < MIN_LOGO_PX || img.naturalHeight < MIN_LOGO_PX)
              ) {
                tryNext();
              }
            }}
          />
          <span className="logo-name-sub">{name}</span>
        </>
      ) : (
        <span className="logo-wordmark">{name}</span>
      )}
    </div>
  );
}
