import { getAllPosts } from "@/lib/posts";
import { BlogPreviewClient } from "./blog-preview";

export function HomeBlogPreview() {
  const posts = getAllPosts();
  return <BlogPreviewClient posts={posts} />;
}
