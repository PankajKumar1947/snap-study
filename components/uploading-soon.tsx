import Link from 'next/link'
import React from 'react'

const UploadingSoon = () => {
    return (
            <div className="text-center max-w-6xl mx-auto  flex flex-col items-center justify-center px-2 lg:px-8 z-20">
            <h2 className="text-xl font-extrabold  text-white sm:text-4xl">
                <span className="block">
                    Uploading Soon!
                </span>
            </h2>
            <p className="text-normal sm:text-xl mt-4 max-w-md mx-auto text-violet-500">
                This page is not available right now, but it will be soon. Stay tuned!
            </p>
            <div className='mt-5'>
                <Link href={"/"}
                    className="bg-white text-black px-3 py-2 sm:px-5 sm:py-3  rounded-full font-semibold ">
                    <button className=''>Back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default UploadingSoon