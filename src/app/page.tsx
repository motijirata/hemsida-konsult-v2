import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Features from "@/components/Features";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <Layout>
      <main className="text-gray-900">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-white">
          {/* Hero Illustration Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-illustration.png"
              alt="Illustration"
              fill
              className="object-contain obeject-bottom  opacity-100"
              priority
            />
            <div className="absolute inset-0 bg-white/70" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-4 max-w-3xl mt-16 md:mt-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
              Hjälper småföretag växa digitalt
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Vi skapar hemsidor, bokningssystem och betalningslösningar – allt du behöver för att komma igång online.
            </p>
            <Link href="/boka">
              <a className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300">
                Boka ett möte
              </a>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-50 py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">Vad vi erbjuder</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Responsiv hemsida</h3>
                <p className="text-gray-600">Mobilanpassad och professionell hemsida som fungerar på alla enheter.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Bokningssystem</h3>
                <p className="text-gray-600">Smidig integration med t.ex. Calendly för enkel bokning online.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Betalningslösningar</h3>
                <p className="text-gray-600">Ta emot betalningar via Swish, Klarna och andra alternativ.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <BookingCTA />
      </main>
    </Layout>
  );
}
