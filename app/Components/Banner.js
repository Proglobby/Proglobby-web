import React from 'react'

const Banner = () => {
  return (
    <div className='order-2 h-full lg:w-[75%] lg:order-1 justify-items-center'>
      <div className=" mt-[60] h-full py-[60px] px-[100px] w-[80%] text-primary font-jetbrains">
        <h1 className="text-4xl text-start text-primary font-jetbrains">Welcome to <span className='text-purple-600'>Prog</span><span className='text-green-400'>lobby</span></h1>
        <p className="text-xl text-start">Programming Lobby for everyone</p>
      </div>
    </div>
  )
}

export default Banner