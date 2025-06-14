import Link from "next/link";

// components/Header.tsx
export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-blue-600">MTK</a>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-blue-600">Hem</a>
          <a href="/tjanster" className="hover:text-blue-600">Tjänster</a>
          <a href="/boka" className="hover:text-blue-600">Boka</a>
          <a href="/kontakt" className="hover:text-blue-600">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}

