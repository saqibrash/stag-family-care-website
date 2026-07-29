import { steps } from "@/lib/site";

/** Animated pathway showing the four stages of starting support. */
export function ProcessPath() {
  return (
    <ol className="relative mt-12 grid gap-6 md:grid-cols-4">
      <li
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 md:block"
      />
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <div className="flex items-center gap-3 md:block">
            <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary font-display text-xl text-primary-foreground shadow-soft">
              {i + 1}
            </span>
            <h3 className="text-lg md:mt-5">{step.title}</h3>
          </div>
          <p className="mt-3 text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
