import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Work With STAG Family Care" },
      {
        name: "description",
        content:
          "Join STAG Family Care as a carer or support worker. Read about the roles we expect to recruit for, what we look for and how to register your interest.",
      },
      { property: "og:title", content: "Careers at STAG Family Care" },
      {
        property: "og:description",
        content: "Carer and support worker opportunities with a family run care service.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Work with us"
        title="Care work that gives you time to care"
        intro="We're building a small team of carers and support workers who take pride in doing the job properly."
      />

      <Section>
        <div className="rounded-3xl bg-blush p-7">
          <h2 className="text-xl">Current vacancies</h2>
          <p className="mt-3 text-muted-foreground">
            No vacancies are advertised at present. Expressions of interest are welcome through the
            enquiry form.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h2 className="text-xl">Roles we expect to recruit</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Care Assistant</li>
              <li>Live in Carer</li>
              <li>Support Worker</li>
              <li>Companionship Carer</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h2 className="text-xl">What we look for</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Kindness, patience and reliability</li>
              <li>Right to work in the UK</li>
              <li>Willingness to complete safe recruitment checks</li>
              <li>Good communication</li>
              <li>A careful and respectful approach</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h2 className="text-xl">How we work</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Realistic visit times and a manager who picks up the phone</li>
              <li>Clear expectations before any role begins</li>
              <li>Supportive communication</li>
              <li>Care standards that put people first</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Applying"
          title="Register your interest"
          intro="Use the enquiry form to tell us a little about yourself and the kind of hours that suit you."
        />
        {site.careersEmail ? (
          <Button asChild size="lg" className="mt-8 rounded-full">
            <a href={`mailto:${site.careersEmail}`}>
              <Mail aria-hidden="true" />
              {site.careersEmail}
            </a>
          </Button>
        ) : (
          <Button asChild size="lg" className="mt-8 rounded-full">
            <Link to="/contact">
              <Mail aria-hidden="true" />
              Use the enquiry form
            </Link>
          </Button>
        )}
      </Section>
    </>
  );
}
