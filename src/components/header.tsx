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
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        
        {/* Brand */}
        <div>
          <div className="font-bold text-lg">PLEIONES</div>
          <div className="text-xs text-slate-300">
            PMP® • PMI-ACP® • Agile • ERP
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          <Link href="/" className={linkClass("/")}>Accueil</Link>
          <Link href="/profil-coach" className={linkClass("/profil-coach")}>
            Profil du coach
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </nav>

      </div>
    </header>
  );
}
