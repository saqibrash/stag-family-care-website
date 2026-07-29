import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Gentle fade and lift as sections scroll into view. Static when reduced motion is preferred. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <As
      ref={ref as never}
      style={shown && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(shown ? "reveal-shown" : "reveal-hidden", className)}
    >
      {children}
    </As>
  );
}
