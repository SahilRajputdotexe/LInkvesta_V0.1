import React from "react";


import Image from "next/image";



interface Service {
    step: string;
    name: string;
    imageUrl: string;
    description: string;
  }
  
  interface ServicesProps {
    services: Service[];
  }



const FlipCardComponent = ({services}:ServicesProps) => {

  return (

    <section className="lg:pt-16 lg:pb-0 mx-auto sm:py-20 w-full">
      <div className=" flex justify-center object-center  lg:py-4 sm:py-24 lg:w-full ">
        <div className="flex justify-center items-center object-center lg:flex-row flex-col lg:gap-0  sm:gap-16">
          <h2 className="text-4xl justify-center items-center  font-semibold tracking-tight text-cyan-500 sm:text-5xl lg:text-6xl lg:-rotate-90">
            Services
          </h2>
          <div className="mx-auto grid  gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-4">
            {services.map((service) => (
            <div key={service.name} className="group h-80 w-80 p-10 [perspective:1000px] ">
              <div className="relative h-full w-full border border-r-2 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute h-full flex flex-col items-center justify-center w-full rounded-xl [backface-visibility:hidden]">
                    {service.imageUrl && (
                      <Image
                        className="object-cover cursor-pointer object-left  rounded-xl"
                        src={service.imageUrl}
                        alt={service.name}
                        width={50}
                        height={50}
                      />
                    )}
                    <p className="md:my-6 text-2xl text-center lg:pt-12  ">{service.name}</p>
                  </div>
                  {/* Back Face */}
                  <div className=" h-full  rounded-xl bg-black/80  text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full  flex-col w-full items-center justify-center">
                      <p className="text-base text-pretty flex  mb-4 w-full items-center justify-center h-full">
                        {service.description}
                      </p>
                    
                    </div>
                  </div>
                </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

};



export default FlipCardComponent;