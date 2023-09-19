import React from 'react'
import { navLinks } from '../contents'

const Nav = () => {


    const openDownNavBar = () => {
        const downRef = document.querySelector("#downRef");
        downRef.classList.remove("w-0");
        downRef.classList.add("w-full");
        
    }


  return (
        <header className='lg:px-24 shadow-md h-16 flex justify-between items-center w-full'>
            <nav className='flex items-center justify-between px-12 w-full'>
                <div className='text-2xl cursor-pointer font-inc font-bold bg-gradient-to-r bg-clip-text from-black to-pOrange text-transparent'>
                    Said ARSLAN
                </div>
                <ul className='hidden lg:flex lg:w-3/5 space-x-12'>
                    {navLinks.map((link,idx) => {
                        return (<li key={idx} className='text-sm tracking-widest font-roboto uppercase hover:text-pOrange duration-300 cursor-pointer'>{link}</li>)
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