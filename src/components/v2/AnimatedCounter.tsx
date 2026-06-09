"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const cleanValue = value.replace(/[^0-9.]/g, "");
    const target = parseFloat(cleanValue);
    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!animatedRef.current) {
            animatedRef.current = true;
            const duration = 1000; // Snap animation (1 second)
            const startTime = performance.now();
            const startValue = Math.floor(target * 0.85);
            const range = target - startValue;

            const animate = (currentTime: number) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              
              // Ease out cubic
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(startValue + easeProgress * range);

              const formatted = value.includes(",")
                ? currentCount.toLocaleString()
                : currentCount.toString();

              setDisplayValue(formatted);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(value);
              }
            };

            requestAnimationFrame(animate);
          }
        } else {
          // Reset animation flag so it runs again when scrolled back into view
          animatedRef.current = false;
          const startValue = Math.floor(target * 0.85);
          const formatted = value.includes(",")
            ? startValue.toLocaleString()
            : startValue.toString();
          setDisplayValue(formatted);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
}
