import Link from "next/link"


export default function Navbar(){
    return(
      <nav className="flex justify-between gap-6 p-[20px]">
        <p className="text-[30px] text-neutral-50 font-extrabold font-[cursive]">NEXT.js</p>
        <ul className="flex justify-around">
          <li className="font-bold text-[15px] text-neutral-50 p-5" >
            <Link href="/">HOME</Link>
          </li>
          <li className="font-bold text-[15] text-neutral-50 p-5">
            <Link href="/aboutNEXT">ABOUT NEXT.js</Link>
            </li>
          <li className="font-bold text-[15px] text-neutral-50 p-5">
            <Link href="/portfolio">OUR PORTFOLIO</Link>
            </li>
        </ul>
      </nav>
    )
  }