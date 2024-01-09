import React from 'react'
import '../App.css'
export const Skill = () => {
  const skill = [
{
  logo:"logo-html5",
  level:"Advance"
},
{
  logo:"logo-css3",
  level:"Intermediate"
},
{
  logo:"logo-javascript",
  level:"Intermediate"
},
{
  logo:"logo-react",
  level:"Beginner"
},

  ]
    
  
  return (
    <section id='skills' className='py-10 relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>
         My <span className='text-cyan-600'>Skills</span>
        </h3>
        <p className='text-gray-400'>
          My Knowledge
        </p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {
            skill?.map((skill,i)=>(
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w[16rem] bg-gray-900 p-10 rounded-xl' key={i}>
                <div className='w-28 h-28 flex items-center text-6xl justify-center rounded-full group-hover:text-cyan-600'>
                 <ion-icon name={skill.logo}></ion-icon>
                </div>
                <p className='text-xl mt-3'>{skill.level}</p>
              </div>
            ))
          }
          
        </div>
      </div>

    </section>
  )
}


