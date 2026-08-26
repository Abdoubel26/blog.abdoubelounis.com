import { getPosts } from "@/lib/getPosts";
import ReactMarkdown from 'react-markdown';
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Metadata } from "next";
import remarkBreaks from 'remark-breaks';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "404 - Post Not Found | Abdou's Blog",
    };
  }

  return {
    title: `${post.title} | Abdou's Blog`,
    description: post.content.slice(0, 150) + "...", 
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 150) + "...",
      type: "article",
      images: [
        {
          url: post.image,
        },
      ],
    },
  };
}

async function ArticlePage({ params }: PageProps) {
  
  const { slug } = await params;

  const posts = getPosts();

  const post = posts.find((p) => p.slug === slug);

  const otherPosts = posts.filter((p) => p.slug !== slug);

  if(!post) {
    console.log(post)
    console.log(slug)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-blue-950 to-gray-900">
        <h1 className="text-4xl font-bold text-white">404 - Post Not Found</h1>
        <div className="mt-12 flex justify-center">
        <Link
          href="/"
          className="border border-gray-500 inline-flex rounded-xs items-center gap-2 px-6 py-3 text-sm font-medium hover:scale-101 text-slate-200 bg-blue-900 transition-all shadow-md group"
        >
          <Home size={16} className="transition-transform " />
          Go back home
        </Link>
      </div>
      </div>
    )
  }

  return (
<div className="min-h-screen bg-linear-to-b w-screen lg:w-auto from-gray-950 to-blue-950 text-slate-200 flex flex-col items-center py-12 px-4 sm:px-8 lg:px-12">
    <div className="w-full flex flex-col justify-center items-center max-w-4xl">
      <Link 
        href="/" 
        className="inline-flex self-start items-center gap-2 text-sm font-georgia text-slate-400 hover:text-white hover:underline transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="transition-transform" /> 
        Back to home
      </Link>

      <article className="bg-[#1c2541]/40 lg:border md:border border-t border-gray-400 rounded-xs lg:w-auto md:w-auto w-screen lg:p-8 md:p-8 p-3 pt-8 sm:p-14 shadow-2xl backdrop-blur-md">
        <div className="markdown-body bg-transparent! text-slate-200! border-none">
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
            components={{
              // Title
              h1: ({ children }) => (
                <h1 className="text-3xl tracking-wider sm:text-4xl font-bold  text-white mb-6 uppercase font-serif">
                  {children}
                </h1>
              ),
              // heading
              h2: ({ children }) => (
                <h2 className="text-xl sm:text-2xl tracking-wide font-semibold text-slate-100 mt-10 mb-4 font-serif">
                  {children}
                </h2>
              ),
              // Paragraph
              p: ({ children }) => (
                <p className="text-lg leading-relaxed text-slate-300 mb-6 font-serif tracking-wide">
                  {children}
                </p>
              ),
              // unordered Lists
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-slate-300 font-serif">
                  {children}
                </ul>
              ),
              // ordered Lists
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 text-lg text-slate-300 font-serif">
                  {children}
                </ol>
              ),
              // Blockquotes
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-slate-500 pl-4 italic my-6 text-slate-400 font-serif">
                  {children}
                </blockquote>
              ),
              // images
              img: ({ src, alt }) => (
                <img src={src} alt={alt} className="w-full h-auto object-contain my-6 rounded-sm" />
              ),
              // links
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 cursor-pointer hover:text-amber-400 underline underline-offset-2 transition-colors"
                >
                  {children}
                </a>
              )
            }}
          >
          {post.content}</ReactMarkdown>
        </div>
      </article>

      {otherPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-800">
            <h3 className="text-xs font-serif uppercase tracking-widest text-slate-400 mb-6">
              More Articles
            </h3>
            
            <div className="flex flex-col gap-4">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`${other.slug}`}
                  className="group flex items-center justify-between py-2 border-b border-slate-800/60 hover:border-slate-500 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    
                    <span className="font-serif text-lg text-slate-200 group-hover:text-white group-hover:underline underline-offset-4 transition-all">
                      {other.title}
                    </span>
                  </div>

                  <span className="text-slate-500 group-hover:text-slate-200 group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      <div className="mt-12 flex justify-center">
        <Link
          href="/"
          className="border border-gray-500 inline-flex rounded-xs items-center gap-2 px-6 py-3 text-sm font-medium hover:scale-101 text-slate-200 bg-blue-900 transition-all shadow-md group"
        >
          <Home size={16} className="transition-transform " />
          Go back home
        </Link>
      </div>

      <div className="mt-15 flex flex-col items-center">
        <div className="flex w-full max-w-md items-center justify-between gap-x-6">
          
          <div>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 font-serif text-sm text-slate-200 bg-[#1c2541]/60 border border-slate-600 rounded-sm shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] hover:bg-red-950/40 hover:border-red-500 hover:text-red-400 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-75 inline-block" 
              href="https://abdoubelounis.com"
            >
              Portfolio
            </a>
          </div>

          <div>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 font-serif text-sm text-slate-200 bg-[#1c2541]/60 border border-slate-600 rounded-sm shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] hover:bg-blue-950/40 hover:border-blue-500 hover:text-blue-400 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-75 inline-block" 
              href="https://www.linkedin.com/in/abdou-belounis/"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 font-serif text-sm text-slate-200 bg-[#1c2541]/60 border border-slate-600 rounded-sm shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]  hover:border-white hover:text-white hover:bg-black/30 duration-150 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all inline-block" 
              href="https://x.com/abdou_belounis"
            >
              X
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
);
  
  
}

export default ArticlePage
