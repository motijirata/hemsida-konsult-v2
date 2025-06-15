// components/Footer.tsx
export default function Footer() {
  return (
      <footer className="bg-blue-950 text-white text-center py-6 text-sm mt-12">
        &copy; {new Date().getFullYear()} MTK. Alla rättigheter förbehållna.
      </footer>
  );
}
