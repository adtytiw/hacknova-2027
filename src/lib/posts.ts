import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDir = path.join(process.cwd(), "public/_posts");

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  number: number;
  tweetUrl: string;
  publishDate: string;
  content: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  number: number;
  tweetUrl: string;
  publishDate: string;
}

function parsePostFile(fileName: string): PostMeta {
  const fullPath = path.join(postsDir, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);
  return {
    slug: data.slug as string,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    number: data.number as number,
    tweetUrl: (data.tweetUrl as string) ?? "",
    publishDate: (data.publishDate as string) ?? (data.date as string),
  };
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files.map(parsePostFile).sort((a, b) => a.number - b.number);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const file = files.find((f) => {
    const raw = fs.readFileSync(path.join(postsDir, f), "utf8");
    const { data } = matter(raw);
    return data.slug === slug;
  });

  if (!file) return null;

  const fullPath = path.join(postsDir, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkHtml).process(content);
  const html = processed
    .toString()
    .replace(/<a href=/g, '<a target="_blank" rel="noopener noreferrer" href=');

  return {
    slug: data.slug as string,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    number: data.number as number,
    tweetUrl: (data.tweetUrl as string) ?? "",
    publishDate: (data.publishDate as string) ?? (data.date as string),
    content: html,
  };
}

export function getAllPostSlugs(): string[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(postsDir, f), "utf8");
    const { data } = matter(raw);
    return data.slug as string;
  });
}
