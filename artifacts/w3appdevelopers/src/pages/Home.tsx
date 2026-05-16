import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { CountUp } from "@/components/ui/count-up";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Search,
  MousePointerClick,
  Code,
  Server,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Home() {
  useReveal();

  const services = [
    {
      title: "Website Designing",
      icon: <Monitor size={32} />,
      desc: "Stunning, responsive designs that capture your brand essence.",
    },
    {
      title: "Web Development",
      icon: <Code size={32} />,
      desc: "Robust, scalable, and secure web applications.",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone size={32} />,
      desc: "Native and cross-platform mobile experiences.",
    },
    {
      title: "Ecommerce Development",
      icon: <ShoppingCart size={32} />,
      desc: "High-converting online stores.",
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp size={32} />,
      desc: "Data-driven marketing to scale your growth.",
    },
    {
      title: "SEO",
      icon: <Search size={32} />,
      desc: "Rank higher and get organic traffic.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl reveal-left">
            <div className="inline-block px-4 py-2 bg-brand/20 border border-brand/50 rounded-full text-brand font-semibold text-sm mb-6 uppercase tracking-wider">
              Innovative Digital Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              WEBSITE DESIGN &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-orange-400">
                DEVELOPMENT
              </span>{" "}
              COMPANY IN COIMBATORE
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              We don't just build websites; we build scalable digital
              businesses. Partner with a top-tier agency to transform your
              online presence and accelerate your growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-brand hover:bg-orange-600 text-white h-14 px-8 rounded-full text-lg font-bold shadow-lg orange-glow transition-all">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-slate-900 bg-white/10 hover:bg-white hover:text-slate-900 h-14 px-8 rounded-full text-lg font-bold transition-all"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative reveal-right">
            <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full"></div>
            <img
              src="/images/Online-Marketing-Company-in-Coimbatore.png"
              alt="Digital Marketing"
              className="w-full h-auto object-contain animate-float drop-shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Partner Marquee */}
      <div className="py-6 bg-slate-800 border-y border-slate-700 overflow-hidden flex items-center">
        <div className="w-full flex space-x-16 animate-marquee whitespace-nowrap opacity-70">
          {[1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <span className="text-white text-xl font-bold flex items-center gap-2">
                <CheckCircle className="text-brand" size={24} /> Shopify Partner
              </span>
              <span className="text-white text-xl font-bold flex items-center gap-2">
                <CheckCircle className="text-brand" size={24} /> AWS Partner
              </span>
              <span className="text-white text-xl font-bold flex items-center gap-2">
                <CheckCircle className="text-brand" size={24} /> Google Partner
              </span>
              <span className="text-white text-xl font-bold flex items-center gap-2">
                <CheckCircle className="text-brand" size={24} /> Meta Business
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-brand text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="reveal">
              <div className="text-5xl md:text-6xl font-black mb-2">
                <CountUp end={500} suffix="+" />
              </div>
              <div className="text-lg font-medium opacity-90 uppercase tracking-wide">
                Websites Designed
              </div>
            </div>
            <div className="reveal">
              <div className="text-5xl md:text-6xl font-black mb-2">
                <CountUp end={400} suffix="+" />
              </div>
              <div className="text-lg font-medium opacity-90 uppercase tracking-wide">
                Happy Clients
              </div>
            </div>
            <div className="reveal">
              <div className="text-5xl md:text-6xl font-black mb-2">
                <CountUp end={15} suffix="+" />
              </div>
              <div className="text-lg font-medium opacity-90 uppercase tracking-wide">
                Expert Team
              </div>
            </div>
            <div className="reveal">
              <div className="text-5xl md:text-6xl font-black mb-2">
                <CountUp end={8} suffix="+" />
              </div>
              <div className="text-lg font-medium opacity-90 uppercase tracking-wide">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h4 className="text-brand font-bold uppercase tracking-wider mb-2">
              What We Do
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Premium Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive digital solutions tailored to elevate your business
              in the modern digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 card-hover reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="text-brand font-semibold flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Learn more <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-slate-600">
              Building scalable solutions with modern tech stacks.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 reveal">
            {[
              "HTML5",
              "CSS3",
              "React",
              "Node.js",
              "PHP",
              "WordPress",
              "MongoDB",
              "MySQL",
              "Laravel",
              "CodeIgniter",
            ].map((tech) => (
              <div
                key={tech}
                className="text-xl font-bold text-slate-800 flex items-center gap-2"
              >
                <Code size={24} className="text-brand" /> {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-10 reveal">
          <h2 className="text-3xl font-bold text-slate-900">
            Trusted By Industry Leaders
          </h2>
        </div>
        <div className="flex items-center">
          <div className="w-full flex space-x-16 animate-marquee whitespace-nowrap opacity-60">
            {[1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <span className="text-slate-800 text-2xl font-bold">
                  Ganga Hospitals
                </span>
                <span className="text-slate-800 text-2xl font-bold">
                  Mahendra Water Utilities
                </span>
                <span className="text-slate-800 text-2xl font-bold">
                  Shanthi Gears
                </span>
                <span className="text-slate-800 text-2xl font-bold">
                  Native Indian Organics
                </span>
                <span className="text-slate-800 text-2xl font-bold">
                  Medwin Hospital
                </span>
                <span className="text-slate-800 text-2xl font-bold">SNS</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full blur-[150px] opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8">
            We Don't Just Build Websites,
            <br />
            <span className="text-brand">We Build Brands.</span>
          </h2>
          <Link href="/contact">
            <Button className="bg-brand hover:bg-orange-600 text-white h-16 px-10 rounded-full text-xl font-bold shadow-2xl orange-glow transition-all">
              Let's Talk About Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <h4 className="text-brand font-bold uppercase tracking-wider mb-2">
                Why Choose Us
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Built on Trust, Driven by Results
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We combine industry-leading technology with creative brilliance
                to deliver solutions that are not just beautiful, but
                strategically designed to convert and scale.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Expert Team",
                    icon: <CheckCircle className="text-brand" />,
                  },
                  {
                    title: "Affordable & Scalable",
                    icon: <CheckCircle className="text-brand" />,
                  },
                  {
                    title: "Latest Technology",
                    icon: <CheckCircle className="text-brand" />,
                  },
                  {
                    title: "24/7 Support",
                    icon: <CheckCircle className="text-brand" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg font-semibold text-slate-800"
                  >
                    {item.icon}
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal-right">
              <div className="absolute inset-0 bg-brand rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img
                src="/images/Our-Core-Team.png"
                alt="Our Team"
                className="rounded-3xl relative z-10 w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100 reveal">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-slate-100"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-brand">
                  How long does it take to build a website?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  The timeline varies depending on the complexity of the
                  project. A standard corporate website typically takes 3-4
                  weeks, while an ecommerce or custom web application may take
                  8-12 weeks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-b border-slate-100"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-brand">
                  Do you provide ongoing support after launch?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Yes, we offer comprehensive maintenance and support packages
                  to ensure your website remains secure, up-to-date, and
                  performs optimally at all times.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border-b border-slate-100"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-brand">
                  Will my website be mobile-friendly and SEO optimized?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  Absolutely. Every website we build is 100% responsive
                  (mobile-friendly) and built with technical SEO best practices
                  to ensure a strong foundation for search engine rankings.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 reveal">
            <h4 className="text-brand font-bold uppercase tracking-wider mb-2">
              Testimonials
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 reveal card-hover"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 text-orange-400 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  "Working with W3AppDevelopers was a game changer for our
                  business. They delivered a stunning website that significantly
                  increased our conversions. Highly recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                    JD
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">John Doe</h5>
                    <span className="text-sm text-slate-500">
                      CEO, TechCorp
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Contact us today to discuss your ideas. Our team of experts is
                ready to transform your vision into reality.
              </p>
              <div className="space-y-4 text-slate-300">
                <p className="flex items-center gap-3">
                  <span className="text-brand">📍</span> Coimbatore, India
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-brand">📞</span> +91 97865 57739
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-brand">✉️</span>{" "}
                  contact@w3appdevelopers.com
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl reveal-right">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                />
                <select
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="web">Web Development</option>
                  <option value="app">Mobile App</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
                <textarea
                  placeholder="Message"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-brand"
                  required
                ></textarea>
                <Button className="w-full bg-brand hover:bg-orange-600 text-white font-bold py-6 rounded-lg">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
