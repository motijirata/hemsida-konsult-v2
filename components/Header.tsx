"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Layout from "@/components/Layout";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-950 bg-opacity-90 text-white shadow-md backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-blue-600">MTK</a>
        

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-blue-600">Hem</a>
          <a href="/tjanster" className="hover:text-blue-600">Tjänster</a>
          <a href="/boka" className="hover:text-blue-600">Boka</a>
          <a href="/kontakt" className="hover:text-blue-600">Kontakt</a>
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

      {/* Mobile menu dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-blue-600 text-white  border-t shadow-sm">
          <div className="px-4 py-2 space-y-2 flex flex-col text-sm font-medium">
            <a href="/" className="hover:text-white">Hem</a>
            <a href="/tjanster" className="hover:white">Tjänster</a>
            <a href="/boka" className="hover:text-white">Boka</a>
            <a href="/kontakt" className="hover:text-white">Kontakt</a>
          </div>
        </nav>
      )}
    </header>
  );
}
