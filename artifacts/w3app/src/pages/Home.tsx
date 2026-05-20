import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Megaphone, PenTool, GraduationCap, Code } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Graphic Design",
      desc: "Create visually stunning designs that captivate, engage, and elevate your brand.",
      icon: PenTool,
    },
    {
      title: "Digital Marketing",
      desc: "Boost your brand's online presence with data-driven digital marketing strategies.",
      icon: Megaphone,
    },
    {
      title: "Web Development",
      desc: "Build stunning, high-performance websites tailored to your business needs.",
      icon: Monitor,
    },
    {
      title: "App Development",
      desc: "Create powerful, user-friendly mobile apps to elevate your business.",
      icon: Smartphone,
    },
    {
      title: "Corporate Training",
      desc: "Empower your team with expert-led corporate training for enhanced skills and productivity.",
      icon: GraduationCap,
    },
    {
      title: "Custom Software Development",
      desc: "Build tailored software solutions designed to meet your unique business needs and goals.",
      icon: Code,
    },
  ];

  const features = [
    { title: "All in one services", desc: "From web hosting to software development, marketing, and training we do it all." },
    { title: "Affordable & Scalable", desc: "High-quality services that fit your budget and grow with your business." },
    { title: "Expert Team", desc: "Skilled professionals ready to bring your ideas to life." },
    { title: "Reliable & Secure", desc: "Fast, secure and high performances solutions you can trust." },
    { title: "Latest Technology", desc: "We use modern tools to build fast, secure, and efficient solutions." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid-slate-200/[0.04] bg-[length:32px_32px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
            >
              Innovative Digital Solutions for <span className="text-primary relative inline-block">Business Growth<svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed"
            >
              At W3AppDevelopers, a leading web development company in Erode, we provide top-tier IT services using the latest technologies to deliver affordable and innovative solutions. Whether launching a new business or optimizing an existing one, we accelerate growth through software development, app creation, graphic design, digital marketing, and data analytics.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/services">
                <Button size="lg" className="rounded-full h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-primary/25">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg w-full sm:w-auto border-2">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive IT Services for Modern Businesses</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500 ease-out" />
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 relative z-10">{service.title}</h4>
                    <p className="text-slate-600 relative z-10 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">Partner with the Best in Tech</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We don't just write code; we build digital experiences that drive real business results. Here's why leading companies choose W3AppDevelopers.
              </p>
              <Link href="/about">
                <Button variant="secondary" className="rounded-full bg-white text-slate-900 hover:bg-slate-100">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors ${i === 4 ? 'md:col-span-2' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                        <span className="font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
                        <p className="text-slate-400 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-primary-foreground/80 font-medium">Projects Delivered</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80 font-medium">Happy Clients</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-primary-foreground/80 font-medium">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Let's discuss how our digital solutions can help you achieve your goals.</p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg shadow-lg shadow-primary/25">
              Start a Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
