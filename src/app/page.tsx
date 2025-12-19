export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/pleiones-logo.png"
              alt="PLEIONES"
              className="h-20 md:h-24 object-contain"
            />
          </div>
          <p className="text-xl mb-6">
            Management de projets complexes • Agile • ERP • Certifications PMI
          </p>
          <a
            href="https://wa.me/2250758881907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-800 font-semibold px-8 py-4 rounded-2xl shadow"
          >
            Contacter via WhatsApp
          </a>
        </div>
      </section>

      {/* A PROPOS */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">À propos</h2>
            <p className="leading-relaxed">
              PLEIONES est un cabinet spécialisé en management de projets IT,
              digitalisation et accompagnement aux certifications internationales
              (PMP®, PMI-ACP®, Agile & Scrum), avec plus de 20 ans d’expérience en Afrique de l’Ouest.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <ul className="space-y-3">
              <li>✔️ +20 ans d’expérience projets IT</li>
              <li>✔️ Budgets de projets gérés jusqu’à plus d’un million de dollars</li>
              <li>✔️ Formations, coaching et accompagnement certifiants</li>
            </ul>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Expertise terrain",
              "Standards internationaux",
              "Contexte africain",
              "Résultats mesurables",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow p-6 text-center"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Nos missions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl shadow p-6">
              <h3 className="font-semibold mb-2">Formation & Certification</h3>
              <p>PMP®, PMI-ACP®, Agile & Scrum</p>
            </div>
            <div className="bg-slate-50 rounded-2xl shadow p-6">
              <h3 className="font-semibold mb-2">Digitalisation & Projets IT</h3>
              <p>ERP, transformation digitale, projets complexes</p>
            </div>
            <div className="bg-slate-50 rounded-2xl shadow p-6">
              <h3 className="font-semibold mb-2">
                Développement logiciel & gouvernance
              </h3>
              <p>Logiciels métiers, PMO, Agile Office</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPEL A L’ACTION */}
      <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Diagnostic gratuit</h2>
        <p className="mb-6">
          Discutons de votre projet ou de votre parcours de certification.
        </p>
        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-800 font-semibold px-8 py-4 rounded-2xl"
        >
          Prendre rendez-vous sur WhatsApp
        </a>
      </section>
    </div>
  );
}
