"use client";

import { useEffect } from "react";

export function V2ClientEffects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("v2-effects-ready");

    function updateNav() {
      const nav = document.querySelector("nav");
      if (!nav) return;
      if (window.scrollY > 50) {
        (nav as HTMLElement).style.borderBottomColor = "rgba(255,255,255,0.14)";
      } else {
        (nav as HTMLElement).style.borderBottomColor = "";
      }
    }

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

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("vis");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fi").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add("vis");
      }
      obs.observe(el);
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
