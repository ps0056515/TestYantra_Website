"use client";

import { useEffect, useRef, useState, type PropsWithChildren } from "react";

type Direction = "left" | "right" | "up";

interface ScrollAnimateProps {
  direction?: Direction;
  delay?: number;
  className?: string;
  animateOnMount?: boolean;
}

export function ScrollAnimate({
  children,
  direction = "up",
  delay = 0,
  className = "",
  animateOnMount = false,
}: PropsWithChildren<ScrollAnimateProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animateOnMount) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animateOnMount]);

  const animationClass =
    direction === "left"
      ? "animate-slide-left"
      : direction === "right"
        ? "animate-slide-right"
        : "animate-slide-up";

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? animationClass : ""} ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}
