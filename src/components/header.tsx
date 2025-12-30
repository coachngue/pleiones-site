"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const base = isEN ? "/en" : "";

  const navItems = [
    { href: "/", labelFR: "Accueil", labelEN: "Home" },
    { href: "/profil-coach", labelFR: "Profil du coach", labelEN: "Coach Profile" },
    { href: "/services", labelFR: "Services", labelEN: "Services" },
    { href: "/contact", labelFR: "Contact", labelEN: "Contact" },
  ];

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href={`${base}/`} className="text-xl font-bold text-slate-900">
          PLEIONES
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center text-slate-700 font-medium">
          {navItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              <Link
                href={`${base}${item.href}`}
                className="hover:text-slate-900 transition"
              >
                {isEN ? item.labelEN : item.labelFR}
              </Link>

              {/* Separator */}
              {index < navItems.length - 1 && (
                <span className="mx-3 text-slate-400">•</span>
              )}
            </div>
          ))}
        </nav>

        {/* SWITCH LANGUE */}
        <div className="text-sm font-medium">
          {isEN ? (
            <Link href={pathname.replace("/en", "") || "/"} className="hover:underline">
              FR
            </Link>
          ) : (
            <Link href={`/en${pathname}`} className="hover:underline">
              EN
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
