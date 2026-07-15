import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { BLOG_POSTS } from "@/lib/data";

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-surface py-20 md:py-28" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="Ideas Worth Automating"
          subtitle="Practical thinking on AI agents, workflow automation, and business productivity."
        />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
          {BLOG_POSTS.map((post, i) => (
            <Reveal as="li" key={post.title} delay={(i % 3) * 80}>
              <a
                href="#contact"
                className="group flex h-full flex-col rounded-card border border-line bg-bg p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-emerald-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald">
                    {post.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold leading-snug text-body transition-colors group-hover:text-emerald">
                  {post.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <p className="mt-5 text-xs font-medium text-muted">{post.readTime}</p>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
