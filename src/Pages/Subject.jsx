import React, { useEffect, useState } from 'react'
import Fag from '../Component/Faqs/Fag'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer/Footer'
import Social from '../Component/Cards/Social'
import { useParams } from 'react-router-dom'
import UploadedSoon from '../Component/Error/UploadedSoon'
import Spinner from '../Component/Error/Spinner'

const Subject = () => {
    //fetch the data
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);

    const {semId}=useParams();

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch(process.env.REACT_APP_API_URL);
                const result= await response.json();
                if(result[semId].length!==0)
                    setData(result[semId]);
                console.log(result[semId])
            }
            catch(err){
                setError(err);
                console.log("Can't fetch the data");
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    },[semId,error])

    if(loading){
        return <div className='text-white text-4xl text-center'>
            <Navbar/>
                <Spinner/>
            <Footer/>
        </div>
    }

  return (
        <>
            <Navbar/>
            <div className='text-white'>
                {
                    loading ? <div><Spinner/></div> : 
                        !data ? <div>
                            <UploadedSoon/>
                        </div>:
                    <div className='text-white pt-10 bg-gray-900 p-2 sm:p-4 '>
                        <h1 className='text-5xl p-4 sm:p-6 ml-[10%] font-bold'>Subject Name</h1>
                        <div className='flex flex-col gap-3'>
                            {
                                data && data.map((elem,ind)=>{
                                    return (
                                        <div key={ind}>
                                            <Fag  elem={elem} />
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                        <h1 className='mt-8 text-2xl text-center'>Thanks for using our website</h1>
                        <h2 className='my-3 text-sm text-center'>Please share to your friends</h2>

                        <Social/>
                    </div>
                }
            </div>
            
        
            

            <Footer/>
        </>
  )
}

export default Subject