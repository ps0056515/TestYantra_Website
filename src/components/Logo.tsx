import Link from "next/link";

export function Logo() {
  return (
    <span className="text-xl font-bold tracking-tight sm:text-[1.35rem]" aria-label="TestYantra">
      <span className="text-[#6b7280]">TESTY</span>
      <span className="text-brand-orange">A</span>
      <span className="text-brand-navy">NTRA</span>
    </span>
  );
}

export function LogoLink() {
  return (
    <Link href="/" className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange">
      <Logo />
    </Link>
  );
}
