import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/Section";
import { ProcessPath } from "@/components/site/ProcessPath";
import { TiltCard } from "@/components/site/TiltCard";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | STAG Family Care" },
      {
        name: "description",
        content:
          "Personal care, live in care, companionship and supported living from STAG Family Care, support at home agreed after assessment.",
      },
      { property: "og:title", content: "Care Services | STAG Family Care" },
      {
        property: "og:description",
        content: "Four core care services, planned around each person and reviewed as needs change.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Care and support, built around the person"
        intro="Every service below is agreed following an assessment, written into a clear plan and reviewed regularly."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <TiltCard key={s.key}>
              <article className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
                <h2 className="text-2xl">{s.title}</h2>
                <p className="mt-3 flex-1 text-muted-foreground">{s.short}</p>
                <Link
                  to="/services/$service"
                  params={{ service: s.key }}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </TiltCard>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Getting started"
          title="How support begins"
          intro="The same four steps apply to every service we offer."
        />
        <ProcessPath />
      </Section>

      <CtaSection />
    </>
  );
}
