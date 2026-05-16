import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { useReveal } from '@/hooks/use-reveal';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  useReveal();

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 reveal">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Get In <span className="text-brand">Touch</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Let's discuss how we can help your business grow digitally.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-6 reveal-left">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Phone</h4>
                  <div className="text-slate-600 space-y-1">
                    <p>+91 97865 57739</p>
                    <p>+91 63800 72252</p>
                    <p>+91 95851 25566</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Email</h4>
                  <div className="text-slate-600 space-y-1">
                    <p>contact@w3appdevelopers.com</p>
                    <p>sales@w3appdevelopers.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Location</h4>
                  <div className="text-slate-600 leading-relaxed">
                    No 721/2, Venky complex, Second floor, cross-cut road, Seth Narang Das Layout, Coimbatore – 641 012
                  </div>
                </div>
              </div>

              {/* Ratings */}
              <div className="bg-slate-900 p-8 rounded-2xl text-white mt-8">
                <h4 className="font-bold text-xl mb-6 text-center">Trusted By Clients Worldwide</h4>
                <div className="flex justify-between items-center px-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand mb-1">4.8/5</div>
                    <img src="/images/google-rating.png" alt="Google" className="h-6 object-contain" />
                  </div>
                  <div className="w-px h-12 bg-slate-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand mb-1">4.6/5</div>
                    <img src="/images/Trustpilot.png" alt="Trustpilot" className="h-6 object-contain" />
                  </div>
                  <div className="w-px h-12 bg-slate-700"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand mb-1">4.8/5</div>
                    <img src="/images/clutch.png" alt="Clutch" className="h-6 object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 reveal-right">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
              <form className="grid gap-6" onSubmit={e => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="font-semibold text-slate-700">Your Name</label>
                    <input type="text" className="w-full border border-slate-200 rounded-xl px-5 py-4 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-semibold text-slate-700">Email Address</label>
                    <input type="email" className="w-full border border-slate-200 rounded-xl px-5 py-4 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="font-semibold text-slate-700">Phone Number</label>
                    <input type="tel" className="w-full border border-slate-200 rounded-xl px-5 py-4 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all" placeholder="+1 (555) 000-0000" required />
                  </div>
                  <div className="grid gap-2">
                    <label className="font-semibold text-slate-700">Service Required</label>
                    <select className="w-full border border-slate-200 rounded-xl px-5 py-4 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all" required>
                      <option value="">Select a service...</option>
                      <option value="web-design">Website Designing</option>
                      <option value="web-dev">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ecommerce">Ecommerce Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="seo">SEO Services</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label className="font-semibold text-slate-700">Your Message</label>
                  <textarea className="w-full border border-slate-200 rounded-xl px-5 py-4 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all h-40 resize-none" placeholder="Tell us about your project..." required></textarea>
                </div>

                <Button type="submit" className="bg-brand hover:bg-orange-600 text-white font-bold rounded-full py-7 text-lg shadow-xl orange-glow mt-4">
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
