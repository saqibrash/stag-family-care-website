import { useEffect, useState } from "react";
import { StagMark } from "./StagMark";
import { Heart, Home, Users } from "lucide-react";

/**
 * Layered "3D" stag emblem composition — CSS transforms only, no WebGL.
 * Parallax is disabled on touch devices and when reduced motion is preferred.
 */
export function StagHero3D() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    const onMove = (e: MouseEvent) => {
      setTilt({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 8,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md select-none"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-blush to-cream shadow-soft" />
        <div className="float-slower absolute inset-12 rounded-[2.5rem] surface-glass" />

        <div className="absolute inset-0 grid place-items-center">
          <div
            className="float-slow grid h-40 w-40 place-items-center rounded-[2rem] bg-primary text-primary-foreground shadow-lift"
            style={{ transform: "translateZ(70px)" }}
          >
            <StagMark className="h-24 w-24" />
          </div>
        </div>

        <div
          className="float-slow absolute left-0 top-10 grid h-16 w-16 place-items-center rounded-2xl surface-glass text-primary"
          style={{ transform: "translateZ(110px)", animationDelay: "-2s" }}
        >
          <Home className="h-7 w-7" />
        </div>
        <div
          className="float-slower absolute bottom-8 left-8 grid h-16 w-16 place-items-center rounded-2xl surface-glass text-burgundy"
          style={{ transform: "translateZ(90px)", animationDelay: "-4s" }}
        >
          <Users className="h-7 w-7" />
        </div>
        <div
          className="float-slow absolute right-2 top-1/2 grid h-16 w-16 place-items-center rounded-2xl surface-glass text-primary"
          style={{ transform: "translateZ(130px)", animationDelay: "-1s" }}
        >
          <Heart className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
}
