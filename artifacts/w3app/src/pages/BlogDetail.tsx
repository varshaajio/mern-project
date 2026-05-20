import { useParams, Link } from "wouter";
import { useGetBlogBySlug } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { format } from "date-fns";

export default function BlogDetail() {
  const { slug } = useParams();
  const { data: blog, isLoading, error } = useGetBlogBySlug(slug as string, { query: { enabled: !!slug } });

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
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-10 pb-8 border-b">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(blog.createdAt), 'MMMM d, yyyy')}</span>
            </div>
            {blog.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
            )}
            {blog.tags && (
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{blog.tags}</span>
              </div>
            )}
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
