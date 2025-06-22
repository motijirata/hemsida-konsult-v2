import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col relative min-h-screen text-gray-900 overflow-x-hidden">
      {/* Background image behind everything */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/background.png"
          alt="Bakgrund"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <Header />

      <main className=" flex-grow md:pt-13">{children}</main>

      <Footer />
    </div>
  );
}
