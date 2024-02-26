import React from 'react'
import { GoArrowDownRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className='px-[5%] bg-gray-600  text-white'>
      <h1 className='text-3xl font-semibold pt-10'>Your Company Name</h1>

      <div className='flex justify-between mt-5'>
        <div>
          <a href="home">Home</a>
        </div>
        <div className='flex flex-col gap-2'>
          <a href="fb">Facebook</a>
          <a href="fb">LinkedIn</a>
          <a href="fb">Twitter</a>
        </div>

        <div className='flex flex-col '>
          <p>Addresss</p>
          <p>Address Code</p>
        </div>
        <div></div>
        <div></div>

      </div>

      <br />
      <br /><br />
      <div className='text-2xl md:text-6xl flex gap-2 items-center' >
        <h1 >​info@mysite.com</h1>
        <div className='text-4xl md:text-8xl'>
          <GoArrowDownRight/>
        </div>    
      </div>

      <hr />
      <p className='my-3'>​© 2035 by Name of Site. Created by Pankaj Kumar.</p>
      <hr />
    </div>
  )
}

export default Footer