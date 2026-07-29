import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/Section";
import { TiltCard } from "@/components/site/TiltCard";
import { site } from "@/lib/site";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us | STAG Family Care" },
      {
        name: "description",
        content:
          "Why families consider STAG Family Care — familiar carers, honest communication, careful matching and care plans agreed with you.",
      },
      { property: "og:title", content: "Why Choose STAG Family Care" },
      {
        property: "og:description",
        content: "A small, family-led care service built on consistency and honest communication.",
      },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUs,
});

const reasons = [
  ["Family-led, not faceless", "You'll speak to the people responsible for the service, not a call queue."],
  ["Consistent carers", "We aim to introduce a small, familiar team so visits feel comfortable, not clinical."],
  ["Thoughtful matching", "Interests and personality matter as much as availability when we plan who visits."],
  ["Plans agreed with you", "Care plans are written together and reviewed as needs change."],
  ["Straight answers", "If a service isn't right, or an area isn't covered yet, we'll tell you plainly."],
  ["Respect for independence", "Support that helps people keep doing what they can for themselves."],
];

function WhyChooseUs() {
  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        title="Reasons families take a closer look"
        intro="We're new, and we're not going to pretend otherwise. What we can offer is care done carefully, with people who are easy to reach."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([t, b]) => (
            <TiltCard key={t}>
              <article className="h-full rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
                <h2 className="text-xl">{t}</h2>
                <p className="mt-3 text-muted-foreground">{b}</p>
              </article>
            </TiltCard>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Being clear"
          title="What we don't claim"
          intro="Care is too important for marketing language, so here's where we stand."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "We don't promise outcomes. We promise attention, planning and honest reviews.",
            "We don't advertise awards or accreditations we haven't earned.",
            "We don't publish testimonials until real families have given consent.",
            site.registrationNote,
          ].map((item) => (
            <li key={item} className="rounded-3xl bg-card p-6 text-muted-foreground shadow-soft">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection />
    </>
  );
}
