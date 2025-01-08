"use client";
import Image from "next/image";
import Link from "next/link"
import { useState } from 'react';

export const NavbarComponent=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    return(
        <nav className="bg-black shadow-md p-4 top-0 w-full z-50 xs:w-screen">
        <div className="  flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex flex-row">
            <Image src="/linkvenza_logo.jpeg" width={200} height={50} alt="logo" />
          </Link>
  
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-base pr-32 font-semibold">
            <Link href="/" className="ml-24 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-400 ">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/CaseStudies">Case Studies</Link>
          </div>
  
          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center ">
            <button onClick={toggleMenu} className="text-white">
              <span className="text-2xl">{isMenuOpen ? '×' : '☰' }</span>
            </button>
          </div>
          <div className="hidden lg:flex items-end">
          <Link href="/contact" className="btn  btn-md text-base bg-clip-border bg-gradient-to-br from-cyan-700 via-cyan-600 to-cyan-300 text-white font-semibold  rounded-lg hover:opacity-80 hover:text-gray-200 transition-all duration-500">Contact Us</Link>
            </div>
        </div>
  
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black text-white space-y-4 p-4">
            <Link href="/" className="block">Home</Link>
            <Link href="/about" className="block">About Us</Link>
            <Link href="/services" className="block">Services</Link>
            <Link href="/testimonials" className="block">Testimonials</Link>
            <Link href="/CaseStudies" className="block">Case Studies</Link>
            <Link href="/contact" className="block mt-4 btn btn-md text-base bg-[#35747D] opacity-100 text-white hover:bg-[#35747D] hover:opacity-80 transition-opacity duration-500">Contact Us</Link>
          </div>
        )}
  
        {/* Desktop "Contact Us" button */}
        
      </nav>
    )
};

