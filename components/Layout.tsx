import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
     
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
