import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
