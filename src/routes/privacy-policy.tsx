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
          "How STAG Family Care handles enquiry information, contact details and privacy rights.",
      },
      { property: "og:title", content: "Privacy Policy | STAG Family Care" },
      { property: "og:description", content: "Privacy information for STAG Family Care enquiries." },
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
        intro="How enquiry information is handled by STAG Family Care."
      />
      <Section>
        <div className="max-w-3xl space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-2xl text-foreground">Who we are</h2>
            <p className="mt-3">
              {site.name} is a new care business. Separate STAG Family Care contact details will be
              added once confirmed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Information we collect</h2>
            <p className="mt-3">
              We collect the information you choose to send through the enquiry form, such as your
              name, contact details and a short message about the support being requested.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">How we use it</h2>
            <p className="mt-3">
              We use enquiry information to respond to you, discuss potential care needs and keep a
              record of the conversation where needed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Sharing and storage</h2>
            <p className="mt-3">
              We do not sell personal information. Information may be shared only where needed to
              respond to your enquiry, meet legal duties or arrange care with your agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Your rights</h2>
            <p className="mt-3">
              You can ask to access, correct or delete your information. You can also raise a concern
              with the Information Commissioner's Office.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Cookies</h2>
            <p className="mt-3">This website does not use marketing cookies.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
