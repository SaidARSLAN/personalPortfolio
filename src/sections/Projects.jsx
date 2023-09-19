import React from 'react'
import { projects } from '../contents'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <section className='flex flex-col text-center'>
      <h3 className='text-lg font-poppins text-pOrange'>PORTFOLIO</h3>
      <h3 className='text-2xl my-4 font-poppins '>I am proud of the projects I have worked on.</h3>
      <div>
        {projects.map((project) => {
            return <ProjectCard project={project} />
        })}
      </div>
    </section>
  )
}

export default Projects