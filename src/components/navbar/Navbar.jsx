import React from 'react'
// import Logo from '../components/images/logo4.PNG'

export default function Navbar() {
  return (
    <>
    <section className='min-h-30 pt-8 text-center text-white pb-6 bg-gray-700 h-55 '>
      <h1 className='font-bold text-4xl'>Hi, I'm Geoffrey Njihia, a fullstack software developer...</h1>
   
  <div className=" flex items-center justify-between pt-5 pb-5 text-white">
 
    <div className="pt-2 ml-4">
        <img src='' alt=""/>
    </div>
  
    <div className="hidden md:flex space-x-8 pl-2 pt-5">
    
        <a href="#" class="hover:text-darkGrayishBlue">Home</a>
        <a href="#"class="hover:text-darkGrayishBlue">Portfolio</a>
        <a href="#"class="hover:text-darkGrayishBlue">Articles</a>
    </div>
    <div className='flex ml-8'>
    <a href="#" class="hidden md:block p-4 pt-4 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
  >Resume</a>

  <a href="#" className="hidden md:block p-2 px-6 pt-4 mr-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
  >Contact Me</a>
    </div>
   
  </div>
  </section>
    </>
  )
}
