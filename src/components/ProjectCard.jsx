import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='flex flex-col border-2 p-12 rounded-2xl bg-white shadow-2xl lg:py-8 lg:px-16 justify-center items-center my-8 lg:space-x-12 '>
        <img src={project.image} className='rounded-lg shadow-2xl mb-8 cursor-pointer lg:w-[800px]'/>
        <div className='flex flex-col items-center justify-center lg:items-start'>
        <div className='font-poppins text-xl text-pBlack my-1 lg:text-xl text-center lg:text-left'>{project.name}</div>
        <div className='font-mulish text-pGray text-sm my-1 lg:text-sm'>{project.date}</div>
        <div className='font-mulish font-semibold text-sm tracking-wider my-1 text-gray-500 lg:text-sm lg:w-11/12 text-center lg:text-left'>{project.explanation}</div>
        <div className='flex w-full items-center justify-evenly my-2 lg:items-start lg:justify-start lg:space-x-8'>
        <div className=' px-4 py-2 rounded-xs font-poppins text-lg  text-pBlack shadow-xl border-gray-300'>{project.techone}</div>
        <div className='px-4 py-2 rounded-xs font-poppins text-lg  text-pBlack shadow-xl border-gray-300'>{project.techtwo}</div>
        </div>
        <div className='flex w-full justify-evenly mt-6 lg:items-start lg:justify-start lg:space-x-4'>
            <a href={project.github} className='bg-pWhite text-pOrange rounded-md font-poppins max-[400px]:text-sm px-4 py-2 text-lg hover:bg-pOrange hover:text-pWhite duration-300'>Github</a>
            <a href={project.demo} className='bg-pWhite text-pOrange rounded-md font-poppins max-[400px]:text-sm px-4 py-2 text-lg hover:bg-pOrange hover:text-pWhite duration-300'>Live Demo</a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard