import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, PhoneCall } from "lucide-react";
import { getProduct } from "@/data/products";
import { getProductContent } from "@/data/productContent";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug ?? "");
  const content = getProductContent(slug ?? "");

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Product Not Found</h1>
          <Link href="/products">
            <button className="text-primary font-medium flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-slate-50 py-20 border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] -z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/products">
            <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> All Products
            </button>
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              {product.category}
            </span>
            <div className="text-6xl mb-6">{product.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{product.title}</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">{product.shortDesc}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-14 px-8 text-base shadow-lg transition-colors flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  {content?.cta ?? "Get a Demo"}
                </button>
              </Link>
              <a href="https://wa.me/919698548633" target="_blank" rel="noopener noreferrer"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full h-14 px-8 text-base transition-colors flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {content ? (
        <>
          {/* Description */}
          <section className="py-16 bg-white border-b">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{content.headline}</h2>
                <div className="space-y-4">
                  {content.description.map((para, i) => (
                    <p key={i} className="text-lg text-slate-600 leading-relaxed">{para}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features */}
          {content.features.length > 0 && (
            <section className="py-16 bg-slate-50">
              <div className="container mx-auto px-4 max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {content.features.map((feat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-3 shadow-sm"
                      >
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-800 font-medium text-sm"
                          dangerouslySetInnerHTML={{ __html: feat }} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Sections */}
          {content.sections.map((section, i) => (
            <section key={i} className={`py-16 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-t`}>
              <div className="container mx-auto px-4 max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4"
                    dangerouslySetInnerHTML={{ __html: section.heading }} />
                  <p className="text-lg text-slate-600 leading-relaxed">{section.body}</p>
                </motion.div>
              </div>
            </section>
          ))}

          {/* Who Uses */}
          {content.whoUses && content.whoUses.length > 0 && (
            <section className="py-16 bg-primary text-white">
              <div className="container mx-auto px-4 max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl font-bold mb-8">Who Uses This?</h2>
                  <div className="flex flex-wrap gap-3">
                    {content.whoUses.map((user, i) => (
                      <span key={i} className="bg-white/20 text-white rounded-full px-5 py-2 text-sm font-medium">
                        {user}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-slate-500 text-lg">Detailed content for this product is being prepared.</p>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Contact our team for a full product demo and pricing information tailored to your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-12 px-8 transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link href="/products">
                <button className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-full h-12 px-8 transition-colors">
                  View All Products
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
