import { useEffect, useState } from "react";
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
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg" style={{ perspective: "1200px" }}>
      <div
        className="relative transition-transform duration-500 ease-out"
        style={{
          transform: `rotateY(${tilt.x * 0.65}deg) rotateX(${-tilt.y * 0.65}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute -inset-3 rounded-[2rem] bg-blush"
          style={{ transform: "translateZ(-44px)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-[1.75rem] brand-gradient opacity-90"
          style={{ transform: "translateZ(-18px)" }}
        />

        <Photo
          photo={photos.hero}
          priority
          className="relative aspect-[4/5] rounded-[1.5rem] shadow-lift sm:aspect-[5/6]"
          imgClassName="object-[54%_50%]"
          sizes="(min-width: 1024px) 520px, 90vw"
        />

        <div
          aria-hidden="true"
          className="absolute -left-3 top-8 grid h-20 w-20 place-items-center rounded-2xl surface-glass sm:-left-5 sm:h-24 sm:w-24"
          style={{ transform: "translateZ(70px)" }}
        >
          <LogoMark decorative className="h-14 w-auto sm:h-16" />
        </div>
      </div>
    </div>
  );
}
