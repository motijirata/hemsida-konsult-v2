import Layout from "@/components/Layout";

export default function Tack() {
  return (
    <Layout>
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-green-600">Tack!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Vi har tagit emot ditt meddelande. Vi hör av oss så snart vi kan!
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Tillbaka till startsidan
        </a>
      </section>
    </Layout>
  );
}
