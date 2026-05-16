"use client";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/useReveal";
import { 
  Monitor, Code, Smartphone, ShoppingCart, TrendingUp, Search, 
  MousePointerClick, Globe, Server, Cpu, Cloud, Bot, ArrowRight 
} from "lucide-react";

export default function Services() {
  useReveal();

  const services = [
    { name: "Website Designing", icon: Monitor, img: "/images/Dedicated-Web-Designer.png", desc: "Creative, responsive, and lag-free website design services tailored to your brand identity." },
    { name: "Web Development", icon: Code, img: "/images/Dedicated-Web-Developer.png", desc: "Highly optimized web applications built with robust modern frameworks." },
    { name: "Mobile App Development", icon: Smartphone, img: "/images/mobile-app.png", desc: "Powerful native and cross-platform apps for iOS and Android devices." },
    { name: "Ecommerce Development", icon: ShoppingCart, img: "/images/ecomm.png", desc: "Scalable online stores with seamless payment gateways and inventory management." },
    { name: "Digital Marketing", icon: TrendingUp, img: "/images/Digital-Marketing.png", desc: "Data-driven strategies to boost brand visibility and attract targeted traffic." },
    { name: "SEO Services", icon: Search, img: "/images/Search-Engine-Optimization-1.png", desc: "Advanced SEO techniques to rank higher and drive organic growth." },
    { name: "Google Ads", icon: MousePointerClick, img: "/images/google-ads.png", desc: "Targeted PPC campaigns to maximize ROI and generate instant leads." },
    { name: "WordPress Development", icon: Globe, img: "/images/Hire-WordPress-Developer.png", desc: "Custom WordPress themes, plugins, and full-scale CMS development." },
    { name: "Laravel Development", icon: Server, img: "/images/Hire-Laravel-Developer.png", desc: "Secure and complex enterprise solutions using the Laravel PHP framework." },
    { name: "Software Development", icon: Cpu, img: "/images/Software-dev.png", desc: "Bespoke software solutions customized to automate your business processes." },
    { name: "SaaS App Development", icon: Cloud, img: "/images/Saas-App-development.png", desc: "Cloud-based software as a service platform development and deployment." },
    { name: "AI Agent Development", icon: Bot, img: "/images/ai-agent.png", desc: "Intelligent AI agents and chatbot integration for automated customer support." }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] pt-24 bg-slate-50">
        <section className="bg-[#1a1a2e] py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/4.png')] bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 reveal">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto reveal">
              Comprehensive digital solutions to help your business scale, engage, and dominate the digital landscape.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 card-hover reveal border border-slate-100 flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 mb-6">
                    <Image src={s.img} alt={s.name} fill className="object-contain" />
                  </div>
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                    <s.icon className="text-[#F26522]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-1">{s.desc}</p>
                  <Link href="/contact" className="text-[#F26522] font-bold hover:text-[#e05510] flex items-center gap-2 mt-auto">
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 gradient-brand text-white text-center">
          <div className="container mx-auto px-4 reveal">
            <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Start Your Project?</h2>
            <Link href="/contact" className="inline-block bg-white text-[#F26522] hover:bg-slate-100 px-10 py-4 rounded-full font-bold text-xl shadow-lg transition-all">
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
