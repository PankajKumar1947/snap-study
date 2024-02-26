import React from 'react'

const Spinner = () => {
  return (
    <div class="w-full min-h-screen flex justify-center items-center">
        <div class="flex min-h-screen w-full items-center justify-center ">
            <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
            <div class="h-9 w-9 rounded-full "></div>
            </div>
        </div>
    </div>
  )
}

export default Spinner