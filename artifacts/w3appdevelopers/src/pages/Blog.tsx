import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { useReveal } from '@/hooks/use-reveal';

export function Blog() {
  useReveal();

  const posts = [
    {
      title: "10 SEO Trends to Watch in 2026",
      category: "Digital Marketing",
      date: "Oct 15, 2025",
      image: "/images/SEO.jpg",
      excerpt: "Stay ahead of the curve with these emerging SEO strategies that will dominate search engine rankings."
    },
    {
      title: "Why Your Business Needs a Custom Web App",
      category: "Web Development",
      date: "Sep 28, 2025",
      image: "/images/Software-dev.png",
      excerpt: "Discover the hidden ROI of moving from off-the-shelf software to a tailored web application."
    },
    {
      title: "The Ultimate Guide to Ecommerce Conversion Rates",
      category: "Ecommerce",
      date: "Sep 12, 2025",
      image: "/images/ecomm.png",
      excerpt: "Simple, actionable UX tweaks that can double your online store's conversion rate overnight."
    },
    {
      title: "React vs Vue: Choosing the Right Framework",
      category: "Web Development",
      date: "Aug 30, 2025",
      image: "/images/Dedicated-Web-Developer.png",
      excerpt: "An in-depth comparison of two of the most popular frontend frameworks for modern web apps."
    },
    {
      title: "Maximizing ROI with Google Ads",
      category: "Digital Marketing",
      date: "Aug 15, 2025",
      image: "/images/google-ads.png",
      excerpt: "Stop wasting money on ineffective clicks. Learn how to structure campaigns for maximum return."
    },
    {
      title: "The Future of Mobile App Development",
      category: "Mobile Apps",
      date: "Jul 22, 2025",
      image: "/images/mobile-app.png",
      excerpt: "How AI and cross-platform frameworks are revolutionizing the way we build mobile experiences."
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 reveal">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Latest <span className="text-brand">Blog Posts</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Insights, strategies, and news from our digital experts.</p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover reveal" style={{ transitionDelay: `${(index % 3) * 100}ms` }}>
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-sm text-slate-400">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{post.title}</h3>
                  <p className="text-slate-600 mb-6">{post.excerpt}</p>
                  <a href="#" className="text-brand font-semibold hover:underline">Read Article &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
