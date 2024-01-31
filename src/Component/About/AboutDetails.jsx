import React from 'react'
import ResponsiveImage from "../../Assets/vision.jpg";

const AboutDetails = () => {
  return (
    <div className='text-white bg-gray-900 '>
        <div className='px-[5%] py-6'>
            <h1 className='text-4xl font-bold'>About Us</h1>
            <div className='flex justify-between items-center flex-wrap  gap-4'>
                {/* left */}
                <div className='mt-6 sm:w-1/2 flex justify-center flex-wrap gap-5'>
                    <div className=' border-[1px] rounded-3xl p-5 bg-gray-800'>
                        <h1 className='italic text-xl underline'>What makes us apart </h1>
                        <p className='text-gray-300 mt-2'>This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers </p>
                    </div>
                    <div className=' border-[1px] rounded-3xl p-5 bg-gray-800'>
                        <h1 className='italic text-xl underline'>What makes us apart </h1>
                        <p className='text-gray-300 mt-2'>This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers </p>
                    </div>
                </div>
                {/* right */}
                <div className="md:w-1/3 mb-4 lg:mb-0 rounded-xl overflow-hidden">
                    <img src={ResponsiveImage} alt="" />
                </div>
            </div>
            
        </div>

        {/* Our mission */}
        <div className='px-[5%] py-7'>
            <h1 className='text-4xl font-bold '>Our Vision</h1>
                <div className="container mx-auto flex flex-col justify-center items-center mt-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="md:w-1/3 mb-4 lg:mb-0 rounded-xl overflow-hidden">
                            <img src={ResponsiveImage} alt="" />
                        </div>
                    <div className="lg:w-1/2 lg:pl-8 pt-4 flex flex-col gap-5">
                        <p className="t leading-relaxed">
                        Your mission description goes here. Explain what your company or organization is striving to achieve and how it benefits your audience.
                        </p>
                        <p className="t leading-relaxed">
                        Your mission description goes here. Explain what your company or organization is striving to achieve and how it benefits your audience.
                        </p>
                        <p className="t leading-relaxed">
                        Your mission description goes here. Explain what your company or organization is striving to achieve and how it benefits your audience.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AboutDetails