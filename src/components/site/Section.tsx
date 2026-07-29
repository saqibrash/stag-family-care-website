import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { LogoMark } from "./Logo";

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
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">{eyebrow}</p>
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
    <section className="hero-gradient relative overflow-hidden border-b border-border/60 px-4 py-14 sm:py-20">
      <LogoMark
        decorative
        className="pointer-events-none absolute -right-6 top-4 h-40 w-auto opacity-[0.06] sm:h-64"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
      </div>
    </section>
  );
}

/** Layered call to action with real photography and depth. */
export function CtaSection({
  title = "Let us talk about the right support",
  body = "Tell us a little about what is happening and we will talk it through. There is no cost and no obligation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-4 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="deep-gradient relative overflow-hidden rounded-3xl px-6 py-12 text-burgundy-foreground shadow-lift sm:px-12">
          <LogoMark decorative className="absolute -right-4 bottom-0 h-44 w-auto opacity-10" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-lg text-burgundy-foreground/85">{body}</p>
            <Button asChild size="lg" className="mt-8 rounded-full bg-cream text-primary hover:bg-cream/90">
              <Link to="/contact">
                Enquire About Care <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
