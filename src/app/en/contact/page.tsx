import Link from "next/link";

export default function ContactEN() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contact PLEIONES AFRICA
          </h1>
          <p className="text-lg md:text-xl text-slate-200">
            Let’s discuss your projects, governance challenges or certification pathways
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          {/* INTRO */}
          <p className="text-lg leading-relaxed text-slate-700 text-center">
            PLEIONES AFRICA supports executives, project managers, organizations and
            institutions in mastering complex projects, strengthening governance
            frameworks and achieving sustainable performance aligned with
            international PMI® standards.
          </p>

          {/* CONTACT DETAILS */}
          <div className="grid md:grid-cols-2 gap-8 text-lg">

            <div className="bg-slate-50 p-8 rounded-2xl border">
              <h2 className="text-xl font-semibold mb-4">
                Contact Details
              </h2>

              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>Location:</strong> Abidjan – Côte d’Ivoire
                </li>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/2250758881907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +225 07 58 88 19 07
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:serge.koffi@pleionesafrica.com"
                    className="text-blue-600 hover:underline"
                  >
                    serge.koffi@pleionesafrica.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border">
              <h2 className="text-xl font-semibold mb-4">
                Areas of Engagement
              </h2>

              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Complex project governance & PMO structuring</li>
                <li>Agile & hybrid transformation</li>
                <li>PMP® & PMI-ACP® certification coaching</li>
                <li>Executive & project leadership advisory</li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center pt-10">
            <Link
              href="https://wa.me/2250758881907"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-slate-800 text-white font-semibold px-10 py-4 rounded-2xl shadow-lg hover:bg-slate-900 transition"
            >
              Schedule a conversation on WhatsApp
            </Link>
          </div>

        </div>
      </section>

      {/* SEO (hidden) */}
      <section className="hidden">
        <h2>Contact PLEIONES AFRICA – Project Management & PMI Certifications</h2>
        <p>
          Contact PLEIONES AFRICA for complex project management consulting,
          agile transformation and PMP® / PMI-ACP® certification coaching
          across Africa.
        </p>
      </section>

    </main>
  );
}
