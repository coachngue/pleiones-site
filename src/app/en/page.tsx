export default function HomeEN() {
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
            Complex Project Management • Agile • ERP
          </h1>

          <p className="text-lg md:text-xl mb-10 text-slate-200">
            Training & coaching for PMI® certifications
          </p>

          <a
            href="https://wa.me/2250758881907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg
                       hover:scale-105 hover:bg-slate-100 transition-transform duration-300"
          >
            Contact via WhatsApp
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About PLEIONES</h2>
            <p className="leading-relaxed text-slate-700 text-lg">
              PLEIONES is a consulting firm specialized in complex IT project
              management, digital transformation and international certifications
              coaching (PMP®, PMI-ACP®, Agile & Scrum), with over 20 years of
              experience in West Africa.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-10 shadow-sm">
            <ul className="space-y-4 text-lg">
              <li>✔️ 20+ years of IT project experience</li>
              <li>✔️ Complex projects & ERP (Sage, Odoo, SAP)</li>
              <li>✔️ PMP® & PMI-ACP® certified coach</li>
              <li>✔️ Budgets managed up to multi-million USD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why choose us?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Field expertise",
              "International standards",
              "African context mastery",
              "Measurable results",
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

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">
                Training & Certification
              </h3>
              <p className="text-slate-700">
                PMP®, PMI-ACP®, Agile & Scrum
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">
                Digital Transformation & IT Projects
              </h3>
              <p className="text-slate-700">
                ERP, digitalization, complex programs
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">
                Governance & PMO
              </h3>
              <p className="text-slate-700">
                Project governance, Agile & hybrid methods
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
