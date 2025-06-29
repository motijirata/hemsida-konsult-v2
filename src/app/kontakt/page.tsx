"use client";

import Layout from "@/components/Layout";
import { useState } from "react";
import Image from "next/image";

export default function KontaktPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("namn") as string,
      email: formData.get("epost") as string,
      message: formData.get("meddelande") as string,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <Layout>
      <main className="relative max-w-5xl mx-auto px-4 py-16 min-h-screen text-gray-900 overflow-hidden flex flex-col gap-16">
        {/* Futuristic animated background */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/background.png"
            alt="Bakgrund"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-100/70 to-blue-300/40 backdrop-blur-md" />
          <div className="absolute left-2/3 top-1/3 w-80 h-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-400/30 via-blue-300/10 to-transparent blur-3xl animate-pulse -z-10" />
        </div>

        {/* Title and intro */}
        <div className="text-center max-w-xl mx-auto z-10 animate-fade-in-up">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-5 tracking-tight drop-shadow-lg">Kontakta oss</h1>
          <p className="text-lg text-gray-800 mb-6">
            Vi hjälper dig gärna – oavsett om du har frågor, behöver rådgivning, vill starta ett projekt eller bara är nyfiken på digital utveckling. Fyll i formuläret eller använd våra kontaktuppgifter nedan!
          </p>
        </div>

        {/* Info + Contact Details + Why choose us */}
        <section className="flex flex-col md:flex-row gap-10 z-10 animate-fade-in delay-100">
          {/* Useful info for customers */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-blue-900 mb-1">Så kan vi hjälpa dig</h3>
              <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                <li>Kostnadsfri konsultation – vi svarar snabbt på alla förfrågningar.</li>
                <li>Personligt bemötande och anpassade lösningar för ditt företag.</li>
                <li>Support och rådgivning även efter avslutat projekt.</li>
                <li>Transparenta priser – inga dolda avgifter.</li>
              </ul>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-blue-900 mb-1">Kontaktuppgifter</h3>
              <p className="text-gray-800 text-sm">
                <strong>E-post:</strong> <a href="mailto:info@example.com" className="text-blue-700 underline">info@example.com</a><br />
                <strong>Telefon:</strong> <a href="tel:+46701234567" className="text-blue-700 underline">070-123 45 67</a><br />
                <strong>Adress:</strong> Exempelgatan 1, 123 45 Stockholm
              </p>
              <p className="text-gray-700 text-xs mt-2">
                Vi är tillgängliga vardagar 08:00–17:00 och svarar vanligtvis inom 24 timmar.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-blue-100 flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-blue-900 mb-1">Varför välja oss?</h3>
              <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                <li>Certifierade experter inom webbutveckling och digital strategi</li>
                <li>Fokus på långsiktiga relationer och mätbara resultat</li>
                <li>Modern, användarvänlig design och teknik</li>
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div className="flex-1 min-w-[320px]">
            <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-blue-100">
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                autoComplete="off"
              >
                <div>
                  <label className="block text-sm font-medium mb-1 text-blue-900">Namn</label>
                  <input
                    type="text"
                    name="namn"
                    required
                    className="w-full border px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-blue-900">E-post</label>
                  <input
                    type="email"
                    name="epost"
                    required
                    className="w-full border px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-blue-900">Meddelande</label>
                  <textarea
                    name="meddelande"
                    rows={4}
                    required
                    className="w-full border px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded font-semibold shadow hover:bg-blue-700 hover:scale-105 active:scale-95 transition duration-300 block mx-auto"
                  disabled={status === "loading"}
                >
                  Skicka meddelande
                </button>
                {status === "error" && (
                  <p className="text-red-600 text-center">Något gick fel. Försök igen.</p>
                )}
                {status === "success" && (
                  <p className="text-green-600 text-center">Tack för ditt meddelande! Vi återkommer snart.</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}