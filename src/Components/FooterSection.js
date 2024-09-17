import React, { useContext } from 'react'
import Bottomlogo from '../Assests/Front_Assests/logo_nexus_bottom.png'
import FooterImg from '../Assests/Front_Assests/footer_circle_image.svg'
import { AppContext } from '../Context/AppContext'

const FooterSection = () => {
  const {navigate} = useContext(AppContext);

  return (
    <footer className='w-full mt-[120px] text-white '>
        <div className='w-[90%] pt-[40px] rounded-tr-[50px] items-end justify-end bg-[#3c3c3c] px-[46px]  '>
            <div className='md:mt-[66px] flex justify-between w-full max-w-[1114px]  mx-auto h-[410px] overflow-y-auto'>
                <div className='flex flex-col'>
                    <img src = {Bottomlogo} className='w-[140px] h-[50px] relative top-0'></img>
                    <img src = {FooterImg} className='h-[210px] relative bottom-[-82px] sm:block md:hidden'></img>
                </div>
                <div className='flex flex-col sm:mt-[10px] md:mt-[20px] r ml-[40px]'>
                    <div className='flex sm:flex-col md:flex-row sm:gap-4 md:gap-8 lg:gap-[8rem]'>
                        <div className='flex flex-col sm:gap-1 md:gap-1'>

                            <p className='uppercase text-[20px] select-none'>About</p>
                            <div className='h-[2px] bg-[#f5ab67] w-[70px] md:mt-[4px]'></div>
                            
                            <ul className='sm:text-[14px] md:text-[16px] lg:text-[18px] tracking-[0.90px] sm:mt-[8px] md:mt-[12px] flex flex-col sm:gap-[10px] md:gap-[24px] md:font-semibold'>
                                <li className = "cursor-pointer" onClick={()=>navigate("/About")}>About</li>
                                <li className = "cursor-pointer" onClick={()=>navigate("/Work")}>What we do</li>
                                <li className = "cursor-pointer" onClick={()=>navigate("/Work")}>Works</li>
                                <li className = "cursor-pointer" onClick={()=>navigate("#")}>Testimonial</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='uppercase text-[20px] select-none'>Follow us</p>
                            <div className='h-[2px] bg-[#f5ab67] w-[110px] center mt-[2px]'></div>
                            <ul className='sm:text-[14px] md:text-[16px] lg:text-[18px] tracking-[0.90px] sm:mt-[4px] md:mt-[12px] flex flex-col sm:gap-[10px] md:gap-[24px] md:font-semibold'>
                                
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
                    <p className='relative top-10 font-semibold text-[14px] mb-2'>All Rights Reserved</p>
                </div>
                <img src = {FooterImg} className=' md:h-[270px] lg:h-[310px] relative bottom-[-82px] sm:hidden md:block'></img>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection
