import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  HandHeart,
  HeartHandshake,
  Home as HomeIcon,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection, Section, SectionHeading } from "@/components/site/Section";
import { StagHero3D } from "@/components/site/StagHero3D";
import { ProcessPath } from "@/components/site/ProcessPath";
import { TiltCard } from "@/components/site/TiltCard";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STAG Family Care | Family Run Care at Home in the UK" },
      {
        name: "description",
        content:
          "Family run care at home. Personal care, live in care, companionship and supported living, planned around each person and their independence. Enquire today.",
      },
      { property: "og:title", content: "STAG Family Care | Family Run Care at Home" },
      {
        property: "og:description",
        content:
          "Respectful, dependable care and support at home. From our family to yours. Enquire about care today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const serviceIcons = {
  "personal-care": HandHeart,
  "live-in-care": HomeIcon,
  companionship: HeartHandshake,
  "supported-living": Users,
} as const;

function Home() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden border-b border-border/60 px-4 py-12 sm:py-16">
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem]">
              Care that feels personal, because family comes first.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Respectful care at home, planned around each person and the routines that matter to
              them.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">
                  Enquire About Care <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <StagHero3D />
        </div>
      </section>

      <Section id="services" className="py-14 sm:py-16">
        <Reveal>
          <SectionHeading
            title="Main services"
            intro="Four simple ways we can support people at home."
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.key];
            return (
              <Reveal key={s.key} delay={i * 80}>
                <TiltCard>
                  <article className="depth-card flex h-full flex-col p-6">
                    <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                    <h2 className="mt-4 text-xl">{s.title}</h2>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.short}</p>
                    <Link
                      to="/services/$service"
                      params={{ service: s.key }}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="cream" className="py-14 sm:py-16">
        <Reveal>
          <SectionHeading title="Why choose us" intro="Care should feel calm, personal and easy to understand." />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Family values", "We treat people with the care we would want for our own family."],
            ["Clear plans", "Support is agreed with you and reviewed when needs change."],
            ["Familiar faces", "We aim for consistent carers and simple communication."],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 80} className="rounded-3xl bg-card p-6 shadow-soft">
              <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-xl">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-14 sm:py-16">
        <Reveal>
          <SectionHeading
            title="Simple care process"
            intro="A clear route from first enquiry to ongoing support."
          />
        </Reveal>
        <ProcessPath />
      </Section>

      <Section tone="blush" className="py-14 sm:py-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">Our name</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">The family meaning behind STAG</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              STAG is made up of family names. STAG Family Care is a separate business to STAG
              Cleaning Services, but it shares the same family commitment to doing things properly.
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaSection
        title="Ready to ask about care?"
        body="Send a simple enquiry and we will talk through what support may help."
      />
    </>
  );
}
