import { getPosts } from "@/lib/getPosts";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "./components/TiltCard";

export default async function Home() {

  return (
  <div className="bg-linear-to-b from-blue-950 to-gray-900 w-full flex flex-col items-center justify- text-white">
    
    <div className="p-10 flex flex-col items-center gap-3 ">
      <div className="flex flex-row items-center gap-3">
        <Image src="/icon.jpg" alt="Abdou Belounis" width={100} height={100} className="rounded-full" />
        <h1 className="text-6xl  font-outfit font-semibold">Abdou's blog</h1>
      </div>
      <p className="text-xl font-poppins font-medium">
        Slop-free notes on tech, startups, and life.
      </p>
    </div>

    <div className="lg:grid lg:gap-y-2 flex flex-col lg:grid-cols-3">
    {getPosts().map((post) => (
      <Link key={post.slug} href={post.slug}> <TiltCard ><div  className="p-4 rounded-sm m-2 gap-y-5 gap-x-1.5 flex flex-col items-center h-65 w-100 bg-gray-900 border border-white ">
        <Image 
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        className="object-contain bg-[#0d1117] h-40 w-full"
        />
        <p className="text-amber-300 w-full pt-5 border-t border-white font-outfit text-xl font-bold hover:underline">
          {post.title}
        </p>
      </div></TiltCard></Link>
    ))}
    </div>

    <div className="p-10 flex flex-col items-center ">

    <div className="flex w-full gap-x-20  flex-row items-center justify-around" >

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
  );
}
