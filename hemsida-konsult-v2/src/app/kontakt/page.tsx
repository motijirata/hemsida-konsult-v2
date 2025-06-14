import Layout from "@/components/Layout";


export default function Kontakt() {
  return (
    <Layout>
    {
         <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Kontakta oss</h1>

      <section className="max-w-xl mx-auto">
        <form
          action="https://formspree.io/f/mjkrvopp"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium">Namn</label>
            <input
              type="text"
              name="namn"
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">E-post</label>
            <input
              type="email"
              name="epost"
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Meddelande</label>
            <textarea
              name="meddelande"
              rows={5}
              required
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Skicka
          </button>
        </form>
      </section>
    </main>
    }
  </Layout>
   
  );
}
