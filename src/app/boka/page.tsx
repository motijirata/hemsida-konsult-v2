import Layout from "@/components/Layout";

export default function Boka() {
  return (
    <Layout>
    {
        <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Boka Tid</h1>

      <section className="max-w-3xl mx-auto">
        <p className="text-center text-gray-700 mb-6">
          Använd kalendern nedan för att boka ett möte.
        </p>

        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://calendly.com/jirata52/30min"
            className="w-full h-96 border rounded shadow"
            frameBorder="0"
            allowFullScreen
            title="Bokningskalender"
          ></iframe>
        </div>
      </section>
    </main>
    }
  </Layout>
    
    
  );
}
