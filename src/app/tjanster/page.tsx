import ServiceCard from "@/components/ServiceCard";
import Layout from "@/components/Layout";
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
  {
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Våra Tjänster</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </main>
     }
  </Layout>
    );
 
}
