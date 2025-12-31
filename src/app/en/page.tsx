import Link from "next/link";

export default function EnHomePage() {
  return (
    <main className="flex flex-col">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            PLEIONES AFRICA
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Consulting firm specialized in complex project management,
            digital transformation and international PMI certifications
          </p>
          <p className="mt-4 text-slate-300">
            International expertise, African realities
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-slate-700 text-lg leading-relaxed">
            PLEIONES AFRICA supports executives, project managers,
            organizations and institutions in mastering complex projects,
            strengthening governance, and achieving sustainable performance
            aligned with international standards.
          </p>
        </div>
      </section>

      {/* KEY FIGURES */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-slate-800">100+</p>
            <p className="text-slate-600 mt-2">
              Trainings & coaching sessions
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-slate-800">$1M+</p>
            <p className="text-slate-600 mt-2">
              Project budgets delivered
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-slate-800">20+</p>
            <p className="text-slate-600 mt-2">
              Years of experience
            </p>
          </div>

          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="text-3xl font-bold text-slate-800">PMI®</p>
            <p className="text-slate-600 mt-2">
              PMP® & PMI-ACP® certified
            </p>
          </div>

        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Project Governance
              </h3>
              <p className="text-slate-600">
                Structuring PMOs, aligning strategy, governance frameworks
                and performance measurement based on PMI® standards.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Agile & Transformation
              </h3>
              <p className="text-slate-600">
                Agile transformation, Scrum and hybrid models adapted
                to complex environments and African contexts.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Coaching & Certifications
              </h3>
              <p className="text-slate-600">
                PMP®, PMI-ACP®, leadership coaching and capability
                development for professionals and teams.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let’s discuss your challenges
          </h2>
          <p className="text-slate-300 mb-8">
            Contact us to explore governance, transformation
            or professional certification pathways.
          </p>
          <Link
            href="/en/contact"
            className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition"
          >
            Contact PLEIONES AFRICA
          </Link>
        </div>
      </section>

    </main>
  );
}
