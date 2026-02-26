import React from 'react'
import Data from './Data'
import { useState } from 'react'

const Accordian = () => {
    const [selected, setSelected] = useState(null);

    const handleSingle = (i)=>{
        setSelected(i === selected ? null : i)
    }
  return (
     <> 
    <div className='wrapper flex flex-col items-center justify-center mt-10 '>
        <div className='pb-5 border-b-2 flex items-center justify-center mb-5'>
            <h1 className='text-3xl font-bold'>Accordian</h1>
        </div>
        <div className="accordian flex flex-col gap-5">

            {
                Data && Data.length > 0 ?  
                     Data.map(dataItem=>
               <div className="item" key={dataItem.id}>
                <div onClick={()=>handleSingle(dataItem.id)} className=" flex text-white font-bold
                  items-center bg-amber-500 justify-between px-5 py-5 gap-5 cursor-pointer">
                    <h3 className=''>{dataItem.question}</h3>
                    <span>+</span>
                </div>
                {
                    selected === dataItem.id ? <div className="flex text-white font-bold
                  items-center bg-amber-500 justify-between px-5 py-5 gap-5 cursor-pointer">{dataItem.answer}</div> : null
                }
               </div>)
                : "No Data found!"
            }
        </div>
    </div>
     </>
  )
}

export default Accordian
