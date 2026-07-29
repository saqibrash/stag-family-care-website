import { createFileRoute } from "@tanstack/react-router";
import { CtaSection, PageHero, Section, SectionHeading } from "@/components/site/Section";
import { hasAreas, site } from "@/lib/site";
import { Photo } from "@/components/site/Photo";
import { photos } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | STAG Family Care" },
      {
        name: "description",
        content:
          "STAG Family Care is a family-led care service. Meet the people behind the name and read about our values, purpose and approach to care at home.",
      },
      { property: "og:title", content: "About STAG Family Care" },
      {
        property: "og:description",
        content: "A family-led care service built on dignity, independence and consistency.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A family name, and the standards that come with it"
        intro="STAG Family Care was started by a local family who believe good care is built on relationships, not rotas."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Photo photo={photos.hands} className="order-last aspect-[4/3] rounded-3xl shadow-lift lg:order-none lg:hidden" />
          <div className="space-y-4 text-lg text-muted-foreground">
            <h2 className="text-3xl text-foreground">Why we started</h2>
            <p>
              Like a lot of families, we have had our own experience of arranging care: the phone
              calls, the changing faces, the feeling of not quite being heard. STAG Family Care grew
              out of that. A small service where the people arranging the care are the people you
              can speak to.
            </p>
            <p>
              The STAG name comes from our family names. The same family runs{" "}
              <a
                href={site.sisterCompany.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-semibold text-primary underline underline-offset-4"
              >
                {site.sisterCompany.name}
              </a>
              , a separate local business. Different service, different team, same family standards.
            </p>
            <p>[Editable placeholder. Add the founding story, launch background and local roots.]</p>
          </div>

          <dl className="grid gap-4 self-start rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                Service area
              </dt>
              <dd className="mt-1">{hasAreas ? site.serviceAreas.join(", ") : site.serviceAreasLabel}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                Registration status
              </dt>
              <dd className="mt-1 text-muted-foreground">{site.registrationNote}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Launch</dt>
              <dd className="mt-1 text-muted-foreground">{site.launchNote}</dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                Care experience &amp; qualifications
              </dt>
              <dd className="mt-1 text-muted-foreground">
                [Editable placeholder. List relevant care experience, training and qualifications
                once confirmed.]
              </dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Our people"
          title="The family behind STAG"
          intro="Names, roles and biographies are placeholders until confirmed."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {site.founders.map((f) => (
            <article key={f.role} className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
              <div className="h-14 w-14 rounded-2xl bg-blush" aria-hidden="true" />
              <h3 className="mt-4 text-xl">{f.name}</h3>
              <p className="text-sm font-semibold text-primary">{f.role}</p>
              <p className="mt-3 text-muted-foreground">{f.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our values" title="What we hold ourselves to" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Dignity", "Care given quietly, respectfully and at the pace of the person receiving it."],
            ["Independence", "Support that keeps people doing what they can for themselves."],
            ["Consistency", "Familiar carers, planned visits and honest communication."],
            ["Family values", "We only offer what we would be happy for our own family to receive."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-3xl bg-blush p-6">
              <h3 className="text-lg">{t}</h3>
              <p className="mt-2 text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection title="Have a question about who we are?" body="We are happy to talk things through before you decide anything." />
    </>
  );
}
