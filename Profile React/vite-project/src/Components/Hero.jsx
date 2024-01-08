import React from 'react'
import Img from '../../public/daniyal.png'
export const Hero = () => {
  return (
    <section id='home' className='min-h-screen py-20 w-[80%] mx-auto md:mx-0 md:w-full flex md:flex-row flex-col items-center'>
      <div className='flex-1 flex items-center justify-center mt-10 md:mt-0'>
        <img src={Img} alt="" className='md:w-11/12 lg:w-8/12 h-full object-cover bg-cyan-600 rounded-2xl' />
      </div>
      <div className='flex-1 '>
        <div className='md:text-left text-center mt-8 md:mt-2 md:space-y-5 lg:space-y-7'>
          <h1 className='md:text-4xl lg:text-5xl text-2xl md:leading-normal lg:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-5xl lg:text-6xl text-5xl'>Hello! <br/></span>
            My Name is <span>Daniyal</span>
          </h1>
          <h4 className='lg:text-2xl md:text-xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Web Developer</h4>
          <button  className='btn-primary hover:bg-cyan-700 mt-6'><a href="https://wa.me/3471257752">Contact Me!</a></button>
          <div className='flex md:mt-3 mt-8 gap-x-4 justify-center text-3xl items-center md:justify-start leading-5'>
                <div className='flex justify-center gap-5'>
                <div className='text-gray-600 hover:text-white cursor pointer'>
                <a href="https://www.linkedin.com/in/daniyal-niaz-526b38252/"><ion-icon name="logo-linkedin"></ion-icon></a>
                </div>
                <div className='text-gray-600 hover:text-white cursor pointer'>
                <a href="https://github.com/daniyalniaztanoli"><ion-icon name="logo-github"></ion-icon></a>
                </div>
                <div className='text-gray-600 hover:text-white cursor pointer'>
                <a href="https://www.facebook.com/daniyal.mniaztanoli/"><ion-icon name="logo-facebook"></ion-icon></a>
                </div>
                <div className='text-gray-600 hover:text-white cursor pointer'>
                <a href="https://www.instagram.com/mohammaddaniyaltanoli/"><ion-icon name="logo-instagram"></ion-icon></a>
                </div>
                </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

