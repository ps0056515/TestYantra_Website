import type { PropsWithChildren } from "react";

export function SiteShell({ children }: PropsWithChildren) {
  return <div className="relative min-h-dvh bg-background">{children}</div>;
}
