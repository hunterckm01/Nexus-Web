import React, { useContext } from 'react'
import Bottomlogo from '../Assests/Front_Assests/logo_nexus_bottom.png'
import FooterImg from '../Assests/Front_Assests/footer_circle_image.svg'
import { AppContext } from '../Context/AppContext'

const FooterSection = () => {
  const {navigate} = useContext(AppContext);

  return (
    <footer className='w-full mt-[120px] text-white '>
        <div className='w-[90%] pt-[40px] rounded-tr-[50px] items-end justify-end bg-[#3c3c3c] px-[46px]  '>
            <div className='mt-[66px] flex justify-between w-full max-w-[1114px]  mx-auto h-[410px] overflow-y-auto'>
                <div className='flex flex-col'>
                <img src = {Bottomlogo} className='w-[140px] h-[50px] relative top-0'></img>
                <img src = {FooterImg} className='h-[210px] relative bottom-[-82px] sm:block md:hidden'></img>
                </div>
                <div className='flex flex-col mt-[20px] items-center ml-[40px]'>
                    <div className='flex sm:flex-col md:flex-row gap-[8rem]'>
                        <div className='flex flex-col gap-1'>
                            

                            <p className='uppercase text-[20px] select-none'>About</p>
                            <div className='h-[2px] bg-[#f5ab67] w-[70px] mt-[2px]'></div>
                            
                            <ul className='text-[18px] tracking-[0.90px] mt-[12px] flex flex-col gap-[24px] font-semibold'>
                                <li className = "cursor-pointer" onClick={()=>navigate("/About")}>About</li>
                                <li className = "cursor-pointer" onClick={()=>navigate("/Work")}>What we do</li>
                                <li className = "cursor-pointer" onClick={()=>navigate("/Work")}>Works</li>
                                <li className = "cursor-pointer" onClick={()=>navigate("#")}>Testimonial</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='uppercase text-[20px] select-none'>Follow us</p>
                            <div className='h-[2px] bg-[#f5ab67] w-[110px] center mt-[2px]'></div>
                            <ul className='text-[18px] tracking-[0.90px] mt-[12px] flex flex-col gap-[24px] font-semibold'>
                                
                                <li>
                                    <a href = "https://dribbble.com/" target = "_blank" rel="noopener noreferrer">Dribble</a>
                                </li>

                                <li>
                                    <a href = "https://www.instagram.com/" target = "_blank" rel="noopener noreferrer">Instagram</a>
                                </li>

                                <li>
                                    <a href = "https://www.behance.net/" target = "_blank" rel="noopener noreferrer">Behance</a>
                                </li>

                                <li>
                                    <a href = "https://in.pinterest.com/" target = "_blank" rel="noopener noreferrer">Pinterest</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <p className='relative top-12 font-semibold text-[14px]'>All Rights Reserved</p>
                </div>
                <img src = {FooterImg} className='h-[310px] relative bottom-[-82px]'></img>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection
