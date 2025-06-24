import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <main className="relative min-h-screen text-gray-900 overflow-hidden pt-24 pb-12 px-4 sm:px-6">
        {/* Animated Wavy background image */}
        <div className="absolute inset-0 -z-10 animate-fade-in-slow">
          <Image
            src="/images/background.png"
            alt="Bakgrund"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-blue-50/80" />
        </div>

        {/* Hero Section */}
        <section className="max-w-2xl mx-auto text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 drop-shadow-lg mb-4 animate-fade-in">
            Välkommen till MTK
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 mb-7 animate-fade-in delay-150">
            Vi hjälper småföretag växa digitalt – kontakta oss för att komma igång med hemsida, bokningssystem, betalning och smart online-närvaro!
          </p>
          <Link href="#kontakt" passHref>
            <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition-transform duration-300 animate-bounce-slow">
              Kontakta oss
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-7 mb-20 px-2">
          <div className="bg-white bg-opacity-90 rounded-xl shadow hover:shadow-xl p-6 text-center transition-all animate-pop-in">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12m0 0a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm2 2h4"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Responsiv Hemsida</h3>
            <p className="text-gray-600">Mobilanpassad och professionell hemsida som fungerar på alla enheter.</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl shadow hover:shadow-xl p-6 text-center transition-all animate-pop-in delay-100">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3h8v4m-8 0h8M5 21h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2z"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Bokningssystem</h3>
            <p className="text-gray-600">Smidig integration med bokningslösning, t.ex. Calendly eller Google Kalender.</p>
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl shadow hover:shadow-xl p-6 text-center transition-all animate-pop-in delay-200">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5c1.105 0 2 .672 2 1.5s-.895 1.5-2 1.5m0-7v2m0 12v-2m-6-4a6 6 0 1 1 12 0 6 6 0 0 1-12 0z"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Betalningslösningar</h3>
            <p className="text-gray-600">Ta emot betalningar via Swish, Klarna och andra moderna metoder.</p>
          </div>
        </section>

        {/* Kontakt Form Section */}
        <section id="kontakt" className="max-w-xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl animate-fade-in-up">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Kontakta oss</h2>
          <p className="text-base text-gray-800 mb-7 text-center">
            Fyll i formuläret eller mejla oss direkt – vi återkommer snabbt!
          </p>
<form
  action="https://formsubmit.co/jirata52@gmail.com"
  method="POST"
  className="space-y-5"
>
  {/* Hidden config */}
  <input type="hidden" name="_next" value="https://motijirata-hemsida-linux-f0fygjgvdafthsay.swedencentral-01.azurewebsites.net/tack" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="table" />

  {/* Name */}
  <div>
    <label className="block text-sm font-medium mb-1">Namn</label>
    <input
      type="text"
      name="namn"
      required
      className="w-full border px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium mb-1">E-post</label>
    <input
      type="email"
      name="epost"
      required
      className="w-full border px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition"
    />
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-medium mb-1">Meddelande</label>
    <textarea
      name="meddelande"
      rows={4}
      required
      className="w-full border px-4 py-2 rounded focus:outline-none focus:border-blue-500 transition"
    />
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="bg-blue-600 text-white px-8 py-2 rounded font-semibold shadow hover:bg-blue-700 hover:scale-105 active:scale-95 transition duration-300 block mx-auto"
  >
    Skicka
  </button>
</form>

        </section>
      </main>
    </Layout>
  );
}