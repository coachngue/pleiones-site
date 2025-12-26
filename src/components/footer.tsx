"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* COLONNE 1 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            PLEIONES
          </h3>
          <p className="text-sm leading-relaxed">
            Cabinet de management de projets complexes, digitalisation
            et accompagnement aux certifications internationales.
          </p>
          <p className="mt-3 text-sm font-medium text-slate-300">
            PMP® • PMI-ACP® • Agile & Scrum
          </p>
        </div>

        {/* COLONNE 2 */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Accueil</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
          </ul>
        </div>

        {/* COLONNE 3 */}
        <div>
          <h4 className="font-semibold text-white mb-3">
            Coordonnées
          </h4>
          <p className="text-sm">Abidjan – Côte d’Ivoire</p>
          <p className="text-sm mt-2">
            WhatsApp :
            <a
              href="https://wa.me/2250758881907"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1"
            >
              +225 07 58 88 19 07
            </a>
          </p>
        </div>

      </div>

      {/* BAS DE PAGE */}
      <div className="border-t border-slate-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} PLEIONES — PMP® & PMI-ACP® — Tous droits réservés
      </div>
    </footer>
  );
}
