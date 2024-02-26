import React from 'react'
import Fag from './Fag'

const Faqs = () => {
    const faqs=[
        {
            Ques:`Question-1`,
            Ans:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum ipsum rerum unde aperiam quis consequuntur voluptas odio assumenda possimus, vitae, voluptatibus perferendis id hic dignissimos ab officiis tenetur architecto nostrum modi saepe maiores voluptates! Asperiores vel omnis inventore eum?`
        },
        {
            Ques:`Question-1`,
            Ans:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum ipsum rerum unde aperiam quis consequuntur voluptas odio assumenda possimus, vitae, voluptatibus perferendis id hic dignissimos ab officiis tenetur architecto nostrum modi saepe maiores voluptates! Asperiores vel omnis inventore eum?`
        },
        {
            Ques:`Question-1`,
            Ans:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum ipsum rerum unde aperiam quis consequuntur voluptas odio assumenda possimus, vitae, voluptatibus perferendis id hic dignissimos ab officiis tenetur architecto nostrum modi saepe maiores voluptates! Asperiores vel omnis inventore eum?`
        },
        {
            Ques:`Question-1`,
            Ans:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum ipsum rerum unde aperiam quis consequuntur voluptas odio assumenda possimus, vitae, voluptatibus perferendis id hic dignissimos ab officiis tenetur architecto nostrum modi saepe maiores voluptates! Asperiores vel omnis inventore eum?`
        },
    ]
  return (
    <div className='text-white mt-10 bg-gray-900 p-2 sm:p-4 '>
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
       
    </div>
  )
}

export default Faqs