import { Link } from "@tanstack/react-router";
import { MessageCircleHeart } from "lucide-react";

/** Small, unobtrusive floating enquiry button, mobile only. */
export function MobileContactButton() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lift md:hidden"
    >
      <MessageCircleHeart className="h-4 w-4" aria-hidden="true" />
      Enquire
    </Link>
  );
}
