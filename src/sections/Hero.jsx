import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
        <section className='flex flex-col'>
            <div className='flex flex-col space-y-4'>
            <h3 className='text-sm text-pOrange font-roboto tracking-wide'>Creating Algorithm and Responsive Web Design</h3>
            <h1 className='text-3xl font-roboto text-pBlack'>Front End <span className='text-pOrange'>Developer</span>, Web Designer</h1>
            <p className='text-xs font-roboto tracking-wider text-gray-500'>Starting from scratch and working towards a functional system, My goal is to design <span className='text-pOrange font-bold'>algorithms</span> that are easy to understand and readable, while also giving importance to good, <span className='text-pOrange font-bold'>responsive</span> design.</p>
            <Button />
            </div>
        </section>
  )
}

export default Hero