import { cn } from "@/lib/utils";

/** Official STAG Family Care logo. Never recoloured or redrawn. */
export function Logo({ className }: { className?: string }) {
  return (
    <picture>
      <source srcSet="/brand/stag-family-care-logo.webp" type="image/webp" />
      <img
        src="/brand/stag-family-care-logo.png"
        alt="STAG Family Care, from our family to yours"
        width={900}
        height={464}
        fetchPriority="high"
        decoding="async"
        className={cn("h-12 w-auto sm:h-14", className)}
      />
    </picture>
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
    <picture>
      <source srcSet="/brand/stag-family-care-mark.webp" type="image/webp" />
      <img
        src="/brand/stag-family-care-mark.png"
        alt={decorative ? "" : "STAG Family Care emblem"}
        aria-hidden={decorative || undefined}
        width={400}
        height={487}
        loading="lazy"
        decoding="async"
        className={cn("h-10 w-auto", className)}
      />
    </picture>
  );
}
