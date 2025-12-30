export default function ServicesEN() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Complex project management, digital transformation & PMI certifications
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Complex Project Management
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We support organizations in structuring, governing, and delivering
              complex, high-stakes projects involving multiple stakeholders,
              significant budgets, and strategic transformation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Agile & PMI® Standards Implementation
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Deployment of PMI® frameworks (PMBOK®, Agile Practice Guide),
              PMO setup, Agile transformation, and coaching of project managers
              and leadership teams.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              ERP & Digital Transformation
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Strategic support for ERP integration (Sage, Odoo, SAP),
              process digitalization, governance alignment, and change management
              adapted to African contexts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              International Certification Coaching
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              High-level preparation and coaching for PMP®, PMI-ACP® and Agile
              certifications, combining international standards with real-world
              project experience.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Let’s work together
        </h2>

        <p className="mb-10 text-lg text-slate-200">
          Contact us to discuss your project challenges or certification goals.
        </p>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Contact PLEIONES AFRICA
        </a>
      </section>

    </main>
  );
}
