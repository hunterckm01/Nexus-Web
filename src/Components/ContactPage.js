import React, { useState } from 'react'
import GlobeImg from '../Assests/Contacts_Assests/globe_img.svg'
import CallImg from '../Assests/Contacts_Assests/img_call.svg'
import mailImg from '../Assests/Contacts_Assests/email_img.svg'
import locationImg from '../Assests/Contacts_Assests/img_location.svg'
import { RiSendPlaneFill } from "react-icons/ri";
import social1 from '../Assests/Contacts_Assests/img_icon_1.png'
import social2 from '../Assests/Contacts_Assests/img_icon_2.png'
import social3 from '../Assests/Contacts_Assests/img_icon_3.png'
import social4 from '../Assests/Contacts_Assests/img_icon_4.png'
import toast from 'react-hot-toast'
import './ContactPage.css'

const ContactPage = () => {
 const[contactForm , setContactForm] = useState({contactName : "" , email : "" , msg : ""});

  // FUNCTION ON SIGNUPFORM
  function changeHandler(e){
    const {name , value} = e.target ;
    setContactForm(prevData=>{
      return {...prevData , [name] :  value}
    })
    console.log(contactForm);
  }

  // FORM SUBMIT FUNCTION
  function submitForm(e){
    e.preventDefault();
    if(contactForm.msg.length > 20){
      console.log("form data is here");
      console.log(contactForm);
      setContactForm({contactName : "" , email : "" , msg : ""});
      toast.success("Your Msg has been Sent");
    }
    else{
      toast.error("Your Msg length is too short");
    }
  }

  return (
    <div>
      {/* HEADER DOWN SECTION */}
      <div className='w-full justify-center mt-[54px]'>
        <div className='sm:max-w-[90%] xl:max-w-[1192px] w-full mx-auto h-[696px] '>
          <div className='sm:py-[100px] sm:px-[30px] xl:py-[122px] xl:px-[50px] h-full w-full relative rounded-[90px] bg-[#e5eeff] '>
           <div className='lgImg h-full w-full flex items-center '>
            <div className='items-center w-full flex flex-col gap-[50px]'>
              <p className='text-[50px] font-semibold'>Get in <span className='text-[#e05d5d]'> touch </span> </p>
              <p className='leading-[40px] text-[20px] text-center'>Stay connected with us, we will help you with your various needs. we will provide the best service in technical and consulting matters. You can provide your needs or something you ask in the form below</p>
            </div>
           </div>
          </div>
        </div>
      </div>

      {/* FORM DOWN SECTION */}
      <div className='w-full sm:max-w-[90%] xl:max-w-[1192px] mx-auto mt-[100px]'>
        <div className='w-full flex sm:flex-col lg:flex-row lg:items-center sm:items-center gap-[40px]'>
          <div className='shadow-lg flex flex-col items-start gap-[22px] bg-white rounded-[20px] py-[72px] pl-[90px] pr-[56px] '>
            <div className='flex flex-col lg:items-start sm:items-center'>  
              <p className='text-[20px] text-[#6c6c6c] font-semibold'>Contact Us</p>
              <div className='bg-[#eaeaea] w-full h-[2px] mt-[10px]'></div>

              <form onSubmit = {submitForm} className='flex flex-col items-center  gap-[30px] mt-[22px]'>
                <div className='flex gap-[30px] h-[82px]'>

                  {/* INPUT FIELDS */}
                 
                  <input type = "text"  placeholder='Your Name' name = "contactName" id = "contactName" value = {contactForm.contactName} onChange = {changeHandler} className='flex items-center justify-center text-[#b6b6b6] font-bold rounded-[6px] bg-[#f6f6f6] pl-[18px] pr-[34px]' required></input>
                 

                  <input type = "email" required placeholder='Your Email' name = "email" id = "email" value = {contactForm.email} onChange = {changeHandler} className='flex items-center justify-center text-[#b6b6b6] font-bold rounded-[6px] bg-[#f6f6f6] pl-[18px] pr-[34px]'></input>
                </div>
                <textarea required placeholder ='Your Message' name = "msg" id = "msg" value = {contactForm.msg}  
                onChange = {changeHandler} className='flex items-center justify-center text-[#b6b6b6] font-bold rounded-[6px] bg-[#f6f6f6] pl-[18px] pt-[18px] pb-[34px] pr-[34px] min-h-[174px] w-full'></textarea>
                
                <button onSubmit = {submitForm} className='flex items-center justify-center gap-[12px] text-[20px] text-center rounded-[24px] bg-[#27a953] px-[14px] py-[10px] font-semibold hover:bg-[#1c8740] transition-all w-[20%]'>
                  <div className='text-white'>Send</div>
                <RiSendPlaneFill className='text-white' />
                </button>
              </form>
            </div>

          </div>

          {/* CONTACT INFORMATION  FULL CONTAINER */}
          <div>
            <div className='flex flex-col lg:justify-start sm:items-center gap-[30px] rounded-[20px] shadow-lg  py-[48px] px-[72px] '>

              {/* CONTACT INFORMATION CONTAINER */}

              <div className='flex flex-col gap-[32px]'>
                <div className='flex flex-col items-start gap-[24px]'>
                  <p className='text-[20px] text-[#6c6c6c] font-semibold'>Contact Information</p>
                  <div className='w-full h-[1px] bg-[#eaeaea]'></div>
                </div>

                {/* CONTACT INFORMATION IMAGES */}

                <div className='flex flex-col gap-[28px]'>
                  <div className='flex items-center gap-[25px]'>
                    <img src = {mailImg}/>
                    <p className='text-[17px] text-[#b1b1b1] font-semibold'>hello@mail.com</p>
                  </div>
                  <div className='flex items-center gap-[25px]'>
                    <img src = {GlobeImg}/>
                    <p className='text-[17px] text-[#b1b1b1] font-semibold'>www.abc.com</p>
                  </div>
                  <div className='flex items-center gap-[25px]'>
                    <img src = {locationImg}/>
                    <p className='text-[17px] text-[#b1b1b1] font-semibold'>Sudirman street, holgan, melbourne</p>
                  </div>
                  <div className='flex items-center gap-[25px]'>
                    <img src = {CallImg}/>
                    <p className='text-[17px] text-[#b1b1b1] font-semibold'>1234 - 5678</p>
                  </div>
                </div>
              </div>

              {/*  SOCIAL MEDIA SITES LINK CONTAINER*/}

              <div className='flex flex-col gap-[40px]'>
                <div className='flex flex-col items-start gap-[24px]'>
                  <p className='text-xl font-semibold text-[#6c6c6c]'>Social Media</p>
                  <div className='bg-[#eaeaea] w-full h-[1px]'></div>
                </div>

                {/* SOCIAL MEDIA SITES */}

                <div className='flex justify-center gap-[20px]'>
                  <a href = "https://www.instagram.com/"><img src = {social1} className='w-[46px] h-[46px]'/></a>
                  <a href = "https://x.com/"><img src = {social2} className='w-[46px] h-[46px]'/></a>
                  <a href = "https://dribbble.com/"><img src = {social3} className='w-[46px] h-[46px]'/></a>
                  <a href = "https://mail.google.com/"><img src = {social4} className='w-[46px] h-[46px]'/></a>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
