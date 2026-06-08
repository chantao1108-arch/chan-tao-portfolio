import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-300/75 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
        <Link href="/" className="text-base font-semibold uppercase tracking-[0.3em] text-slate-950">
          Chan Tao
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.2em] text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
