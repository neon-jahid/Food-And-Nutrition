import { healthTags } from "../utils.js";
import { useLang } from "../context/LangContext.jsx";

export default function Tags({ n, limit }) {
  const { t } = useLang();
  const list = healthTags(n);
  const shown = limit ? list.slice(0, limit) : list;
  if (!shown.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map(([key, kind]) => (
        <span
          key={key}
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
            kind === "good"
              ? "bg-brand-50 text-brand-700 dark:bg-brand-700/25 dark:text-brand-100"
              : "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
          }`}
        >
          {t.tags[key]}
        </span>
      ))}
    </div>
  );
}
