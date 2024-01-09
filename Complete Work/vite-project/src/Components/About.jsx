import React from 'react'
export const About = () => {
  return (
    <section  id='about' className='py-10 bg-gray-800 text-white'> 
    <div className='text-center mt-8'>
      <h3 className='text-4xl font-semibold'>
        About <span className='text-cyan-600'>Me</span>
      </h3>
    <p className='text-gray-400 my-3 text-lg'>
      My Introduction
    </p>
    <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'></div>
    <div className='text-gray-300 my-3 text-xl'>
      <p>Hello I am <span className='text-cyan-600'>Muhammad Daniyal</span> the student of <span className='text-cyan-600'>BSCS</span> from <br /> <span className='text-cyan-600'><abbr title="Federal Urdu University of Arts Science And Technology">FUUASt</abbr></span> And Learning About New About Coding ...... <br />MERN Stack Development From  <span className='text-cyan-600'>Jawan Pakistan</span> & <br /> Ai ChatBot from <span className='text-cyan-600'><abbr title="Saylani Mass It Training ">SMIT</abbr></span></p>
      <div className='w-52 mx-auto my-7'>
        <a href='../public/Cv.pdf' download className=' bg-cyan-600 font-semibold text-white py-3  rounded-full flex justify-center' >Download Cv</a>
      </div>

    </div>
    </div>

    </section>
  )
}

