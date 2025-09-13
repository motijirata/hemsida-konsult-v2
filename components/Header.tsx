"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          KTMO
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">Hem</Link>
          <Link href="/tjanster" className="hover:text-blue-600">Tjänster</Link>
          <Link href="/boka" className="hover:text-blue-600">Boka</Link>
          <Link href="/about" className="hover:text-blue-600">Om oss</Link>
          <Link href="/kontakt" className="hover:text-blue-600">Kontakt</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-sm">
          <div className="px-4 py-4 space-y-3 flex flex-col text-sm font-medium text-gray-800">
            <Link href="/" className="hover:text-blue-600">Hem</Link>
            <Link href="/tjanster" className="hover:text-blue-600">Tjänster</Link>
            <Link href="/boka" className="hover:text-blue-600">Boka</Link>
            <Link href="/about" className="hover:text-blue-600">Om oss</Link>
            <Link href="/kontakt" className="hover:text-blue-600">Kontakt</Link>
          </div>
        </nav>
      )}
    </header>
  );
}