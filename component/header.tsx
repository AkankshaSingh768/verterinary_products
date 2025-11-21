'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="home" className="w-full bg-gray-200 shadow-md">
      <div className="flex mx-auto relative px-8  lg:justify-center md:justify-between justify-between py-5 items-center max-w-full gap-50">
        <div>
          {/* logo */}


          <Image
            src="/logo2-cpy.png"
            alt="Description"
            width={50}
            height={60}
          />

        </div>

        {/* DesktopNavigation */}
        <div className="text-2xl lg:block md:hidden hidden space-x-15">
          {/* home menu */}
          <Link href="/about" className="cursor-pointer hover:text-orange-600">About us</Link>
          <Link href="/services" className="cursor-pointer hover:text-orange-600">Services</Link>
          <a href="#products" className="cursor-pointer hover:text-orange-600">Our Products</a>

          <Link href="/contactus" className="cursor-pointer hover:text-orange-600">Contact us</Link>

        </div>


        {/* MobileNavigation */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black z-50 relative">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )

            }

          </button>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-lg flex flex-col px-10 items-start justify-start gap-6 py-9 z-40 font-bold">
              <Link href="/about" className="cursor-pointer hover:text-orange-600">About us</Link>
              <Link href="/services" className="cursor-pointer hover:text-orange-600">Services</Link>
              <a href="#products" className="cursor-pointer hover:text-orange-600">Our Products</a>

              <a href="/contactus" className="cursor-pointer hover:text-orange-600">Contact us</a>
              <a 
  href="/Documentation.pdf"
  download
  target="_blank"
  className="border px-6 py-4 rounded-xl  text-white bg-black"
>
  Documentation
</a>
            </div>
          )}

        </div>



        <div className="text-2xl lg:block hidden">
          {/* button */}
         <a 
  href="/Documentation.pdf"
  download
  target="_blank"
  className="border px-6 py-4 rounded-xl  text-white bg-black"
>
  Documentation
</a>
        </div>

      </div>

    </div>

  );
}
