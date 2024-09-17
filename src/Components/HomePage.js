import React, { useContext, useState } from 'react'
import MainImg from '../Assests/Home_Assests/main_img.svg'
import AboutImg1 from '../Assests/Home_Assests/ui_ux_img.svg'
import AboutImg2 from '../Assests/Home_Assests/website_dev_img.svg'
import AboutImg3 from '../Assests/Home_Assests/Branding_product_img.svg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { AppContext } from '../Context/AppContext'
import cardsEmpData from '../CardsEmpData'
import CardsEmployee from '../Components/CardsEmployee'
import userReview from '../reviewCus'
import UserReviewCard from '../Components/UserReviewCard'
import { HashLink } from 'react-router-hash-link'
import './HomePage.css'


// ABOUT US HOVER EFFECT IS PENDING 
const HomePage = () => {
  const {navigate} = useContext(AppContext);
  const reqEmpData = cardsEmpData.filter(data=> data.id <=3);
  const [index , setIndex] = useState(0) ;


  return (<div>
    {/* Main File of Home Page */}
      <div className='mt-[54px] flex justify-center w-full '>
        <div className='flex justify-center mx-auto sm:max-w-[90%] xl:max-w-[1192px] w-full '>
          <div className='sm:py-[40px] md:py-[86px] w-full bg-[#ccfaf5] rounded-[34px] '>
              <div className='flex items-center justify-center'>
                  <div className='flex flex-col gap-[32px] sm:w-[72%] lg:w-[48%] z-[1]'>
                      <p className='overflow-y-hidden sm:text-[40px] md:text-[60px] lg:text-[75px] sm:leading-[50px] md:leading-[80px] font-semibold'>Maximize your business with <span className='text-[#e05d5d]'>us</span></p>
                      <p className='text-[20px] text-[#00000060] leading-[35px] '>Maximize your business with a variety of services and services from us</p>
                      <div className='text-[#ffffff] flex lg:flex-row sm:flex-col gap-[25px] justify-center items-center'>
                          <button className='flex items-center justify-center px-[34px] min-w-[200px] h-[68px] font-bold text-[16px] text-center bg-black rounded-md' onClick={()=>navigate("/Contact")}>Contact Us</button>
                          <button className='about-us flex items-center justify-center px-[31px] min-w-[200px] h-[66px] font-bold text-[16px] text-center  text-[#000000] rounded-md -[3px] border-[3px] border-black' onClick={()=>navigate("/About")}>About Us</button>
                      </div>
                  </div>
                  <img src = {MainImg} className='sm:hidden md:block w-[44%] h-[472px]'/>
              </div>
          </div>
        </div>
      </div>


      {/* Meet Our Team Component */}
      <div className='flex flex-col items-center mt-[94px] '>
        <div className='flex flex-col gap-[32px] mx-auto w-full sm:max-w-[90%] xl:max-w-[1192px] '>
          <div className='flex items-start justify-between gap-[20px] ml-[16px]  '>
            <p className='text-[40px] font-semibold '>Meet our Team</p>
            {/* Link is Pending Here */}
            <div id = "viewall" className='text-[20px] text-[#e05d5d] font-semibold  cursor-pointer' onClick={()=>navigate("/About")}><HashLink to = "/About#Viewall" smooth> View All</HashLink></div>
          </div>

          <div className=' w-full mt-[100px] mb-[50px]'>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto max-w-[1192px] gap-[30px] '>
              {
              reqEmpData.map((data , id)=>(<CardsEmployee data ={data} key = {data.id}/>))
              }
            </div>
          </div>
        </div>
      </div>



      {/* About Section at Home Page */}
      <div className='flex flex-col items-center mt-[94px]'>
        <div className='flex flex-col items-center gap-[34px] mx-auto w-full sm:max-w-[90%] xl:max-w-[1192px] '>
          <p className='text-[40px] text-black font-semibold '>What We do</p>

          <div className='flex justify-center px-[56px] py-[112px] rounded-[90px] bg-[#ffecec] w-full '>
            <ul className='flex sm:flex-col lg:flex-row 
            sm:gap-[12px] xl:gap-[52px] ml-[8px] mb-[6px] w-[84%] sm:items-center lg:justify-between'>
              <li className='flex flex-col gap-[36px] my-[34px] sm:w-[70%] lg:w-[33%] lg:px-[18px] sm:px-[12px] sm:py-[4px] lg:py-[8px] hover:scale-105 transition-all duration-500 hover:shadow-md rounded-xl'>
                <img src = {AboutImg1} className='w-[46px] h-[46px] '/>
                <div className='flex flex-col items-start gap-[12px]  '>
                  <p className='text-[25px] text-black  font-semibold'>UI/UX Design</p>
                  <p className='text-[15px] text-[#595959] leading-[30px] '>We can make your website or application design better with this service</p>
                </div>
              </li>
              <li className='flex flex-col gap-[36px] my-[34px] lg:px-[18px] sm:px-[12px] sm:py-[4px] lg:py-[8px] hover:scale-105 transition-all duration-500 hover:shadow-md rounded-xl sm:w-[70%] lg:w-[33%]'>
                <img src = {AboutImg2} className='w-[46px] h-[46px] '/>
                <div className='flex flex-col items-start gap-[12px] '>
                  <p className='text-[25px] text-black  font-semibold'>Website Dev</p>
                  <p className='text-[15px] text-[#595959] leading-[30px] '>Make your business more leverage by having an optimal website and we are ready to help</p>
                </div>
              </li>

              <li className='flex flex-col gap-[36px] my-[34px] hover:scale-105 transition-all duration-500 hover:shadow-md lg:px-[18px] sm:px-[12px] sm:py-[4px] lg:py-[8px] rounded-xl sm:w-[70%] lg:w-[33%]'>
                <img src = {AboutImg3} className='w-[46px] h-[46px] '/>
                <div className='flex flex-col items-start gap-[12px] '>
                  <p className='text-[25px] text-black  font-semibold'>Branding & Product</p>
                  <p className='text-[15px] text-[#595959] leading-[30px] '>we can also help you in the affairs of product branding so that your products can be more riveting</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>



      {/* Cards Review Section */}
      <div className='flex flex-col items-center mt-[100px] ='>
        <div className='flex flex-col items-start mx-auto w-full max-w-[1192px]  z-[2]'>
          <div className="flex items-center justify-center px-[26px] xl:w-[68px] xl:h-[68px] bg-[#e05d5d] rounded-full border-[9px]  border-white animate-circle"/>
        </div>

        <div className=' flex items-center justify-center mt-[-34px] py-[50px] xl:h-[524px] w-full cards-section '>
          <div className='flex justify-center mt-[20px] mx-auto max-w-[1192px] w-full '>
            <div className='flex flex-col gap-[60px] w-full '>
              <div className='flex items-start justify-between w-full ml-[8px]'>
                <p className='text-[40px] text-black font-semibold'>What our Clients are saying</p>
                <div className='flex justify-end gap-[10px]'>
                  <button className='flex items-center justify-center p-[10px] w-[70px] h-[38px] bg-[#e05d5d] 
                  hover:bg-[#b42424] transition-all duration-400 rounded-md text-white' onClick={()=> { if(index == 0) 
                                              setIndex(2) ;
                                              else
                                              setIndex(index-1)}}>{<FaArrowLeft/>}</button>
                  <button className='flex items-center justify-center p-[10px] w-[70px] h-[38px] bg-[#e05d5d] 
                  hover:bg-[#b42424] transition-all duration-400 rounded-md text-white' onClick={()=>{ if(index == 2) 
                                              setIndex(0) ;
                                              else
                                              setIndex(index+1)}}>{<FaArrowRight />}</button>
                </div>
              </div>

        
                {
                  <div className='flex items-center justify-center mx-auto w-full'>
                  <UserReviewCard userReview = {userReview[index]}/>
                  </div>
                }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
