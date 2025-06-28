import Layout from "@/components/Layout";
import Image from "next/image";

export default function BokaPage() {
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
          <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <div className="mb-3 bg-blue-600/90 rounded-full p-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1 4v1m0-1V8m0 8h.01"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-1">Fyll i formuläret</h3>
            <p className="text-center text-gray-700 text-sm">Berätta kort om vad du vill ha hjälp med och föreslå tid.</p>
          </div>
          <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <div className="mb-3 bg-blue-800/90 rounded-full p-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12h-3V8"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-1">Vi återkopplar snabbt</h3>
            <p className="text-center text-gray-700 text-sm">Du får personlig bekräftelse och möteslänk inom 24 timmar.</p>
          </div>
          <div className="flex-1 bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition">
            <div className="mb-3 bg-blue-400/90 rounded-full p-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 21h4m4 0h-4V5a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v16z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-1">Digitalt möte</h3>
            <p className="text-center text-gray-700 text-sm">Vi ses online och kickstartar din digitala resa!</p>
          </div>
        </section>

        {/* Package cards + booking form */}
        <section className="flex flex-col md:flex-row gap-10 items-start z-10">
          {/* Packages/Meeting Types */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="bg-gradient-to-br from-blue-100/60 via-white/80 to-blue-200/30 rounded-xl shadow-lg p-6 border border-blue-100">
              <h4 className="text-xl text-blue-900 font-bold mb-2">Kostnadsfritt konsultationsmöte</h4>
              <ul className="text-gray-700 text-sm pl-4 list-disc mb-2">
                <li>30 minuter via Google Meet eller Teams</li>
                <li>Behovsanalys & idéutbyte</li>
                <li>Zero commitment</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100/60 via-white/80 to-blue-200/30 rounded-xl shadow-lg p-6 border border-blue-100">
              <h4 className="text-xl text-blue-900 font-bold mb-2">Starta projekt direkt</h4>
              <ul className="text-gray-700 text-sm pl-4 list-disc mb-2">
                <li>Personligt offertmöte</li>
                <li>Snabb leveransplan</li>
                <li>Allt digitalt, inga dolda kostnader</li>
              </ul>
            </div>
          </div>
          {/* Custom Booking Form */}
          <div className="flex-1 min-w-[320px]">
            <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-blue-100">
              <form
                action="https://formsubmit.co/jirata52@gmail.com" 
                method="POST"
                className="space-y-5"
                autoComplete="off"
              >
                  {/* Hidden config */}
  <input type="hidden" name="_next" value= "https://motijirata-hemsida-linux-f0fygjgvdafthsay.swedencentral-01.azurewebsites.net/tack"/>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />
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
                  <label className="block text-sm font-medium mb-1 text-blue-900">Föreslagen tid eller datum</label>
                  <input
                    type="text"
                    name="tid"
                    placeholder="T.ex. 25 juni kl 14:00"
                    className="w-full border px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition"
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
                >
                  Skicka bokningsförfrågan
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}