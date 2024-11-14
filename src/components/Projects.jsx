import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <img
                src={project.image || 'path/to/fallback-image.jpg'} // Fallback image
                width={150}
                height={150}
                alt={project.title}
                className='mb-6 rounded'
              />
            </div>
            <div className='w-full lg:w-3/4'>
              <h3 className='text-2xl font-bold text-left'>{project.title}</h3>
              <p className='mt-2 text-neutral-100 text-left'>{project.description}</p>
              <div className='mt-4'>
                {project.technologies && project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600 '
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div> 
    </div>
  )
}

export default Projects
