import { cn } from "@/lib/utils";

const logoFull = "/stag-family-care-logo.png";
const logoMark = "/stag-family-care-mark.png";

/** Official STAG Family Care logo. Never recoloured or redrawn. */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoFull}
      alt="STAG Family Care, from our family to yours"
      width={1335}
      height={710}
      className={cn("h-12 w-auto max-w-full object-contain sm:h-14", className)}
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
      src={logoMark}
      alt={decorative ? "" : "STAG Family Care emblem"}
      aria-hidden={decorative || undefined}
      width={712}
      height={712}
      loading="lazy"
      decoding="async"
      className={cn("h-10 w-auto", className)}
    />
  );
}
