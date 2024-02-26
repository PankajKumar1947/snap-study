import React, { useEffect } from 'react'
import doubt from "../../Assets/doubt.jpg"

const Contact = () => {
    useEffect(()=>{
        window.scroll(0,0);
    },[])
  return (
    <>
    <h1 className='text-4xl ml-[10%] text-white mt-10'>Have any Doubt ?</h1>
    <div className='max-w-[90%] flex justify-center items-center gap-5 mx-auto pb-10  text-white'>
        {/* left */}
        <div className='w-[40%] hidden sm:flex justify-center items-center  mt-8 '>
            <img src={doubt} alt='' className='h-[450px] rounded-3xl'/>
        </div>
        {/* right */}
        <div className='w-full sm:w-[60%]'>
            <h1 className='text-4xl text-center '>Contact Us</h1>
            <form className='mt-6 border-[1px] p-4 py-6 sm:p-8 rounded-2xl flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <div className='flex flex-col w-[40%] gap-2'>
                        <label htmlFor='firstname'>First Name</label>
                        <input name='firstname' id='firstname' type='text' placeholder='First Name' className='text-gray-400 outline-none bg-transparent border-b-2'/>
                    </div>
                    <div className='flex flex-col w-[40%] gap-2'>
                        <label htmlFor='lastname'>Last Name</label>
                        <input name='lastname' id='lastname' type='text' placeholder='Last Name' className='text-gray-400 outline-none bg-transparent border-b-2'/>
                    </div>
                </div>
                <div className='mt-4 flex flex-col w-[100%] gap-2'>
                    <label htmlFor='email'>Email</label>
                    <input name='email' id='email' type='email' placeholder='Email' className='text-gray-400 outline-none bg-transparent border-b-2'/>
                </div>
                <div className='mt-4 flex flex-col w-[100%] gap-2'>
                    <label htmlFor='phone'>Phone</label>
                    <input name='phone' id='phone' type='number' placeholder='Phone' className='text-gray-400 outline-none bg-transparent border-b-2'/>
                </div>
                <div className='mt-4 flex flex-col w-[100%]'>
                    <label htmlFor='message'>Message</label>
                    <textarea name="message" id='message' placeholder='Messages....' className='text-gray-400 outline-none bg-transparent border-b-2'/>
                </div>
                <div className='w-full '>
                    <button className='bg-black text-white hover:bg-white hover:text-black duration-200 py-3 px-6 rounded-full text-xl  '>Send</button>
                </div>
                
               
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact