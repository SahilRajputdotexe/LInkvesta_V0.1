import Image from "next/image";

export const LaptopMockup=async()=> {
    return (
        <div className="mockup-laptop relative">
        {/* Image background */}
        <Image
          src="/laptop-Mockup_.png"
          width={667}
          height={375}
          alt="laptop"
          className="w-full h-auto"
        />
  
        {/* Mockup Window */}
        <div className="hidden artboard rounded-xl bg-black border h-[285px] w-[445px] absolute top-[42px] left-[80px]">
          {/* Window Content */}
          <div className="bg-black rounded-xl flex justify-center px-4 py-16">
          </div>
        </div>
      </div>
    )
};
