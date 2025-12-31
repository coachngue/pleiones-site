"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isEN = pathname.startsWith("/en");

  // Normalisation des chemins
  const frPath = isEN ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enPath = isEN ? pathname : `/en${pathname === "/" ? "" : pathname}`;

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href={isEN ? "/en" : "/"} className="text-xl font-bold text-slate-900">
          PLEIONES
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-2 text-slate-700 font-medium">
          <Link href={isEN ? "/en" : "/"} className="hover:text-slate-900">
            {isEN ? "Home" : "Accueil"}
          </Link>
          <span>•</span>

          <Link href={isEN ? "/en/profil-coach" : "/profil-coach"} className="hover:text-slate-900">
            {isEN ? "Coach Profile" : "Profil du coach"}
          </Link>
          <span>•</span>

          <Link href={isEN ? "/en/services" : "/services"} className="hover:text-slate-900">
            Services
          </Link>
          <span>•</span>

          <Link href={isEN ? "/en/contact" : "/contact"} className="hover:text-slate-900">
            Contact
          </Link>
        </nav>

        {/* LANG SWITCH */}
        <div className="text-sm font-semibold">
          {isEN ? (
            <Link href={frPath} className="hover:underline">
              FR
            </Link>
          ) : (
            <Link href={enPath} className="hover:underline">
              EN
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
