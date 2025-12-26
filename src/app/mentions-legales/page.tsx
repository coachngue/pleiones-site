export default function MentionsLegales() {
  return (
    <main className="bg-slate-50 text-slate-900 py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Mentions légales
        </h1>

        {/* IDENTITÉ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Éditeur du site</h2>
          <p className="leading-relaxed text-slate-700">
            <strong>PLEIONES</strong><br />
            Cabinet de management de projets complexes, digitalisation et
            accompagnement aux certifications internationales.<br /><br />

            <strong>Responsable :</strong><br />
            Coach Serge N’GUE<br />
            Consultant senior – Chef de projet IT certifié<br />
            <strong>PMP® – PMI-ACP® – Scrum Master</strong>
          </p>
        </section>

        {/* LOCALISATION */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Adresse</h2>
          <p className="text-slate-700">
            Abidjan – Côte d’Ivoire
          </p>
        </section>

        {/* CONTACT */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="text-slate-700">
            Téléphone / WhatsApp :{" "}
            <a
              href="https://wa.me/2250758881907"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 font-medium underline"
            >
              +225 07 58 88 19 07
            </a>
          </p>
        </section>

        {/* HÉBERGEMENT */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Hébergement</h2>
          <p className="text-slate-700">
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789 – États-Unis<br />
            https://vercel.com
          </p>
        </section>

        {/* PROPRIÉTÉ INTELLECTUELLE */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Propriété intellectuelle
          </h2>
          <p className="text-slate-700 leading-relaxed">
            L’ensemble des contenus présents sur le site PLEIONES (textes,
            images, logos, éléments graphiques) est protégé par les lois en
            vigueur relatives à la propriété intellectuelle.  
            Toute reproduction, distribution ou utilisation sans autorisation
            écrite préalable est strictement interdite.
          </p>
        </section>

        {/* RESPONSABILITÉ */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            Limitation de responsabilité
          </h2>
          <p className="text-slate-700 leading-relaxed">
            PLEIONES s’efforce de fournir des informations exactes et à jour.
            Toutefois, aucune garantie n’est donnée quant à l’exactitude,
            l’exhaustivité ou l’actualité des informations diffusées sur le site.
          </p>
        </section>

      </div>
    </main>
  );
}
