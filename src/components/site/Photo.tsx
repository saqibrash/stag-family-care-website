import { cn } from "@/lib/utils";
import { photoSrc, type Photo as PhotoData } from "@/lib/images";

/** Responsive, lazy loaded photograph with a warm brand tinted frame. */
export function Photo({
  photo,
  className,
  imgClassName,
  priority = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
}: {
  photo: PhotoData;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const widths = [480, 720, 1000, 1400];

  return (
    <div className={cn("overflow-hidden bg-secondary", className)}>
      <img
        src={photoSrc(photo, 1000)}
        srcSet={widths.map((w) => `${photoSrc(photo, w)} ${w}w`).join(", ")}
        sizes={sizes}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
