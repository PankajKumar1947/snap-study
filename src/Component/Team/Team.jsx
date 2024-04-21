import React from 'react'
import useGithub from '../../CustomHooks/useGithub'

const Team = () => {
    const {githubProfile} =useGithub("PankajKumar1947");
    //console.log(githubProfile)

  return (
    <div className='text-white  flex justify-center flex-col items-center'>
        <h1 className='text-center text-4xl font-semibold pt-8'>Developed by</h1>
        <div className='my-10 mx-[8%] flex flex-wrap gap-7 justify-center items-center'>          
            <div
            className='border-[1px] rounded-md p-4 overflow-hidden bg-zinc-900'>
                <div className='w-[250px]  rounded-tl-[40%] rounded-br-[50%]  rounded-xl overflow-hidden'>
                    <img src={githubProfile?.avatar_url} alt="" className='' />
                </div>
                <h2 className='text-center mt-2'>{githubProfile?.name}</h2>
                <div className='flex justify-evenly mt-2'>
                    <a 
                    href={githubProfile?.html_url}
                    className='  bg-transparent border-[1px] hover:bg-white hover:text-black overflow-hidden  px-2 py-1  rounded-3xl'>Github</a>
                    <a 
                    href='https://www.linkedin.com/in/pankaj-kumar-5bbb44268/'
                    className='  bg-transparent border-[1px] hover:bg-white hover:text-black overflow-hidden  px-2 py-1 rounded-3xl'>LinkedIn</a>
                </div>
            </div>     
            
        </div>
    </div>
  )
}

export default Team