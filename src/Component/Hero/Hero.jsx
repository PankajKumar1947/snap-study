import React from 'react'
import bgVideo from "../../Assets/bg-video.mp4"

const Hero = () => {
  const readnowHandler=()=>{
    window.scrollTo(0,600);
  }
  return (
    <div className="relative text-white">
      {/* Background Video */}
      <video
        className="w-[100vw] h-[30vh] md:h-[80vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className='text-xs sm:text-2xl my-2 text-center'>Explore latest makaut study material</h1>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Organised with ease </h2>
        <button 
        onClick={readnowHandler}
        className="bg-gray-800 text-white px-3 py-2 sm:px-6 sm:py-3 text-xs sm:text-lg rounded-full hover:text-gray-800 hover:bg-white duration-200">Read Now</button>
      </div>
    </div>
  )
}

export default Hero