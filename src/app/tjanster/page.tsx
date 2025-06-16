import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

const services = [
  {
    title: "Responsiv hemsida",
    description: "Mobilanpassad och snygg hemsida som fungerar på alla skärmar.",
    image: "/images/responsive.jpg",
    href: "/",
  },
  {
    title: "Bokningssystem",
    description: "Inbyggd bokning med Calendly eller skräddarsydd lösning.",
    image: "/images/booking.jpg",
    href: "/boka",
  },
  {
    title: "Betalningslösning",
    description: "Ta emot betalningar via Swish eller Klarna.",
    image: "/images/payment.jpg",
    href: "/boka",
  },
  {
    title: "Kontaktformulär",
    description: "Få meddelanden direkt till din e-post via ett anpassat formulär.",
    image: "/images/contact.jpg",
    href: "/kontakt",
  },
];

export default function TjansterPage() {
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

        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center drop-shadow">Våra Tjänster</h1>
        <p className="text-lg text-gray-800 mb-12 max-w-2xl mx-auto text-center">
          Vi erbjuder anpassade hemsidor med bokning, betalning och kontakt – redo att användas direkt.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
