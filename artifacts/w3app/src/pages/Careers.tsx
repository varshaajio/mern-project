import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Award, Users, Briefcase } from "lucide-react";

const internshipPrograms = [
  { title: "Data Science with Python", icon: "🐍", duration: "3–6 Months" },
  { title: "Mobile App Development (Android)", icon: "📱", duration: "3–6 Months" },
  { title: "Selenium Testing with Java", icon: "☕", duration: "2–4 Months" },
  { title: "Ethical Hacking", icon: "🔐", duration: "2–4 Months" },
  { title: "Full-Stack Web Development", icon: "💻", duration: "3–6 Months" },
  { title: "DevOps Training", icon: "⚙️", duration: "2–4 Months" },
  { title: "Digital Marketing", icon: "📣", duration: "2–3 Months" },
  { title: "Graphic Design", icon: "🎨", duration: "2–3 Months" },
];

const whyChoose = [
  "Hands-on training with real-time projects",
  "Guidance from industry experts",
  "Upgrade your skills with industry-oriented practical learning",
  "Real-time exposure to live projects",
  "Internship Certificate & Placement Support",
  "Affordable training fees",
];

const eligibility = [
  "B.E / B.Tech students (any branch)",
  "BCA / MCA / M.Sc students",
  "Diploma & Polytechnic students",
  "Final year / Recent graduates",
  "Working professionals seeking upskilling",
];

export default function Careers() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-slate-50 py-20 border-b relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: "repeating-linear-gradient(45deg, #FF6028 0, #FF6028 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Internship & Training
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Internship Programs at W3AppDevelopers
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              At W3AppDevelopers, we offer industry-focused internships designed to equip students and professionals with the latest technologies and hands-on skills. Our expert-led training and live projects ensure you gain practical knowledge and become job-ready.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-12 px-8">Apply Now</Button>
              </Link>
              <a href="https://trainingtrains.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8">Visit TrainingTrains</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Internship */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Why Choose Our Internship?</h2>
              <p className="text-slate-600">Upgrade your skills with industry-oriented practical learning and real-time exposure.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 bg-slate-50 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Internship Programs We Offer</h2>
              <p className="text-slate-600">Choose from our range of technology and creative programs.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {internshipPrograms.map((prog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-slate-200 group">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-3">{prog.icon}</div>
                      <h3 className="font-bold text-slate-900 text-sm leading-tight mb-2">{prog.title}</h3>
                      <span className="inline-block text-xs bg-primary/10 text-primary rounded-full px-3 py-1 font-medium">
                        {prog.duration}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Can Apply?</h2>
              <p className="text-slate-600 mb-6">Our internship programs are open to students and professionals across various educational backgrounds:</p>
              <div className="space-y-3">
                {eligibility.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-primary rounded-3xl p-8 text-white">
                <GraduationCap className="w-10 h-10 mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">Internship Certificate & Placement Support</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Upon successful completion, you receive an official internship certificate from W3AppDevelopers. We also provide placement assistance and guidance to help you land your first job.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm">
                    <Award className="w-4 h-4" /> Certificate
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm">
                    <Briefcase className="w-4 h-4" /> Placement Support
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm">
                    <Users className="w-4 h-4" /> Expert Mentors
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Internship?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Contact us today to enroll in an internship program or send your details to get started.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-12 px-8">Apply Now</Button>
              </Link>
              <a href="mailto:admin@w3appdevelopers.com">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-slate-600 text-slate-300 hover:text-white hover:border-slate-400">
                  admin@w3appdevelopers.com
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
