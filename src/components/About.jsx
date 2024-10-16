import React from 'react'

function About() {
  return (
    <div className='pb-4'>
      <h2 className='my-15 text-center text-4xl'>About <span className='text-neutral-500'>me</span></h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img src='src\assets\about.jpg' alt='about'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
