"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { getSessionContext } from "@/lib/clientTracking";

/** First-party, cookie-less page view beacon. Powers the admin dashboard. */
export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;
    if (navigator.doNotTrack === "1") return;

    const ctx = getSessionContext();
    const body = JSON.stringify({ path: pathname, ...ctx });
    try {
      if (!navigator.sendBeacon?.("/api/track", new Blob([body], { type: "application/json" }))) {
        void fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true });
      }
    } catch {
      /* analytics must never break the page */
    }
  }, [pathname]);

  return null;
}
