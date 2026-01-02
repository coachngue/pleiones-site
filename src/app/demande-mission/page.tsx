export default function DemandeMission() {
  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Demande de mission
          </h1>
          <p className="text-lg text-slate-200">
            Décrivez votre besoin en management de projets, gouvernance ou transformation.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-lg text-slate-700">
          <p>
            PLEIONES AFRICA accompagne les organisations, institutions et cabinets
            dans la réussite de projets complexes, la mise en place de PMO,
            la transformation agile et le coaching de haut niveau.
          </p>
          <p>
            Ce formulaire permet de qualifier votre besoin afin de vous proposer
            une approche adaptée, réaliste et alignée sur les standards internationaux (PMI®).
          </p>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <form
            name="demande-mission"
            method="POST"
           
           
            className="bg-white p-8 rounded-2xl shadow space-y-6"
          >
            ame" value="demande-mission" /

            <h2 className="text-2xl font-bold mb-4">
              Informations sur la mission
            </h2>

            {/* ORGANISATION */}
            <div>
              <label className="font-medium">Organisation / Institution</label>
              <input
                type="text"
                name="organisation"
                required
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* PAYS */}
            <div>
              <label className="font-medium">Pays de la mission</label>
              <input
                type="text"
                name="pays"
                required
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* TYPE DE MISSION */}
            <div>
              <label className="font-medium">Type de mission</label>
              <select
                name="type_mission"
                required
                className="w-full mt-2 p-3 border rounded-lg"
              >
                <option value="">— Sélectionner —</option>
                <option>Management de projets complexes</option>
                <option>Mise en place PMO / Gouvernance</option>
                <option>Transformation Agile / Scrum</option>
                <option>Coaching PMP® / PMI-ACP®</option>
                <option>Audit & cadrage de projets</option>
              </select>
            </div>

            {/* BUDGET */}
            <div>
              <label className="font-medium">Budget estimatif</label>
              <select
                name="budget"
                required
                className="w-full mt-2 p-3 border rounded-lg"
              >
                <option value="">— Sélectionner —</option>
                <option>&lt; 5 000 €</option>
                <option>5 000 – 20 000 €</option>
                <option>20 000 – 50 000 €</option>
                <option>&gt; 50 000 €</option>
              </select>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="font-medium">Description du besoin</label>
              <textarea
                name="description"
                rows={5}
                required
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* CONTACT */}
            <div>
              <label className="font-medium">Email professionnel</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 p-3 border rounded-lg"
              />
            </div>

            {/* SUBMIT */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold hover:bg-slate-800 transition"
              >
                Soumettre la demande
              </button>
            </div>

          </form>
        </div>
      </section>

    </main>
  );
}
