import React from 'react'

const Newsletter = () => {
  return (
    <div className='max-w-[70%] mx-auto rounded-2xl my-14 bg-gray-600 text-white p-5'>
        <h1 className='text-4xl'>Subscribe to our newsletter</h1>
        <div className='mt-4 flex flex-col w-[100%] gap-2'>
            <label htmlFor='email' className='ml-2 text-xl'>Email</label>
            <input name='email' id='email' type='email' placeholder='Email' className='text-black outline-none px-3 py-3 rounded-xl  '/>
        </div>
        <div className='mt-4 flex ml-2 w-[100%] gap-2'>
            <input type="checkbox" />
            <label htmlFor="">Yes, Subscribe me to your newsletter</label>
        </div>
        <div className=' mt-4 mx-4'>
            <button className='bg-blue-500 hover:bg-blue-600 duration-200 text-white w-full py-2 rounded-full'>Submit</button>
        </div>
    </div>
  )
}

export default Newsletter