"use client";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/useReveal";
import { CountUpStat } from "@/components/ui/CountUpStat";
import { useState } from "react";
import { 
  Monitor, Code, Smartphone, ShoppingCart, TrendingUp, Search, 
  Layers, Zap, Users, ShieldCheck, Cpu, Headphones, ChevronDown
} from "lucide-react";

export default function Home() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    { icon: Monitor, title: "Website Designing", desc: "We design websites that are creative, mobile responsive, lag-free, eye-catching, and SEO friendly. We also provide custom mobile web design services at an affordable cost." },
    { icon: Code, title: "Web Development", desc: "We work to create highly optimized mobile-responsive web applications across diverse industries, ensuring optimal performance." },
    { icon: Smartphone, title: "Mobile App Development", desc: "We create powerful, user-friendly mobile applications for iOS and Android platforms that elevate your business." },
    { icon: ShoppingCart, title: "Ecommerce Development", desc: "Utilizing our expertise in shopping cart development, well-structured e-commerce front stores, and implementing our unique web design services to maximize leads." },
    { icon: TrendingUp, title: "Digital Marketing", desc: "Providing data-driven digital marketing strategies to boost brand visibility, attract targeted traffic, and convert visitors into loyal customers." },
    { icon: Search, title: "SEO", desc: "Industry-specific SEO services to rank your website higher on search engines, drive organic traffic, and improve online visibility." }
  ];

  const reasons = [
    { icon: Layers, title: "All in One Services" },
    { icon: Zap, title: "Affordable & Scalable" },
    { icon: Users, title: "Expert Team" },
    { icon: ShieldCheck, title: "Reliable & Secure" },
    { icon: Cpu, title: "Latest Technology" },
    { icon: Headphones, title: "24/7 Support" }
  ];

  const faqs = [
    { q: "How much does a website cost?", a: "Website costs vary based on requirements. We offer affordable packages starting from basic static sites to complex dynamic web applications." },
    { q: "How long does it take to build a website?", a: "Typically 1-4 weeks for a standard website, and 4-8 weeks for complex projects." },
    { q: "Do you provide SEO services?", a: "Yes! We offer comprehensive SEO services including on-page optimization, keyword research, content strategy, and link building." },
    { q: "Can you redesign my existing website?", a: "Absolutely! We specialize in website redesigns that modernize your online presence while preserving your brand identity." },
    { q: "Do you provide ongoing support after launch?", a: "Yes, we offer post-launch support and maintenance packages to ensure your website runs smoothly." },
    { q: "Do you work with clients outside Coimbatore?", a: "Yes! We serve clients across India and internationally. Our team communicates effectively online." },
    { q: "What technologies do you use?", a: "React, Next.js, Node.js, MongoDB, PHP, WordPress, Laravel, and many more modern technologies." },
    { q: "How do I get started?", a: "Simply contact us via phone, email, or the contact form. We'll schedule a free consultation to understand your requirements." }
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="bg-[#1a1a2e] pt-32 pb-20 lg:pt-40 lg:pb-32 relative text-white">
          <div className="absolute inset-0 bg-[url('/images/01.png')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 text-[#F26522] font-bold text-sm tracking-wide mb-6 border border-slate-700">
                  Innovative Digital Solutions
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                  WEBSITE DESIGN & <span className="text-[#F26522]">DEVELOPMENT</span> COMPANY IN COIMBATORE
                </h1>
                <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                  We build scalable digital products that drive results. From powerful web applications to high-converting marketing campaigns.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-[#F26522] hover:bg-[#e05510] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all">
                    Start Your Project
                  </Link>
                  <Link href="/portfolio" className="border-2 border-[#F26522] text-[#F26522] hover:bg-[#F26522] hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                    Our Work
                  </Link>
                </div>
              </div>
              <div className="animate-slide-right flex justify-center">
                <Image 
                  src="/images/Online-Marketing-Company-in-Coimbatore.png" 
                  alt="Web Development Agency" 
                  width={600} 
                  height={500} 
                  className="animate-float object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <section className="bg-slate-900 py-6 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-16 items-center text-slate-400 font-bold text-xl uppercase tracking-widest min-w-max px-8">
            <span>Shopify Partner</span><span>•</span>
            <span>AWS Partner</span><span>•</span>
            <span>Google Partner</span><span>•</span>
            <span>Microsoft Partner</span><span>•</span>
            <span>Clutch Top Agency</span><span>•</span>
            <span>Goodfirms Top Company</span><span>•</span>
            <span>Shopify Partner</span><span>•</span>
            <span>AWS Partner</span><span>•</span>
            <span>Google Partner</span><span>•</span>
            <span>Microsoft Partner</span><span>•</span>
            <span>Clutch Top Agency</span><span>•</span>
            <span>Goodfirms Top Company</span>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <span className="text-[#F26522] uppercase tracking-wider text-sm font-bold block mb-3">Our Core Services</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">What We Can Do For You</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl card-hover reveal">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                    <s.icon className="text-[#F26522]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                  <Link href="/services" className="text-[#F26522] font-bold hover:text-[#e05510] flex items-center gap-2">
                    Learn More <span className="text-lg">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-[#1a1a2e] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/2.png')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <CountUpStat value={500} label="Websites Designed" suffix="+" />
              <CountUpStat value={400} label="Clients" suffix="+" />
              <CountUpStat value={15} label="Experts" suffix="+" />
              <CountUpStat value={8} label="Years Experience" suffix="+" />
              <CountUpStat value={5} label="Products" suffix="+" />
              <CountUpStat value={10} label="Countries" suffix="+" />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <span className="text-[#F26522] uppercase tracking-wider text-sm font-bold block mb-3">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">Your Trusted Tech Partner</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {reasons.map((r, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:bg-[#F26522] group transition-all duration-300 card-hover text-center reveal">
                  <div className="w-12 h-12 bg-slate-50 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                    <r.icon className="text-[#F26522] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-white transition-colors">{r.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-brand text-white text-center">
          <div className="container mx-auto px-4 reveal">
            <h2 className="text-3xl md:text-5xl font-black mb-8 max-w-4xl mx-auto leading-tight">
              We Don't Just Build Websites, We Build Brands
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#F26522] hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all">
                Let's Talk
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#F26522] px-8 py-4 rounded-full font-bold text-lg transition-all">
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16 reveal">
              <span className="text-[#F26522] uppercase tracking-wider text-sm font-bold block mb-3">Questions</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-xl overflow-hidden reveal">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 text-left font-bold text-lg text-slate-900 flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    {faq.q}
                    <ChevronDown className={`transform transition-transform ${openFaq === i ? "rotate-180 text-[#F26522]" : "text-slate-400"}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 py-4 text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
