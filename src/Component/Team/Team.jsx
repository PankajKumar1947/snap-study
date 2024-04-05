import React from 'react'
import contr from '../../Assets/contr.jpg'

const Team = () => {
    const contributor=[
        {
            img:contr,
            name:"Sam Altman",
            role:"Frontend devloper",
            github:"",
            linkedind:"",
        },
        {
            img:contr,
            name:"Sam Altman",
            role:"Frontend devloper",
            github:"",
            linkedind:"",
        },
        {
            img:contr,
            name:"Sam Altman",
            role:"Frontend devloper",
            github:"",
            linkedind:"",
        },
        
    ]
  return (
    <div className='text-white mt-14 bg-gray-900 flex justify-center flex-col items-center'>
        <h1 className='text-center text-4xl font-semibold pt-8'>Our Team Member</h1>
        <div className='my-10 mx-[8%] flex flex-wrap gap-7 justify-center items-center'>
            {
                contributor.map((elem,ind)=>{
                    return (
                        <div
                        key={ind}
                        className='border-[1px] rounded-md p-4 overflow-hidden bg-zinc-900'>
                            <div className='w-[250px] h-[300px] rounded-tl-[40%] rounded-br-[50%]  rounded-xl overflow-hidden'>
                                <img src={elem.img} alt="" />
                            </div>
                            <h2 className='text-center mt-2'>{elem.name}</h2>
                            <div className='flex justify-evenly mt-2'>
                                <button className='  bg-transparent hover:border-[1px] overflow-hidden hover:text-white px-2 py-1 rounded-3xl'>Github</button>
                                <button className='  bg-transparent hover:border-[1px] overflow-hidden hover:text-white px-2 py-1 rounded-3xl'>LinkedIn</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Team