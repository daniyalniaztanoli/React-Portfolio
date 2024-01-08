import React, { useEffect, useState } from 'react'

export const Navbar = () => {
  const[sticky,setsticky]=useState(false);
  const[open,setopen]=useState(false);
  const menuLinks =[
    { name: "HOME", link:"#home"},
    { name: "ABOUT", link:"#about"},
    { name: "SKILLS", link:"#skills"},
    { name: "CONTACT", link:"#contact"},
]
useEffect(()=>{
  window.addEventListener("scroll", ()=>{
    const nav = document.querySelector('nav')
    window.scrollY > 0 ? setsticky(true):setsticky(false)
  })
},[])
  return (
      <nav className={`fixed w-full left-0 right-0 z-[999] ${sticky  ?  "bg-white/60 text-gray-900 " : "text-white"} `}>
        <div className='flex items-center justify-between'>
          <div className='mx-7'>
            <h4 className='text-4xl  font-signature'>Daniyal<span className='text-cyan-600 font-semibold mx-2'>Tanoli</span></h4>
          </div>
        <div className={`${sticky ? " md:bg-white/0 bg-white"  :""}text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-2 text-lg'>
            {menuLinks?.map((menu,i)=>(
              <li key={i} className='px-6 hover:text-cyan-600'>
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={()=>setopen(!open)} className={`z-[999] ${open ? "text-gray-900" : "text-white"} text-3xl md:hidden m-5`}>
          <ion-icon name="menu" ></ion-icon>
        </div>
        <div className={` md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 right-0 duration-300 ${open ? "right-0":"right-[-100%]"}`}>
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
            {
              menuLinks?.map((menu,i)=>(
                <li key={i} className='PX-6 hover:text-cyan-600'>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        </div>
      </nav>
  )
}


