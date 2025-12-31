import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            PLEIONES AFRICA
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Management de projets complexes • Agile • ERP
          </p>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="border rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-slate-800">100+</p>
            <p className="text-slate-600 mt-2">
              Formations & coachings
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-slate-800">$1M+</p>
            <p className="text-slate-600 mt-2">
              Budgets de projets pilotés
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-slate-800">20+</p>
            <p className="text-slate-600 mt-2">
              Années d’expérience
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-slate-800">PMI®</p>
            <p className="text-slate-600 mt-2">
              PMP® & PMI-ACP® certifié
            </p>
          </div>

        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Expertise internationale, réalités africaines
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            PLEIONES AFRICA accompagne dirigeants, chefs de projets,
            organisations et institutions dans la maîtrise des projets
            complexes, le renforcement de la gouvernance et l’atteinte
            de performances durables alignées sur les standards internationaux.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Nos services clés
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Gouvernance de projets
              </h3>
              <p className="text-slate-700">
                Structuration PMO, cadres de gouvernance et pilotage
                stratégique selon les standards PMI®.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Agile & transformation
              </h3>
              <p className="text-slate-700">
                Transformation Agile, Scrum et modèles hybrides adaptés
                aux environnements complexes.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Coaching & certifications
              </h3>
              <p className="text-slate-700">
                PMP®, PMI-ACP®, leadership projet et développement
                des compétences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Parlons de vos enjeux
        </h2>
        <p className="mb-10 text-lg text-slate-200">
          Gouvernance, transformation ou parcours de certification
        </p>

        <Link
          href="/contact"
          className="inline-block bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Contacter PLEIONES AFRICA
        </Link>
      </section>

    </main>
  );
}
