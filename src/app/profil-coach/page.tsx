export default function ProfilCoach() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Coach Serge N’GUE
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Expert senior en management de projets complexes • PMP® • PMI-ACP®
          </p>
        </div>
      </section>

      {/* PROFIL */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <p className="text-lg leading-relaxed text-slate-700">
            Coach Serge N’GUE est un expert senior en management de projets
            complexes, transformation digitale et gouvernance IT, avec plus de
            <strong> 20 années d’expérience professionnelle</strong> dans la
            conduite de projets à fort impact en Afrique de l’Ouest et dans des
            environnements multiculturels.
          </p>

          <p className="text-lg leading-relaxed text-slate-700">
            Il accompagne les dirigeants, DSI, cabinets de conseil et institutions
            publiques dans la mise en place de cadres de gouvernance projet,
            l’adoption des standards PMI®, et le développement de chefs de projets
            et d’équipes agiles à haute performance.
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Certifications internationales (PMI®)
          </h2>

          <div className="flex flex-wrap justify-center gap-12">

            {/* PMP */}
            <a
              href="https://www.credly.com/badges/b9398df3-949d-466b-9764-da8a571bc4f6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Certification PMP sur Credly"
              className="hover:scale-105 transition"
            >
              <img
                src="/badges/pmp.png"
                alt="Project Management Professional (PMP®) - PMI"
                width={180}
                height={180}
                className="rounded-xl shadow-lg"
              />
            </a>

            {/* PMI-ACP */}
            <a
              href="https://www.credly.com/badges/389ce8a0-9879-4bdf-9d0f-96edfd5e03b7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Certification PMI-ACP sur Credly"
              className="hover:scale-105 transition"
            >
              <img
                src="/badges/pmi-acp.png"
                alt="PMI Agile Certified Practitioner (PMI-ACP®)"
                width={180}
                height={180}
                className="rounded-xl shadow-lg"
              />
            </a>

          </div>

          <p className="mt-10 text-slate-600 text-sm">
            Badges officiels délivrés par le Project Management Institute (PMI®) – vérifiables sur Credly
          </p>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center">
            Positionnement & crédibilité internationale
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Coach Serge N’GUE intervient sur des projets complexes à forts enjeux,
            impliquant des budgets significatifs, des transformations
            organisationnelles et des environnements multi-acteurs.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Il est reconnu pour sa capacité à combiner les meilleures pratiques
            internationales (PMI®, Agile, PMO) avec les réalités opérationnelles
            africaines, garantissant des résultats mesurables et durables.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Discutons de vos projets
        </h2>

        <p className="mb-10 text-lg text-slate-200">
          Gouvernance projet • Transformation agile • Certifications PMP® & PMI-ACP®
        </p>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Contacter Coach Serge N’GUE
        </a>
      </section>

      {/* SEO */}
      <section className="hidden">
        <h2>Coach certifié PMP et PMI-ACP en Afrique</h2>
        <p>
          Coach Serge N’GUE est un expert certifié PMP® et PMI-ACP® spécialisé en
          management de projets complexes, gouvernance projet et agilité en Afrique.
        </p>
      </section>

    </main>
  );
}
