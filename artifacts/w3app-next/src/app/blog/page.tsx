"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/useReveal";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { id: 1, title: "10 Essential Web Design Trends for 2026", cat: "Web Design", img: "/images/SEO.jpg", excerpt: "Discover the latest web design trends that will dominate 2026 and how to implement them to stay ahead.", date: "Oct 12, 2025" },
  { id: 2, title: "How SEO Can Transform Your Business in 2026", cat: "SEO", img: "/images/Search-Engine-Optimization-1.png", excerpt: "A comprehensive guide on leveraging search engine optimization to drive massive organic growth.", date: "Oct 05, 2025" },
  { id: 3, title: "The Complete Guide to Digital Marketing", cat: "Digital Marketing", img: "/images/Digital-Marketing.png", excerpt: "Everything you need to know about creating a successful digital marketing strategy from scratch.", date: "Sep 28, 2025" },
  { id: 4, title: "Why Your Business Needs a Mobile App", cat: "App Development", img: "/images/mobile-app.png", excerpt: "Explore the benefits of custom mobile applications and how they improve customer retention.", date: "Sep 20, 2025" },
  { id: 5, title: "Building High-Converting Ecommerce Websites", cat: "Web Design", img: "/images/ecomm.png", excerpt: "Key strategies for designing ecommerce platforms that maximize sales and minimize cart abandonment.", date: "Sep 15, 2025" },
  { id: 6, title: "WordPress vs Custom Web Development", cat: "Web Design", img: "/images/Hire-WordPress-Developer.png", excerpt: "An in-depth comparison to help you choose the right approach for your next web project.", date: "Sep 08, 2025" },
];

const categories = ["All", "Web Design", "SEO", "Digital Marketing", "App Development"];

export default function Blog() {
  useReveal();
  const [filter, setFilter] = useState("All");

  const filteredPosts = filter === "All" ? posts : posts.filter(p => p.cat === filter);

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] pt-24 bg-slate-50">
        <section className="bg-[#1a1a2e] py-24 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 reveal">Latest Blog Posts</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto reveal">Insights, strategies, and updates from our experts.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                    filter === cat 
                      ? "bg-[#F26522] text-white shadow-lg" 
                      : "bg-white text-slate-600 hover:bg-slate-100 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover reveal flex flex-col">
                  <div className="relative h-56 w-full">
                    <Image src={post.img} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-[#F26522] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {post.cat}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-3">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link href="#" className="flex items-center gap-2 text-[#F26522] font-bold hover:text-[#e05510] transition-colors mt-auto w-fit">
                      Read More <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
