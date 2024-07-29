import React from 'react'
// import userReview from '../reviewCus';

const UserReviewCard = (props) => {
    const customer = props.userReview ;
    const userReview = customer.review ;
    const img = customer.img ;
    const name = customer.name ;
    const job = customer.job ;
    const newuserReview = userReview.split(" ").slice(0,40).join(" ") + "...";
    
  return (
    
      <div className='flex flex-col gap-[20px] p-[30px] pl-[34px] bg-white rounded-[10px] w-full max-w-[400px] hover:shadow-xl  transition-all duration-300 min-h-[349px] justify-between'>
                  <p className='w-[98%] text-[18px] text-[#595959] leading-[30px]'> {newuserReview} </p>
                  <div className='flex gap-6 mx-[6px] mb-[10px]'>
                    <img src = {img} className='w-[48px] h-[48px] rounded-[12px]'></img>
                    <div className='flex flex-col items-center mt-[-4px] w-full ml-[-20px]'>
                      <p className='text-[20px] text-black font-semibold'>{name}</p>
                      <p className='text-[15px] text-[#595959] capitalize'>{job}</p>
                    </div>
                  </div>
        </div>
    
  )
}

export default UserReviewCard
