import React from 'react'
import {bootstrap,css,html,javascript,tailwind,react,desk} from '../contents'

const AboutMe = () => {
  return (
    <section className='flex flex-col lg:flex-row lg:px-52 lg:w-full lg:space-x-24 bg-white'>
        <div className='my-2'>
        <img src={desk} className='rounded-3xl object-cover lg:h-[420px] lg:w-[1000px]'/>
        </div>
        <div className='flex flex-col lg:items-start lg:justify-start lg:w-full'>
        <h1 className='w-full text-center my-2 text-lg font-poppins text-pOrange lg:text-xl lg:text-left'>About Me</h1>
        <h3 className='text-2xl text-center font-poppins my-2 text-pGray lg:text-left lg:text-3xl'>A Front End <span className='text-pOrange'>Developer</span> From Türkiye</h3>
        <p className='text-center text-sm tracking-wider font-mulish text-gray-500 font-semibold lg:text-lg lg:text-left'>As a junior developer, I have been actively working with HTML, CSS, and JavaScript for the past a year. During this time, I have gained experience in React and Tailwind as well. In addition to my technical skills, I consider myself a strong team player and collaborate effectively with others. I am currently focused on continuing to learn and improve my coding and design skills.</p>
        <div className='grid grid-cols-6 w-full items-center mt-6 relative'>
        <img src={html} className='relative hover:bottom-1 cursor-pointer'/>
        <img src={css} className='relative hover:bottom-1 cursor-pointer' />
        <img src={javascript} className='relative hover:bottom-1 cursor-pointer'/>
        <img src={react} className='relative hover:bottom-1 cursor-pointer' />
        <img src={tailwind} className='relative hover:bottom-1 cursor-pointer'/>
        <img src={bootstrap} className='relative hover:bottom-1 cursor-pointer'/>
        </div>
        </div>
    </section>
  )
}

export default AboutMe