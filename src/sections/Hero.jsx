import React from 'react'
import Button from '../components/Button'
import image from '../assets/removel.png'
const Hero = () => {
  return (
        <section className='flex flex-col lg:flex-row lg:px-24'>
            <div className='flex flex-col space-y-4 lg:space-y-12 lg:mt-4'>
            <h3 className='text-sm lg:text-lg text-pOrange font-roboto tracking-wide max-[380px]:text-[12px] cursor-default'>React Developer and Responsive Web Designer</h3>
            <h1 className='text-3xl font-roboto lg:text-5xl text-pBlack'>Front End <span className='text-pOrange'>Developer</span>, Web Designer</h1>
            <p className='text-sm font-roboto tracking-wider text-gray-500 max-[380px]:text-[12px]'>Starting from scratch and working towards a functional system, My goal is to design <span className='text-pOrange font-bold'>algorithms</span> that are easy to understand and readable, while also giving importance to good, <span className='text-pOrange font-bold'>responsive</span> design.</p>
            <Button />
            </div>
            <div className='flex items-center justify-center w-full mt-12'>
                <img src={image} className='w-72 lg:w-96 duration-1000  rounded-full border-2 border-transparent  border-b-pOrange border-l-pOrange   hover:border-t-pOrange hover:border-r-pOrange hover:border-b-transparent hover:border-transparent'/>    
            </div>
            
        </section>
  )
}

export default Hero