import React from 'react'
import Fag from './Faq'

const Faqs = () => {
    const faqs=[
        {
            Ques:`
            What subjects does this website cover? `,
            Ans:`Our website provides study resources for a comprehensive range of subjects relevant to your MAKAUT University stream. Be sure to explore the "Subjects" section to find the specific topics you need`
        },
        {
            Ques:`Are the previous year question papers downloadable or can I only view them online? `,
            Ans:` We offer flexibility in accessing past exam papers. You can download them for offline study using Google Drive or conveniently view them directly on our website.`
        },
        {
            Ques:` Do you offer any answer keys or explanations for the previous year questions?`,
            Ans:` We understand the importance of answer keys and explanations for effective exam preparation. While we are currently developing this feature and it will be available soon, you'll find solutions for many questions already included within the downloadable subject organizers`
        },
        {
            Ques:` Is this website free to use? `,
            Ans:`Access to our website's resources requires a time investment from you, allowing you to reap the benefits of focused exam preparation.`
        },
    ]
  return (
    <div 
    className='bg-gradient-to-r from-[#200122] via-black/5 to-[#6f0000] top-0 text-white py-10  p-2 sm:p-4 '>
        <h1 className='text-3xl sm:text-5xl p-4 sm:p-6 sm:ml-[10%] font-bold'>FAQs</h1>
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