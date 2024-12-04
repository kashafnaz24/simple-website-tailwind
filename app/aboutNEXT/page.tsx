

import Image from "next/image"
 export default function aboutNEXT(){
    return(
        <div className="flex mt-[80px] justify-evenly">
            <div className="p-11  xl:ml-28">
                <h1 className="text-[40px] text-[aliceblue] font-[serif] ">What&apos;s is Next.js?</h1>
                 <p className="text-[aliceblue] text-[20px] mb-5">Everything you need to build great products on the web.</p>
                 <p className="text-[aliceblue] text-[15px] ">Next.js is a React framework for building full-stack
                    web applications. You use React Componentsto build user interfaces, and Next.js for additional
                    features and optimizations.

                    Under the hood, Next.js also abstracts and automatically configures tooling
                    needed for React, like bundling, compiling, and more. This allows you to 
                    focus on building your application instead of spending time with configuration.

                    Whether you&apos;re an individual developer or part of a larger team, Next.js can
                    help you build interactive, dynamic, and fast React applications.

                 </p>

            </div>
            <div className="mr-10 hidden md:block xl:mr-28" >
        <Image
        src="/next.logo.png" 
        alt="image" 
        width={800}
        height={800}
        priority 
        className="md:max-w-[280px] xl:max-w-[300px]"
        />
        
            </div>
        </div>
    )

}