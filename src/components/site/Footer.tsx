import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, services } from "@/lib/site";
import { StagMark } from "./StagMark";

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <StagMark className="h-7 w-7" />
            </span>
            <span className="font-display text-lg">STAG Family Care</span>
          </div>
          <p className="mt-4 text-sm text-charcoal-foreground/75">
            {site.strapline}. Respectful, dependable care and support at home, designed around each
            person.
          </p>
          <p className="mt-4 text-xs text-charcoal-foreground/60">{site.registrationNote}</p>
        </div>

        <nav aria-label="Services">
          <h2 className="font-display text-base">Our services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.key}>
                <Link
                  to={`/services/${s.key}`}
                  className="text-charcoal-foreground/80 underline-offset-4 hover:text-primary hover:underline"
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
                  className="text-charcoal-foreground/80 underline-offset-4 hover:text-primary hover:underline"
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
              <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={site.phoneHref} className="underline-offset-4 hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all underline-offset-4 hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-charcoal-foreground/80">{site.address}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-charcoal-foreground/60">{site.openingHours}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-charcoal-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} STAG Family Care. All rights reserved.</p>
          <p>
            A separate business to{" "}
            <a
              href={site.sisterCompany.url}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 hover:text-primary"
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
