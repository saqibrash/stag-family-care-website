import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaSection, PageHero, Section } from "@/components/site/Section";
import { Photo } from "@/components/site/Photo";
import { formatDate, posts, readingTime } from "@/lib/blog";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...pageHead({
      title: "Care Advice and Guidance | STAG Family Care Blog",
      description:
        "Practical advice for families on person centred care, companionship, personal care, supported living and choosing a care provider.",
      path: "/blog",
    }),
    scripts: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Advice and guidance"
        title="Care advice for families"
        intro="Plain English guidance on care at home, independence and planning support, written for people weighing up their options."
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft">
              <Photo photo={p.photo} className="aspect-[3/2]" sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-clay">{p.category}</p>
                <h2 className="mt-2 text-xl">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-primary">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-muted-foreground">{p.summary}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  <time dateTime={p.published}>{formatDate(p.published)}</time> · {readingTime(p)} min read
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                  aria-label={`Read more: ${p.title}`}
                >
                  Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <CtaSection title="Speak to our team" />
    </>
  );
}
