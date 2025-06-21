"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Layout from "./Layout";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold text-blue-600">MTK</a>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/"><a className="hover:text-blue-600">Hem</a></Link>
          <Link href="/tjanster"><a className="hover:text-blue-600">Tjänster</a></Link>
          <Link href="/boka"><a className="hover:text-blue-600">Boka</a></Link>
          <Link href="/about"><a className="hover:text-blue-600">Om oss</a></Link>
          <Link href="/kontakt"><a className="hover:text-blue-600">Kontakt</a></Link>
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
            <Link href="/"><a className="hover:text-blue-600">Hem</a></Link>
            <Link href="/tjanster"><a className="hover:text-blue-600">Tjänster</a></Link>
            <Link href="/boka"><a className="hover:text-blue-600">Boka</a></Link>
            <Link href="/about"><a className="hover:text-blue-600">Om oss</a></Link>
            <Link href="/kontakt"><a className="hover:text-blue-600">Kontakt</a></Link>
          </div>
        </nav>
      )}
    </header>
  );
}
