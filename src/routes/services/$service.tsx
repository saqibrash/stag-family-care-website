import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/Section";
import { ProcessPath } from "@/components/site/ProcessPath";
import { services, site } from "@/lib/site";
import { serviceExtras } from "@/lib/service-extras";
import { posts } from "@/lib/blog";
import { Photo } from "@/components/site/Photo";
import { photos, photoSrc } from "@/lib/images";
import { abs, breadcrumbSchema, jsonLd, pageHead } from "@/lib/seo";

const servicePhotos = {
  "personal-care": photos.personalCare,
  companionship: photos.companionship,
  "supported-living": photos.supportedLiving,
  "person-centred-care": photos.personCentredCare,
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
    const photo = servicePhotos[s.key as keyof typeof servicePhotos];
    const path = `/services/${params.service}`;
    return {
      ...pageHead({
        title: s.metaTitle,
        description: s.metaDescription,
        path,
        image: photoSrc(photo, 1200),
        imageAlt: photo.alt,
      }),
      scripts: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: s.title, path },
        ]),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          serviceType: s.title,
          description: s.metaDescription,
          url: abs(path),
          provider: { "@type": "Organization", name: site.name, url: abs("/"), telephone: "+441285708798" },
        }),
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const extras = serviceExtras[service.key];
  const relatedPosts = posts.filter((p) => extras.posts.includes(p.slug));

  return (
    <>
      <PageHero eyebrow={service.title} title={extras.h1} intro={service.intro} />

      <Section>
        <Photo
          photo={servicePhotos[service.key as keyof typeof servicePhotos]}
          priority
          className="mb-12 aspect-[16/7] rounded-4xl shadow-lift"
          sizes="(min-width: 1024px) 1100px, 100vw"
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Who {service.title.toLowerCase()} may suit</h2>
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

      <Section tone="blush">
        <SectionHeading eyebrow="Benefits" title={`How ${service.title.toLowerCase()} can help`} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {extras.benefits.map((b) => (
            <div key={b.title} className="rounded-3xl bg-card p-6 shadow-soft">
              <h3 className="text-xl">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-xl">Planning your support</h3>
            <p className="mt-2 text-muted-foreground">{service.planning}</p>
          </div>
          <div>
            <h3 className="text-xl">Dignity and choice</h3>
            <p className="mt-2 text-muted-foreground">{service.dignity}</p>
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="How it works"
          title={`How ${service.title.toLowerCase()} begins`}
          intro="A simple, unhurried process, and you can stop at any point."
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

      <Section>
        <SectionHeading eyebrow="Questions" title={`${service.title} questions`} />
        <div className="mt-8 space-y-6">
          {extras.faqs.map((f) => (
            <div key={f.q} className="border-b border-border/70 pb-6">
              <h3 className="text-lg">{f.q}</h3>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Related services</h2>
            <ul className="mt-4 space-y-2">
              {extras.related.map((key) => {
                const r = services.find((s) => s.key === key)!;
                return (
                  <li key={key}>
                    <Link to="/services/$service" params={{ service: key }} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                      {r.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">Helpful guidance</h2>
            <ul className="mt-4 space-y-2">
              {relatedPosts.map((p) => (
                <li key={p.slug}>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                    {p.title} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaSection title="Discuss your care needs" />
    </>
  );
}
