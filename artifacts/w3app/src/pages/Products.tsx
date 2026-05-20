import { Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Intuitive Billing & Checkout",
  "Real-time Inventory Management",
  "Detailed Sales Analytics & Reporting",
  "Customer Relationship Management (CRM)",
  "Multi-store & Multi-user Support",
  "Offline Mode Capability",
  "Barcode & QR Code Scanner Support",
  "GST-compliant Invoice Generation",
];

export default function Products() {
  return (
    <div className="w-full">
      <section className="bg-slate-50 py-20 border-b relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4">OUR PRODUCT</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Smart POS Software</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Streamline your retail or restaurant operations with our comprehensive Point of Sale system. Manage sales, inventory, and customers in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="aspect-video bg-slate-100 rounded-3xl relative overflow-hidden border shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200">
                  <div className="text-center text-slate-400">
                    <Monitor className="w-20 h-20 mx-auto mb-4 opacity-50" />
                    <span className="font-medium text-lg">POS Dashboard Preview</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features</h2>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-14 px-8 text-lg shadow-lg">Request a Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Business?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Our POS software is built for retailers, restaurants, and businesses of all sizes. Get a personalized demo today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg">Get a Free Demo</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
