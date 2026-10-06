import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Fragment, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CtaSection, Section } from "@/components/site/Section";
import { Photo } from "@/components/site/Photo";
import { formatDate, posts, readingTime, type Block } from "@/lib/blog";
import { photoSrc } from "@/lib/images";
import { abs, breadcrumbSchema, DEFAULT_SHARE_IMAGE, jsonLd, pageHead } from "@/lib/seo";
import { site } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found | STAG Family Care" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    const path = `/blog/${p.slug}`;
    const image = photoSrc(p.photo, 1200);
    return {
      ...pageHead({
        title: `${p.metaTitle} | STAG Family Care`,
        description: p.metaDescription,
        path,
        type: "article",
        image,
        imageAlt: p.photo.alt,
        extraMeta: [
          { property: "article:published_time", content: p.published },
          { property: "article:modified_time", content: p.updated },
          { property: "article:section", content: p.category },
        ],
      }),
      scripts: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: p.title, path },
        ]),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.metaDescription,
          image,
          datePublished: p.published,
          dateModified: p.updated,
          author: { "@type": "Organization", name: p.author },
          publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: DEFAULT_SHARE_IMAGE } },
          mainEntityOfPage: abs(path),
        }),
      ],
    };
  },
  component: PostPage,
});

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    out.push(
      href.startsWith("http") ? (
        <a key={m.index} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-4">{label}</a>
      ) : (
        <a key={m.index} href={href} className="font-semibold text-primary underline underline-offset-4">{label}</a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function renderBlock(b: Block, i: number) {
  if ("h2" in b) return <h2 key={i} className="mt-10 text-2xl sm:text-3xl">{b.h2}</h2>;
  if ("h3" in b) return <h3 key={i} className="mt-6 text-xl">{b.h3}</h3>;
  if ("ul" in b)
    return (
      <ul key={i} className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        {b.ul.map((li) => <li key={li}>{inline(li)}</li>)}
      </ul>
    );
  return <p key={i} className="mt-4 text-lg leading-relaxed text-muted-foreground">{inline(b.p)}</p>;
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="hero-gradient border-b border-border/60 px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <Link to="/" className="hover:underline">Home</Link> / <Link to="/blog" className="hover:underline">Blog</Link>
            </nav>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-clay">{post.category}</p>
            <h1 className="mt-3 text-3xl sm:text-4xl">{post.title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              By {post.author} · Published <time dateTime={post.published}>{formatDate(post.published)}</time>
              {post.updated !== post.published ? <Fragment> · Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></Fragment> : null}
              {" "}· {readingTime(post)} min read
            </p>
          </div>
        </header>
        <Section>
          <div className="mx-auto max-w-3xl">
            <Photo photo={post.photo} priority className="aspect-[16/9] rounded-3xl shadow-lift" sizes="(min-width: 768px) 768px, 100vw" />
            <div className="mt-8">{post.body.map(renderBlock)}</div>
            <div className="mt-12 rounded-3xl bg-blush p-7">
              <h2 className="text-2xl">Would you like to talk it through?</h2>
              <p className="mt-2 text-muted-foreground">
                Our team is happy to answer questions about care at home, with no cost and no obligation.
              </p>
              <Button asChild size="lg" className="mt-5 rounded-full">
                <Link to="/contact">Enquire About Care</Link>
              </Button>
            </div>
          </div>
        </Section>
      </article>

      <Section tone="cream">
        <h2 className="text-2xl sm:text-3xl">Related articles</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <li key={r.slug} className="rounded-3xl bg-card p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-clay">{r.category}</p>
              <Link to="/blog/$slug" params={{ slug: r.slug }} className="mt-2 block font-display text-lg hover:text-primary">
                {r.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaSection />
    </>
  );
}
