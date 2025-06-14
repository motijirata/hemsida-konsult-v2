import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-100 py-6 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href ="/">
            <h1 className="text-2xl cursor-bold">MTK</h1>
        </Link>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Hem</a>
          <a href="/tjanster" className="hover:underline">Tjänster</a>
          <a href="/boka" className="hover:underline">Boka</a>
          <a href="/kontakt" className="hover:underline">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
