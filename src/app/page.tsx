import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <BookingCTA />
    </Layout>
  );
}
