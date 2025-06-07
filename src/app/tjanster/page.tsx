import Layout from "@/components/Layout";


export default function Tjanster() {
  return (
  <Layout> 
    {
        <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Våra Tjänster</h1>

      <section className="max-w-3xl mx-auto space-y-8">
        <div>
          <h2 className="text-xl font-semibold">✅ Hemsida</h2>
          <p className="text-gray-700">
            Vi bygger mobilanpassade och snygga hemsidor för småföretag. Du får en komplett lösning – snabbt och enkelt.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">📅 Bokningssystem</h2>
          <p className="text-gray-700">
            Kunderna kan boka tider direkt via din hemsida. Vi kan använda t.ex. Calendly eller bygga ett eget system.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">💳 Betalning</h2>
          <p className="text-gray-700">
            Vi kopplar in betalning med kort, Swish eller Klarna – så att du får betalt direkt online.
          </p>
        </div>
      </section>
    </main>
    }</Layout>  
    
  );
}
