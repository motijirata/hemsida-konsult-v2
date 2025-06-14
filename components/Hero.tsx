export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white text-center px-4 py-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Vi bygger din hemsida – enkelt och klart</h1>
      <p className="text-lg md:text-xl mb-8">Professionella hemsidor med bokning och betalning</p>
      <a href="/boka" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
        Kom igång nu
      </a>
    </section>
  );
}