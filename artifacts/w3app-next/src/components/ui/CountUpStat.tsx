"use client";
import { useCountUp } from "@/hooks/useCountUp";

export function CountUpStat({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const { count, ref } = useCountUp(value, 2000, true);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center p-6 border border-slate-700 rounded-2xl bg-slate-800/50 backdrop-blur-sm card-hover">
      <div className="text-4xl md:text-5xl font-black text-[#F26522] mb-2">
        {count}{suffix}
      </div>
      <div className="text-white font-bold text-lg">{label}</div>
    </div>
  );
}
