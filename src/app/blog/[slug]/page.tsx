import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { TweetEmbed } from "@/components/sections/tweet-embed";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | HackNova 2027`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const now = new Date();
  const isPublished = new Date(post.publishDate).getTime() <= now.getTime();
  if (!isPublished) redirect("/blog");

  const formattedDate = new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="mx-auto max-w-2xl px-6 pt-32 pb-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-muted hover:text-accent mb-10 inline-flex items-center gap-2 text-sm transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          All posts
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="text-muted mb-4 flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <h1 className="text-foreground mb-4 text-3xl leading-tight font-bold sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-muted text-lg leading-relaxed">{post.excerpt}</p>
          <div className="border-border mt-8 border-b" />
        </header>

        {/* Featured tweet */}
        <TweetEmbed tweetUrl={post.tweetUrl} />

        {/* Content */}
        <div className="prose-blog" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Footer nav */}
        <div className="border-border mt-16 border-t pt-8">
          <Link
            href="/blog"
            className="text-muted hover:text-accent inline-flex items-center gap-2 text-sm transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
