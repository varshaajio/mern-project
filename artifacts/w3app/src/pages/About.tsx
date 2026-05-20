import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About W3AppDevelopers</h1>
            <p className="text-lg text-slate-600">
              We are a passionate team of digital creators based in Erode, India, dedicated to building solutions that drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 relative">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <span className="text-slate-400 font-medium">Our Workspace</span>
                  </div>
                  {/* Ideally, put a real image here */}
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border hidden md:block">
                  <div className="text-4xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">Years of<br/>Excellence</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Founded as a web development company in Erode</h3>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  What started as a small team with a big vision has grown into a leading IT services company. We believe that every business, regardless of size, deserves access to world-class digital tools.
                </p>
                <p>
                  Today, we provide top-tier IT services using the latest technologies to deliver affordable and innovative solutions. From stunning websites to complex custom software, our expert team ensures every project meets the highest standards of quality.
                </p>
              </div>
              
              <ul className="mt-8 space-y-3">
                {["Expert team of developers and designers", "Modern technology stack", "Affordable and scalable services", "100% Client Satisfaction"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="rounded-full h-12 px-8">Work With Us</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To empower businesses with innovative, reliable, and scalable digital solutions that drive measurable growth and success in the modern digital landscape.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To be the most trusted technology partner globally, known for our technical excellence, creative design, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
