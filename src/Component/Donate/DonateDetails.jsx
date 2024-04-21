import React, { useEffect } from 'react'

const DonateDetails = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <div className='text-white flex flex-col gap-5 max-w-[95%] sm:max-w-[70%] mx-auto'>
      
      <div className='m-2'>
        <h1 className='text-cyan-500 font-semibold text-base sm:text-3xl'>Contributing a YouTube Lectures ?</h1>
        <h2 className='font-semibold italic text-indigo-500'>Guidlines</h2>
        <ul className='list-decimal px-4 text-xs sm:text-base'>
          <li>Fork the repository to your GitHub account. <a className='text-blue-400 italic underline' href="https://github.com/PankajKumar1947/Snap-Study-Data">Click me</a></li>
          <li>Chose the Department for which you want to make contribution.</li>
          <li>Make changes to the JSON file containing the lecture links.</li>
          <li>Submit a pull request with a clear description of the changes you've made.</li>
        </ul>
      </div>
      <div className='m-2'>
        <h1 className='text-cyan-500 font-semibold text-base sm:text-3xl'>Contributing a pdf of Organiser/Pyq ? </h1>
        <h2 className='font-semibold italic text-indigo-500'>Guidlines</h2>
        <ul className='list-decimal px-4 text-xs sm:text-base'>
          <li>Ensure submitted PDFs are accurate representations of previous year questions and organizers.</li>
          <li>Provide relevant metadata such as Your name, organiser for which semester, and subject for each submission.</li>
          <li>Fill out the Form from given links <a className='text-blue-400 italic underline' href="https://forms.gle/cbqW6mT53qqXq1Dm6">Click me</a></li>
          <li>Submitted PDFs will be reviewed for quality and relevance before publication.</li>
        </ul>
      </div>
      <div className='m-2'>
        <h1 className='text-cyan-500 font-semibold text-base sm:text-3xl'>Found a Bug in Website ? </h1>
        <h2 className=' italic text-red-500 underline text-xs sm:text-base'>
            <a href="https://github.com/PankajKumar1947/snap-study">Report here</a>
          </h2>  
      </div>
      
    </div>
  )
}

export default DonateDetails