import { createFileRoute, Link } from "@tanstack/react-router";
import Family from "/family.jpg"
import {
  Accessibility,
  ArrowRight,
  Clock,
  HandHeart,
  Heart,
  HeartHandshake,
  Home as HomeIcon,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaSection, Section, SectionHeading } from "@/components/site/Section";
import { StagHero3D } from "@/components/site/StagHero3D";
import { ProcessPath } from "@/components/site/ProcessPath";
import { TiltCard } from "@/components/site/TiltCard";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { photos } from "@/lib/images";
import { faqs, hasAreas, services, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STAG Family Care | Family Run Care at Home in the UK" },
      {
        name: "description",
        content:
          "Family run care at home. Personal care, companionship, supported living and person centred care, planned around each person and their independence. Enquire today.",
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

const values = [
  { icon: ShieldCheck, title: "Integrity", body: "We are honest, reliable, and respectful in everything we do." },
  { icon: Accessibility, title: "Independence", body: "We support people to remain as independent as possible." },
  { icon: Clock, title: "Person Centered Care", body: "Every person is different, so our support is shaped around individual needs and preferences." },
  { icon: Heart, title: "Family values", body: "We care for people with the same thought, respect, and attention we would want for our own family." },
];

const serviceIcons = {
  "personal-care": HandHeart,
  companionship: HeartHandshake,
  "supported-living": Users,
  "person-centred-care": HomeIcon,
} as const;

// 
const servicePhotos = {
  "personal-care": photos.personalCare,
  companionship: photos.companionship,
  "supported-living": photos.supportedLiving,
  "person-centred-care": photos.personCentredCare,
} as const;

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden border-b border-border/60 px-4 py-14 sm:py-20">
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-secondary-foreground">
              {site.strapline}
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem]">
              Care at home that feels personal, because family comes first
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              STAG Family Care offers respectful, dependable support at home. Personal care,
              companionship, supported living and person centred care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">
                  Enquire About Care <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">{site.launchNote}</p>
          </div>
          <StagHero3D />
        </div>
      </section>

      {/* Values */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="depth-card h-full p-6">
                <v.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="mt-4 text-xl">{v.title}</h2>
                <p className="mt-2 text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="cream" id="services">
        <Reveal>
          <SectionHeading
            eyebrow="Our services"
            title="Support shaped around everyday life"
            intro="Four core services, each agreed after an assessment and reviewed as things change."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.key];
            return (
              <Reveal key={s.key} delay={i * 80}>
                <TiltCard>
                  <article className="depth-card flex h-full flex-col overflow-hidden">
                    <Photo
                      photo={servicePhotos[s.key]}
                      className="h-48"
                      sizes="(min-width: 768px) 520px, 100vw"
                    />
                    <div className="flex flex-1 flex-col p-7">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                      <h3 className="mt-4 text-2xl">{s.title}</h3>
                      <p className="mt-3 flex-1 text-muted-foreground">{s.short}</p>
                      <Link
                        to="/services/$service"
                        params={{ service: s.key }}
                        className="mt-6 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        Read more about {s.title.toLowerCase()}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Why families choose STAG */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why families choose STAG"
              title="Reasons families take a closer look"
              intro="We’re new, and we’re not going to pretend otherwise. What we can offer is years of experience, and individualised person centred care."
            />
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Good care comes down to the same things every time: turning up, listening properly
              and, most importantly, ensuring that all individuals are encouraged to remain
              independent throughout as much as possible.
            </p>
            <Button asChild variant="outline" className="mt-8 rounded-full">
              <Link to="/why-choose-us">Why choose us</Link>
            </Button>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              ["Care plans written with you", "Nothing begins until the plan is agreed with the person receiving care and, if they wish, their family."],
              ["Honest about what we can do", "If we are not the right fit, we will say so and point you elsewhere."],
              ["Careful carer matching", "We think about personality and interests, not just availability."],
              ["Clear communication", "One team to speak to, and updates families can actually follow."],
            ].map(([t, b], i) => (
              <Reveal as="li" key={t} delay={i * 70} className="rounded-3xl bg-blush p-6">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-2 text-muted-foreground">{b}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Steps */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading
            eyebrow="Getting started"
            title="How support begins, in four simple steps"
            intro="No jargon and no pressure, just a clear path from first enquiry to ongoing support."
          />
        </Reveal>
        <ProcessPath />
      </Section>

      {/* Family story */}
      <Section>
        <Reveal>
          <div className="grid items-center gap-10 rounded-4xl bg-burgundy p-8 text-burgundy-foreground sm:p-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-clay">Our name</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">The story behind STAG</h2>
              <p className="mt-4 text-burgundy-foreground/85">
                STAG is made up of our family names. The same family already runs{" "}
                {site.sisterCompany.name}, a local cleaning company built on turning up when we say
                we will and doing the job properly.
              </p>
              <p className="mt-4 text-burgundy-foreground/85">
                STAG Family Care is a separate business with its own team, training and standards.
                What the two share is a name, a family and a reputation we intend to protect.
              </p>
              <a
                href={site.sisterCompany.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-cream underline underline-offset-4"
              >
                Visit {site.sisterCompany.name}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <img src={Family} className="rounded-md" alt="" />
            {/* <Photo
              photo={photos.family}
              className="aspect-[4/3] rounded-3xl shadow-deep"
              sizes="(min-width: 1024px) 480px, 100vw"
            /> */}
          </div>
        </Reveal>
      </Section>

      {/* Local care */}
      <Section tone="blush">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Local care"
              title="Care close to home"
              intro="We are building a local service, which means shorter journeys between visits and carers who know the area."
            />
          </Reveal>
          <Reveal className="depth-card p-7">
            <h3 className="text-lg">Areas we plan to cover</h3>
            {hasAreas ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {site.serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 font-semibold text-primary">{site.serviceAreasLabel}</p>
            )}
            <p className="mt-4 text-sm text-muted-foreground">{site.serviceAreaNote}</p>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <Reveal>
          <SectionHeading eyebrow="FAQs" title="Questions families often ask" />
        </Reveal>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <CtaSection />
    </>
  );
}
