import { useParams, Link } from "wouter";
import { useGetBlogBySlug } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { format } from "date-fns";
import { getStaticBlog } from "@/data/staticBlogs";
import { motion } from "framer-motion";

function StaticBlogDetail({ slug }: { slug: string }) {
  const blog = getStaticBlog(slug);
  if (!blog) return null;

  return (
    <div className="w-full">
      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4">
            {blog.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{format(new Date(blog.date), 'MMMM d, yyyy')}</span></div>
            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>{blog.author}</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{blog.readTime}</span></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-slate-600 leading-relaxed mb-12 border-l-4 border-primary pl-6 italic">{blog.excerpt}</p>

          <div className="space-y-12">
            {blog.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-4">{section.body}</p>
                {section.items && section.items.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t">
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Want to Learn More?</h3>
              <p className="text-slate-600 mb-6">Get in touch with our team of experts at W3AppDevelopers.</p>
              <Link href="/contact">
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-12 px-8 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Check static blogs first
  const staticBlog = getStaticBlog(slug ?? "");
  if (staticBlog) {
    return <StaticBlogDetail slug={slug ?? ""} />;
  }

  return <ApiBlogDetail slug={slug ?? ""} />;
}

function ApiBlogDetail({ slug }: { slug: string }) {
  const { data: blog, isLoading, error } = useGetBlogBySlug(slug, { query: { enabled: !!slug } });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <Skeleton className="h-10 w-24 mb-8" />
        <Skeleton className="h-12 w-3/4 mb-6" />
        <div className="flex gap-4 mb-8">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-96 w-full mb-8 rounded-2xl" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <Link href="/blogs" className="text-primary hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
          {blog.category && (
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider mb-4">
              {blog.category}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-10 pb-8 border-b">
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{format(new Date(blog.createdAt), 'MMMM d, yyyy')}</span></div>
            {blog.author && <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>{blog.author}</span></div>}
          </div>
          {blog.featuredImage && (
            <div className="mb-12 rounded-3xl overflow-hidden shadow-lg">
              <img src={blog.featuredImage} alt={blog.title} className="w-full h-auto object-cover max-h-[500px]" />
            </div>
          )}
          <div className="prose prose-lg prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </section>
    </div>
  );
}
