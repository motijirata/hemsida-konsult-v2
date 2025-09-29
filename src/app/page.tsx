import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import CalendlyIcon from "@/icons/calendly.svg";
// Import icons from react-icons
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineCalendar,
  HiCurrencyDollar,
  HiOutlineCloud,
  HiShieldCheck,
  HiRocketLaunch,
} from "react-icons/hi2"; // Heroicons v2 for modern look

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight drop-shadow animate-fade-in">
              Vi Hjälper småföretag växa digitalt
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed animate-fade-in delay-200">
              Vi skapar hemsidor, Smidig integration med smarta bokningssystem för  bokning online och betalningslösningar – allt du behöver för att komma igång online.
            </p>
            <Link href="/boka" passHref>
              <button className="inline-block bg-blue-600 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow hover:bg-blue-700 hover:scale-105 active:scale-95 transition duration-300 animate-bounce-slow">
                Boka ett möte
              </button>
            </Link>
          </div>
        </section>

        {/* Powered By / Trust Bar */}
        <section className="w-full bg-white border-b border-blue-100 py-5 ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-8 sm:mb-12 animate-fade-in max-w-6xl mx-auto text-center">
            Byggt med modern teknik
          </h2>
          <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-25">
            {/* Azure logo SVG or PNG */}
            <Image src="/azure.svg" alt="Azure" width={80} height={50} className="h-20 w-auto" />
            {/* GitHub logo */}
            <Image src="/github.svg" alt="GitHub" width={80} height={35} className="h-20 w-auto" />
            {/* Docker logo */}
            <Image src="docker.svg" alt="Docker" width={80} height={35} className="h-20 w-auto" />
            <Image src="calendly.svg" alt="Calendly" width={80} height={35} className="h-20 w-auto" />
            <Image src="openai.svg" alt="OpenAi" width={80} height={35} className="h-20 w-auto" />
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-50 pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 px-4 justify-center">
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
            {/* Extra Trust Row */}
            <div className="flex flex-wrap justify-center gap-20 mt-12 text-center">
              <div className="flex flex-col items-center ">
                <HiOutlineCloud className="text-blue-400 text-8xl mb-2" />
                <span className="font-semibold text-blue-800">Modern molninfrastruktur</span>
                <span className="text-xs text-gray-600">Byggt på Azure</span>
              </div>
              <div className="flex flex-col items-center">
                <HiShieldCheck className="text-green-500 text-8xl mb-2" />
                <span className="font-semibold text-blue-800">Hög säkerhet</span>
                <span className="text-xs text-gray-600">Dina uppgifter är skyddade</span>
              </div>
              <div className="flex flex-col items-center">
                <HiRocketLaunch className="text-orange-400 text-8xl mb-2 " />
                <span className="font-semibold text-blue-800">Snabba laddtider</span>
                <span className="text-xs text-gray-600">Optimerat för prestanda</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-white py-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">Vad kostar det?</h2>
            <p className="text-gray-700 text-lg mb-6">
              Priser från <span className="font-semibold text-blue-600">4&nbsp;990 kr</span> i engångskostnad<br />
              + <span className="font-semibold text-blue-600">99 kr/mån</span> för drift, support och hosting.<br />
              Vi erbjuder fasta paket och skräddarsydda lösningar – kontakta oss för en kostnadsfri offert!
            </p>
            <div className="bg-blue-50 rounded-xl p-6 text-left mt-8 shadow max-w-2xl mx-auto">
              <h3 className="font-semibold text-blue-800 mb-2 text-lg">Varför välja oss istället för Starto eller WordPress?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
                <li><b>Skräddarsydd och personlig service</b> – Vi bygger hemsidan åt dig, du slipper göra det själv.</li>
                <li><b>Ingen stress, inget strul</b> – Du får hjälp av en riktig person- inte supportforum eller en bot.</li>
                <li><b>Design och funktionalitet anpassad till ditt företag</b>, inga generiska mallar.</li>
                <li><b>Smidig integration</b> för bokning, betalning och andra affärsbehov.</li>
                <li>Du sparar tid så du kan fokusera på din verksamhet.</li>
                <li>Vi tar ansvar för drift, säkerhet och support – du slipper tänka på teknik!</li>
              </ul>
              <div className="text-sm text-gray-500 mt-4">
                Starto, WordPress.com och liknande tjänster kan vara billiga, men då får du bygga och underhålla allt själv, med begränsad support och funktionalitet. Hos oss får du en nyckelfärdig hemsida och personlig hjälp hela vägen.
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-100 via-white to-blue-50 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 animate-fade-in">
            Redo för nästa steg?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 animate-fade-in delay-100">
            Kontakta oss för att konsultera om hur vi kan stötta er digitala tillväxt!
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