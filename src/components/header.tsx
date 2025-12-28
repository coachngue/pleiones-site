"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `font-medium transition ${
      pathname === path
        ? "text-white underline"
        : "text-slate-200 hover:text-white"
    }`;

  return (
    <header className="bg-slate-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="font-bold text-lg text-white">
          PLEIONES
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-4 text-slate-300">
          <Link href="/" className={linkClass("/")}>
            Accueil
          </Link>

          <span className="opacity-40">|</span>

          <Link href="/profil-coach" className={linkClass("/profil-coach")}>
            Profil du coach
          </Link>

          <span className="opacity-40">|</span>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}
