"use client";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/useReveal";
import { CountUpStat } from "@/components/ui/CountUpStat";

export default function About() {
  useReveal();
  const [activeTab, setActiveTab] = useState("who");

  const tabs = [
    { id: "who", label: "Who We Are", content: "W3AppDevelopers is a premium tech agency established by a team of dynamic and experienced professionals. We focus on delivering top-notch IT solutions." },
    { id: "what", label: "What We Do", content: "We design websites, build robust web and mobile applications, provide comprehensive SEO services, and craft winning digital marketing strategies." },
    { id: "how", label: "How We Do", content: "We follow an agile development methodology, ensuring transparency, regular communication, and high-quality deliverables that exceed expectations." },
    { id: "where", label: "Where We Serve", content: "Based in Coimbatore, we proudly serve clients across India and around the globe, empowering businesses in various industries." },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] pt-24 bg-white">
        <section className="bg-[#1a1a2e] py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/3.png')] bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 reveal">About <span className="text-[#F26522]">W3AppDevelopers</span></h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto reveal">Your trusted partner in digital transformation.</p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <span className="text-[#F26522] uppercase tracking-wider text-sm font-bold block mb-3">Our Story</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Building Digital Excellence</h2>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  W3AppDevelopers is a team of passionate tech enthusiasts dedicated to bringing your digital vision to life. Based in Coimbatore, we have spent years perfecting our craft in web design, app development, and digital marketing.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg mb-8">
                  We don't just build websites; we build scalable digital solutions that drive growth, enhance user experience, and create lasting impact for brands globally.
                </p>
              </div>
              <div className="reveal-right">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/webnox-team.jpg" alt="Our Team" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-lg card-hover text-center reveal-left">
                <Image src="/images/Mission-2.png" alt="Mission" width={80} height={80} className="mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-4">Our Mission</h3>
                <p className="text-slate-600 text-lg">To empower businesses with innovative, reliable, and secure digital solutions that streamline operations and accelerate growth.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg card-hover text-center reveal-right">
                <Image src="/images/Vision-2.png" alt="Vision" width={80} height={80} className="mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-4">Our Vision</h3>
                <p className="text-slate-600 text-lg">To be recognized globally as the most trusted tech partner, delivering unmatched value and setting industry benchmarks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-4 mb-10 reveal">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${activeTab === tab.id ? "bg-[#F26522] text-white shadow-lg" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-10 text-center reveal min-h-[200px] flex items-center justify-center">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                {tabs.find(t => t.id === activeTab)?.content}
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-[#1a1a2e] relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <CountUpStat value={500} label="Websites" suffix="+" />
              <CountUpStat value={400} label="Clients" suffix="+" />
              <CountUpStat value={15} label="Experts" suffix="+" />
              <CountUpStat value={8} label="Years" suffix="+" />
              <CountUpStat value={5} label="Products" suffix="+" />
              <CountUpStat value={10} label="Countries" suffix="+" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
