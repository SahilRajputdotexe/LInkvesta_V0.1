import React from 'react'

export const  Hero = async( {children}: {children: React.ReactNode}) =>{
  return (
    <div className="hero bg-gradient-to-b from-zinc-600 via-zinc-700 to-neutral-700 h-ful w-full rounded-3xl bg-opacity-15 ">
  <div className="hero-content flex-col lg:flex-row-reverse rounded-3xl p-10 ">
    
      {children}
    
  </div>
</div>
  )
}
