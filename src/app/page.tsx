import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
// Import icons from react-icons
import { HiOutlineDevicePhoneMobile, HiOutlineCalendar, HiCurrencyDollar } from "react-icons/hi2"; // Heroicons v2 for modern look

export default function Home() {
  return (
    <Layout>
      <main className="text-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] w-full flex items-center justify-center text-center overflow-hidden bg-white">
          {/* Hero Illustration Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-illustration.png"
              alt="Illustration"
              fill
              className="object-contain object-bottom opacity-100"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/80" aria-hidden="true" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 px-4 w-full max-w-3xl pt-32 sm:pt-40 md:pt-0 mt-0 md:mt-8">
            {/* 
              pt-32: pushes text down on mobile
              sm:pt-40: pushes even more on small screens, adjust as needed
              md:pt-0: removes padding on desktop for vertical center
              mt-0: removes extra top margin on mobile
              md:mt-8: keeps a little margin on desktop if needed
            */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow animate-fade-in">
              Hjälper småföretag växa digitalt
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed animate-fade-in delay-200">
              Vi skapar hemsidor, bokningssystem och betalningslösningar – allt du behöver för att komma igång online.
            </p>
            <Link href="/boka" passHref>
              <button className="inline-block bg-blue-600 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow hover:bg-blue-700 hover:scale-105 active:scale-95 transition duration-300 animate-bounce-slow">
                Boka ett möte
              </button>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-50 pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-8 sm:mb-12 animate-fade-in">
              Vad vi erbjuder
            </h2>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 group animate-pop-in">
                <HiOutlineDevicePhoneMobile className="mx-auto text-blue-500 text-5xl mb-4 animate-bounce group-hover:animate-none transition duration-300" />
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">Responsiv hemsida</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Mobilanpassad och professionell hemsida som fungerar på alla enheter.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 group animate-pop-in delay-100">
                <HiOutlineCalendar className="mx-auto text-blue-500 text-5xl mb-4 animate-pulse group-hover:animate-none transition duration-300" />
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">Bokningssystem</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Smidig integration med t.ex. Calendly för enkel bokning online.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105 duration-300 group animate-pop-in delay-200">
                <HiCurrencyDollar className="mx-auto text-blue-500 text-5xl mb-4 animate-spin-slow group-hover:animate-none transition duration-300" />
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">Betalningslösningar</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Ta emot betalningar via Swish, Klarna och andra alternativ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 animate-fade-in">
            Redo att ta nästa steg?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 animate-fade-in delay-100">
            Kontakta oss för att diskutera ert projekt och hur vi kan hjälpa er att växa digitalt!
          </p>
          <Link href="/boka" passHref>
            <button className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition duration-300 animate-bounce-slow">
              Boka ett möte nu
            </button>
          </Link>
        </section>
      </main>
    </Layout>
  );
}