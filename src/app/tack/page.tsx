export const dynamic = "force-static";

import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function TackPage() {
  return (
    <Layout>
      <Head>
        <title>Tack! | MTK</title>
        <meta name="description" content="Tack för ditt meddelande till MTK. Vi återkommer så snart som möjligt." />
      </Head>
      <main className="relative min-h-screen text-gray-900 pt-32 pb-20 px-6 flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/background.png"
            alt="Bakgrund"
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-xl shadow-lg text-center max-w-xl">
          {/* Checkmark icon */}
          <div className="flex justify-center mb-6">
            <svg
              className="w-16 h-16 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Ett steg närmre din drömhemsida!
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Vi återkommer till dig så snart som möjligt.
          </p>

          <Link href="/" className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Tillbaka till startsidan
          </Link>
        </div>
      </main>
    </Layout>
  );
}