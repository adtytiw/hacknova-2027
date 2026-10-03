import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { BlogPostList } from "@/components/sections/blog-post-list";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | HackNova 2027",
  description:
    "Ideas, analysis, and perspectives from the HackNova 2027 team on hot-button Bitcoin topics.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <Background />

        <div className="absolute inset-0 z-[1] flex -translate-y-12 items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-accent/30 h-64 w-64 rounded-full blur-3xl lg:h-96 lg:w-96" />
          </div>
          <Image
            src="/new_greenLogo.png"
            alt="HackNova Mascot"
            width={400}
            height={500}
            className="h-[50vh] max-h-[400px] w-auto object-contain opacity-20 lg:h-[55vh] lg:max-h-[500px]"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-accent">BLOG</span>
          </h1>
          <p className="text-muted mt-3 text-xl font-medium sm:text-2xl md:text-3xl">
            Ideas & Analysis <span className="text-muted/40">|</span>{" "}
            <span className="text-accent">HackNova 2027</span>
          </p>
        </div>

        <div className="from-background absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t to-transparent" />
      </section>

      {/* Posts */}
      <section className="relative z-10 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10">
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">Latest Posts</h2>
            <div className="bg-accent mt-2 h-1 w-16 rounded-full" />
          </div>
          <BlogPostList posts={posts} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
