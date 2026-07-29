import { cn } from "@/lib/utils";
import logoFull from "@/assets/logo-full.png.asset.json";
import logoMark from "@/assets/logo-mark.png.asset.json";

/** Official STAG Family Care logo. Never recoloured or redrawn. */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoFull.url}
      alt="STAG Family Care, from our family to yours"
      width={1292}
      height={667}
      className={cn("h-12 w-auto sm:h-14", className)}
    />
  );
}

/** The stag and house mark on its own, for tight spaces and decorative use. */
export function LogoMark({
  className,
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <img
      src={logoMark.url}
      alt={decorative ? "" : "STAG Family Care emblem"}
      aria-hidden={decorative || undefined}
      width={465}
      height={667}
      loading="lazy"
      decoding="async"
      className={cn("h-10 w-auto", className)}
    />
  );
}
