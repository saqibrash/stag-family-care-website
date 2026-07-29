import { cn } from "@/lib/utils";
import type { Photo as PhotoData } from "@/lib/images";

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
  return (
    <div className={cn("overflow-hidden bg-secondary", className)}>
      <img
        src={photo.src}
        sizes={sizes}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
