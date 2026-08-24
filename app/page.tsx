import { getPosts } from "@/lib/getPosts";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "./components/TiltCard";

export default async function Home() {

  return (
  <div className="bg-linear-to-b from-blue-950 to-gray-900 w-full flex flex-col items-center justify- text-white">
    
    <div className="p-10 flex flex-col items-center gap-3 ">
      <h1 className="text-6xl  font-outfit font-bold">Abdou's blog</h1>
      <p className="text-xl font-poppins font-medium">
        Slop-free notes on tech, startups, and life.
      </p>
    </div>

    <div className="lg:grid lg:gap-y-2 flex flex-col lg:grid-cols-3">
    {getPosts().map((post) => (
      <Link key={post.slug} href={post.slug}> <TiltCard ><div  className="p-4 m-2 gap-y-5 gap-x-1.5 flex flex-col items-center h-65 w-100 bg-gray-900 border border-white ">
        <Image 
        src={post.image}
        alt={post.title}
        className=" object-cover h-40 w-full"
        width={120}
        height={120}
        />
        <p className="text-blue-400 w-full pt-5 border-t border-white outfit text-xl font-bold hover:underline">
          {post.title}
        </p>
      </div></TiltCard></Link>
    ))}
    </div>

    <div className="p-10 flex flex-col items-center ">

    <div className="flex w-full gap-x-20  flex-row items-center justify-around" >

    <div><a className=" hover:underline hover:text-red-600" href="https://abdoubelounis.com">Portfolio</a></div>
    <div><a className="hover:underline hover:text-blue-500" href="https://www.linkedin.com/in/abdou-belounis/">LinkedIn</a></div>
    <div><a className="hover:underline hover:text-blue-400" href="https://x.com/abdou_belounis">Twitter</a></div>

    </div>

    </div>

  </div>
  );
}
