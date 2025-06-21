import Layout from "@/components/Layout";
import Image from "next/image";

export default function OmOssPage() {
  return (
    <Layout>
      <main className="relative min-h-screen text-gray-900 overflow-hidden pt-24 pb-16 px-6">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/background.png"
            alt="Bakgrund"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center drop-shadow">Om oss</h1>
        <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto text-center">
          MTK hjälper småföretag att komma online med enkla, snygga och funktionella hemsidor.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow text-gray-800">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Vår Vision</h2>
            <p>
              Vi tror att varje företag, oavsett storlek, förtjänar en professionell närvaro på webben. Därför gör vi det enkelt att få en hemsida med bokning, betalning och mobilanpassning.
            </p>
          </div>

          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow text-gray-800">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Varför välja oss?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Vi fokuserar på småföretags behov</li>
              <li>Snabba leveranser och enkel process</li>
              <li>Personlig kontakt hela vägen</li>
              <li>Prisvärda paket med allt inkluderat</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
