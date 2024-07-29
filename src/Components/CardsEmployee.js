import React from 'react'

const CardsEmployee = (props) => {
   
    const emp = props.data ;
    const img = emp.img ;
    const name = emp.name ;
    const job = emp.job ;
   
  return (
 
            <div className='flex flex-col items-center gap-[38px] w-full'>
                <img src = {img} className='w-full h-[480px] rounded-[10px] hover:scale-95 transition-all duration-500'></img>
                <div className='flex flex-col items-center gap-[12px]'>
                    <p className='text-[25px] text-[#3a3a3a] font-semibold'>{name}</p>
                    <p className='text-[20px] text-[#00000068]'>{job}</p>
                </div>
            </div>
      
  )
}

export default CardsEmployee ;
