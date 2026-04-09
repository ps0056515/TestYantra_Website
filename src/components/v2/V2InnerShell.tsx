import type { PropsWithChildren } from "react";
import { Container } from "@/components/Container";

/**
 * Clears the fixed v2 nav (68px) with extra room for large display headings (Fraunces line boxes).
 * 88px was too tight — first line of h1 could sit under the nav.
 */
export function V2InnerShell({ children }: PropsWithChildren) {
  return (
    <div className="bg-[var(--bg)] pb-16 text-[var(--text)] sm:pb-20">
      <Container>{children}</Container>
    </div>
  );
}
