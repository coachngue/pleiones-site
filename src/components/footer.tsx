export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

        {/* COLONNE 1 : IDENTITÉ */}
        <div>
          <h3 className="text-xl font-bold mb-4">PLEIONES</h3>
          <p className="text-slate-300 leading-relaxed">
            Cabinet de management de projets complexes, digitalisation et
            accompagnement aux certifications internationales.
          </p>
          <p className="mt-4 text-slate-400 font-medium">
            PMP® • PMI-ACP® • Agile & Scrum
          </p>
        </div>

        {/* COLONNE 2 : NAVIGATION */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Accueil
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/mentions-legales" className="hover:underline">
                Mentions légales
              </a>
            </li>
          </ul>
        </div>

        {/* COLONNE 3 : COORDONNÉES */}
        <div>
          <h4 className="font-semibold mb-4">Coordonnées</h4>

          <p className="text-slate-300 mb-2">
            Abidjan – Côte d’Ivoire
          </p>

          <p className="mb-2">
            <a
              href="https://wa.me/2250758881907"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              WhatsApp : +225 07 58 88 19 07
            </a>
          </p>

          <p>
            <a
              href="mailto:contact@pleionesafrica.com"
              className="hover:underline"
            >
              Email : contact@pleionesafrica.com
            </a>
          </p>
        </div>

      </div>

      {/* BAS DE PAGE */}
      <div className="border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} PLEIONES — PMP® & PMI-ACP® — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
