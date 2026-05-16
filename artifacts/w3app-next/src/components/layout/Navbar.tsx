"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const transparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent py-5" : "bg-white shadow-md py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50">
          <Image
            src="/images/w3appdevelopers-logo.jpg"
            alt="W3AppDevelopers"
            width={48}
            height={48}
            className="rounded-lg object-cover"
          />
          <span
            className={`text-lg font-black tracking-tight hidden sm:block transition-colors ${
              transparent ? "text-white" : "text-gray-900"
            }`}
          >
            W3App<span className="text-[#F26522]">Developers</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-semibold transition-colors hover:text-[#F26522] ${
                pathname === link.path
                  ? "text-[#F26522]"
                  : transparent
                  ? "text-white"
                  : "text-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#F26522] hover:bg-[#e05510] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md transition-all hover:shadow-orange-200 hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className={`lg:hidden z-50 p-2 transition-colors ${
            isScrolled || mobileOpen ? "text-slate-800" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-8 transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-xl font-bold transition-colors ${
                pathname === link.path ? "text-[#F26522]" : "text-slate-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 bg-[#F26522] text-white py-4 rounded-full text-lg font-bold text-center"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
