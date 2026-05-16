import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

const services = [
  "Web Development",
  "Mobile App Development",
  "Ecommerce Solutions",
  "Digital Marketing",
  "SEO Services",
  "AI Agent Development",
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/w3appdevelopers-logo.jpg"
                alt="W3AppDevelopers"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="text-xl font-black text-white">
                W3App<span className="text-[#F26522]">Developers</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              We are a premium web development, app creation, and digital marketing agency serving businesses of all sizes globally. We build brands, not just websites.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#F26522] hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-bold mb-5 border-b border-slate-700 pb-3">Company</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-slate-400 hover:text-[#F26522] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-5 border-b border-slate-700 pb-3">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-slate-400 text-sm flex items-center gap-2 hover:text-[#F26522] transition-colors cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-5 border-b border-slate-700 pb-3">Contact Info</h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#F26522] mt-0.5 shrink-0" />
                <span>No 721/2, Venky complex, Second floor, cross-cut road, Seth Narang Das Layout, Coimbatore – 641 012</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-[#F26522] shrink-0" />
                <div>
                  <div>+91 97865 57739</div>
                  <div>+91 63800 72252</div>
                  <div>+91 95851 25566</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-[#F26522] shrink-0" />
                <div>
                  <div>contact@w3appdevelopers.com</div>
                  <div>sales@w3appdevelopers.com</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-[#F26522] shrink-0" />
                <span>Mon – Sat: 9AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© 2026 W3AppDevelopers. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#F26522] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#F26522] transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-[#F26522] transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
