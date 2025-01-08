import Image from "next/image";

export const LaptopMockup=async()=> {
    return (
        <div className="mockup-laptop relative">
       
        <Image
          src="/laptop-Mockup_.png"
          width={900}
          height={375}
          alt="laptop"
          className="w-full h-auto"
        />
  
        <div className=" artboard rounded-xl bg-black border absolute top-[8%] left-[12%] w-[76%] h-[67%] sm:top-[42px] sm:left-[80px] sm:w-[445px] sm:h-[285px]">
      
          <div className="bg-black rounded-xl flex justify-center px-4 py-16">
          </div>
        </div>
      </div>
    )
};
