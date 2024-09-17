import React from 'react'
import AboutImg1 from '../Assests/About_Assests/circle_img_1.png'
import AboutImg2 from '../Assests/About_Assests/circle_img_2.png'
import AboutImg3 from '../Assests/About_Assests/circle_image_3.png'
import Moment1 from '../Assests/About_Assests/moment1.png'
import Moment2 from '../Assests/About_Assests/moment2.png'
import Moment3 from '../Assests/About_Assests/moment3.png'
import Moment4 from '../Assests/About_Assests/moment4.png'
import Moment5 from '../Assests/About_Assests/moment5.png'
import Moment6 from '../Assests/About_Assests/moment67.png'
import CardsEmployee from '../Components/CardsEmployee'
import cardsEmpData from '../CardsEmpData'


const AboutPage = () => {
  return (
    <div>
      {/*  Get to Know section*/}
      <div className='w-full flex justify-center mt-[54px]'>
        <div className='flex sm:max-w-[90%] xl:max-w-[1192px] w-full mx-auto justify-center '>
          <div className='flex w-full justify-center sm:p-[40px] md:p-[52px] bg-[#fffccc] rounded-[90px]'>
            <div className='flex mt-[18px] w-[86%] '>
              <div className='flex flex-col gap-[60px] w-[9%] '>
                  <img src = {AboutImg1} className='w-full h-[88px] rounded-[44px] lg:block sm:hidden'/>
                  <div className='ml-[22px] w-[14px] h-[14px] bg-[#c63973] rounded-full'></div>
              </div>
              <div className='flex flex-col items-end gap-[72px]  w-full'>
                <div className='h-[360px]  relative w-full'>
                  <div className='flex flex-col items-end gap-[52px] m-auto absolute top-0 bottom-0 left-0 right-0'>
                    <div className='mr-[134px] w-[14px] h-[14px] rounded-full bg-[#f5ab67]'></div>
                    <img src = {AboutImg3} className='w-[88px] h-[88px] rounded-full lg:block sm:hidden'/>
                  </div>
                  <div className='flex flex-col gap-[14px] m-auto absolute bottom-[1px] left-0 right-0'>
                    <p className='sm:text-[36px] md:text-[50px] leading-[60px] text-center font-semibold'>Get to know more <span className='text-[#e05d5d]'>about us</span></p>
                    <p className='sm:text-[14px] md:text-[20px] text-[#595959] sm:leading-[30px] md:leading-[40px] text-center'>We are an agency engaged in the creative industry and business, we are ready to help you to improve your business performance together with our great team</p>
                  </div>
                </div>
                <img src = {AboutImg2} className='mr-[92px] w-[88px] h-[88px] rounded-full lg:block sm:hidden'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our People Section */}
      <div id = "Viewall" className=' w-full mt-[100px] mb-[50px] '>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto sm:max-w-[90%] xl:max-w-[1192px] gap-[40px] '>
          {
          cardsEmpData.map((data)=>(<CardsEmployee data={data} key = {data.id}/>))
          }
        </div>
      </div>

      {/* Moment Section */}
      <div className='w-full items-center mt-[95px]'>
        <div className='w-full sm:max-w-[90%] xl:max-w-[1192px] items-start flex flex-col gap-[62px] mx-auto'>
          <p className='mr-[10px] text-black text-[40px] font-semibold'>Our Moment</p>
          <div className='flex lg:flex-row sm:flex-col gap-[30px]'>
            <div className='flex flex-col gap-[30px]'>
              <img src = {Moment1} className='hover:scale-[1.03] duration-200 transition-all'/>
              <img src = {Moment5} className='hover:scale-[1.03] duration-200 transition-all'/>
            </div>

            <div className='flex flex-col gap-[30px]'>
              <img src = {Moment2} className='hover:scale-[1.03] duration-200 transition-all'/>
              <img src = {Moment6} className='hover:scale-[1.03] duration-200 transition-all'/>
            </div>

            <div className='flex flex-col gap-[30px]'>
              <img src = {Moment3} className='hover:scale-[1.03] duration-200 transition-all rounded-md'/>
              <img src = {Moment4} className='hover:scale-[1.03] duration-200 transition-all rounded-md'/>
              <img src = {Moment6} className='hover:scale-[1.03] duration-200 transition-all'/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage ;
