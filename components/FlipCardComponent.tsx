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

    <section className="py-16 mx-auto sm:py-20">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center items-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl justify-center items-center  font-semibold tracking-tight text-cyan-500 sm:text-5xl lg:text-6xl">

            Services

          </h2>
          <div className="mx-auto grid mr-10 gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="group h-80 w-80 p-4 [perspective:1000px] ">
              <div className="relative h-full w-full border border-r-2 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-full flex flex-col items-center justify-center w-full rounded-xl [backface-visibility:hidden]">
                    {service.imageUrl && (
                      <Image
                        className="object-cover cursor-pointer object-left  rounded-xl"
                        src={service.imageUrl}
                        alt={service.name}
                        width={200}
                        height={200}
                      />
                    )}
                    <p className="md:my-6 text-2xl ">{service.name}</p>
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#35747D] via-cyan-600 to-gray-400">{service.name}</h2>
                      <p className="text-base text-pretty text-center mb-4">
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