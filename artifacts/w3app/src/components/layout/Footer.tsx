import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@assets/Untitled-Design-1_1779212117854.jpg";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white p-2 rounded inline-flex">
                 <img src={logo} alt="W3AppDevelopers Logo" className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-sm mb-6 text-slate-400">
              Innovative Digital Solutions for Business Growth. We accelerate growth through software development, app creation, graphic design, and digital marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors text-sm">Products</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/web-development" className="hover:text-primary transition-colors text-sm">Web Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-primary transition-colors text-sm">App Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-primary transition-colors text-sm">Digital Marketing</Link></li>
              <li><Link href="/services/graphic-design" className="hover:text-primary transition-colors text-sm">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Mullamparappu, Erode, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919698548633" className="hover:text-primary transition-colors">+91 96985 48633</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@w3appdevelopers.com" className="hover:text-primary transition-colors">info@w3appdevelopers.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} W3AppDevelopers. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
