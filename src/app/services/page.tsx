export default function ServicesPage() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO SERVICES */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Nos services & expertises
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10">
            Management de projets complexes, digitalisation et accompagnement
            aux certifications internationales PMP® & PMI-ACP®
          </p>

          <a
            href="https://wa.me/2250758881907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg
                       hover:scale-105 hover:bg-slate-100 transition-transform duration-300"
          >
            Échanger sur votre besoin
          </a>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Nos domaines d’expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bloc 1 */}
            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">
                Management de projets complexes IT
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Pilotage de projets stratégiques à forte complexité,
                gouvernance PMO, gestion des risques, budgets et parties
                prenantes selon les standards PMI®.
              </p>
            </div>

            {/* Bloc 2 */}
            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">
                Digitalisation & ERP
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Accompagnement des organisations dans la transformation digitale,
                déploiement et intégration de solutions ERP (Sage, Odoo, SAP),
                alignées sur les objectifs métier.
              </p>
            </div>

            {/* Bloc 3 */}
            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-4">
                Coaching & Certifications internationales
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Préparation, coaching et mentoring pour les certifications
                PMP®, PMI-ACP®, Agile & Scrum, avec une approche pédagogique
                orientée résultats et contexte africain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            À qui s’adressent nos services ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="font-semibold text-lg mb-3">Entreprises</h3>
              <p className="text-slate-700">
                PME, grandes entreprises et groupes en quête de performance
                projet et de transformation digitale maîtrisée.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="font-semibold text-lg mb-3">Institutions</h3>
              <p className="text-slate-700">
                Organisations publiques et parapubliques engagées dans des
                programmes complexes et structurants.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="font-semibold text-lg mb-3">
                Chefs de projets & cadres
              </h3>
              <p className="text-slate-700">
                Professionnels souhaitant renforcer leurs compétences et
                obtenir une certification reconnue à l’international.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* METHODE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Notre approche
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Nos interventions s’appuient sur les standards internationaux
            du PMI®, les méthodes Agile et hybrides, tout en intégrant les
            réalités opérationnelles et culturelles du contexte africain.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Diagnostic gratuit
        </h2>
        <p className="mb-10 text-lg text-slate-200">
          Échangeons sur vos enjeux projets, digitaux ou de certification.
        </p>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg
                     hover:scale-105 hover:bg-slate-100 transition-transform duration-300"
        >
          Contacter PLEIONES
        </a>
      </section>

    </main>
  );
}
