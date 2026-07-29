import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "cream" | "blush";
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-16 sm:py-20",
        tone === "cream" && "bg-cream",
        tone === "blush" && "bg-blush",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      <As className="mt-3 text-3xl sm:text-4xl">{title}</As>
      {intro ? <p className="mt-4 text-lg text-muted-foreground">{intro}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="hero-gradient border-b border-border/60 px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
      </div>
    </section>
  );
}

export function CtaSection({
  title = "Let's talk about the right support",
  body = "Tell us a little about what's happening and we'll talk it through — no pressure, no obligation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-burgundy px-6 py-14 text-burgundy-foreground sm:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-burgundy-foreground/80">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Enquire About Care</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-burgundy-foreground/40 bg-transparent text-burgundy-foreground hover:bg-burgundy-foreground/10 hover:text-burgundy-foreground"
            >
              <a href={site.phoneHref}>Call {site.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
