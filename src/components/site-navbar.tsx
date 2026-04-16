const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#consultation", label: "Consultation" },
  { href: "#contact", label: "Contact" },
];

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <a href="#top" className="min-w-0">
          <div className="font-serif text-xl tracking-tight text-slate-900">
            Bajis Awawdeh
          </div>
          <div className="text-xs uppercase tracking-[0.24em] text-[var(--color-navy)]/70">
            Estate Planning Attorney
          </div>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[var(--color-navy)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#consultation"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-navy-dark)]"
        >
          Schedule
        </a>
      </div>
    </header>
  );
}
