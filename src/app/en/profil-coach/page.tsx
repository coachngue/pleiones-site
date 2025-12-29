"use client";

import Script from "next/script";

export default function CoachProfileEN() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">

      {/* Credly script – SAFE for production */}
      <Script
        src="https://cdn.credly.com/assets/utilities/embed.js"
        strategy="afterInteractive"
      />

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
            high-impact projects across West Africa.
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
      <section className="py-24 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-14 text-center">
            International Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-12 justify-items-center">

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
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold text-center">
            Experience & Positioning
          </h2>

          <p className="text-lg text-slate-700">
            Coach Serge N’GUE bridges international PMI® standards
            with African operational realities to deliver measurable,
            sustainable results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Let’s discuss your projects
        </h2>

        <a
          href="https://wa.me/2250758881907"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-white text-slate-800 px-10 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Contact Coach Serge N’GUE
        </a>
      </section>
    </main>
  );
}
