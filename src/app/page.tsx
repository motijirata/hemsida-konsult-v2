import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BookingCTA from "@/components/BookingCTA";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
    <main className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full text-center pt-24 pb-16 overflow-hidden">
        {/* Wavy Background */}
        <div className="absolute inset-0 -z-10"></div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-blue-950 bg-opacity-90 text-white shadow-md backdrop-blur-md transition-all">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <a className="text-xl font-bold tracking-wide">MTK</a>
            </Link>
            <nav className="hidden md:flex space-x-6 text-sm font-medium">
              <Link href="/"><a className="hover:text-blue-300">Hem</a></Link>
              <Link href="/tjanster"><a className="hover:text-blue-300">Tjänster</a></Link>
              <Link href="/boka"><a className="hover:text-blue-300">Boka</a></Link>
              <Link href="/kontakt"><a className="hover:text-blue-300">Kontakt</a></Link>
            </nav>
          </div>
        </header>

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
      {/*       <footer className="bg-blue-950 text-white text-center py-6 text-sm mt-12">
        &copy; {new Date().getFullYear()} MTK. Alla rättigheter förbehållna.
      </footer> */}

    </main>
      
      
    </Layout>
  );
}


/*
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <BookingCTA />
    </Layout>
  );
}
*/