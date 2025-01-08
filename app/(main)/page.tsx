

import DisplayIcon from "@/components/DisplayIcon";
import FlipCardComponent from "@/components/FlipCardComponent";
import {Hero}from "@/components/Hero";
import { LaptopMockup } from "@/components/LaptopMockup";
import IncreaseNumberAnimation from "@/components/NumberScroller";

import  PhoneMockup  from "@/components/PhoneMockup";

export default function Home() {
  
  const services = [
    {
      step: "01",
      name: "Positioning Strategy",
      imageUrl: "/target-market.png",
      description:
        "We start with your brand's culture and values, then position your brand around that. We ignite excitement in your brand story, building social ecosystems and engaging with your audience to achieve your goals.",
    },
    {
      step: "02",
      name: "Brand Management",
      imageUrl: "/brand-asset-management.png",
      description:
        "We take charge of your brand’s online presence and accounts, optimizing them for you, so you can focus on what matters most.",
    },
    {
      step: "03",
      name: "Ghostwriting & Copywriting",
      imageUrl: "/copywriting.png",
      description:
        "We craft great content that boosts visibility, transforming your brand into a fast, accessible, and revenue-driving machine.",
    },
    {
      step: "04",
      name: "Lead Generation",
      imageUrl: "/user-engagement.png",
      description:
        "We turn brand into a lead-generating magnet, connecting you with the right people, at the right time.",
    },
    {
      step: "05",
      name: "Public Relation",
      imageUrl: "/public-relations.png",
      description:
        "Get seen on the biggest publications, with a guarantee on hits and industry-leading ideas that will put your brand in the headlines.",
    },
    {
      step: "06",
      name: "Podcast Bookings",
      imageUrl: "/podcast.png",
      description:
        "We ensure your brand connects with your audience where they’re most engaged, which is why we get you featured on the most popular podcasts.",
    },
    {
      step: "07",
      name: "UGC Marketing",
      imageUrl: "/seo.png",
      description:
        "Any time you feel like you need a bigger megaphone, we’ll get your brand a voice that’s sonorous.",
    },
    {
      step: "08",
      name: "Consulting Work",
      imageUrl: "/consult.png",
      description:
        "We provide the roadmap, tools, and knowledge to help you manage your brand independently. We’ve already helped teams from KPMG, BCG, and more.",
    },
  ];
  
 
  
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

    <div className="flex flex-col  items-center justify-center pt-12 ">
      <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-400">
        Our Partners in Success
      </span>
      <div className="flex items-center justify-center flex-col lg:flex-row space-x-4 sm:space-x-8 md:space-x-16 p-4 pt-12">
        <div className="flex flex-row space-x-8 justify-center items-center w-full ">
        <DisplayIcon name="GroomYourGram"  img_src="/GYG.jpeg"/>
        <DisplayIcon name="BookMyShow" img_src="/bookmyshow-logo-vector.svg"/>
        
        </div>
        <div className="flex flex-row space-x-8 justify-center items-center w-full pt-8 pb-8">
        <DisplayIcon name="Finladder" img_src="/finladder.jpeg"/>
        <DisplayIcon name="BSY Noni " img_src="/bsy_noni_india_private_limited_logo.jpeg"/>
        
        </div>
        
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
  
  <div className="p-5">
    <FlipCardComponent services={services} />
  </div>




</div>


  );
}
