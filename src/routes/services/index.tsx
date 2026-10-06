import { pageHead, breadcrumbSchema } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/Section";
import { ProcessPath } from "@/components/site/ProcessPath";
import { TiltCard } from "@/components/site/TiltCard";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    ...pageHead({
      title: "Home Care Services | STAG Family Care",
      description: "Personal care, companionship, supported living and person centred care at home from STAG Family Care, agreed after an assessment.",
      path: "/services",
    }),
      scripts: [breadcrumbSchema([{"name": "Home", "path": "/"}, {"name": "Services", "path": "/services"}])],
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
        <p className="mt-10 text-muted-foreground">
          Not sure which service fits?{" "}
          <Link to="/blog" className="font-semibold text-primary underline underline-offset-4">
            Read our care advice and guidance
          </Link>{" "}
          or{" "}
          <Link to="/contact" className="font-semibold text-primary underline underline-offset-4">
            speak to our team
          </Link>
          .
        </p>
      </Section>

      <CtaSection />
    </>
  );
}
