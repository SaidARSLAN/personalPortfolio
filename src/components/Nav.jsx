import React, { useRef } from 'react'
import { navLinks } from '../contents'

const Nav = () => {


    const downRef = useRef();
    const openDownNavBar = () => {
        if (downRef.current.classList.contains("max-h-0")) {
            downRef.current.classList.remove("max-h-0");
            downRef.current.classList.add("max-h-36");
        }
        else {
            downRef.current.classList.add("max-h-0");
            downRef.current.classList.remove("max-h-36");
        }
    }


  return (
        <header className='px-12 lg:px-36 pt-9 w-full h-9'>
            <nav className='flex w-full justify-between items-center'>
                <div className='text-2xl  cursor-pointer font-inc font-bold bg-gradient-to-r bg-clip-text from-black to-pOrange text-transparent'>
                    Said ARSLAN
                </div>
                <ul className='hidden lg:flex lg:w-3/5 space-x-12'>
                    {navLinks.map((link) => {
                        return (<li className='text-sm tracking-widest font-roboto uppercase hover:text-pOrange duration-300 cursor-pointer'>{link}</li>)
                    })}
                </ul>
                <div className='lg:hidden flex flex-col space-y-1 cursor-pointer group' onClick={openDownNavBar}>
                    <div className='w-[25px] h-[3px] bg-black group-hover:bg-pOrange duration-300'></div>
                    <div className='w-[25px] h-[3px] bg-black group-hover:bg-pOrange duration-300'></div>
                    <div className='w-[25px] h-[3px] bg-black group-hover:bg-pOrange duration-300'></div>
                </div>
            </nav>
            <ul className='w-2/5 lg:hidden flex flex-col max-h-0 overflow-hidden transition-all ease bg-pOrange justify-center items-center text-center float-right' ref={downRef}>
                {navLinks.map((link) => {
                return (<li className='text-pWhite font-roboto px-4 text-xs py-2 hover:bg-pWhite hover:text-pOrange duration-300 w-full cursor-pointer text-center'>{link}
                </li>)
            })}
            </ul>
        </header>
  )
}

export default Nav