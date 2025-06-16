import Layout from "@/components/Layout";
import Image from "next/image";

export default function BokaPage() {
  return (
    <Layout>
      <main className="relative max-w-4xl mx-auto px-4 py-16 text-gray-900 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/background.png"
            alt="Bakgrund"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center drop-shadow">Boka tid</h1>

        <section className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left text section */}
          <div>
            <p className="text-gray-800 mb-4">
              Vi gör det enkelt att komma igång. Boka ett kostnadsfritt möte där vi går igenom dina behov.
              Du kan också välja ett av våra paket direkt.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Svar inom 24h</li>
              <li>Inga dolda avgifter</li>
              <li>Flexibla betalningsalternativ</li>
            </ul>
          </div>

          {/* Booking embed */}
          <div className="w-full">
            <iframe
              src="https://calendly.com/jirata52/30min"
              className="w-full h-[500px] border rounded-md"
              frameBorder="0"
              title="Bokning"
            ></iframe>
          </div>
        </section>

        {/* Payment icons */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">Vi accepterar:</p>
          <div className="flex justify-center gap-6 items-center">
            <Image src="/images/Swish.png" alt="Swish" width={60} height={30} />
            <Image src="/images/Klarna.png" alt="Klarna" width={60} height={30} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
