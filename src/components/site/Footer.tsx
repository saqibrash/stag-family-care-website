import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { hasAddress, hasEmail, hasPhone, site, services } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 deep-gradient text-charcoal-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="inline-flex rounded-2xl bg-cream p-3 shadow-lift">
            <Logo className="h-12 w-auto" />
          </span>
          <p className="mt-4 text-sm text-charcoal-foreground/80">
            {site.strapline}. Respectful, dependable care and support at home, planned around each
            person.
          </p>
          <p className="mt-4 text-xs text-charcoal-foreground/65">{site.registrationNote}</p>
        </div>

        <nav aria-label="Services">
          <h2 className="font-display text-base">Our services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.key}>
                <Link
                  to="/services/$service"
                  params={{ service: s.key }}
                  className="text-charcoal-foreground/85 underline-offset-4 hover:text-cream hover:underline"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="font-display text-base">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About us" },
              { to: "/why-choose-us", label: "Why choose us" },
              { to: "/careers", label: "Work with us" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy-policy", label: "Privacy policy" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-charcoal-foreground/85 underline-offset-4 hover:text-cream hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
              {hasPhone ? (
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="underline-offset-4 hover:underline"
                >
                  {site.phone}
                </a>
              ) : (
                <span className="text-charcoal-foreground/70">{site.phoneLabel}</span>
              )}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
              {hasEmail ? (
                <a
                  href={`mailto:${site.email}`}
                  className="break-all underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              ) : (
                <span className="text-charcoal-foreground/70">{site.emailLabel}</span>
              )}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
              <span className="text-charcoal-foreground/70">
                {hasAddress ? site.address : site.addressLabel}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-clay" aria-hidden="true" />
              <span className="text-charcoal-foreground/70">
                {site.openingHours || site.openingHoursLabel}
              </span>
            </li>
          </ul>
          <p className="mt-4">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-cream px-4 py-2 text-sm font-semibold text-primary"
            >
              Enquire About Care
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-charcoal-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} STAG Family Care. All rights reserved.</p>
          <p>
            A separate business to{" "}
            <a
              href={site.sisterCompany.url}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 hover:text-cream"
            >
              {site.sisterCompany.name}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
