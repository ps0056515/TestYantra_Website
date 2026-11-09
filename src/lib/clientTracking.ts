"use client";

/** Browser-side context shared by the page-view tracker and the contact form. */

export type SessionContext = {
  sessionId: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
};

const KEY = "ty_session_ctx";

function randomId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
}

/** Created once per browser tab session (sessionStorage — no cookie is set). */
export function getSessionContext(): SessionContext {
  try {
    const existing = sessionStorage.getItem(KEY);
    if (existing) return JSON.parse(existing) as SessionContext;

    const q = new URLSearchParams(window.location.search);
    const ctx: SessionContext = {
      sessionId: randomId(),
      referrer: document.referrer || "",
      utm_source: q.get("utm_source") ?? "",
      utm_medium: q.get("utm_medium") ?? "",
      utm_campaign: q.get("utm_campaign") ?? "",
    };
    sessionStorage.setItem(KEY, JSON.stringify(ctx));
    return ctx;
  } catch {
    return { sessionId: "", referrer: "", utm_source: "", utm_medium: "", utm_campaign: "" };
  }
}
