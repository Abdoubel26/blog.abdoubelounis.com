import { getPosts } from "@/lib/getPosts";
import 'github-markdown-css/github-markdown.css';
import ReactMarkdown from 'react-markdown';
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

async function ArticlePage({ params }: PageProps) {
  
  const { slug } = await params;

  const posts = getPosts();

  const post = posts.find((p) => p.slug === slug);

  if(!post) {
    console.log(post)
    console.log(slug)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-b from-blue-950 to-gray-900">
        <h1 className="text-4xl font-bold text-white">404 - Post Not Found</h1>
        <p className="mt-4 text-lg text-gray-400">The post you are looking for does not exist.</p>
      </div>
    )
  }

  return (
<div className="min-h-screen bg-linear-to-b from-gray-950 to-blue-950 text-slate-200 flex flex-col items-center py-12 px-4 sm:px-8 lg:px-12">
    <div className="w-full max-w-4xl">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> 
        Back to home
      </Link>

      <article className="bg-[#1c2541]/40 border border-gray-400  p-8 sm:p-14 shadow-2xl backdrop-blur-md">
        <div className="markdown-body bg-transparent! text-slate-200! border-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      <div className="mt-12 flex justify-center">
        <Link
          href="/"
          className="border border-gray-500 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium hover:scale-101 text-slate-200 bg-blue-900 transition-all shadow-md group"
        >
          <Home size={16} className="transition-transform " />
          Go back home
        </Link>
      </div>

    </div>
  </div>
);
  
  
}

export default ArticlePage
