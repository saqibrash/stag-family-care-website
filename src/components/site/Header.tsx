import { Link } from "@tanstack/react-router";
import { Menu, PhoneOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { hasPhone, site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function AnnouncementBar() {
  return (
    <div className="deep-gradient text-burgundy-foreground">
      <p className="mx-auto max-w-6xl px-4 py-2 text-center text-sm">{site.announcement}</p>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
        <Link to="/" className="min-w-0" aria-label="STAG Family Care home">
          <Logo className="h-11 w-auto sm:h-14" />
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-full px-3 py-2 text-sm font-semibold text-charcoal transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {hasPhone ? (
            <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </Button>
          ) : null}

          <Button asChild className="hidden shrink-0 rounded-full sm:inline-flex">
            <Link to="/contact">Enquire About Care</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm bg-background">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo className="h-12 w-auto" />
              <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-secondary text-primary" }}
                    className="rounded-xl px-3 py-3 text-base font-semibold text-charcoal hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 space-y-3">
                <Button asChild className="w-full rounded-full">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Enquire About Care
                  </Link>
                </Button>
                {hasPhone ? (
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`}>Call {site.phone}</a>
                  </Button>
                ) : (
                  <p className="flex items-start gap-2 rounded-xl bg-secondary p-3 text-sm text-secondary-foreground">
                    <PhoneOff className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {site.phoneLabel}
                  </p>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
