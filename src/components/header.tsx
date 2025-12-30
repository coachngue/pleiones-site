"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");

  const base = isEN ? "/en" : "";

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href={`${base}/`} className="text-xl font-bold text-slate-900">
          PLEIONES
        </Link>

        {/* NAVIGATION */}
        <nav className="flex gap-6 text-slate-700 font-medium">
          <Link href={`${base}/`} className="hover:text-slate-900">
            {isEN ? "Home" : "Accueil"}
          </Link>

          <Link href={`${base}/profil-coach`} className="hover:text-slate-900">
            {isEN ? "Coach Profile" : "Profil du coach"}
          </Link>

          <Link href={`${base}/services`} className="hover:text-slate-900">
            {isEN ? "Services" : "Services"}
          </Link>

          <Link href={`${base}/contact`} className="hover:text-slate-900">
            {isEN ? "Contact" : "Contact"}
          </Link>
        </nav>

        {/* SWITCH LANGUE */}
        <div className="text-sm">
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
