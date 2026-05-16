import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useReveal } from '@/hooks/use-reveal';

export function Portfolio() {
  useReveal();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Design', 'Mobile Apps', 'Ecommerce', 'Digital Marketing'];

  const projects = [
    { title: "Websites & App Portfolio", category: "Web Design", image: "/images/Websites-App-Portfolio.png" },
    { title: "Mobile App Portfolio", category: "Mobile Apps", image: "/images/Mobile-App-Portfolio.png" },
    { title: "SEO Portfolio", category: "Digital Marketing", image: "/images/SEO-portfolio.png" },
    { title: "PPC Portfolio", category: "Digital Marketing", image: "/images/PPC-Portfolio.png" },
    { title: "Webnox Inventory", category: "Web Design", image: "/images/webnox-inventory.png" },
    { title: "Easy Field Service", category: "Mobile Apps", image: "/images/easy-field-service-1.png" },
    { title: "We Foodie", category: "Mobile Apps", image: "/images/we-foodie.png" },
    { title: "We Jobs", category: "Web Design", image: "/images/we-jobs.png" },
    { title: "WooMart", category: "Ecommerce", image: "/images/woomart.png" }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 reveal">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Our <span className="text-brand">Portfolio</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Explore our diverse range of successful digital projects.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filter === cat 
                    ? 'bg-brand text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden shadow-sm border border-slate-100 reveal">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-wider uppercase border-2 border-white px-6 py-2 rounded-full">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-white group-hover:bg-slate-50 transition-colors">
                  <div className="text-sm font-semibold text-brand mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
