/* Wraps every page of "What's Inside Your Food?" with its navigation and paper background. */
import type { ReactNode } from "react";
import "@fontsource-variable/fraunces";
import { Providers, SectionNav } from "@/features/ingredients/components/Interactive";

export default function IngredientsLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="bg-paper text-forest-950 dark:bg-paper-dark dark:text-stone-100">
        <SectionNav />
        {children}
      </div>
    </Providers>
  );
}
