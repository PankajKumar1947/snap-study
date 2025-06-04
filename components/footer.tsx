import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-2xl border-t border-violet-500/20">
      <div className='px-[5%]   text-white'>
        <div className='pt-10 flex justify-between'>
          <h1 className='text-xl sm:text-3xl font-semibold '>Snap-Study</h1>
          {/* <Link href="/">
            <img src={logo} alt="snap-study" className=' rounded-md h-[40px] sm:h-[50px] cursor-pointer' />
          </Link> */}
        </div>

        <div className='flex justify-between mt-5 text-sm sm:text-base'>
          <div className="text-white">
            <Link href="/">Home</Link>
            <br />
            <Link href={"/about"}>About</Link>
          </div>
          <div className='flex flex-col gap-2 '>
            <a href="fb">Facebook</a>
            <a href="fb">LinkedIn</a>
            <a href="fb">Twitter</a>
          </div>

          <div className='flex flex-col '>
            <p>Addresss</p>
            <p>Address Code</p>
          </div>
          <div></div>
          <div></div>

        </div>

        <br />
        <br /><br />
        <div className='text-2xl md:text-6xl flex gap-2 items-center' >
          <a href='https://snapstudy-makaut.vercel.app/' className='hover:text-gray-400'>snapstudy-makaut</a>
          <div className='text-4xl md:text-8xl'>
            <ArrowRight />
          </div>
        </div>

        <hr />
        <p className='my-3 text-xs sm:text-lg'>​© 2024 by Snap-Study. Created by <a className='text-red-600' href="https://github.com/PankajKumar1947">Pankaj Kumar</a> .</p>
        <hr />
      </div>
    </footer>
  )
}
