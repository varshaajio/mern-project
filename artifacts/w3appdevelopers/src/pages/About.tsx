import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useReveal } from '@/hooks/use-reveal';
import { CountUp } from '@/components/ui/count-up';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function About() {
  useReveal();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 reveal">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">About <span className="text-brand">W3AppDevelopers</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Leading Web Development Company in Coimbatore delivering innovative and scalable digital solutions.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Top-Notch Website Designing & Web Development Company</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                W3AppDevelopers is a premium agency known for providing complete web design and development services. We believe in crafting digital experiences that resonate with your target audience and drive tangible business growth.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our expertise spans across cutting-edge technologies, ensuring that every project we deliver is robust, secure, and future-proof. From startups to enterprises, we are the trusted partner for digital transformation.
              </p>
            </div>
            <div className="reveal-right">
              <img src="/images/webnox-team.jpg" alt="Company Team" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center reveal-left card-hover">
              <img src="/images/Mission-2.png" alt="Mission" className="h-32 mx-auto mb-8 object-contain" />
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">To empower businesses globally by delivering innovative, high-quality, and scalable digital solutions that drive success and establish strong brand identities.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center reveal-right card-hover">
              <img src="/images/Vision-2.png" alt="Vision" className="h-32 mx-auto mb-8 object-contain" />
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">To be the world's most trusted and recognized digital agency, pioneering technological advancements and setting new standards in web and mobile app development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 reveal">Our Core Team</h2>
          <div className="max-w-4xl mx-auto reveal">
            <img src="/images/Our-Core-Team.png" alt="Core Team" className="rounded-2xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      {/* Info Tabs Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl reveal">
          <Tabs defaultValue="who" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-200 p-1 rounded-xl h-auto">
              <TabsTrigger value="who" className="rounded-lg py-3 font-semibold data-[state=active]:bg-brand data-[state=active]:text-white">Who We Are</TabsTrigger>
              <TabsTrigger value="what" className="rounded-lg py-3 font-semibold data-[state=active]:bg-brand data-[state=active]:text-white">What We Do</TabsTrigger>
              <TabsTrigger value="how" className="rounded-lg py-3 font-semibold data-[state=active]:bg-brand data-[state=active]:text-white">How We Do</TabsTrigger>
              <TabsTrigger value="where" className="rounded-lg py-3 font-semibold data-[state=active]:bg-brand data-[state=active]:text-white">Where We Serve</TabsTrigger>
            </TabsList>
            <div className="bg-white mt-6 p-8 rounded-2xl shadow-sm border border-slate-100 min-h-[200px]">
              <TabsContent value="who" className="m-0 text-slate-600 text-lg leading-relaxed">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">A Team of Digital Innovators</h3>
                We are a collective of passionate designers, developers, and marketers dedicated to creating impactful digital experiences. Our team brings years of industry expertise and a forward-thinking approach to every project we undertake.
              </TabsContent>
              <TabsContent value="what" className="m-0 text-slate-600 text-lg leading-relaxed">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Comprehensive Digital Solutions</h3>
                From bespoke website design and robust enterprise applications to aggressive digital marketing campaigns, we offer end-to-end solutions that elevate brands and drive measurable business growth in the digital landscape.
              </TabsContent>
              <TabsContent value="how" className="m-0 text-slate-600 text-lg leading-relaxed">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Proven Methodology</h3>
                We follow a rigorous, agile process: Discover, Strategize, Design, Develop, and Optimize. By collaborating closely with our clients at every step, we ensure the final product exceeds expectations and aligns perfectly with business goals.
              </TabsContent>
              <TabsContent value="where" className="m-0 text-slate-600 text-lg leading-relaxed">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Global Reach, Local Expertise</h3>
                Based in Coimbatore, India, our reach is truly global. We serve startups, SMEs, and large enterprises across 10+ countries, delivering world-class digital solutions that resonate across different markets and cultures.
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center reveal">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Awards & Recognition</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-80 items-center">
            <img src="/images/nassconn.webp" alt="Nasscom" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/images/ficci.webp" alt="FICCI" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/images/rai.webp" alt="RAI" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/images/inc.webp" alt="INC" className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand text-white relative">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal">
           <div>
              <div className="text-5xl font-black mb-2"><CountUp end={500} suffix="+" /></div>
              <div className="text-lg font-medium opacity-90 uppercase">Projects</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2"><CountUp end={400} suffix="+" /></div>
              <div className="text-lg font-medium opacity-90 uppercase">Clients</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2"><CountUp end={15} suffix="+" /></div>
              <div className="text-lg font-medium opacity-90 uppercase">Awards</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2"><CountUp end={10} suffix="+" /></div>
              <div className="text-lg font-medium opacity-90 uppercase">Countries</div>
            </div>
        </div>
      </section>
    </Layout>
  );
}
