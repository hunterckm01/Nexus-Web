import React from 'react'
import NexusLogoFront from '../Assests/Front_Assests/logo_nexus_header.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

// Pending Section

const Navbar = () => {
  return (
    <header className='flex w-screen items-center justify-center py-[14px] '>
        <div className='flex justify-center px-[44px] lg:max-w-[1192px]  mx-auto w-full'>
            <div className='flex w-full items-center sm:justify-center md:justify-between gap-[20px]'>
                {/* Header Img Nexus */}
                <div>
                    <img src = {NexusLogoFront} className='w-[140px] h-[50px]'/>
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
            </div>
        </div> 
    </header>
  )
}

export default Navbar
