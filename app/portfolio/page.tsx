
import Image from "next/image"
export default function portfolio(){
    return(
        <div className="flex mt-[80px] justify-evenly">
            <div className=" ml-5">
                <h2 className="capitalize text-[aliceblue] font-[serif] md: text-[40px] xl:text-[60px]  ">our journey with cashing</h2>
                <p className="text-[aliceblue] text-[15px] xl:text-[18px]">Frontend performance can be hard to get right. Even in highly optimized apps, the most common 
                    culprit by far is client-server waterfalls. When introducing Next.js App,
                     we knew we wanted to solve this issue. To do that, we needed to 
                    move client-server REST fetches to the server using React Server Components 
                    in a single roundtrip. This meant the server had to sometimes be dynamic,
                    sacrificing the great initial loading performance of Jamstack. We built
                    partial prerendering to solve this tradeoff and have the best of both worlds.

                </p>
            </div>
            <div className="mt-[0px] hidden md:block xl: m-12 ">
            <Image
            src="/next.logo.png" 
            alt="image" 
            width={800}
            height={800}
             priority 
             className="md:max-w-[280px] xl:max-w-[300px] "
            />
        
            
            </div>
        </div>
    )
}