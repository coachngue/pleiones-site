"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* COL 1 */}
        <div>
          <h3 className="text-xl font-bold mb-3">PLEIONES AFRICA</h3>
          <p className="text-sm">
            Consulting firm specialized in complex project management,
            digital transformation, ERP and international PMI certifications.
          </p>
          <p className="mt-3 text-sm font-semibold">
            PMP® • PMI-ACP® • Agile & Scrum
          </p>
        </div>

        {/* COL 2 */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/profil-coach" className="hover:underline">Coach Profile</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* COL 3 */}
        <div>
          <h4 className="font-semibold mb-3">Contact details</h4>
          <p className="text-sm">Abidjan – Côte d’Ivoire</p>
          <p className="text-sm mt-2">
            WhatsApp :{" "}
            <a
              href="https://wa.me/2250758881907"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +225 07 58 88 19 07
            </a>
          </p>
          <p className="text-sm mt-2">
            Email : serge.koffi@pleionesafrica.com
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-slate-400 py-6 border-t border-slate-700">
        © {year} PLEIONES AFRICA — PMP® & PMI-ACP® — All rights reserved
      </div>
    </footer>
  );
}
