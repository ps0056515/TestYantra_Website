"use client";

import { useEffect } from "react";

export function V2ClientEffects() {
  useEffect(() => {
    const root = document.documentElement;

    // ── 1. Snapshot viewport positions BEFORE adding the effects class ──
    // getBoundingClientRect() includes CSS transforms. "v2-effects-ready" applies
    // translateY(22px) to every .fi element, which shifts rect.top down by 22px
    // and silently fails the threshold check for elements near the fold.
    // Reading positions first gives us transform-free coordinates.
    const aboveFold = new Set<Element>();
    document.querySelectorAll(".fi").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        aboveFold.add(el);
      }
    });

    // ── 2. Enable animations (elements go opacity:0 + translateY) ──
    root.classList.add("v2-effects-ready");

    // ── 3. Immediately restore visibility for above-fold elements ──
    // rAF lets the browser process the class change before we add "vis",
    // so the fade-in transition actually plays rather than snapping.
    requestAnimationFrame(() => {
      aboveFold.forEach((el) => el.classList.add("vis"));
    });

    // ── 4. IntersectionObserver handles everything that scrolls into view ──
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("vis");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fi").forEach((el) => obs.observe(el));

    // ── Nav scroll tint ──
    function updateNav() {
      const nav = document.querySelector("nav");
      if (!nav) return;
      if (window.scrollY > 50) {
        (nav as HTMLElement).style.borderBottomColor = "rgba(255,255,255,0.14)";
      } else {
        (nav as HTMLElement).style.borderBottomColor = "";
      }
    }

    // ── Theme switcher ──
    const dots = document.querySelectorAll(".theme-dot");
    const cleanups: (() => void)[] = [];
    dots.forEach((dot) => {
      const el = dot as HTMLElement;
      const onClick = () => {
        const t = el.dataset.t;
        if (!t) return;
        root.setAttribute("data-theme", t);
        dots.forEach((d) => d.classList.remove("active"));
        el.classList.add("active");
        updateNav();
      };
      el.addEventListener("click", onClick);
      cleanups.push(() => el.removeEventListener("click", onClick));
    });

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", updateNav);
      cleanups.forEach((fn) => fn());
      root.classList.remove("v2-effects-ready");
    };
  }, []);

  return null;
}
