export default function ServicesPage() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Nos services
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto">
            Des solutions professionnelles en management de projets complexes,
            transformation digitale et accompagnement aux certifications
            internationales (PMP® & PMI-ACP®).
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">

            {/* SERVICE 1 */}
            <div className="border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-4">
                Formation & Certifications PMI®
              </h2>
              <p className="text-slate-700 mb-4">
                Préparation professionnelle aux certifications internationales :
                <strong> PMP®</strong>, <strong>PMI-ACP®</strong>,
                Agile & Scrum.
              </p>
              <ul className="text-slate-700 space-y-2">
                <li>✔️ Formations structurées et orientées examen</li>
                <li>✔️ Coaching individuel et collectif</li>
                <li>✔️ Simulations & cas pratiques</li>
              </ul>
            </div>

            {/* SERVICE 2 */}
            <div className="border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-4">
                Management de projets complexes
              </h2>
              <p className="text-slate-700 mb-4">
                Accompagnement des organisations dans la conduite de projets
                IT, ERP et de transformation digitale à forts enjeux.
              </p>
              <ul className="text-slate-700 space-y-2">
                <li>✔️ Pilotage de projets stratégiques</li>
                <li>✔️ Méthodes Agile, hybrides & PMI</li>
                <li>✔️ Gestion des risques & parties prenantes</li>
              </ul>
            </div>

            {/* SERVICE 3 */}
            <div className="border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold mb-4">
                PMO & Gouvernance
              </h2>
              <p className="text-slate-700 mb-4">
                Mise en place et structuration de dispositifs de gouvernance
                projet adaptés au contexte africain et aux standards
                internationaux.
              </p>
              <ul className="text-slate-700 space-y-2">
                <li>✔️ Création et optimisation de PMO</li>
                <li>✔️ Tableaux de bord & indicateurs</li>
                <li>✔️ Alignement stratégie – exécution</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* A QUI S’ADRESSE */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            À qui s’adressent nos services ?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Directions Générales",
              "DSI & Responsables IT",
              "Cabinets de conseil",
              "Institutions & Organisations"
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Parlons de votre projet
        </h2>
        <p className="text-lg text-slate-200 mb-10 max-w-2xl mx-auto">
          Vous avez un projet complexe, un besoin de structuration ou un objectif
          de certification internationale ? Discutons-en.
        </p>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg
                     hover:scale-105 hover:bg-slate-100 transition-transform duration-300"
        >
          Échanger sur WhatsApp
        </a>
      </section>
{/* SEO TEXTE – lisible par Google */}
<section className="hidden">
  <h2>Cabinet de management de projets complexes en Afrique</h2>

  <p>
    PLEIONES est un cabinet de conseil spécialisé en management de projets
    complexes, transformation digitale, PMO et accompagnement aux
    certifications internationales PMP® et PMI-ACP®.
  </p>

  <p>
    Nous accompagnons les entreprises, institutions et organisations en
    Afrique de l’Ouest, notamment en Côte d’Ivoire, dans la structuration,
    la gouvernance et la réussite de leurs projets stratégiques et IT.
  </p>

  <p>
    Nos services s’adressent aux directions générales, DSI, cabinets de
    conseil et professionnels souhaitant se conformer aux standards
    internationaux du PMI et des méthodes Agile.
  </p>
</section>

    </main>
  );
}
