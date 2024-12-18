import React from 'react'
import { ABOUT_TEXT } from '../constants'

function About() {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <h2 className='my-20 text-center text-4xl pb-7'>About <span className='text-neutral-500'>me</span></h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src='src\assets\DEEK6362 copy.jpg' alt='about'/>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                  <div className='flex justify-center lg:justify-start'>
                    <p className='md:text-left my-12 max-w-xl py-6 p-12'>{ABOUT_TEXT}</p>
                  </div>
                </div>
        </div>
    </div>
  )
}

export default About
