import React from 'react'
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

const Social = () => {
  return (
    <div className=' grid justify-center items-center  '>
        <div className=' p-2 text-2xl sm:text-4xl grid grid-cols-5 gap-2 sm:gap-4'>
            <div className='flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500'>
                <SiFacebook/>
                <p className='text-sm'>Facebook</p>
            </div>
            <div className='flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500'>
                <FaLinkedin/>
                <p className='text-sm'>LinkedIn</p>
            </div>
            <div className='flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500'>
                <FaSquareWhatsapp/>
                <p className='text-sm'>Whatsapp</p>
            </div>
            <div className='flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500'>
                <IoLogoDiscord/>
                <p className='text-sm'>Discord</p>
            </div>
            <div className='flex flex-col gap-1 items-center cursor-pointer hover:text-gray-500'>
                <FaCopy/>
                <p className='text-sm'>Copy link</p>
            </div>
            
            
        </div>
       
    </div>
  )
}

export default Social