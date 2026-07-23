import { Tag } from "lucide-react";

export function StatsBar() {
  return (
    <div className="flex items-center justify-center gap-1.5 border-y border-muted/60 px-6 py-3 text-sm">
      <Tag className="size-4" strokeWidth={2} />
      <span className="font-semibold text-ink">19,567 items live now</span>
      <span className="text-ink/50">running on Basta</span>
    </div>
  );
}
