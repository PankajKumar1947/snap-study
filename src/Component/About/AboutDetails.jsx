import React from 'react'
import vision1 from "../../Assets/snap-study.png";
import vision2 from "../../Assets/vision.jpg"

const AboutDetails = () => {
  return (
    <div className='text-white bg-gradient-to-r from-red-900/30 via-blue-900/30 to-black  '>
        <div className='px-[5%] py-6'>
            <h1 className='text-2xl sm:text-4xl font-bold'>About Us</h1>
            <div className='flex justify-between items-center flex-wrap-reverse text-sm sm:text-base  sm:gap-4'>
                {/* left */}
                <div className='sm:mt-6 sm:w-1/2 flex justify-center flex-wrap gap-5'>
                    <div className=' p-2 rounded-lg hover:bg-black bg-gray-800'>
                        <h1 className='italic text-xl '>Our Inspiration: Recognizing a Student Need</h1>
                        <p className='text-gray-300 mt-2'>
                            Our journey began during our first year at university. We, like many new students, faced the challenge of efficiently navigating exam preparation resources. Locating relevant study materials and well-organized subject organizers proved to be a time-consuming and frustrating task. We often found ourselves searching through numerous websites, and even then, essential resources were scattered or unavailable for free.</p>
                    </div>
                    <div className=' p-2 rounded-lg hover:bg-black bg-gray-800'>
                        <h1 className='italic text-xl '>Creating a Centralized Platform</h1>
                        <p className='text-gray-300 mt-2'>

                            This experience sparked the idea for this website. We envisioned a centralized platform that would empower students by providing them with all the necessary exam preparation resources in one convenient location. Our goal was to streamline the process of finding past exam papers, downloadable subject organizers, and other valuable study aids.
                            </p>
                    </div>
                </div>
                {/* right */}
                <div className="flex-1 mb-4 lg:mb-0 rounded-xl overflow-hidden  ">
                    <img src={vision1} alt="" className='sm:w-[35vw]' />
                </div>
            </div>
            
        </div>

        {/* Our mission */}
        <div className='px-[5%] py-7'>
            <h1 className='text-4xl font-bold '>Our Vision</h1>
                <div className="container mx-auto flex flex-col justify-center items-center mt-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="md:w-1/3 mb-4 lg:mb-0 rounded-xl overflow-hidden">
                            <img src={vision2} alt="" />
                        </div>
                    <div className="lg:w-1/2 lg:pl-8 pt-4 flex flex-col gap-5 text-sm sm:text-base">
                        <p className=" leading-relaxed">
                            Our Commitment: Free and Accessible Resources
  
                        </p>
                        <p className=" leading-relaxed">                       
                            We understand the financial constraints faced by many students.
                        </p>
                        <p className=" leading-relaxed">
                        Therefore, we are committed to providing all resources on this website free of charge. We believe that every student deserves equal access to quality exam preparation materials.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AboutDetails