import React from 'react'
import { navLinks } from '../contents'

const HiddenNavbar = () => {

    const closeDownBar = () => {
        const downRef = document.querySelector("#downRef");
        downRef.classList.remove("w-full")
        downRef.classList.add("w-0");
    }


  return (
    <ul className='w-0 z-50  fixed h-full lg:hidden flex-col overflow-hidden transition-all ease bg-white justify-center duration-300 items-center text-center' id="downRef">
                <div className='absolute right-12 top-6 text-3xl font-bold font-roboto cursor-pointer text-pGray hover:text-pBlack duration-300' onClick={closeDownBar}>X</div>
                <div className='flex flex-col items-center justify-center space-y-12 w-full h-full'>
                {navLinks.map((link,idx) => {
                return (<li key={idx} className='text-pBlack cursor-pointer hover:text-pOrange  duration-300 font-poppins text-3xl'>{link}
                </li>)
            })}
            </div>
    </ul>
  )
}

export default HiddenNavbar