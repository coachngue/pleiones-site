"use client";

import Script from "next/script";

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* Script Credly (UNE SEULE FOIS) */}
      <Script
        src="https://cdn.credly.com/assets/utilities/embed.js"
        strategy="afterInteractive"
      />

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center">
          <img
            src="/pleiones-logo.png"
            alt="PLEIONES AFRICA"
            className="h-20 md:h-24 mx-auto mb-8 object-contain"
          />

          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            Management de projets complexes • Agile • ERP
          </h1>

          <p className="text-lg md:text-xl mb-10 text-slate-200">
            Formations et accompagnement aux certifications internationales PMI®
          </p>

          <a
            href="https://wa.me/2250758881907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg
                       hover:scale-105 hover:bg-slate-100 transition-transform duration-300"
          >
            Contacter via WhatsApp
          </a>
        </div>
      </section>

      {/* BADGES CERTIFICATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Certifications internationales reconnues
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-12 items-center">

            {/* PMP */}
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="b9398df3-949d-466b-9764-da8a571bc4f6"
              data-share-badge-host="https://www.credly.com"
            ></div>

            {/* PMI-ACP */}
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="389ce8a0-9879-4bdf-9d0f-96edfd5e03b7"
              data-share-badge-host="https://www.credly.com"
            ></div>

          </div>

          <p className="mt-8 text-slate-600 text-lg">
            Certifications délivrées par le <strong>Project Management Institute (PMI®)</strong>
          </p>
        </div>
      </section>

      {/* A PROPOS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              À propos de PLEIONES AFRICA
            </h2>
            <p className="leading-relaxed text-slate-700 text-lg">
              PLEIONES AFRICA est un cabinet de conseil spécialisé en management
              de projets complexes, transformation digitale et accompagnement
              aux certifications internationales PMI®.
              <br /><br />
              Nous accompagnons entreprises, institutions et dirigeants en
              Afrique de l’Ouest, avec une approche pragmatique, mesurable
              et alignée sur les standards internationaux.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-sm">
            <ul className="space-y-4 text-lg">
              <li>✔️ +20 ans d’expérience en projets IT</li>
              <li>✔️ Projets complexes & ERP (Sage, Odoo, SAP)</li>
              <li>✔️ Budgets multi-millions & gouvernance stratégique</li>
              <li>✔️ Coaching exécutif & formations certifiantes PMI®</li>
            </ul>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
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
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Nos missions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">
                Formation & Certification
              </h3>
              <p className="text-slate-700">
                PMP®, PMI-ACP®, Agile & Scrum
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">
                Digitalisation & Projets IT
              </h3>
              <p className="text-slate-700">
                ERP, transformation digitale, projets complexes
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8 hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3">
                Gouvernance & PMO
              </h3>
              <p className="text-slate-700">
                Pilotage stratégique, méthodes hybrides & Agile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Diagnostic gratuit
        </h2>

        <p className="mb-10 text-lg text-slate-200">
          Discutons de votre projet ou de votre parcours de certification.
        </p>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-slate-800 font-semibold px-10 py-4 rounded-2xl shadow-lg
                     hover:scale-105 hover:bg-slate-100 transition-transform duration-300"
        >
          Prendre rendez-vous sur WhatsApp
        </a>
      </section>

      {/* SEO INVISIBLE */}
      <section className="hidden">
        <h2>Cabinet de management de projets complexes en Afrique</h2>
        <p>
          PLEIONES AFRICA est un cabinet de conseil spécialisé en management
          de projets complexes, transformation digitale, ERP et certifications
          internationales PMI (PMP®, PMI-ACP®, Agile & Scrum).
        </p>
      </section>

    </main>
  );
}
