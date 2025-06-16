import Layout from "@/components/Layout";
import Image from "next/image";

export default function Kontakt() {
  return (
    <Layout>
      <main className="relative min-h-screen text-gray-900 overflow-hidden pt-24 pb-16 px-6">
        {/* Wavy background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/background.png"
            alt="Bakgrund"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <h1 className="text-4xl font-bold text-blue-900 mb-6 drop-shadow text-center">Kontakta oss</h1>
        <p className="text-lg text-gray-800 mb-12 max-w-xl mx-auto text-center">
          Har du frågor eller vill komma i kontakt med oss? Fyll i formuläret nedan eller mejla oss direkt.
        </p>

        {/* Contact Form */}
        <section className="max-w-xl mx-auto bg-white bg-opacity-80 p-6 rounded-lg shadow">
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
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Skicka
            </button>
          </form>
        </section>
      </main>
    </Layout>
  );
}
