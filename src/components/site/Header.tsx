import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { StagWordmark } from "./StagMark";
import { site } from "@/lib/site";

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
    <div className="bg-burgundy text-burgundy-foreground">
      <p className="mx-auto max-w-6xl px-4 py-2 text-center text-sm">{site.announcement}</p>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
        <Link to="/" className="min-w-0" aria-label="STAG Family Care home">
          <StagWordmark />
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-full px-3 py-2 text-sm font-semibold text-charcoal transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
            <a href={site.phoneHref}>
              <Phone aria-hidden="true" />
              {site.phone}
            </a>
          </Button>

          <Button asChild className="hidden shrink-0 rounded-full sm:inline-flex">
            <Link to="/contact">Enquire About Care</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetTitle className="font-display text-xl">Menu</SheetTitle>
              <nav aria-label="Mobile" className="mt-4 flex flex-col gap-1">
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
                <Button asChild variant="outline" className="w-full rounded-full">
                  <a href={site.phoneHref}>Call {site.phone}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
