"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Responsiv Hemsida",
    desc: "Modern layout, snabb laddning och mobilvänlig. Inkluderar hero, tjänstesektion och kontaktformulär.",
    demoType: "mock",
    alt: "Mockup för responsiv hemsida",
  },
  {
    title: "Bokningssida",
    desc: "Låt dina kunder boka tider online med ett smidigt och användarvänligt system.",
    demoType: "mock",
    alt: "Mockup för bokningssida",
  },
  {
    title: "Betalningslösningar",
    desc: "Säker checkout med Swish, kort och Klarna. Enkel hantering av kvitton och betalningshistorik.",
    demoType: "mock",
    alt: "Mockup för betalningslösningar",
  },
];

export default function TjansterPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (idx: number) => setModalIndex(idx);
  const closeModal = () => setModalIndex(null);

  useEffect(() => {
    if (modalIndex !== null) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [modalIndex]);

  return (
    <Layout>
      <main className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight drop-shadow-lg">
              Våra tjänster
            </h1>
            <p className="text-base md:text-lg text-gray-800 max-w-2xl mx-auto">
              Vi hjälper dig med allt från snygga visitkortshemsidor till avancerade webbshoppar, bokningssystem och betalningslösningar. Se våra demo‑mockups nedan!
            </p>
          </header>

          {/* Services grid */}
          <section className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white/90 rounded-2xl p-6 shadow-xl border border-blue-100 flex flex-col items-center hover:scale-105 transition group"
              >
                <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-2 text-center">{s.title}</h2>
                <p className="text-gray-700 mb-4 text-center text-sm md:text-base">{s.desc}</p>
                
                {/* Interactive Preview Area */}
                <div
                  className="relative w-full flex flex-col items-center aspect-video mb-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-inner justify-center group cursor-pointer"
                  onClick={() => openModal(i)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Visa demo för ${s.title}`}
                  onKeyDown={e => (e.key === "Enter" || e.key === " ") && openModal(i)}
                >
                  {/* Demo illustration/preview */}
                  {/* Optionally replace this with a real image or SVG */}
                  {s.title === "Responsiv Hemsida" && (
                    <svg width="70" height="38" viewBox="0 0 70 38" className="mx-auto text-blue-300 mb-1">
                      <rect x="0" y="4" width="70" height="30" rx="5" fill="#e0e7ff" />
                      <rect x="8" y="10" width="54" height="8" rx="2" fill="#3b82f6" />
                      <rect x="8" y="22" width="28" height="4" rx="2" fill="#60a5fa" />
                      <rect x="40" y="22" width="22" height="4" rx="2" fill="#bfdbfe" />
                    </svg>
                  )}
                  {s.title === "Bokningssida" && (
                    <svg width="60" height="38" viewBox="0 0 60 38" className="mx-auto text-green-300 mb-1">
                      <rect x="0" y="4" width="60" height="30" rx="5" fill="#bbf7d0" />
                      <rect x="8" y="10" width="44" height="5" rx="2" fill="#22d3ee" />
                      <rect x="8" y="18" width="20" height="4" rx="2" fill="#38bdf8" />
                      <rect x="32" y="18" width="20" height="4" rx="2" fill="#fbbf24" />
                    </svg>
                  )}
                  {s.title === "Betalningslösningar" && (
                    <svg width="60" height="38" viewBox="0 0 60 38" className="mx-auto text-yellow-300 mb-1">
                      <rect x="0" y="4" width="60" height="30" rx="5" fill="#fef3c7" />
                      <rect x="8" y="10" width="44" height="5" rx="2" fill="#f59e42" />
                      <rect x="8" y="18" width="14" height="4" rx="2" fill="#fde68a" />
                      <rect x="24" y="18" width="28" height="4" rx="2" fill="#fbbf24" />
                    </svg>
                  )}
                  <span className="text-blue-700 font-semibold z-10 select-none">Interaktiv mockup</span>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow animate-pulse">
                      Klicka för demo
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-xl border-2 border-blue-300 opacity-0 group-hover:opacity-80 transition" />
                </div>

                {/* Button for accessibility and users who expect a button   
                
                                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
                  onClick={() => openModal(i)}
                  type="button"
                >
                  Visa demo
                </button>*/}

              </div>
            ))}
          </section>
        </div>

        {/* Modal */}
        {modalIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg"
            onClick={closeModal}
          >
            <div
              className="relative bg-white/95 rounded-2xl shadow-2xl max-w-4xl w-[92vw] p-6 flex flex-col items-center animate-fade-in-up"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-blue-800 bg-blue-100/60 rounded-full p-2 hover:bg-blue-200 transition"
                onClick={closeModal}
                aria-label="Stäng demo"
                type="button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <h2 className="text-2xl font-bold text-blue-900 mb-2">{services[modalIndex].title}</h2>
              <p className="mb-4 text-gray-700 text-center">{services[modalIndex].desc}</p>

              {/* Mockup preview */}
              <div className="bg-white rounded-xl border border-blue-100 shadow-inner w-full p-4 max-h-[75vh] overflow-auto">
                {services[modalIndex].title === "Responsiv Hemsida" && (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-100 to-white p-6 rounded-lg">
                      <h3 className="font-bold text-blue-800">Hero‑sektion</h3>
                      <p className="text-sm text-gray-600">Stor bild, titel, call‑to‑action‑knapp.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700">Mobilanpassad</h4>
                        <p className="text-sm text-gray-600">Optimerad för alla skärmstorlekar.</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700">Kontaktformulär</h4>
                        <p className="text-sm text-gray-600">Snabb kontakt och bokning.</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700">SEO‑bas</h4>
                        <p className="text-sm text-gray-600">Grundläggande optimering.</p>
                      </div>
                    </div>
                  </div>
                )}

                {services[modalIndex].title === "Bokningssida" && (
                  <div className="space-y-4">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-bold text-green-800">Bokningsflöde</h3>
                      <p className="text-sm text-gray-600">Välj tjänst → välj tid → bekräftelse.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-bold text-green-800">Adminvy</h3>
                      <p className="text-sm text-gray-600">Kalenderöversikt och kundlista.</p>
                    </div>
                  </div>
                )}

                {services[modalIndex].title === "Betalningslösningar" && (
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="font-bold text-yellow-800">Checkout</h3>
                      <p className="text-sm text-gray-600">Steg: varukorg → kassa → betalning.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700">Swish</h4>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700">Kort</h4>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700">Klarna</h4>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 text-center text-blue-800 font-semibold text-lg">
                Detta är en demo‑mockup — kontakta oss för en personlig genomgång!
              </div>
              <Link
                href="/kontakt"
                className="mt-4 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-700 hover:scale-105 active:scale-95 transition"
                onClick={closeModal}
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}