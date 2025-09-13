"use client";

import Layout from "@/components/Layout";
import { useState } from "react";
import Image from "next/image";
import { HiOutlineEnvelope, HiOutlineUser, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

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
          <div className="flex-1 flex flex-col gap-6 min-w-[320px]">
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

          {/* Modern, wide and attractive contact form */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-0">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-8 md:p-10"
                autoComplete="off"
              >
                <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Skicka ett meddelande</h2>
                <div className="flex flex-col gap-2">
                  <label htmlFor="namn" className="font-semibold text-blue-800 flex items-center gap-2">
                    <HiOutlineUser className="text-blue-400 text-xl" /> Namn
                  </label>
                  <input
                    type="text"
                    name="namn"
                    id="namn"
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-base bg-blue-50"
                    autoComplete="name"
                    placeholder="Ditt namn"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="epost" className="font-semibold text-blue-800 flex items-center gap-2">
                    <HiOutlineEnvelope className="text-blue-400 text-xl" /> E-post
                  </label>
                  <input
                    type="email"
                    name="epost"
                    id="epost"
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-base bg-blue-50"
                    autoComplete="email"
                    placeholder="din@email.se"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="meddelande" className="font-semibold text-blue-800 flex items-center gap-2">
                    <HiOutlineChatBubbleLeftRight className="text-blue-400 text-xl" /> Meddelande
                  </label>
                  <textarea
                    name="meddelande"
                    id="meddelande"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-base bg-blue-50 resize-none"
                    placeholder="Vad kan vi hjälpa till med?"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-800 hover:scale-105 active:scale-95 transition text-lg"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Skickar..." : "Skicka meddelande"}
                </button>
                {status === "error" && (
                  <p className="text-red-600 text-center mt-2">Något gick fel. Försök igen.</p>
                )}
                {status === "success" && (
                  <p className="text-green-600 text-center mt-2">Tack för ditt meddelande! Vi återkommer snart.</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}