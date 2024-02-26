import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Branch from '../Component/Cards/Branch'
import Semester from '../Component/Cards/Semester'
import Footer from '../Component/Footer/Footer'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Course = () => {
    const [branchRoute,setBranchRoute]=useState("");
    const {id}=useParams();
    const navigate=useNavigate();
    const [isNavigating, setNavigating] = useState(false);

    const branchName=[
        {
            name:"CSE",
            image:"",
        },
        {
            name:"IT",
            image:"",
        },
        {
            name:"ECE",
            image:"",
        },
        {
            name:"AIML",
            image:"",
        },
        {
            name:"ME",
            image:"",
        },
        {
            name:"CSE",
            image:"",
        },
        {
            name:"CSE",
            image:"",
        },
        {
            name:"CSE",
            image:"",
        },
    ]

    const selectSem=(ind)=>{
        if(!branchRoute){
            alert("Please Select the Branch firstt")
        }
        else{
            
            navigate(`${branchRoute}/sem${ind+1}`);
        }
        
        
    }
    const selectBranch=(elem)=>{
        if(!isNavigating){
            setBranchRoute(`/choice/${id}/${elem.name.toLowerCase()}`);
            setNavigating(false);
        }
            
    }

  return (
    <div>
        <Navbar/>
        <div className='text-white bg-gray-900 py-6 px-[4%]'>
            <div>
                <h1 className='text-4xl '>Select Your Branch</h1>
                <div className='my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 justify-center '>
                    {
                        branchName.map((elem,ind)=>{
                            return (
                                <div key={ind} onClick={()=>selectBranch(elem)}>
                                    <Branch elem={elem}/>
                                </div>
                            )
                        })
                    }
                </div>

                <br /><br />
            </div>

            {/* semeseter */}
            <div className='w-full'>
                <h1 className='text-4xl '>Select Your Semester</h1>
                <div className='my-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-10 justify-center flex-wrap'>
                    {
                        branchName.map((elem,ind)=>{
                            return (
                                <div key={ind}>
                                    <div 
                                    onClick={()=>selectSem(ind)}
                                    >
                                        <Semester ind={ind} />
                                    </div>
                                </div>
                                
                            )
                        })
                    }
                </div>

                <br /><br />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Course