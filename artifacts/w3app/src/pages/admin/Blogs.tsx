import { useState } from "react";
import { useListBlogs, useCreateBlog, useUpdateBlog, useDeleteBlog } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash2, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { useQueryClient } from "@tanstack/react-query";
import { getListBlogsQueryKey } from "@workspace/api-client-react";

export default function AdminBlogs() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);
  
  const tokenHeader = { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } };
  
  const { data: blogs, isLoading } = useListBlogs(undefined, { request: tokenHeader });
  const createMutation = useCreateBlog({ request: tokenHeader });
  const updateMutation = useUpdateBlog({ request: tokenHeader });
  const deleteMutation = useDeleteBlog({ request: tokenHeader });

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featuredImage: "",
    category: "",
    tags: "",
    status: "draft" as "draft" | "published",
    author: "Admin"
  });

  const handleOpenDialog = (blog = null) => {
    if (blog) {
      setEditingBlog(blog);
      setFormData({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt || "",
        content: blog.content,
        featuredImage: blog.featuredImage || "",
        category: blog.category || "",
        tags: blog.tags || "",
        status: blog.status,
        author: blog.author || "Admin"
      });
    } else {
      setEditingBlog(null);
      setFormData({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        featuredImage: "",
        category: "",
        tags: "",
        status: "draft",
        author: "Admin"
      });
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBlog) {
      updateMutation.mutate(
        { id: editingBlog.id.toString(), data: formData },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getListBlogsQueryKey() });
            toast({ title: "Blog updated successfully" });
            setIsDialogOpen(false);
          }
        }
      );
    } else {
      createMutation.mutate(
        { data: formData },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getListBlogsQueryKey() });
            toast({ title: "Blog created successfully" });
            setIsDialogOpen(false);
          }
        }
      );
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      deleteMutation.mutate(
        { id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: getListBlogsQueryKey() });
            toast({ title: "Blog deleted successfully" });
          }
        }
      );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Blog Management</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()} className="gap-2">
              <Plus className="w-4 h-4" /> Create Blog
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingBlog ? "Edit Blog" : "Create New Blog"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Title *</label>
                  <Input 
                    required 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')})} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Slug *</label>
                  <Input required value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Excerpt</label>
                <Textarea value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Content (Markdown supported) *</label>
                <Textarea required className="min-h-[200px]" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Featured Image URL</label>
                  <Input value={formData.featuredImage} onChange={e => setFormData({...formData, featuredImage: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Input value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tags</label>
                  <Input value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Author</label>
                  <Input value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status *</label>
                  <Select value={formData.status} onValueChange={(v: "draft" | "published") => setFormData({...formData, status: v})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">{editingBlog ? "Update" : "Create"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading...</div>
        ) : blogs && blogs.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="p-4 font-medium text-slate-600">Title</th>
                <th className="p-4 font-medium text-slate-600">Category</th>
                <th className="p-4 font-medium text-slate-600">Status</th>
                <th className="p-4 font-medium text-slate-600">Date</th>
                <th className="p-4 font-medium text-slate-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">{blog.title}</td>
                  <td className="p-4 text-slate-600">{blog.category || '-'}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 text-xs rounded-md ${blog.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600">{format(new Date(blog.createdAt), 'MMM d, yyyy')}</td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(blog)}>
                      <Edit className="w-4 h-4 text-slate-600" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(blog.id.toString())}>
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-slate-500">No blogs found.</div>
        )}
      </div>
    </div>
  );
}
