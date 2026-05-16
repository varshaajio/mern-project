"use client";
import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useReveal } from "@/hooks/useReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  useReveal();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "Website Designing", message: ""
  });
  const [status, setStatus] = useState<{type: "idle"|"loading"|"success"|"error", message?: string}>({ type: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus({ type: "success", message: "Thank you! We will get back to you shortly." });
      setFormData({ name: "", email: "", phone: "", service: "Website Designing", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[100dvh] pt-24 bg-white">
        {/* Hero */}
        <section className="bg-[#1a1a2e] py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/01.png')] bg-cover bg-center" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 reveal">Get In Touch</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto reveal">We'd love to hear from you. Let's discuss your next project.</p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover reveal-left text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Phone className="text-[#F26522]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Phone Numbers</h3>
                <div className="space-y-2 text-slate-600 font-medium">
                  <p>+91 97865 57739</p>
                  <p>+91 63800 72252</p>
                  <p>+91 95851 25566</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover reveal text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Mail className="text-[#F26522]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Addresses</h3>
                <div className="space-y-2 text-slate-600 font-medium">
                  <p>contact@w3appdevelopers.com</p>
                  <p>sales@w3appdevelopers.com</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl card-hover reveal-right text-center">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-[#F26522]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Office Address</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  No 721/2, Venky complex, Second floor, cross-cut road, Seth Narang Das Layout, Coimbatore – 641 012
                </p>
              </div>
            </div>

            {/* Ratings Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-20 reveal">
              <Image src="/images/google-rating.png" alt="Google 4.8/5" width={150} height={50} className="object-contain" />
              <Image src="/images/Trustpilot.png" alt="Trustpilot 4.6/5" width={150} height={50} className="object-contain" />
              <Image src="/images/clutch.png" alt="Clutch 4.8/5" width={150} height={50} className="object-contain" />
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-12 reveal-left border border-slate-100">
                <h2 className="text-3xl font-black mb-8 text-slate-900">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                      <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] focus:border-transparent outline-none transition-all bg-white">
                        <option>Website Designing</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Ecommerce Development</option>
                        <option>Digital Marketing</option>
                        <option>SEO Services</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[#F26522] focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..." />
                  </div>
                  <button disabled={status.type === "loading"} type="submit" className="w-full bg-[#F26522] hover:bg-[#e05510] text-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:opacity-70">
                    {status.type === "loading" ? "Sending..." : "Submit Message"}
                  </button>
                  {status.message && (
                    <div className={`p-4 rounded-lg text-center font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {status.message}
                    </div>
                  )}
                </form>
              </div>

              <div className="reveal-right">
                <div className="bg-[#1a1a2e] rounded-2xl shadow-xl p-8 text-white h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26522] rounded-full blur-[80px] opacity-30" />
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Clock className="text-[#F26522]" />
                    Working Hours
                  </h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                      <span className="font-medium text-slate-300">Monday - Friday</span>
                      <span className="font-bold text-[#F26522]">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                      <span className="font-medium text-slate-300">Saturday</span>
                      <span className="font-bold text-[#F26522]">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                      <span className="font-medium text-slate-300">Sunday</span>
                      <span className="font-bold text-slate-500">Closed</span>
                    </div>
                  </div>
                  <div className="mt-12 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                    <h4 className="font-bold mb-2">Need immediate assistance?</h4>
                    <p className="text-slate-400 text-sm mb-4">Call our support team directly.</p>
                    <a href="tel:+919786557739" className="text-[#F26522] font-black text-xl hover:text-white transition-colors">
                      +91 97865 57739
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
