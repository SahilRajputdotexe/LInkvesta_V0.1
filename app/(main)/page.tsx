

import DisplayIcon from "@/components/DisplayIcon";
import {Hero}from "@/components/Hero";
import { LaptopMockup } from "@/components/LaptopMockup";
import IncreaseNumberAnimation from "@/components/NumberScroller";

import  PhoneMockup  from "@/components/PhoneMockup";

export default function Home() {

 
  
  return (
<div className="text-white flex flex-col items-center pt-28 w-full">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">
    <span className="text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100">Let&apos;s make you a </span> 
    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-400">
      Brand
    </span>
  </h1>
  
  <div className="flex items-center justify-center h-[100px]">
    <div className="text-center max-w-screen-md w-full overflow-x">
      <p className="text-lg sm:text-2xl md:text-3xl mb-6">We help founders and CXOs unlock the power of their personal brands, one post at a time.</p>
    </div>
  </div>

  <button className="bg-clip-border bg-gradient-to-br from-cyan-700 via-cyan-600 to-cyan-300 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-80 hover:text-gray-200 transition-all duration-500">
    Get In Touch
  </button>

  <div className="flex items-center justify-center flex-col p-20">
    <PhoneMockup />
  </div>

  <div className="justify-center items-center flex flex-col">
    <div className="text-cyan-600 text-2xl pb-8 font-bold">All Organic</div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 pb-8 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-t from-gray-900 via-gray-300 to-gray-100">Cut through the noise </span> 
    </h1>
    <div className="flex items-center justify-center h-[100px]">
      <div className="text-center max-w-screen-md w-full overflow-x">
        <p className="text-lg sm:text-2xl md:text-3xl mb-6">Our team helps you stand out and become a thought leader in your industry which will help you hire better, get leads, and investment.</p>
      </div>
    </div>
  </div>

  <div className="flex items-center justify-center flex-row space-x-8 sm:space-x-16 md:space-x-32 p-4 pt-24">
    <IncreaseNumberAnimation endNumber={102} speed={100} suffix="K" text="Followers"/>
    <IncreaseNumberAnimation endNumber={34} speed={100} text="Countries"/>
    <IncreaseNumberAnimation endNumber={181} speed={100} text="Clients"/>
  </div>

  <div className="flex items-center justify-center flex-col lg:flex-row space-x-4 sm:space-x-8 md:space-x-16 p-4 pt-32">
    <div className="flex flex-row space-x-4 justify-center items-center w-full">
    <DisplayIcon name="Alkfaslk" img_src="/1709225912193.jpeg"/>
    <DisplayIcon name="Afakl" img_src="/1709225912193.jpeg"/>
    <DisplayIcon name="dsfs" img_src="/1709225912193.jpeg"/>
    </div>
    <div className="flex flex-row space-x-4 justify-center items-center w-full pt-8 pb-8">
    <DisplayIcon name="Afsdf d" img_src="/1709225912193.jpeg"/>
    <DisplayIcon name="Efdsf " img_src="/1709225912193.jpeg"/>
    <DisplayIcon name="EeExyADz" img_src="/1709225912193.jpeg"/>
       


       
    </div>
    
  </div>

  <div className="p-20">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-t from-stone-500 via-gray-400 to-gray-100">We help you get </span> 
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-500"> Noticed</span>
    </h1>
  </div>

  <div className="flex items-center justify-center space-x-2 flex-col lg:flex-row p-8 pl-4 pr-4 lg:pl-20 lg:pr-20 pb-40 ">
    <div>
    <Hero>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold mb-4 mt-0 lg:mb-32 lg:mt-32 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100">We help you </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-400"> Get Noticed</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 lg:mb-36">Our team helps you stand out and become a thought leader in your industry which will help you hire better, get leads, and investment.</p>
      </div>
    </Hero>
    </div>

    <div className="flex items-center justify-center space-y-8 flex-col p-6">
      <Hero>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold lg:mb-24 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100">We help you </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-400"> Get Noticed</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">Our team helps you stand out and become a thought leader in your industry which will help you hire better, get leads, and investment.</p>
        </div>
      </Hero>

      <Hero>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100">We help you </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-400"> Get Noticed</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">Our team helps you stand out and become a thought leader in your industry which will help you hire better, get leads, and investment.</p>
        </div>
      </Hero>
    </div>
  </div>

  <div >
    <LaptopMockup />
  </div>

  <div className="justify-center items-center pt-72 pb-24">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100">Our </span> 
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-400">
        Process </span>
    </h1>
  </div>

</div>


  );
}
