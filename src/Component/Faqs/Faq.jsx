import React, { useState } from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import PyqCard from '../Common/PyqCard';


const Fag = ({elem}) => {
    const [click,setClick]=useState(false);
    const {id}=useParams();
    const [pyqData,setPyqData]=useState([]);
    //console.log(id)

    const setPyq=()=>{
        setClick(prev=>!prev);
        setPyqData(elem.pyqLink);
    }
  return (
    <div>
        <div className=' sm:max-w-[70%] mx-auto '>
            <a href={elem[id]}>
                <div 
                onClick={setPyq}
                className='text-xl sm:text-2xl flex justify-between items-center group cursor-pointer rounded-2xl sm:rounded-full bg-black backdrop-blur-2xl p-3 sm:p-6 sm:px-8 '>
                    <h2 className='group-hover:ml-4 duration-300 text-sm sm:text-2xl'>{elem.subject? elem.subject :elem.Ques}</h2>
                    <div className='sm:mr-5 group-hover:rotate-45 duration-300 text-2xl sm:text-5xl'>
                        <BsArrowRightCircle/>
                    </div>
                </div>
            </a>
            
            <div className={`mx-2 sm:mx-8 mt-2 text-xs opacity-80 sm:text-xl ${click ? 'block' : 'hidden'}`}>
                {
                    elem.Ans ? elem.Ans : id==="pyq"? <PyqCard pyqData={pyqData}/> :""
                }
            </div>
        </div>
        
    </div>
  )
}

export default Fag