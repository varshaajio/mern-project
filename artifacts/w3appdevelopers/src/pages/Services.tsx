import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { useReveal } from '@/hooks/use-reveal';

export function Services() {
  useReveal();

  const services = [
    { title: "Website Designing", img: "/images/Dedicated-Web-Designer.png", desc: "Crafting visually stunning, user-centric interfaces." },
    { title: "Web Development", img: "/images/Dedicated-Web-Developer.png", desc: "Custom, scalable web applications built with modern stacks." },
    { title: "Mobile App Development", img: "/images/mobile-app.png", desc: "High-performance iOS and Android applications." },
    { title: "Ecommerce Development", img: "/images/ecomm.png", desc: "End-to-end online store solutions that drive sales." },
    { title: "Digital Marketing", img: "/images/Digital-Marketing.png", desc: "Strategic marketing campaigns to grow your brand." },
    { title: "SEO Services", img: "/images/Search-Engine-Optimization-1.png", desc: "Data-driven SEO to boost your organic rankings." },
    { title: "Google Ads", img: "/images/google-ads.png", desc: "Targeted PPC campaigns for immediate ROI." },
    { title: "WordPress Development", img: "/images/Hire-WordPress-Developer.png", desc: "Custom themes and robust WordPress solutions." },
    { title: "Laravel Development", img: "/images/Hire-Laravel-Developer.png", desc: "Enterprise-grade PHP applications using Laravel." },
    { title: "Software Development", img: "/images/Software-dev.png", desc: "Bespoke software solutions for complex business needs." },
    { title: "SaaS App Development", img: "/images/Saas-App-development.png", desc: "Scalable cloud-based SaaS platform development." },
    { title: "AI Agent Development", img: "/images/ai-agent.png", desc: "Intelligent automation and AI agent integrations." },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 reveal">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Our <span className="text-brand">Services</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Comprehensive digital solutions engineered for growth and performance.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover reveal" style={{ transitionDelay: `${(index % 3) * 100}ms` }}>
                <div className="h-48 bg-slate-100 p-6 flex items-center justify-center border-b border-slate-50">
                  <img src={service.img} alt={service.title} className="max-h-full object-contain mix-blend-multiply" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
