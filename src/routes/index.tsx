import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowRight,
  Clock,
  HandHeart,
  Heart,
  HeartHandshake,
  Home as HomeIcon,
  MapPin,
  ShieldCheck,
  Sparkles,
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
import { faqs, services, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STAG Family Care | Care at Home, From Our Family to Yours" },
      {
        name: "description",
        content:
          "Family-led care at home in [service area]. Personal care, 24/7 live-in care, companionship and supported living, planned around each person.",
      },
      { property: "og:title", content: "STAG Family Care | Care at Home" },
      {
        property: "og:description",
        content:
          "Respectful, dependable care and support at home. From our family to yours — enquire about care today.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const values = [
  { icon: ShieldCheck, title: "Dignity", body: "Support given quietly and respectfully, always led by the person receiving it." },
  { icon: Accessibility, title: "Independence", body: "We help people do things for themselves wherever possible, not instead of them." },
  { icon: Clock, title: "Consistency", body: "Familiar faces, planned visits and clear communication with families." },
  { icon: Heart, title: "Family values", body: "The care we'd want for our own — that's the standard we hold ourselves to." },
];

const serviceIcons = {
  "personal-care": HandHeart,
  "live-in-care": HomeIcon,
  companionship: HeartHandshake,
  "supported-living": Users,
} as const;

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient border-b border-border/60 px-4 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {site.strapline}
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem]">
              Care that feels personal, because family comes first.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              STAG Family Care provides respectful, dependable support designed around each person
              and their independence — at home, on their terms, with people they come to know.
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
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft">
              <v.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-xl">{v.title}</h2>
              <p className="mt-2 text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="cream" id="services">
        <SectionHeading
          eyebrow="Our services"
          title="Support shaped around everyday life"
          intro="Four core services, each agreed after an assessment and reviewed as things change."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = serviceIcons[s.key];
            return (
              <TiltCard key={s.key}>
                <article className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
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
                </article>
              </TiltCard>
            );
          })}
        </div>
      </Section>

      {/* Why families choose STAG */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Why families choose STAG"
            title="A small, family-led service that answers the phone"
            intro="We started STAG Family Care because good care comes down to the same things every time: turning up, listening properly and treating people as people."
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              ["Care plans written with you", "Nothing begins until the plan is agreed with the person receiving care and, if they wish, their family."],
              ["Honest about what we can do", "If we're not the right fit or can't cover an area yet, we'll say so and point you elsewhere."],
              ["Careful carer matching", "We think about personality and interests, not just availability."],
              ["Clear, simple communication", "One team to speak to, and updates families can actually follow."],
            ].map(([t, b]) => (
              <li key={t} className="rounded-3xl bg-blush p-6">
                <h3 className="text-lg">{t}</h3>
                <p className="mt-2 text-muted-foreground">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Steps */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Getting started"
          title="How support begins, in four simple steps"
          intro="No jargon and no pressure — just a clear path from first enquiry to ongoing support."
        />
        <ProcessPath />
      </Section>

      {/* Family story */}
      <Section>
        <div className="grid gap-10 rounded-4xl bg-burgundy p-8 text-burgundy-foreground sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Our name</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">The story behind STAG</h2>
            <p className="mt-4 text-burgundy-foreground/85">
              STAG is made up of our family names — it's a reminder of who we are and who we answer
              to. The same family already runs {site.sisterCompany.name}, a local cleaning company
              built on turning up when we say we will and doing the job properly.
            </p>
            <p className="mt-4 text-burgundy-foreground/85">
              STAG Family Care is a separate business with its own team, training and standards. The
              two aren't the same service — but they share a name, a family and a reputation we
              intend to protect.
            </p>
            <a
              href={site.sisterCompany.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4"
            >
              Visit {site.sisterCompany.name}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="rounded-3xl bg-white/5 p-8">
            <blockquote className="font-display text-2xl leading-snug">
              “From our family to yours” isn't a tagline we borrowed. It's the way we've been asked
              to look after people we know, and how we intend to look after everyone else.
            </blockquote>
            <p className="mt-4 text-sm text-burgundy-foreground/70">— The STAG family</p>
          </div>
        </div>
      </Section>

      {/* Local care */}
      <Section tone="blush">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Local care"
            title="Care close to home"
            intro="We're building a local service, which means shorter journeys between visits and carers who know the area."
          />
          <div className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h3 className="text-lg">Areas we plan to cover</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground"
                >
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              [Editable location placeholder — replace with confirmed towns and postcodes. Dedicated
              local pages can be added here later for each area.]
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Placeholder content"
          title="What families say"
          intro="These are placeholder quotes only. They must be replaced with genuine, consented feedback before launch — no reviews have been collected yet."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <figure key={n} className="rounded-3xl border border-dashed border-primary/40 bg-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Placeholder testimonial {n}
              </p>
              <blockquote className="mt-3 text-muted-foreground">
                [Replace with a real, consented quote from a client or family member.]
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold">[Name], [Area]</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <SectionHeading eyebrow="FAQs" title="Questions families often ask" />
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
