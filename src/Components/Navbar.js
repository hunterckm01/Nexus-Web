import React, { useState } from 'react'
import NexusLogoFront from '../Assests/Front_Assests/logo_nexus_header.png'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'
import { AiOutlineClose } from 'react-icons/ai';

// Pending Section

const Navbar = () => {
    const [navbar , setShowNavbar] = useState(false);
  return (
    <header className='w-screen py-[14px] '>
        <div className='flex  px-[44px] md:max-w-[1192px] md:mx-auto w-full'>
            <div className='flex w-full items-center justify-between md:gap-[20px]'>
                {/* Header Img Nexus */}
                <div>
                    <NavLink to = "/"><img src = {NexusLogoFront} className='w-[140px] h-[50px]'/></NavLink>
                </div>
                
                {/* Four Li items Header */}
                <div>
                    <ul className='md:flex items-start gap-[66px] text-[18px] sm:hidden      font-semibold'>
                        <NavLink to = "/">
                            <div className='flex flex-col items-center justify-center gap-1'>
                            <li className=''>Home</li>
                            <div className='w-2 h-2 bg-white  rounded-full  round-cir'></div>
                            </div>
                        </NavLink>

                        <NavLink to = "/About">
                            <div className='flex flex-col items-center justify-center gap-1'>
                                <li>About</li>
                                <div className='w-2 h-2 bg-white rounded-full round-cir'></div>
                            </div>
                        </NavLink>

                        <NavLink to = "/Work">
                            <div className='flex flex-col items-center justify-center gap-1'>
                                <li>Works</li>
                                <div className='w-2 h-2 bg-white rounded-full round-cir'></div>
                            </div>
                        </NavLink>

                        <NavLink to = "/Contact">
                            <div className='flex flex-col items-center justify-center gap-1'>
                                <li>Contact</li>
                                <div className='w-2 h-2  rounded-full bg-white round-cir'></div>
                            </div>
                        </NavLink>
                     </ul>
                {/* After Every Li of A small image of round circle is pending */}
                </div>

                <div className='sm:block md:hidden '>
                    <GiHamburgerMenu className='cursor-pointer h-6 w-6' onClick = {
                        ()=>{setShowNavbar(!navbar);console.log("toggled")}}/>
                </div>

            </div>
        </div> 
                {/* For Mobile Screen Li items */}
        <div className='cursor-pointer sm:block md:hidden overflow-y-hidden'>
                <div className={` py-[14px] fixed inset-0 bg-slate-700 z-10 w-full flex flex-col items-center text-slate-50 transition-all duration-300 ease-in-out transform      ${navbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                        {/* Navbar Header */}
                    <div className='w-full max-w-[91%] mx-auto py-1 px-3 flex justify-between items-center'>
                        <NavLink to = "/"><img src = {NexusLogoFront} className='w-[140px] h-[50px]'/></NavLink>
                        <AiOutlineClose className='text-white sm:h-[24px] sm:w-[24px]  cursor-pointer'
                            onClick={() => {setShowNavbar(false);console.log(navbar)}}
                            />
                    </div>

        {/* Menu Items */}
                        <ul className='h-full items-center justify-center flex flex-col gap-4 font-semibold text-xl'>
                            <li onClick={() => setShowNavbar(false)}>
                                <NavLink to="/">Home Page</NavLink>
                            </li>
                            <li onClick={() => setShowNavbar(false)}>
                                <NavLink to="/About">About Page</NavLink>
                            </li>
                            <li onClick={() => setShowNavbar(false)}>
                                <NavLink to="/Work">Works Page</NavLink>
                            </li>
                            <li onClick={() => setShowNavbar(false)}>
                                <NavLink to="/Contact">Contact Page</NavLink>
                            </li>
                        </ul>
                    </div>
            </div>
    </header>
  )
}

export default Navbar
