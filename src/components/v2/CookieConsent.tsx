"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ty-cookie-consent");
      if (!stored) setVisible(true);
    } catch {
      // localStorage not available (SSR guard)
    }
  }, []);

  const accept = () => {
    localStorage.setItem("ty-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("ty-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-inner">
        <div className="cookie-text">
          <div className="cookie-icon">🍪</div>
          <div>
            <p className="cookie-title">We use cookies</p>
            <p className="cookie-desc">
              We use cookies to improve your experience on our website, analyse site traffic and personalise content.
              By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.{" "}
              <Link href="/contact" className="cookie-link" onClick={decline}>
                Cookie Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn-decline" onClick={decline}>
            Decline
          </button>
          <button className="cookie-btn-accept" onClick={accept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
