import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='flex border-2 shadow-xl shadow-gray-500 m-4 px-12 py-12 flex-col lg:flex-row w-full justify-center items-center'>
      <div className='flex items-center justify-center lg:mr-12 w-full lg:w-2/3'>
        <img src={project.image}/>
      </div>
      <div className='flex flex-col items-center justify-center w-full lg:w-1/3 '>
        <div className='flex flex-col items-center justify-center lg:items-start'>
        <div className='font-poppins text-xl text-pBlack my-1 lg:text-xl text-center lg:text-left max-[300px]:text-sm'>{project.name}</div>
        <div className='font-mulish text-pGray text-sm my-1 lg:text-sm max-[300px]:text-sm'>{project.date}</div>
        <div className='font-mulish font-semibold text-sm tracking-wider my-1 text-gray-500 lg:text-sm lg:w-11/12 text-center lg:text-left max-[300px]:text-sm'>{project.explanation}</div>
        <div className='flex w-full items-center justify-evenly my-2 lg:items-start lg:justify-start lg:space-x-8'>
        <div className=' px-4 py-2 rounded-xs font-poppins text-lg  text-pBlack shadow-xl border-gray-300 max-[300px]:text-sm'>{project.techone}</div>
        <div className='px-4 py-2 rounded-xs font-poppins text-lg max-[300px]:text-xs text-pBlack shadow-xl border-gray-300'>{project.techtwo}</div>
        </div>
        </div>
        <div className='flex w-full justify-evenly mt-6 lg:items-start lg:justify-start lg:space-x-4'>
            <a href={project.github} className='bg-pWhite text-pOrange rounded-md font-poppins max-[400px]:text-sm px-4 py-2 text-lg hover:bg-pOrange hover:text-pWhite duration-300 max-[300px]:text-xs'>Github</a>
            <a href={project.demo} className='bg-pWhite text-pOrange rounded-md font-poppins max-[400px]:text-sm px-4 py-2 text-lg hover:bg-pOrange hover:text-pWhite duration-300 max-[300px]:text-xs'>Live Demo</a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard