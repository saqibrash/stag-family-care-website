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
          <p className="mt-3 text-muted-foreground font-bold">
            Care Assistant
          </p>
          <p>Join STAG Family Care and become part of a growing, family focused care team.

We are looking for kind, reliable and compassionate people who genuinely care about making a difference in someone’s day.
</p>

        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h2 className="text-xl">Roles we expect to recruit</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>* Supporting clients with everyday tasks</li>
              <li>* Providing companionship</li>
              <li>* Helping people remain independent at home</li>
              <li>* Supporting personal care where required</li>
              <li>* Following individual care plans</li>
              <li>* Communicating clearly with clients, families and the team</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h2 className="text-xl">What we look for</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>* A caring and respectful attitude</li>
              <li>* Good communication skills</li>
              <li>* Reliable and professional</li>
              <li>* Able to support people with dignity and independence</li>
              <li>* Comfortable working in clients’ homes</li>
              <li>* Able to work as part of a team</li>
              {/* <li>Previous care experience is helpful, but the client has not confirmed whether it is essential</li> */}
            </ul>
          </article>

          <article className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
            <h2 className="text-xl">What we offer</h2>
            <p className="mt-2 text-muted-foreground font-black">Pay and benefits</p>
<ul className="mt-2">

 <li> * £13 per hour</li>
<li>* 45p mileage between clients</li>
<li>* Company pension</li>
<li>* Employee Assistance Programme</li>
<li>* Supportive working environment</li>
<li>* Ongoing training and development</li>
<li>* Opportunity to grow with a new care company</li>
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
