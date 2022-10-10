export const atoms = new Set(
  [
    // Multi-Values

    //Layout
    "aspect-",
    "columns-",
    "break-",
    "box-",
    "float-",
    "clear-",
    "object-",
    "overflow-",
    "overscroll-",
    "inset-",
    "top-",
    "right-",
    "bottom-",
    "left-",
    "z-",

    //Flexbox & Grid
    "basis-",
    "flex-",
    "order-",
    "grid-",
    "col-",
    "row-",
    "auto-",
    "gap-",
    "justify-",
    "content-",
    "items-",
    "self-",
    "place-",

    //Spacing
    "p-",
    "px-",
    "py-",
    "pt-",
    "pr-",
    "pb-",
    "pl-",
    "m-",
    "mx-",
    "my-",
    "mt-",
    "mr-",
    "mb-",
    "ml-",
    "space-",

    //Sizing
    "w-",
    "min-",
    "max-",
    "h-",

    //Typography
    "font-",
    "text-",
    "tracking-",
    "leading-",
    "list-",
    "decoration-",
    "underline-",
    "indent-",
    "align-",
    "whitespace-",
    "break-",
    "content-",

    //Backgrounds
    "bg-",
    "from-",
    "via-",
    "to-",

    //Borders
    "rounded-",
    "border-",
    "divide-",
    "outline-",
    "ring-",

    //Effects
    "shadow-",
    "opacity-",
    "mix-",

    //Filters
    "blur-",
    "brightness-",
    "contrast-",
    "drop-",
    "grayscale-",
    "hue-",
    "invert-",
    "saturate-",
    "sepia-",
    "backdrop-",

    //Tables
    "table-",

    //Transitions
    "transition-",
    "duration-",
    "ease-",
    "delay-",
    "animate-",

    //Transforms
    "scale-",
    "rotate-",
    "translate-",
    "skew-",
    "origin-",

    //Interactivity
    "accent-",
    "appearance-",
    "cursor-",
    "caret-",
    "pointer-",
    "resize-",
    "scroll-",
    "snap-",
    "touch-",
    "select-",
    "will-",
    "fill-",
    "stroke-",

    //Accessability
    "sr-",
    "not-",

    // Constants

    //Layout
    "container",
    "block",
    "inline",
    "inline-block",
    "flex",
    "inline-flex",
    "table",
    "grid",
    "contents",
    "table",
    "inline-table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-footer-group",
    "table-header-group",
    "table-row-group",
    "table-row",
    "flow-root",
    "grid",
    "inline-grid",
    "contents",
    "list-item",
    "hidden",
    "isolate",
    "isolation-auto",
    "static",
    "fixed",
    "absolute",
    "relative",
    "sticky",
    "visible",
    "invisible",

    //Flexbox & Grid
    "grow",
    "grow-0",
    "shrink",
    "shrink-0",

    //Typography
    "antialiased",
    "subpixel-antialiased",
    "italic",
    "not-italic",
    "normal-nums",
    "ordinal",
    "slashed-zero",
    "lining-nums",
    "oldstyle-nums",
    "proportional-nums",
    "tabular-nums",
    "diagonal-fractions",
    "stacked-fractions",
    "overline",
    "underline",
    "line-through",
    "no-underline",
    "uppercase",
    "lowercase",
    "capitalize",
    "normal-case",
    "truncate",

    //Borders
    "border",

    //Filters
    "blur",
    "grayscale",
    "invert",
    "sepia",

    //Transitions
    "transition",

    //Interactivity
    "resize",
  ] as const,
);
