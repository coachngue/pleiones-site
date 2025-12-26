"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `font-medium ${
      pathname === path
        ? "text-slate-900 underline"
        : "text-slate-700 hover:text-slate-900"
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-slate-800">PLEIONES</span>

        <nav className="space-x-6">
          <a href="/" className={linkClass("/")}>
            Accueil
          </a>
          <a href="/contact" className={linkClass("/contact")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
