import React from 'react'
import { navLinks } from '../contents'

const Nav = () => {


    const openDownNavBar = () => {
        const downRef = document.querySelector("#downRef");
        downRef.classList.remove("w-0");
        downRef.classList.add("w-full");
        
    }


  return (
        <header className='lg:px-4 shadow-md h-20 flex justify-between items-center w-full fixed bg-pWhite z-10'>
            <nav className='flex items-center justify-between px-12 w-full'>
                <div className='text-2xl cursor-pointer font-poppins bg-gradient-to-r bg-clip-text from-black to-pOrange text-transparent'>
                    SaidARSLAN.dev
                </div>
                <ul className='hidden lg:flex lg:left-0 space-x-4'>
                    {navLinks.map((link,idx) => {
                        return (<li key={idx} className='text-base text-pBlack font-poppins uppercase hover:text-pOrange duration-300 cursor-pointer'>{link}</li>)
                    })}
                </ul>
                <div className='lg:hidden flex flex-col space-y-1 cursor-pointer group' onClick={openDownNavBar}>
                    <div className='w-[25px] h-[3px] bg-black group-hover:bg-pOrange duration-300'></div>
                    <div className='w-[25px] h-[3px] bg-black group-hover:bg-pOrange duration-300'></div>
                    <div className='w-[25px] h-[3px] bg-black group-hover:bg-pOrange duration-300'></div>
                </div>
            </nav>
        </header>
  )
}

export default Nav