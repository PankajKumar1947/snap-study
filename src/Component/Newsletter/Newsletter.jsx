import React, { useState } from 'react'

const Newsletter = () => {
  const [email,setEmail]=useState("");
  const [click,setClick]=useState(false);
  const [showClick,setShowClick]=useState(false);

  const submitHandler=(e)=>{
    e.preventDefault();
    if(!email)
      alert("Please enter the email");
    if(!click)
      setShowClick(true);
    else{
      console.log("Newsletter email => ",email);
      setEmail("");
    }
  }
  return (
    <div className='sm:max-w-[70%] mx-2 text-sm sm:text-base sm:mx-auto rounded-2xl my-14 bg-gray-900 text-white p-5'>
        <h1 className='text-2xl sm:text-4xl'>Subscribe to our newsletter</h1>
        <div className='mt-4 flex flex-col w-[100%] gap-2'>
            <label htmlFor='email' className='ml-2 text-xl'>Email</label>
            <input 
            onChange={(e)=>{setEmail(e.target.value)}}
            value={email}
            name='email' id='email' type='email' placeholder='Email' className='text-black outline-none px-3 py-3 rounded-xl  '/>
        </div>
        {!email ? <h1 className='text-red-400 mt-1'>Please enter the email</h1> : ""}
        <div className='mt-4 flex ml-2 w-[100%] gap-2'>
            <input 
            onClick={()=>setClick((prev)=>!prev)}
            type="checkbox" />
            <label htmlFor="">Yes, Subscribe me to your newsletter</label>
        </div>
        <div className='px-2 text-red-400'>
          {showClick ? <h1>Please tick the checkbox</h1>:""}
        </div>
        <div className=' mt-4 mx-4'>
            <button 
            onClick={submitHandler}
            className='bg-blue-500 hover:bg-blue-600 duration-200 text-white w-full py-2 rounded-full'>Submit</button>
        </div>
    </div>
  )
}

export default Newsletter