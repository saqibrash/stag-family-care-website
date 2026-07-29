import { cn } from "@/lib/utils";

/**
 * Temporary stag mark — replace with the supplied logo when it is ready.
 * Simple, elegant silhouette so it stays tasteful at any size.
 */
export function StagMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="STAG Family Care stag emblem (placeholder)"
      className={cn("h-9 w-9", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20c0-6 4-9 12-9s12 3 12 9c0 5-2 8-2 12 0 8-4 14-10 14s-10-6-10-14c0-4-2-7-2-12Z" />
      <path d="M20 20 13 13m0 0V6m0 7H6m14 1-6-2" />
      <path d="m44 20 7-7m0 0V6m0 7h7m-14 1 6-2" />
      <path d="M28 27h.02M36 27h.02" strokeWidth={4} />
      <path d="M32 34c-1.6 0-2.6-1-2.6-2.2 0-1 .9-1.8 2.6-1.8s2.6.8 2.6 1.8c0 1.2-1 2.2-2.6 2.2Z" />
      <path d="M26 47c1.6 4 3.6 6 6 6s4.4-2 6-6" />
    </svg>
  );
}

export function StagWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
        <StagMark className="h-7 w-7" />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block font-display text-lg font-semibold tracking-tight text-charcoal">
          STAG Family Care
        </span>
        <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          From our family to yours
        </span>
      </span>
    </span>
  );
}
