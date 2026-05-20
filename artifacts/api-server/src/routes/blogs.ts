import { Router, type IRouter } from "express";
import { db, blogsTable } from "@workspace/db";
import { eq, desc, and } from "drizzle-orm";
import {
  ListBlogsQueryParams,
  ListBlogsResponse,
  CreateBlogBody,
  GetBlogParams,
  GetBlogResponse,
  UpdateBlogParams,
  UpdateBlogBody,
  UpdateBlogResponse,
  DeleteBlogParams,
  GetBlogBySlugParams,
  GetBlogBySlugResponse,
} from "@workspace/api-zod";
import { authenticateAdmin } from "../middleware/auth";

const router: IRouter = Router();

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function blogToResponse(b: typeof blogsTable.$inferSelect) {
  return {
    id: b.id,
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    content: b.content,
    featuredImage: b.featuredImage,
    category: b.category,
    tags: b.tags,
    status: b.status as "published" | "draft",
    seoTitle: b.seoTitle,
    seoDescription: b.seoDescription,
    author: b.author,
    createdAt: b.createdAt.toISOString(),
    updatedAt: b.updatedAt.toISOString(),
  };
}

router.get("/blogs", async (req, res): Promise<void> => {
  const params = ListBlogsQueryParams.safeParse(req.query);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const { category, tag, limit = 10, offset = 0 } = params.data;

  let query = db
    .select()
    .from(blogsTable)
    .where(eq(blogsTable.status, "published"))
    .orderBy(desc(blogsTable.createdAt))
    .limit(limit)
    .offset(offset);

  const blogs = await query;
  const filtered = blogs.filter((b) => {
    if (category && b.category !== category) return false;
    if (tag && !b.tags?.includes(tag)) return false;
    return true;
  });

  res.json(ListBlogsResponse.parse(filtered.map(blogToResponse)));
});

router.post("/blogs", authenticateAdmin, async (req, res): Promise<void> => {
  const parsed = CreateBlogBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const slug = parsed.data.slug ?? slugify(parsed.data.title);

  const [blog] = await db
    .insert(blogsTable)
    .values({
      title: parsed.data.title,
      slug,
      excerpt: parsed.data.excerpt ?? null,
      content: parsed.data.content,
      featuredImage: parsed.data.featuredImage ?? null,
      category: parsed.data.category ?? null,
      tags: parsed.data.tags ?? null,
      status: parsed.data.status ?? "draft",
      seoTitle: parsed.data.seoTitle ?? null,
      seoDescription: parsed.data.seoDescription ?? null,
      author: parsed.data.author ?? null,
    })
    .returning();

  res.status(201).json(GetBlogResponse.parse(blogToResponse(blog)));
});

router.get("/blogs/slug/:slug", async (req, res): Promise<void> => {
  const params = GetBlogBySlugParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [blog] = await db
    .select()
    .from(blogsTable)
    .where(and(eq(blogsTable.slug, params.data.slug), eq(blogsTable.status, "published")));

  if (!blog) {
    res.status(404).json({ error: "Blog not found" });
    return;
  }

  res.json(GetBlogBySlugResponse.parse(blogToResponse(blog)));
});

router.get("/blogs/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = GetBlogParams.safeParse({ id: raw });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [blog] = await db
    .select()
    .from(blogsTable)
    .where(eq(blogsTable.id, params.data.id));

  if (!blog) {
    res.status(404).json({ error: "Blog not found" });
    return;
  }

  res.json(GetBlogResponse.parse(blogToResponse(blog)));
});

router.patch("/blogs/:id", authenticateAdmin, async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = UpdateBlogParams.safeParse({ id: raw });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const parsed = UpdateBlogBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const updateData: Partial<typeof blogsTable.$inferInsert> = {
    updatedAt: new Date(),
  };

  if (parsed.data.title != null) updateData.title = parsed.data.title;
  if (parsed.data.slug != null) updateData.slug = parsed.data.slug;
  if (parsed.data.excerpt != null) updateData.excerpt = parsed.data.excerpt;
  if (parsed.data.content != null) updateData.content = parsed.data.content;
  if (parsed.data.featuredImage != null) updateData.featuredImage = parsed.data.featuredImage;
  if (parsed.data.category != null) updateData.category = parsed.data.category;
  if (parsed.data.tags != null) updateData.tags = parsed.data.tags;
  if (parsed.data.status != null) updateData.status = parsed.data.status;
  if (parsed.data.seoTitle != null) updateData.seoTitle = parsed.data.seoTitle;
  if (parsed.data.seoDescription != null) updateData.seoDescription = parsed.data.seoDescription;
  if (parsed.data.author != null) updateData.author = parsed.data.author;

  const [blog] = await db
    .update(blogsTable)
    .set(updateData)
    .where(eq(blogsTable.id, params.data.id))
    .returning();

  if (!blog) {
    res.status(404).json({ error: "Blog not found" });
    return;
  }

  res.json(UpdateBlogResponse.parse(blogToResponse(blog)));
});

router.delete("/blogs/:id", authenticateAdmin, async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = DeleteBlogParams.safeParse({ id: raw });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [blog] = await db
    .delete(blogsTable)
    .where(eq(blogsTable.id, params.data.id))
    .returning();

  if (!blog) {
    res.status(404).json({ error: "Blog not found" });
    return;
  }

  res.sendStatus(204);
});

export default router;
