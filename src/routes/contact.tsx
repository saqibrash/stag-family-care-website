import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { AlertTriangle, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PageHero, Section } from "@/components/site/Section";
import { Photo } from "@/components/site/Photo";
import { photos } from "@/lib/images";
import { hasAddress, hasEmail, hasPhone, services, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact STAG Family Care | Enquire About Care at Home" },
      {
        name: "description",
        content:
          "Contact STAG Family Care about personal care, live in care, companionship or supported living. Send an enquiry and we will talk it through with no obligation.",
      },
      { property: "og:title", content: "Contact STAG Family Care" },
      {
        property: "og:description",
        content:
          "Send an enquiry about care at home and we will talk it through with you. No cost and no obligation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z.string().trim().min(7, "Please enter a contact number").max(20),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  support: z.string().min(1, "Please choose the type of care required"),
  careFor: z.string().min(1, "Please tell us who the care is for"),
  preferred: z.enum(["phone", "email"]),
  message: z.string().trim().min(10, "Please tell us a little more").max(1200),
  consent: z.literal(true, { errorMap: () => ({ message: "Please tick the consent box" }) }),
});

type Errors = Partial<Record<string, string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [support, setSupport] = useState("");
  const [careFor, setCareFor] = useState("");
  const [preferred, setPreferred] = useState("phone");
  const [consent, setConsent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const result = schema.safeParse({
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      support,
      careFor,
      preferred,
      message: form.get("message"),
      consent,
    });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      setStatus("error");
      return;
    }

    setErrors({});
    setStatus("success");
    formEl.reset();
    setSupport("");
    setCareFor("");
    setConsent(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us talk about the right support"
        intro="Tell us what is happening and we will talk it through with you. There is no cost and no obligation."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="depth-card p-6 sm:p-8">
            <h2 className="text-2xl">Enquire about care</h2>
            <p className="mt-2 text-muted-foreground">
              Fields marked with * are required. Please do not send medical details through this
              form. We will talk those through with you properly at assessment.
            </p>

            {status === "success" ? (
              <p
                role="status"
                className="mt-6 flex items-start gap-3 rounded-2xl bg-secondary p-4 text-secondary-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                Thank you. Your enquiry has been received and we will reply using your preferred
                contact method.
              </p>
            ) : null}

            {status === "error" ? (
              <p
                role="alert"
                className="mt-6 flex items-start gap-3 rounded-2xl bg-destructive/10 p-4 text-destructive"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                Please check the highlighted fields and try again.
              </p>
            ) : null}

            <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-5">
              <Field id="name" label="Full name *" error={errors.name}>
                <Input id="name" name="name" autoComplete="name" maxLength={80} />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="phone" label="Phone number *" error={errors.phone}>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={20} />
                </Field>
                <Field id="email" label="Email address *" error={errors.email}>
                  <Input id="email" name="email" type="email" autoComplete="email" maxLength={160} />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="support" label="Type of care required *" error={errors.support}>
                  <Select value={support} onValueChange={setSupport}>
                    <SelectTrigger id="support" className="w-full">
                      <SelectValue placeholder="Please choose" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.key} value={s.title}>
                          {s.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="Not sure yet">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field id="careFor" label="Who is the care for? *" error={errors.careFor}>
                  <Select value={careFor} onValueChange={setCareFor}>
                    <SelectTrigger id="careFor" className="w-full">
                      <SelectValue placeholder="Please choose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Myself">Myself</SelectItem>
                      <SelectItem value="A parent">A parent</SelectItem>
                      <SelectItem value="A partner or spouse">A partner or spouse</SelectItem>
                      <SelectItem value="Another family member">Another family member</SelectItem>
                      <SelectItem value="A friend or neighbour">A friend or neighbour</SelectItem>
                      <SelectItem value="A client or professional referral">
                        A professional referral
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <fieldset>
                <legend className="text-sm font-semibold">Preferred contact method *</legend>
                <RadioGroup
                  value={preferred}
                  onValueChange={setPreferred}
                  className="mt-3 flex gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="phone" id="pref-phone" />
                    <Label htmlFor="pref-phone">Phone</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="email" id="pref-email" />
                    <Label htmlFor="pref-email">Email</Label>
                  </div>
                </RadioGroup>
              </fieldset>

              <Field id="message" label="Message *" error={errors.message}>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1200}
                  placeholder="A short note about the support you are looking for is plenty to get started."
                />
              </Field>

              <div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(v) => setConsent(v === true)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm font-normal leading-relaxed">
                    I am happy for STAG Family Care to use these details to respond to my enquiry. *
                  </Label>
                </div>
                {errors.consent ? (
                  <p className="mt-2 text-sm text-destructive">{errors.consent}</p>
                ) : null}
                <p className="mt-3 text-sm text-muted-foreground">
                  Your details are only used to respond to this enquiry. See our{" "}
                  <a
                    href="/privacy-policy"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <Button type="submit" size="lg" className="justify-self-start rounded-full">
                Send enquiry
              </Button>
            </form>
          </div>

            <aside className="space-y-6">
            <Photo photo={photos.livingRoom} className="rounded-3xl shadow-lift" />

              <div className="rounded-3xl bg-blush p-7">
                <h2 className="text-2xl">Speak to us</h2>
                {hasPhone || hasEmail || site.openingHours ? (
                  <ul className="mt-5 space-y-4">
                    {hasPhone ? (
                      <li className="flex items-start gap-3">
                        <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <a
                      href={`tel:${site.phone.replace(/\s/g, "")}`}
                      className="font-semibold underline-offset-4 hover:underline"
                    >
                      {site.phone}
                    </a>
                      </li>
                    ) : null}
                    {hasEmail ? (
                      <li className="flex items-start gap-3">
                        <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                      </li>
                    ) : null}
                    {site.openingHours ? (
                      <li className="flex items-start gap-3">
                        <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-muted-foreground">{site.openingHours}</span>
                      </li>
                    ) : null}
                  </ul>
                ) : (
                  <p className="mt-4 text-muted-foreground">
                    Please use the enquiry form while the separate STAG Family Care phone number and
                    email are being finalised.
                  </p>
                )}
                <p className="mt-5 text-sm text-muted-foreground">{site.outOfHours}</p>
              </div>

            {/* Editable office location section */}
            <div className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
              <h2 className="text-xl">Office location</h2>
              <p className="mt-3 flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {hasAddress ? site.address : "Address details will be added once confirmed."}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Care service area to be confirmed. {site.serviceAreaNote}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-semibold">
        {label}
      </Label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p className="mt-2 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
