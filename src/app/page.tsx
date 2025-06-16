import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Features from "@/components/Features";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen text-gray-900">
        <section className="relative w-full text-center pt-24 pb-16 overflow-hidden">
          {/* Wavy Background */}
          <div className="absolute inset-0 -z-10"></div>

          {/* Main Content */}
          <div className="max-w-xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 drop-shadow-lg">MTK</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 drop-shadow-sm">
              Konsulttjänster för dig
            </h2>
            <Link href="/boka">
              <a className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                Boka ett möte
              </a>
            </Link>
          </div>

          {/* Payment Logos */}
          <div className="mt-16 flex justify-center items-center gap-8">
            <Image src="/images/Swish.png" alt="Swish" width={100} height={50} />
            <Image src="/images/Klarna.png" alt="Klarna" width={100} height={50} />
          </div>
        </section>

        <Features />
        <BookingCTA />
      </main>
    </Layout>
  );
}
