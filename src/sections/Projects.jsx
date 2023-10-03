import React from 'react'
import { projects } from '../contents'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <section className='flex flex-col '>
      <h3 className='text-lg font-poppins text-center text-pOrange lg:text-left max-[300px]:text-sm'>PORTFOLIO</h3>
      <h3 className='text-2xl my-4 font-poppins text-center lg:text-left text-pBlack max-[300px]:text-lg'>I am proud of the projects I have worked on.</h3>
      <div className='flex flex-col items-center justify-center'>
        {projects.map((project) => {
            return <ProjectCard project={project} />
        })}
      </div>
    </section>
  )
} 

export default Projects