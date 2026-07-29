import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | STAG Family Care" },
      {
        name: "description",
        content:
          "How STAG Family Care handles enquiry information. This privacy policy is a placeholder to be reviewed and completed before launch.",
      },
      { property: "og:title", content: "Privacy Policy | STAG Family Care" },
      { property: "og:description", content: "Placeholder privacy policy for STAG Family Care." },
      { property: "og:url", content: "/privacy-policy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="Placeholder document — this must be reviewed and completed before the website goes live."
      />
      <Section>
        <div className="max-w-3xl space-y-6 text-muted-foreground">
          <p className="rounded-2xl border border-dashed border-primary/40 bg-blush p-5 text-foreground">
            [Editable placeholder — replace this page with a full privacy policy prepared or reviewed
            by a suitably qualified person, covering UK GDPR and the Data Protection Act 2018.]
          </p>

          <div>
            <h2 className="text-2xl text-foreground">Who we are</h2>
            <p className="mt-3">
              {site.name}. {site.address || site.addressLabel}. {site.phone || site.phoneLabel}. {site.email || site.emailLabel}.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Information we collect</h2>
            <p className="mt-3">
              [Placeholder — describe the information collected through enquiry forms, telephone
              calls and email, such as name, contact details, postcode and details of the support
              being requested.]
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">How we use it</h2>
            <p className="mt-3">
              [Placeholder — explain the lawful basis for processing, how enquiries are handled, and
              that information is only used to respond to the enquiry and arrange care.]
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Sharing and storage</h2>
            <p className="mt-3">
              [Placeholder — set out any third parties, storage locations and retention periods.]
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Your rights</h2>
            <p className="mt-3">
              [Placeholder — outline the rights to access, correction, erasure, objection and
              complaint to the Information Commissioner's Office.]
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Cookies</h2>
            <p className="mt-3">[Placeholder — confirm any cookies or analytics used on the site.]</p>
          </div>
        </div>
      </Section>
    </>
  );
}
