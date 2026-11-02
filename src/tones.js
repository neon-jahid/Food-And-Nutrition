/**
 * Static colour classes per tone name (Tailwind needs full class strings in source).
 * soft = tinted background + text, solid = filled badge, ring = subtle outline, bar = top accent stripe.
 */
export const TONES = {
  emerald: { soft: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300", solid: "bg-emerald-500 text-white", ring: "ring-emerald-200 dark:ring-emerald-500/30", bar: "from-emerald-400 to-teal-400" },
  lime:    { soft: "bg-lime-50 text-lime-700 dark:bg-lime-500/15 dark:text-lime-300",             solid: "bg-lime-500 text-white",    ring: "ring-lime-200 dark:ring-lime-500/30",       bar: "from-lime-400 to-emerald-400" },
  amber:   { soft: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",         solid: "bg-amber-500 text-white",   ring: "ring-amber-200 dark:ring-amber-500/30",     bar: "from-amber-400 to-orange-400" },
  orange:  { soft: "bg-orange-50 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",     solid: "bg-orange-500 text-white",  ring: "ring-orange-200 dark:ring-orange-500/30",   bar: "from-orange-400 to-rose-400" },
  rose:    { soft: "bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",             solid: "bg-rose-500 text-white",    ring: "ring-rose-200 dark:ring-rose-500/30",       bar: "from-rose-400 to-pink-400" },
  red:     { soft: "bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-300",                 solid: "bg-red-500 text-white",     ring: "ring-red-200 dark:ring-red-500/30",         bar: "from-red-400 to-orange-400" },
  teal:    { soft: "bg-teal-50 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300",             solid: "bg-teal-500 text-white",    ring: "ring-teal-200 dark:ring-teal-500/30",       bar: "from-teal-400 to-cyan-400" },
  sky:     { soft: "bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",                 solid: "bg-sky-500 text-white",     ring: "ring-sky-200 dark:ring-sky-500/30",         bar: "from-sky-400 to-indigo-400" },
  indigo:  { soft: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",     solid: "bg-indigo-500 text-white",  ring: "ring-indigo-200 dark:ring-indigo-500/30",   bar: "from-indigo-400 to-violet-400" },
  violet:  { soft: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",     solid: "bg-violet-500 text-white",  ring: "ring-violet-200 dark:ring-violet-500/30",   bar: "from-violet-400 to-fuchsia-400" },
  fuchsia: { soft: "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300", solid: "bg-fuchsia-500 text-white", ring: "ring-fuchsia-200 dark:ring-fuchsia-500/30", bar: "from-fuchsia-400 to-pink-400" },
};
export const tone = name => TONES[name] || TONES.emerald;
