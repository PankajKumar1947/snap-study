import React, { useEffect, useState } from 'react'
import Spinner from '../Error/Spinner';

const News = () => {
    const [news,setNews]=useState({});
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        const getData=async()=>{
            setLoading(true);
            try{
                const response=await fetch("https://makaut1.ucanapply.com/smartexam/public/api/notice-data");
                const data=await response.json();
                setNews(data.data);
            }
            catch(error){
                console.log("Error occured while fetching the news");
                console.log(error);
            }
            setLoading(false);
        }
        getData();
        
    },[])

    if(loading){
        return <Spinner/>
    }
  return (
    <div className='bg-gradient-to-r from-[#200122] to-[#042253] -my-3'>
        <div className='w-[96%] md:w-[80%] mx-auto border-2 bg-gradient-to-l from-[#200122] to-[#042253] m-4 text-white rounded-2xl'>
            <h1 className='text-center text-3xl font-semibold m-4 text-cyan-400'>Latest Notifications</h1>
            <hr />

            <div className='flex flex-col gap-3 justify-center p-4'>
                {
                    news.length > 0 && news.map((eachNews) => {
                        const truncatedTitle = eachNews.notice_title.length > 90
                            ? eachNews.notice_title.substring(0, 90) + '...'
                            : eachNews.notice_title;
                    
                        return (
                            <a 
                            key={eachNews.id}
                            href={eachNews.file_path}
                            className=' p-2 px-4 rounded-full bg-white/20 flex-1 hover:bg-gray-300 hover:text-black text-xs sm:text-lg'>
                                <span className='text-black font-semibold'>{eachNews.notice_date}</span> : {truncatedTitle}
                            </a>
                        );
                    })
                }   
            </div>
        </div>
    </div>
  )
}

export default News