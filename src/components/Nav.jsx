import React from 'react'
import { navLinks } from '../contents'

const Nav = () => {
  return (
        <header className='px-12 py-9 w-full h-20'>
            <nav className='flex w-full justify-between items-center'>
                <div className='text-2xl cursor-pointer'>
                    Said ARSLAN
                </div>
                <ul className='hidden'>
                    {navLinks.map((link) => {
                        return (<li>{link}</li>)
                    })}
                </ul>
                <div className='lg:hidden flex flex-col space-y-1 cursor-pointer group'>
                    <div className='w-[25px] h-[3px] bg-black group-hover:bg-pOrange duration-300'></div>
                    <div className='w-[25px] h-[3px] bg-black group-hover:bg-pOrange duration-300'></div>
                    <div className='w-[25px] h-[3px] bg-black group-hover:bg-pOrange duration-300'></div>
                </div>
            </nav>
        </header>
  )
}

export default Nav