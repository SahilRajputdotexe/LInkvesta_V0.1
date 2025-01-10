
import { LaptopMockup } from "@/components/LaptopMockup";


export default function About() {
    return (
      <div className="p-6">
      <div className="text-white flex flex-col items-center pt-0 w-full">
      <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold mb-4 text-center">
  <span className="text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-gray-100 animate-gradient-text">About </span> 
  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-400 animate-gradient-text">
    Us
  </span>
</h1>
  </div>

        <div className="mt-8 flex justify-center">
        <div className="relative w-[800px] h-[400px] " >
          <div className="absolute top-[10%] left-[10%] w-[80%] h-[70%] sm:top-[10px] sm:left-[-140px] sm:w-[598px] sm:h-[285px] ">
            <LaptopMockup />
          </div>
        </div>

        <div className="absolute top-[50%] right-[10%] text-white-600 text-lg font-bold  " >
        <p>We believe in delivering excellence through cutting-edge technology and</p>
        <p> user-centric design. Explore our range of products and services</p>
        <p> tailored to meet your unique needs. Let’s shape the future, together.</p>

          </div>
      </div>
      </div>
    );
  }
  