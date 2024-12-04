
import Image from "next/image"
import Link from "next/link"
export default function hello (){
    return(
        <div className="flex justify-evenly mt-[60px] ml-10">
        <div className="text-center">
        /* eslint-disable react/no-unescaped-entities */

        <h1 className="text-neutral-100 p-20 pb-2 font-[serif] text-6xl md:text-4xl lg:text-6xl">
            Hello! Next.js
        </h1>
        <p className=" text-[18px] text-center text-stone-500 md:text-[15px] lg:text-[18px]">
            NEXT.js is a Framwork of React and React is a library
        </p>
        <Link href="/aboutNEXT">
              <button className="border border-[aliceblue]-[5px] p-4 mt-10 mr-6  rounded-2xl capitalize text-lg text-stone-500 hover:bg-slate-50 hover:text-black hover:font-bold lg:mr-8" >
                about NEXT.js
             </button>   
        </Link>

        <Link href="/portfolio">
             <button className="border bg-slate-50 p-4 rounded-2xl capitalize text-xl font-bold hover:bg-black hover:text-stone-500 hover:border-[aliceblue]-[5px] ">
              our portfolio
            </button>
        </Link>
         </div>

        <div className=" mr-8 hidden md:block xl: m-12 ">
        <Image
        src="/next.logo.png" 
        alt="image" 
        width={300}
        height={200}
        priority
        className=" md:max-w-[280px] xl:max-w-[300px] " 
        />
        
        </div>
        </div>
    )
}