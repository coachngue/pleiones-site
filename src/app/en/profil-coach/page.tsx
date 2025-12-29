export default function CoachProfileEN() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Coach Serge N’GUE
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Senior Project Management Expert • PMP® • PMI-ACP®
          </p>
        </div>
      </section>

      {/* PROFILE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-10">

          <p className="text-lg leading-relaxed text-slate-700">
            Coach Serge N’GUE is a senior expert in complex project management,
            digital transformation, and IT governance, with more than
            <strong> 20 years of professional experience</strong> delivering
            high-impact projects across West Africa in multicultural and
            international environments.
          </p>

          <p className="text-lg leading-relaxed text-slate-700">
            He supports executive leaders, CIOs, consulting firms, and public
            institutions in strengthening project governance, implementing
            PMI® standards, and developing high-performing project managers
            and agile teams.
          </p>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            International Certifications
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-lg">
            <li className="bg-white p-6 rounded-2xl border">
              ✔️ PMP® – Project Management Professional (PMI)
            </li>
            <li className="bg-white p-6 rounded-2xl border">
              ✔️ PMI-ACP® – Agile Certified Practitioner (PMI)
            </li>
            <li className="bg-white p-6 rounded-2xl border">
              ✔️ Advanced Agile & Scrum Practices
            </li>
            <li className="bg-white p-6 rounded-2xl border">
              ✔️ ERP & Digital Transformation (Sage, Odoo, SAP)
            </li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center">
            Experience & Positioning
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Coach Serge N’GUE has led and advised complex, multi-stakeholder
            projects involving significant budgets, organizational change,
            and strategic transformation. His approach focuses on governance,
            measurable results, and sustainable capability building.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            He is recognized for bridging international best practices
            (PMI®, Agile, PMO frameworks) with African operational realities,
            ensuring both performance and contextual relevance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Let’s discuss your projects
        </h2>

        <p className="mb-10 text-lg text-slate-200">
          Schedule a conversation to explore project governance, agile
          transformation, or professional certification pathways.
        </p>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          Contact Coach Serge N’GUE
        </a>
      </section>

      {/* SEO */}
      <section className="hidden">
        <h2>Senior PMP and PMI-ACP Coach in Africa</h2>
        <p>
          Coach Serge N’GUE is a PMP® and PMI-ACP® certified expert specializing
          in complex project management, agile transformation, and project
          governance across Africa.
        </p>
      </section>

    </main>
  );
}
