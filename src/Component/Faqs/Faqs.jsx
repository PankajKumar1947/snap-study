import React from 'react'
import Fag from './Fag'

const Faqs = () => {
    const faqs=[
        {
            Ques:`
            What subjects does this website cover? `,
            Ans:`Here you will get all the subjects that are present in your stream. According to the MAKAUT university.`
        },
        {
            Ques:`Are the previous year question papers downloadable or can I only view them online? `,
            Ans:`You can download the papers using google drive as well as can view them online `
        },
        {
            Ques:` Do you offer any answer keys or explanations for the previous year questions?`,
            Ans:`Till this moment we are working on that feature it will be uploaded soon but most of the question's solutions are already available in the organiser. `
        },
        {
            Ques:` Is this website free to use? `,
            Ans:`No its not for free. You have to invest your time here. `
        },
    ]
  return (
    <div className='text-white py-10 bg-gradient-to-r from-gray-700 to-gray-900 p-2 sm:p-4 '>
        <h1 className='text-5xl p-4 sm:p-6 sm:ml-[10%] font-bold'>FAQs</h1>
        <div className='flex flex-col gap-3'>
            {
                faqs.map((elem,ind)=>{
                    return (
                        <Fag key={ind} elem={elem} />
                    )
                })
            }
        </div>
        <br />
       
    </div>
  )
}

export default Faqs