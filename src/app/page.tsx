export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <img
            src="/pleiones-logo.png"
            alt="PLEIONES"
            className="h-20 md:h-24 mx-auto mb-8 object-contain"
          />

          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            Management de projets complexes • Agile • ERP
          </h1>

          <p className="text-lg md:text-xl mb-10 text-slate-200">
            Formations et accompagnement aux certifications PMI®
          </p>

          <a
            href="https://wa.me/2250758881907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg
                       hover:scale-105 hover:bg-slate-100 transition-transform duration-300"
          >
            Contacter via WhatsApp
          </a>
        </div>
      </section>

      {/* BADGES CERTIFICATIONS */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-8">
            Certifications internationales reconnues
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex flex-col items-center">
              <img
                src="/badges/pmp.png"
                alt="PMP® – Project Management Professional"
                className="h-40 w-auto"
              />
              <p className="mt-4 font-semibold text-slate-700">
                PMP® – Project Management Professional
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="/badges/pmi-acp.png"
                alt="PMI-ACP® – Agile Certified Practitioner"
                className="h-40 w-auto"
              />
              <p className="mt-4 font-semibold text-slate-700">
                PMI-ACP® – Agile Certified Practitioner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARATEUR */}
      <div className="h-16 bg-gradient-to-b from-white to-slate-100"></div>

      {/* A PROPOS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">À propos de PLEIONES</h2>
            <p className="leading-relaxed text-slate-700 text-lg">
              PLEIONES est un cabinet spécialisé en management de projets IT,
              digitalisation et accompagnement aux certifications internationales
              (PMP®, PMI-ACP®, Agile & Scrum), avec plus de 20 ans d’expérience
              en Afrique de l’Ouest.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10 shadow-sm">
            <ul className="space-y-4 text-lg">
              <li>✔️ +20 ans d’expérience projets IT</li>
              <li>✔️ Projets complexes & ERP (Sage, Odoo, SAP)</li>
              <li>✔️ Budgets gérés jusqu’à plusieurs centaines de milliers d’euros</li>
              <li>✔️ Coaching & formations certifiantes PMI®</li>
            </ul>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Pourquoi nous choisir ?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Expertise terrain",
              "Standards internationaux PMI®",
              "Contexte africain maîtrisé",
              "Résultats mesurables",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Nos missions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">
                Formation & Certification
              </h3>
              <p className="text-slate-700">
                PMP®, PMI-ACP®, Agile & Scrum
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">
                Digitalisation & Projets IT
              </h3>
              <p className="text-slate-700">
                ERP, transformation digitale, projets complexes
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">
                Gouvernance & PMO
              </h3>
              <p className="text-slate-700">
                Pilotage, méthodes Agile & hybrides
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Diagnostic gratuit
        </h2>

        <p className="mb-10 text-lg text-slate-200">
          Discutons de votre projet ou de votre parcours de certification.
        </p>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg
                     hover:scale-105 hover:bg-slate-100 transition-transform duration-300"
        >
          Prendre rendez-vous sur WhatsApp
        </a>
      </section>

      {/* SEO TEXTE */}
      <section className="hidden">
        <h2>Cabinet de management de projets complexes en Afrique</h2>
        <p>
          PLEIONES est un cabinet de conseil spécialisé en management de projets
          complexes, transformation digitale, ERP et accompagnement aux
          certifications internationales PMI (PMP®, PMI-ACP®, Agile & Scrum).
        </p>
      </section>

    </main>
  );
}
