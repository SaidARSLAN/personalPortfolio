import React from 'react'
import {linkedin,github} from '../contents'

const Footer = () => {
  return (
    <div className='h-60 bg-pGray flex items-center flex-col justify-center lg:flex-row lg:w-full lg:justify-evenly lg:h-40'>
        <h3 className='text-lg font-poppins text-pWhite'>Copyright © 2023. All rights are reserved</h3>
        <div className='grid grid-cols-2 space-x-4 my-8'>
            <a href="https://www.linkedin.com/in/muhammed-said-arslan-99ba1126b/" ><img src={linkedin}  className='w-8 cursor-pointer'/></a>
            <a href="https://github.com/SaidARSLAN"><img src={github} className='w-8 cursor-pointer bg-pOrange rounded-full'/></a>
         </div>
    </div>
  )
}

export default Footer