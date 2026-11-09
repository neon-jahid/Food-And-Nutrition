"use client";

/* Published numeric ADIs as bars. Loaded on demand, so only the Compare page pays for the chart library. */
import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { digits } from "../lib/site";
import type { Lang } from "../types";

export interface AdiPoint { label: string; value: number; }

export default function AdiChart({ data, lang, unit }: { data: AdiPoint[]; lang: Lang; unit: string }) {
  return (
    <div className="h-full w-full text-forest-700 dark:text-forest-200">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 44, bottom: 4, left: 4 }}>
          <CartesianGrid horizontal={false} stroke="currentColor" strokeOpacity={0.15} />
          {/* log scale: published ADIs span several orders of magnitude */}
          <XAxis type="number" scale="log" domain={["auto", "auto"]} allowDataOverflow tickFormatter={(v: number) => digits(v, lang)} tick={{ fill: "currentColor", fontSize: 12 }} stroke="currentColor" strokeOpacity={0.4} />
          <YAxis type="category" dataKey="label" width={130} tick={{ fill: "currentColor", fontSize: 12 }} stroke="currentColor" strokeOpacity={0.4} />
          <Tooltip formatter={(v: unknown) => [`${digits(Number(v), lang)} ${unit}`, "ADI"]} cursor={{ fill: "currentColor", fillOpacity: 0.06 }} contentStyle={{ borderRadius: 12, border: "1px solid #b4d2c0", color: "#163027" }} />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} isAnimationActive={false} barSize={18}>
            {data.map(d => <Cell key={d.label} fill="#2a5b46" />)}
            <LabelList dataKey="value" position="right" formatter={(v: unknown) => digits(Number(v), lang)} style={{ fill: "currentColor", fontSize: 12, fontWeight: 600 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
