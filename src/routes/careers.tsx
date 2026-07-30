import { createFileRoute } from "@tanstack/react-router";
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
        <div className="rounded-3xl border border-dashed border-primary/40 bg-blush p-7">
          <h2 className="text-xl">Current vacancies</h2>
          <p className="mt-3 text-muted-foreground">
            [Editable placeholder, no vacancies are advertised at present. Add live roles here when
            recruitment opens. Until then, expressions of interest are welcome.]
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h2 className="text-xl">Roles we expect to recruit</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>[Care Assistant, visiting care]</li>
              <li>[Support Worker, supported living]</li>
              <li>[Companionship Carer]</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h2 className="text-xl">What we look for</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Kindness, patience and reliability</li>
              <li>[Right to work in the UK]</li>
              <li>[Enhanced DBS check, details to confirm]</li>
              <li>[Driving licence and access to a vehicle, where required]</li>
              <li>[Experience or willingness to complete training]</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h2 className="text-xl">What we offer</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>[Pay rate placeholder]</li>
              <li>[Paid training placeholder]</li>
              <li>[Travel time / mileage policy placeholder]</li>
              <li>[Flexible rota options placeholder]</li>
              <li>Realistic visit times and a manager who picks up the phone</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Applying"
          title="Register your interest"
          intro="Send a short email telling us a little about yourself and the kind of hours that suit you."
        />
{site.careersEmail ? (
          <Button asChild size="lg" className="mt-8 rounded-full">
            <a href={`mailto:${site.careersEmail}`}>
              <Mail aria-hidden="true" />
              {site.careersEmail}
            </a>
          </Button>
        ) : (
          <p className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-secondary px-5 py-4 font-semibold text-secondary-foreground">
            <Mail aria-hidden="true" className="h-5 w-5" />
            {site.careersEmailLabel}
          </p>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          Until the careers address is live, please use the{" "}
          <a href="/contact" className="font-semibold text-primary underline underline-offset-4">
            contact form
          </a>{" "}
          to register your interest.
        </p>
      </Section>
    </>
  );
}
