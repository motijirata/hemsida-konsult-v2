"use client";

import Layout from "@/components/Layout";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineCalendar, HiOutlineUser, HiOutlineEnvelope, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export default function BokaPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("namn") as string,
      email: formData.get("epost") as string,
      date: formData.get("tid") as string,
      message: formData.get("meddelande") as string,
    };

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      window.location.href = "/tack";
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
          <h1 className="text-5xl font-extrabold text-blue-900 mb-5 tracking-tight drop-shadow-lg">Boka tid</h1>
          <p className="text-lg text-gray-800 mb-6">
            Välkommen! Boka ett kostnadsfritt möte där vi utforskar dina digitala möjligheter – snabbt, smidigt och framtidssäkert.
          </p>
        </div>

        {/* How it works section */}
        <section className="flex flex-col md:flex-row justify-center gap-8 z-10 animate-fade-in delay-100">
          <div className="flex-1 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <div className="mb-3 bg-blue-600/90 rounded-full p-4 shadow-lg">
              <HiOutlineUser className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-1">Fyll i formuläret</h3>
            <p className="text-center text-gray-700 text-sm">Berätta kort om vad du vill ha hjälp med och föreslå tid.</p>
          </div>
          <div className="flex-1 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <div className="mb-3 bg-blue-800/90 rounded-full p-4 shadow-lg">
              <HiOutlineCalendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-1">Vi återkopplar snabbt</h3>
            <p className="text-center text-gray-700 text-sm">Du får personlig bekräftelse och möteslänk inom 24 timmar.</p>
          </div>
          <div className="flex-1 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <div className="mb-3 bg-blue-400/90 rounded-full p-4 shadow-lg">
              <HiOutlineChatBubbleLeftRight className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-1">Digitalt möte</h3>
            <p className="text-center text-gray-700 text-sm">Vi ses online och kickstartar din digitala resa!</p>
          </div>
        </section>

        {/* Modern, wide and attractive booking form */}
        <section className="flex justify-center z-10">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-blue-100 p-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 md:p-10"
              autoComplete="off"
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">Boka ett möte</h2>
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
                <label htmlFor="tid" className="font-semibold text-blue-800 flex items-center gap-2">
                  <HiOutlineCalendar className="text-blue-400 text-xl" /> Föreslagen tid eller datum
                </label>
                <input
                  type="text"
                  name="tid"
                  id="tid"
                  placeholder="T.ex. 25 juni kl 14:00"
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-base bg-blue-50"
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
                  placeholder="Vad vill du prata om?"
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-800 hover:scale-105 active:scale-95 transition text-lg"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Skickar..." : "Skicka bokningsförfrågan"}
              </button>
              {status === "error" && (
                <p className="text-red-600 text-center mt-2">Något gick fel. Försök igen.</p>
              )}
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}