import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 to-white">
        <h2 className="text-4xl font-bold mb-4">Vi bygger din hemsida – enkelt och klart</h2>
        <p className="text-lg mb-8">Professionella hemsidor med bokning och betalning</p>
        <a
          href="/boka"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Boka nu
        </a>
      </section>
    </Layout>
  );
}
