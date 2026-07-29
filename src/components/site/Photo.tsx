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
  const widths = [400, 640, 900, 1280];

  return (
    <div className={cn("overflow-hidden bg-secondary", className)}>
      <img
        src={photoSrc(photo, 900)}
        srcSet={widths.map((w) => `${photoSrc(photo, w)} ${w}w`).join(", ")}
        sizes={sizes}
        alt={photo.alt}
        width={1200}
        height={800}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}

