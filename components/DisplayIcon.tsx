import Image from 'next/image';
import React from 'react';

interface DisplayIconProps {
  name: string;
  img_src: string;
}

const DisplayIcon = ({ name, img_src }: DisplayIconProps) => {
  return (
    <div className="flex flex-col  items-center justify-center w-24 sm:w-32 md:w-48 lg:w-100">
      <Image
        src={img_src}
        alt={name}
        className="mask mask-circle"
        width={100}
        height={100}
        priority
      />
      <div className="mt-4 text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-t from-stone-500 via-gray-400 to-gray-100">
        {name}
      </div>
    </div>
  );
};

export default DisplayIcon;
