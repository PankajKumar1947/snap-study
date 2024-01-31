import React from 'react'

const Semester = ({ind}) => {
  return (
    <div className='w-[200px] h-[100px] bg-gray-600 rounded-3xl flex justify-center items-center border-[1px] hover:bg-transparent cursor-pointer'>
        {
            `SEMESTER-${ind+1}`
        }
    </div>
  )
}

export default Semester