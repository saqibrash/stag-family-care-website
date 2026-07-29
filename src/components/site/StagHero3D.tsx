import { useEffect, useState } from "react";
import { HeartHandshake, Home, ShieldCheck } from "lucide-react";
import { LogoMark } from "./Logo";
import { Photo } from "./Photo";
import { photos } from "@/lib/images";

/**
 * Layered hero composition: a real photograph set in a 3D stack of brand
 * coloured planes, with soft parallax on pointer devices only.
 */
export function StagHero3D() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    const onMove = (e: MouseEvent) => {
      setTilt({
        x: (e.clientX / window.innerWidth - 0.5) * 8,
        y: (e.clientY / window.innerHeight - 0.5) * 6,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-lg" style={{ perspective: "1400px" }}>
      <div
        className="relative transition-transform duration-500 ease-out"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute -inset-5 rounded-[2.75rem] bg-blush/80"
          style={{ transform: "translateZ(-70px)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -inset-2 rounded-[2.5rem] brand-gradient opacity-90"
          style={{ transform: "translateZ(-30px)" }}
        />

        <Photo
          photo={photos.hero}
          priority
          className="relative aspect-[4/5] rounded-[2.25rem] shadow-deep sm:aspect-[5/6]"
          sizes="(min-width: 1024px) 520px, 90vw"
        />

        <div
          aria-hidden="true"
          className="float-slow absolute -left-5 top-10 grid h-20 w-20 place-items-center rounded-3xl surface-glass"
          style={{ transform: "translateZ(90px)" }}
        >
          <LogoMark decorative className="h-12 w-auto" />
        </div>

        <div
          aria-hidden="true"
          className="float-slower absolute -right-4 top-1/3 grid h-16 w-16 place-items-center rounded-2xl surface-glass text-primary"
          style={{ transform: "translateZ(120px)", animationDelay: "-2s" }}
        >
          <ShieldCheck className="h-7 w-7" />
        </div>

        <div
          className="float-slow absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lift"
          style={{ transform: "translateZ(110px)", animationDelay: "-4s" }}
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <HeartHandshake className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold">Care planned around each person</span>
        </div>

        <div
          aria-hidden="true"
          className="float-slower absolute -right-6 bottom-16 grid h-14 w-14 place-items-center rounded-2xl surface-glass text-clay"
          style={{ transform: "translateZ(70px)", animationDelay: "-6s" }}
        >
          <Home className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
