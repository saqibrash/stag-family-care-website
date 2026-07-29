import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";
import { LogoMark } from "./Logo";
import { photos } from "@/lib/images";
import { hasPhone, site } from "@/lib/site";

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
        <div className="deep-gradient relative overflow-hidden rounded-4xl shadow-deep">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 px-6 py-14 text-burgundy-foreground sm:px-12">
              <LogoMark
                decorative
                className="float-slower absolute -left-4 bottom-0 h-44 w-auto opacity-10"
              />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl">{title}</h2>
                <p className="mt-4 max-w-md text-lg text-burgundy-foreground/85">{body}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-cream text-primary hover:bg-cream/90"
                  >
                    <Link to="/contact">
                      Enquire About Care <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  {hasPhone ? (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-full border-cream/40 bg-transparent text-burgundy-foreground hover:bg-cream/10 hover:text-burgundy-foreground"
                    >
                      <a href={`tel:${site.phone.replace(/\s/g, "")}`}>Call {site.phone}</a>
                    </Button>
                  ) : (
                    <p className="self-center text-sm text-burgundy-foreground/70">
                      {site.phoneLabel}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="relative min-h-[260px] lg:min-h-[380px]">
              <Photo
                photo={photos.conversation}
                className="absolute inset-0 h-full w-full"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/25 to-transparent lg:from-charcoal/70"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
