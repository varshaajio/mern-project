import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Graphic Design",
    slug: "graphic-design",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/Designer-cuate-300x300.png",
    desc: "Create visually stunning designs that captivate, engage, and elevate your brand.",
    longDesc:
      "Our graphic design team crafts compelling visual narratives that resonate with your target audience. From logo design and brand identity to marketing collateral and UI/UX design, we ensure every pixel aligns with your business goals.",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/Social-media-rafiki-300x300.png",
    desc: "Boost your brand's online presence with data-driven digital marketing strategies.",
    longDesc:
      "Navigate the digital landscape with our comprehensive marketing services. We specialize in SEO, SEM, social media marketing, content strategy, and performance analytics to maximize your ROI and brand visibility.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/Hand-coding-amico-300x300.png",
    desc: "Build stunning, high-performance websites tailored to your business needs.",
    longDesc:
      "We build scalable, secure, and blazing-fast web applications. Whether you need a corporate website, an e-commerce platform, or a custom web app, our developers use cutting-edge technologies to bring your vision to life.",
  },
  {
    title: "App Development",
    slug: "app-development",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/App-development-amico-300x300.png",
    desc: "Create powerful, user-friendly mobile apps to elevate your business.",
    longDesc:
      "Transform your ideas into intuitive mobile experiences. Our team develops native and cross-platform applications for iOS and Android, focusing on seamless user experiences, robust performance, and scalability.",
  },
  {
    title: "Corporate Training",
    slug: "corporate-training",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/At-the-office-rafiki-300x300.png",
    desc: "Empower your team with expert-led corporate training for enhanced skills and productivity.",
    longDesc:
      "Stay ahead of the curve with our specialized corporate training programs. We offer tailored workshops in modern web technologies, agile methodologies, and digital marketing to upskill your workforce.",
  },
  {
    title: "Custom Software Development",
    slug: "pos-software",
    img: "https://w3appdevelopers.com/wp-content/uploads/2025/02/Product-quality-amico-300x300.png",
    desc: "Build tailored software solutions designed to meet your unique business needs and goals.",
    longDesc:
      "Address complex business challenges with our bespoke software solutions. From POS and HRM systems to specialized enterprise software, we deliver secure and scalable platforms designed specifically for your operational needs.",
  },
];

export default function Services() {
  return (
    <div className="w-full">
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-lg text-slate-600">
              Comprehensive digital solutions to help your business thrive in the modern age.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-start gap-6 mb-5">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-20 h-20 object-contain shrink-0"
                        loading="lazy"
                      />
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-primary font-medium text-sm">{service.desc}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed flex-1">{service.longDesc}</p>
                    <Link href={`/services/${service.slug}`}>
                      <Button
                        variant="outline"
                        className="mt-6 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:border-primary"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us to discuss a tailored approach for your specific requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="rounded-full h-14 px-10 text-lg text-primary">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
