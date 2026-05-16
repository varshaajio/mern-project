"use client";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  { id: 1, title: "Websites & App Portfolio", cat: "Web Design", img: "/images/Websites-App-Portfolio.png" },
  { id: 2, title: "Mobile App Portfolio", cat: "Mobile Apps", img: "/images/Mobile-App-Portfolio.png" },
  { id: 3, title: "SEO Portfolio", cat: "Digital Marketing", img: "/images/SEO-portfolio.png" },
  { id: 4, title: "PPC Portfolio", cat: "Digital Marketing", img: "/images/PPC-Portfolio.png" },
  { id: 5, title: "W3App Inventory System", cat: "Web Design", img: "/images/webnox-inventory.png" },
  { id: 6, title: "Easy Field Service App", cat: "Mobile Apps", img: "/images/easy-field-service-1.png" },
  { id: 7, title: "We Foodie Platform", cat: "Mobile Apps", img: "/images/we-foodie.png" },
  { id: 8, title: "We Jobs Portal", cat: "Web Design", img: "/images/we-jobs.png" },
  { id: 9, title: "WooMart Ecommerce", cat: "Ecommerce", img: "/images/woomart.png" },
  { id: 10, title: "Magento Store", cat: "Ecommerce", img: "/images/magento.png" },
  { id: 11, title: "WordPress Site", cat: "Web Design", img: "/images/wordpress-1.png" },
  { id: 12, title: "Digital Marketing Campaign", cat: "Digital Marketing", img: "/images/Best-Digital-Marketing-Agency.png" },
];

const categories = ["All", "Web Design", "Mobile Apps", "Ecommerce", "Digital Marketing"];

export default function Portfolio() {
  useReveal();
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.cat === filter);

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] pt-24 bg-white">
        <section className="bg-[#1a1a2e] py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/5.png')] bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 reveal">Our Portfolio</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto reveal">Explore our recent work and success stories.</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                    filter === cat 
                      ? "bg-[#F26522] text-white shadow-lg" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((p) => (
                <div key={p.id} className="group relative rounded-2xl overflow-hidden shadow-lg h-80 reveal bg-white border border-slate-100">
                  <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-[#F26522] font-bold text-sm mb-2">{p.cat}</span>
                    <h3 className="text-white text-2xl font-black translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{p.title}</h3>
                  </div>
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
