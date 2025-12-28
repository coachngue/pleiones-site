export default function ProfilCoach() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO PROFIL */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Coach Serge N’GUE
          </h1>
          <p className="text-xl text-slate-200 mb-6">
            Expert en management de projets complexes • PMP® & PMI-ACP®
          </p>

          <a
            href="https://wa.me/2250758881907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-800 font-semibold px-8 py-4 rounded-2xl shadow hover:bg-slate-100 transition"
          >
            Contacter le coach
          </a>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Profil professionnel</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Serge N’GUE est un expert en management de projets complexes
              avec plus de <strong>20 ans d’expérience</strong> dans la conduite
              de projets IT, ERP et de transformation digitale en
              <strong> Afrique de l’Ouest</strong>.
            </p>

            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Il accompagne entreprises, institutions et professionnels
              dans la structuration de leurs projets et la réussite de leurs
              certifications internationales PMI.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Certifications clés
            </h3>
            <ul className="space-y-3 text-lg">
              <li>✔️ PMP® – Project Management Professional</li>
              <li>✔️ PMI-ACP® – Agile Certified Practitioner</li>
              <li>✔️ Scrum & méthodes Agiles</li>
              <li>✔️ Gouvernance & PMO</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Expérience & expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl mb-3">
                Projets IT & ERP
              </h3>
              <p className="text-slate-700">
                Pilotage de projets ERP (Sage, Odoo, SAP), intégration
                de systèmes d’information et transformation digitale.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl mb-3">
                Projets complexes
              </h3>
              <p className="text-slate-700">
                Gestion de projets à forts enjeux, multi-acteurs,
                budgets élevés et contextes institutionnels.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl mb-3">
                Coaching & formation
              </h3>
              <p className="text-slate-700">
                Préparation aux certifications PMP®, PMI-ACP®,
                accompagnement Agile et montée en compétence des équipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE GEOGRAPHIQUE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Zone d’intervention
          </h2>
          <p className="text-lg text-slate-700">
            Côte d’Ivoire • Afrique de l’Ouest • Missions internationales
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Discutons de votre projet
        </h2>
        <p className="mb-8 text-slate-200">
          Coaching, formation ou accompagnement stratégique
        </p>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-800 font-semibold px-8 py-4 rounded-2xl"
        >
          Échanger avec le coach
        </a>
      </section>

      {/* SEO TEXTE */}
      <section className="hidden">
        <h2>Coach PMP et PMI-ACP en Afrique</h2>
        <p>
          Coach Serge N’GUE est certifié PMP® et PMI-ACP®, spécialiste
          du management de projets complexes, de la transformation digitale
          et des méthodes Agile en Afrique de l’Ouest.
        </p>
      </section>

    </main>
  );
}
