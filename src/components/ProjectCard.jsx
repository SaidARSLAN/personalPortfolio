import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='flex flex-col border-2 p-12 rounded-2xl bg-white shadow-2xl lg:py-8 lg:px-16 justify-center items-center my-8 lg:flex-row lg:space-x-12 '>
        <img src={project.image} className='rounded-3xl object-contain shadow-2xl mb-8 cursor-pointer lg:w-[480px]'/>
        <div className='flex flex-col items-center justify-center '>
        <div className='font-inc text-xl font-bold text-pBlack my-1 lg:text-2xl'>{project.name}</div>
        <div className='font-inc text-pGray text-sm my-1 lg:text-lg'>{project.date}</div>
        <div className='font-roboto text-sm tracking-wider my-1 text-pGray lg:text-lg'>{project.explanation}</div>
        <div className='flex w-full items-center justify-evenly my-2'>
        <div className='border-2 px-4 py-2 rounded-xs font-roboto text-sm font-bold text-pBlack shadow-xl border-gray-300'>{project.techone}</div>
        <div className='border-2 px-4 py-2 rounded-xs font-roboto text-sm font-bold text-pBlack shadow-xl border-gray-300'>{project.techtwo}</div>
        </div>
        <div className='flex w-full justify-evenly mt-6'>
            <a href="/" className='bg-pWhite text-pOrange rounded-md font-roboto px-4 py-2 text-lg hover:bg-pOrange hover:text-pWhite duration-300'>Github</a>
            <a href="/" className='bg-pWhite text-pOrange rounded-md font-roboto px-4 py-2 text-lg hover:bg-pOrange hover:text-pWhite duration-300'>Live Demo</a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard