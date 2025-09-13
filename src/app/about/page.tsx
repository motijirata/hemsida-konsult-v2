import Layout from "@/components/Layout";
import Image from "next/image";

export default function OmOssPage() {
  return (
    <Layout>
      <main className="relative min-h-screen text-gray-900 overflow-hidden pt-24 pb-20 px-6 flex flex-col">
        {/* Futuristic background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/background.png"
            alt="Bakgrund"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-100/60 to-blue-300/30 backdrop-blur-md" />
          {/* Animated glowing accent */}
          <div className="absolute left-1/2 top-1/4 w-80 h-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-400/30 via-blue-300/10 to-transparent blur-3xl animate-pulse -z-10" />
        </div>

        {/* Header */}
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 text-center drop-shadow-lg tracking-tight animate-fade-in-up">
          Om oss
        </h1>
        <p className="text-lg sm:text-xl text-gray-800 mb-14 max-w-2xl mx-auto text-center animate-fade-in delay-100">
          <span className="font-semibold text-blue-700">KTMO</span> hjälper småföretag att komma online med snygga, smarta och framtidssäkra hemsidor, bokningssystem och betalningar. Ditt digitala lyft börjar här.
        </p>

        {/* Info Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Vision */}
          <div className="relative bg-white/80 backdrop-blur-lg border border-blue-100 shadow-xl rounded-2xl p-8 hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 group">
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500/90 p-4 rounded-full shadow-lg border-4 border-white group-hover:rotate-6 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3 mt-8 text-center">Vår Vision</h2>
            <p className="text-gray-700 text-base text-center">
              Alla företag, oavsett storlek, förtjänar en framtidssäker och modern webbnärvaro. Vi gör det enkelt att synas online – med bokning, betalning och full mobilanpassning.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="relative bg-white/80 backdrop-blur-lg border border-blue-100 shadow-xl rounded-2xl p-8 hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 group">
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-700/90 p-4 rounded-full shadow-lg border-4 border-white group-hover:rotate-6 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-blue-900 mb-3 mt-8 text-center">Varför välja oss?</h2>
            <ul className="space-y-3 text-gray-700 text-base mt-2">
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Fokuserat på småföretags behov
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Snabba leveranser & enkel process
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Personlig kontakt hela vägen
              </li>
              <li className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Prisvärda paket med allt inkluderat
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}