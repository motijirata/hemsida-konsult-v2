"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

// Placeholder SVGs 
const services = [
  {
    title: "E-handel",
    desc: "Sälj produkter online med en snygg, säker och mobilanpassad webbshop. Komplett med kassa, betalning och lagerhantering.",
    demoType: "image",
    demoSrc: "/placeholders/ecommerce.svg",
    modalSrc: "/placeholders/ecommerce.svg",
    alt: "Platsbild för e-handel",
    comingSoon: true,
  },
  {
    title: "Statisk Hemsida",
    desc: "En snabb, modern och säker hemsida som visar upp ditt företag eller projekt. Perfekt för portfolios, företagspresentationer och kampanjer.",
    demoType: "image",
    demoSrc: "/placeholders/static-site.svg",
    modalSrc: "/placeholders/static-site.svg",
    alt: "Platsbild för statisk hemsida",
    comingSoon: true,
  },
  {
    title: "Bokningssida",
    desc: "Låt dina kunder boka tider online med ett smidigt och användarvänligt system. Passar frisörer, terapeuter och alla som jobbar med bokningar.",
    demoType: "image",
    demoSrc: "/placeholders/booking-site.svg",
    modalSrc: "/placeholders/booking-site.svg",
    alt: "Platsbild för bokningssida",
    comingSoon: true,
  },
];

export default function TjansterPage() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = (idx: number) => setModalIndex(idx);
  const closeModal = () => setModalIndex(null);

  if (typeof window !== "undefined" && modalIndex !== null) {
    window.onkeydown = (e) => {
      if (e.key === "Escape") closeModal();
    };
  }

  return (
    <Layout>
      <main className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <header className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-4 tracking-tight drop-shadow-lg">Våra Tjänster</h1>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Vi hjälper dig med allt från snygga visitkortshemsidor till avancerade webbshoppar och bokningssystem. Se exempel på våra lösningar nedan!
            </p>
          </header>

          {/* Services grid */}
          <section className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white/80 rounded-2xl p-6 shadow-xl border border-blue-100 flex flex-col items-center hover:scale-105 transition group"
              >
                <h2 className="text-2xl font-bold text-blue-800 mb-2">{s.title}</h2>
                <p className="text-gray-700 mb-4 text-center">{s.desc}</p>
                <div className="relative w-full flex flex-col items-center aspect-video mb-2">
                  <Image src={s.demoSrc} alt={s.alt} width={200} height={120} className="rounded shadow-lg" />
                </div>
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
                  onClick={() => openModal(i)}
                >
                  Visa demo
                </button>
              </div>
            ))}
          </section>
        </div>

        {/* Modal */}
        {modalIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div
              className="relative bg-white/95 rounded-2xl shadow-2xl max-w-3xl w-[90vw] p-6 flex flex-col items-center animate-fade-in-up"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-blue-800 bg-blue-100/60 rounded-full p-2 hover:bg-blue-200 transition"
                onClick={closeModal}
                aria-label="Stäng demo"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">{services[modalIndex].title}</h2>
              <p className="mb-4 text-gray-700 text-center">{services[modalIndex].desc}</p>
              <div className="w-full flex flex-col items-center max-h-[70vh] overflow-auto">
                <Image
                  src={services[modalIndex].modalSrc}
                  alt={services[modalIndex].alt}
                  width={400}
                  height={220}
                  className="rounded-xl shadow-md w-full h-auto"
                />
                <div className="mt-6 text-center text-blue-800 font-semibold text-lg">
                  Demo på väg – kontakta oss för en personlig genomgång!
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}