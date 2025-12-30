export default function ServicesEN() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-lg text-slate-200">
            Project Management • Agile Transformation • ERP • Coaching
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="p-8 border rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Complex Project Management
            </h2>
            <p className="text-slate-700">
              Governance, structuring, and execution of complex and
              multi-stakeholder projects aligned with PMI® standards.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Agile & Digital Transformation
            </h2>
            <p className="text-slate-700">
              Agile adoption, Scrum & PMI-ACP® coaching, organizational
              transformation, and delivery optimization.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              ERP & Information Systems
            </h2>
            <p className="text-slate-700">
              ERP selection, implementation, and governance (Sage, Odoo, SAP),
              aligned with business strategy.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">
              Coaching & Certification
            </h2>
            <p className="text-slate-700">
              PMP®, PMI-ACP® preparation, executive coaching, PMO setup,
              and capability building for project leaders.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Let’s work together
        </h2>
        <p className="text-lg text-slate-300 mb-10">
          Discuss your project challenges and transformation goals.
        </p>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-white text-slate-900 font-semibold px-10 py-4 rounded-2xl hover:scale-105 transition"
        >
          Contact PLEIONES AFRICA
        </a>
      </section>

    </main>
  );
}
