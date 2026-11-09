import type { InsightBlock } from "@/content/insights";

export function InsightArticleBody({ blocks }: { blocks: InsightBlock[] }) {
  return (
    <div className="prose-insight space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-2xl font-bold tracking-tight text-[var(--text)] pt-4 first:pt-0"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-lg font-bold text-[var(--text)]">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="list-disc space-y-2 pl-6 text-[var(--muted2)] leading-relaxed"
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          default:
            return (
              <p key={i} className="text-base leading-relaxed text-[var(--muted2)]">
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}
