export default function Contact() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO CONTACT */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-lg text-slate-200">
            Parlons de votre projet, de votre transformation digitale
            ou de votre parcours de certification.
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          {/* PRESENTATION */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Cabinet PLEIONES
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              Cabinet spécialisé en management de projets complexes,
              digitalisation et accompagnement aux certifications
              internationales <strong>PMP®</strong> et <strong>PMI-ACP®</strong>.
            </p>
          </div>

          {/* COORDONNEES */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                📍 Localisation
              </h3>
              <p>Abidjan – Côte d’Ivoire</p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                📞 Contact direct
              </h3>
              <p className="mb-2">
                WhatsApp / Téléphone :
              </p>
              <a
                href="https://wa.me/2250758881907"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-slate-800 underline"
              >
                +225 07 58 88 19 07
              </a>
            </div>

          </div>

          {/* CERTIFICATIONS */}
          <div className="bg-slate-100 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Certifications professionnelles
            </h3>
            <p className="text-lg font-medium">
              PMP® • PMI-ACP® • Agile & Scrum
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <a
              href="https://wa.me/2250758881907"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-slate-800 text-white font-semibold px-10 py-4 rounded-2xl shadow-lg
                         hover:bg-slate-900 transition"
            >
              Contacter via WhatsApp
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
