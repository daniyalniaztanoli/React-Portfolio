import React from 'react'

export const Contact = () => {
  const contact_info =[
    {
      logo:"mail",text:"dniaz0122@gmail.com",
    },
    {
      logo:"logo-whatsapp",text:"+92-347-1257752",
    },
    {
      logo:"location",text:"Karachi,Pakistan",
    },
  ]
  return (
   <section id='contact' className='py-10 px-3 text-white'>
    <div className='text-centermt-8 text-center'>
      <h3 className='text-4xl font-semibold'>Contact <span className='text-cyan-600'>Me</span></h3>
      <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>
      <div className='mt-16  flex md:flex-row gap-6 max-w-5xl bg-gray-800 p-6 rounded-lg mx-auto flex-col'>
        <form className='flex flex-col flex-1 gap-5'>
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email Address' />
        <textarea placeholder='Your Message' rows="10"></textarea>
        <button className='btn-primary w-fit'>Send Message</button>
        </form>
        <div className='flex flex-col gap-7'>
        {
          contact_info?.map((Contact,i)=>(
            <div key={i} className='flex gap-4 w-fit items-center'>
          <div className='min-w-[4rem] min-h-[4rem] flex text-2xl items-center justify-center text-white bg-cyan-600 rounded-full'>
            <ion-icon name={Contact.logo}></ion-icon>
          </div>
          <p className='text-base'>{Contact.text}</p>
        </div>
          ))
        }
        </div>
      </div>
    </div>

   </section>
  )
}


