import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/Section";
import { ProcessPath } from "@/components/site/ProcessPath";
import { services } from "@/lib/site";
import { Photo } from "@/components/site/Photo";
import { photos } from "@/lib/images";

const servicePhotos = {
  "personal-care": photos.personalCare,
  "live-in-care": photos.liveInCare,
  companionship: photos.companionship,
  "supported-living": photos.supportedLiving,
} as const;

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = services.find((s) => s.key === params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable | STAG Family Care" }, { name: "robots", content: "noindex" }],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.service}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.service}` }],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow="Our services" title={service.title} intro={service.intro} />

      <Section>
        <Photo
          photo={servicePhotos[service.key]}
          priority
          className="mb-12 aspect-[16/7] rounded-4xl shadow-lift"
          sizes="(min-width: 1024px) 1100px, 100vw"
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Who this may suit</h2>
            <ul className="mt-5 space-y-3">
              {service.suits.map((item: string) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-blush p-7">
            <h2 className="text-2xl">What support may include</h2>
            <ul className="mt-5 space-y-3">
              {service.includes.map((item: string) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              All support is subject to assessment and availability, and is agreed in writing before
              it begins.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="How it works"
          title={`Arranging ${service.title.toLowerCase()}`}
          intro="A simple, unhurried process, you can stop at any point."
        />
        <ProcessPath />
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">Enquire About {service.title}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/services">See all services</Link>
          </Button>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
