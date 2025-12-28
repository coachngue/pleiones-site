"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");

  return (
    <footer className="bg-slate-900 text-slate-300 py-14 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3 text-sm">

        {/* Bloc 1 – Présentation */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            PLEIONES AFRICA
          </h3>
          <p className="leading-relaxed">
            {isEN
              ? "Consulting firm specialized in complex project management, digital transformation, ERP and international PMI certifications."
              : "Cabinet de conseil spécialisé en management de projets complexes, transformation digitale, ERP et certifications internationales PMI."}
          </p>
          <p className="mt-3 font-medium text-slate-400">
            PMP® • PMI-ACP® • Agile & Scrum
          </p>
        </div>

        {/* Bloc 2 – Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {isEN ? "Navigation" : "Navigation"}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href={isEN ? "/en" : "/"} className="hover:text-white">
                {isEN ? "Home" : "Accueil"}
              </Link>
            </li>
            <li>
              <Link href={isEN ? "/en/coach-profile" : "/profil-coach"} className="hover:text-white">
                {isEN ? "Coach Profile" : "Profil du coach"}
              </Link>
            </li>
            <li>
              <Link href={isEN ? "/en/contact" : "/contact"} className="hover:text-white">
                {isEN ? "Contact" : "Contact"}
              </Link>
            </li>
            <li>
              <Link href={isEN ? "/en/legal-notice" : "/mentions-legales"} className="hover:text-white">
                {isEN ? "Legal Notice" : "Mentions légales"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Bloc 3 – Coordonnées */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {isEN ? "Contact details" : "Coordonnées"}
          </h3>
          <p>Abidjan – Côte d’Ivoire</p>
          <p className="mt-2">
            WhatsApp :{" "}
            <a
              href="https://wa.me/2250758881907"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              +225 07 58 88 19 07
            </a>
          </p>
          <p className="mt-2">
            Email :{" "}
            <a
              href="mailto:serge.koffi@pleionesafrica.com"
              className="hover:text-white"
            >
              serge.koffi@pleionesafrica.com
            </a>
          </p>
        </div>

      </div>

      {/* Bas de page */}
      <div className="text-center text-xs text-slate-500 mt-12 border-t border-slate-700 pt-6">
        © 2025 PLEIONES AFRICA — PMP® & PMI-ACP® —{" "}
        {isEN ? "All rights reserved" : "Tous droits réservés"}
      </div>
    </footer>
  );
}
