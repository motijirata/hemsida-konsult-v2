export default function Footer() {
  return (
    <footer className="bg-blue-950 bg-opacity-90 text-white text-center py-6 text-sm border-t border-blue-900 shadow-inner">
      &copy; {new Date().getFullYear()} MTK. Alla rättigheter förbehållna.
      <nav className="mt-2 space-x-4 text-xs">
  <a href="/integritetspolicy" className="hover:underline">Integritetspolicy</a>
  <a href="/kontakt" className="hover:underline">Kontakt</a>
</nav>

    </footer> 
    
    
  );
}
