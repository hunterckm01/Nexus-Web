import React from 'react'
import Polygon from '../Assests/Works_Assests/img_polygon.svg'
import CubeImg from '../Assests/Works_Assests/img_cube.svg'
import Circle75 from '../Assests/Works_Assests/75circle.svg'
import AppImg from '../Assests/Works_Assests/AppImg.jpg'
import WebImg from '../Assests/Works_Assests/WebsiteImg.png'
import InsightImg from '../Assests/Works_Assests/insight_img.png'
import InsightSmallImg from '../Assests/Works_Assests/insigh_cover_Bg_img.png'
import InsightBigImg from '../Assests/Works_Assests/insight_cover_img.png'
import './WorkPage.css'

const WorkPage = () => {
    return(
    <div>
      {/* WHAT WE DO SECTION */}
      <div className='w-full mt-[60px] flex justify-center'>
        <div className='w-full sm:max-w-[90%] xl:max-w-[1152px] mx-auto flex justify-center'>
          <div className='w-full rounded-[90px] bg-[#ccffd7] '>
            <div className='my-[34px] flex flex-col items-center'>
              <div className='flex overflow-y-hidden items-start justify-between gap-5 ml-[8px] mr-[8px]  w-full'>
                <img src = {CubeImg} className='ml-[20px] img-animate w-[114px] h-[114px] rounded-[10px]'/>
                <div className='mt-[12px] mr-[222px] w-[14px] h-[14px] rounded-full bg-[#f5ab67]'></div>
              </div>
              <div className='flex items-center justify-between gap-[20px] w-[956px] mt-[24px] mx-[118px]'>
                <div className='w-[14px]  rounded-full h-[14px] bg-[#2dc3f2]'></div>
                <p className='sm:text-[40px] md:text-[50px] text-black mr-[350px] text-center font-semibold'>What we <span className='text-[#e05d5d]'>do</span></p>
              </div>
              <p className='sm:mt-[50px] md:mt-[74px] w-[68%] leading-[40px] text-[#595959] text-center'>We have completed many projects from various companies in the world, we have made many of our clients feel happy and satisfied with the results we have provided</p>
              <div className='mt-[6px] flex items-start  w-full'>
                <img src = {Circle75} className=' mt-[30px] ml-[34px] h-[114px] w-[114px] '/>
                <div className='flex items-start overflow-y-hidden justify-end gap-[32px]  w-full'>
                  <img src = {Polygon} className='img-animate mt-[6px] w-[196px] rounded-[14px] h-[196px]'/>
                  <div className='mr-4 w-[12px] h-[12px]  rounded-full bg-[#3d349d]'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR WORKS SECTION */}
      
        <div className='flex flex-col gap-[44px] mt-[110px] md:mr-[56px] md:ml-auto w-[90%] '>
          <div className='flex lg:flex-row sm:flex-col items-center lg:gap-[59px] sm:gap-[4px]'>
            <p className='text-[40px] text-black'>Latest Project</p>
            <p className='sm:mt-[4px] lg:mt-[10px] sm:text-[10px] lg:text-[16px] text-[#595959] text-center'>this is the last variety of projects we have worked on</p>
          </div>

          {/* FOODIE APP WEBSITE SHOWCASE */}

          <div className='flex flex-col gap-[104px]'>
            <div className='w-full max-w-[1192px] bg-[#ffb039] flex md:flex-row sm:flex-col sm:gap-4 sm:items-center md:justify-between py-[56px] rounded-[30px]'>
              <div className='ml-[120px] text-white flex flex-col sm:gap-[10px] md:gap-[120px]'>
                <p className='sm:text-[40px] lg:text-[50px] font-semibold font-font2'>APPIFY</p>
                <p className='sm:text-[20px] lg:text-[25px] sm:mt-[8px] lg:mt-[20px] font-semibold'>Launching website for Apps</p>
                <div className='h-[3px]  w-[80px] bg-white'/>
              </div>
              <img src = {AppImg} className='md:w-[43%] sm:w-[65%] rounded-[32px] mr-[20px]'/>
           </div>

            {/* ALVENO WEB APP SHOWCASE */}

            <div className=' w-full max-w-[1192px] bg-[#20398d]  flex md:flex-row sm:flex-col sm:gap  -4 sm:items-center md:justify-between py-[56px] rounded-[30px]'>
              <div className='ml-[120px] text-white flex flex-col sm:gap-[20px] md:gap-[120px]'>
                <p className='sm:text-[40px] md:text-[50px] font-semibold font-font2 uppercase'>alveno</p>
                <p className='sm:text-[20px] md:text-[25px] mt-[20px] font-semibold transparent'>Landing page for Website Service</p>
                <div className='h-[2px]  w-[80px] bg-white'/>
              </div>
              <img src = {WebImg} className='md:w-[43%] sm:w-[65%] rounded-[32px] mr-[20px] bg-white'/>
           </div>

           {/*  */}
            <div className='flex md:justify-start w-full '>
              <div className='w-full md:max-w-[1192px] h-[580px] bg-[#ff3c53] rounded-[30px] mx-auto relative'>
                <div className='flex flex-col sm:gap-[20px] md:gap-[120px] text-white mx-[108px] my-[108px]'>
                  <img src = {InsightImg} className='w-[105px] h-[38px]'/>
                  <p className='sm:w-[90%] md:w-[30%] leading-[43px] text-[32px] font-semibold'>Website for Agency</p>
                  <div className='mt-[20px] sm:w-[15%] md:w-[6%] h-[2px] bg-white'></div>
                </div>
                <div className='mx-auto my-auto h-[580px] flex  absolute top-0 left-0 right-0 bottom-0 '>
                  <img src = {InsightSmallImg} className='w-[30%] h-[580px] rounded-[30px] ml-auto '/>
                  <img src = {InsightBigImg} className=' mx-auto h-[580px] my-auto absolute  top-0 -end left-0 right-0 bottom-0 sm:hidden md:block'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
    )
}

export default WorkPage
