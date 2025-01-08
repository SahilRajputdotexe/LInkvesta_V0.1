import React from 'react';

export const Hero = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hero bg-gradient-to-b from-zinc-600 via-zinc-700 to-neutral-700 h-full w-full rounded-3xl bg-opacity-15">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-between p-6 lg:p-10 rounded-3xl">
        {children}
      </div>
    </div>
  );
};
