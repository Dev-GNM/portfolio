import React from 'react'

export default function Navbar() {
  return (
    <>
    <section className='min-h-30 pt-5 text-center'>
      <h1 className='font-bold text-3xl'>Hi, I'm Geoffrey Njihia, a fullstack software developer...</h1>
    </section>
  <div class="flex items-center justify-between pt-4">
 
    <div class="pt-2">
        <img src="images/mylogo3.PNG" alt=""/>
    </div>
  
    <div class="hidden md:flex space-x-8">
        <a href="#" class="hover:text-darkGrayishBlue">Home</a>
        <a href="#"class="hover:text-darkGrayishBlue">Background</a>
        <a href="#"class="hover:text-darkGrayishBlue">Blog</a>
    </div>
 
  <a href="#" class="hidden md:block p-3 px-6 pt-2 text-black bg-brightRed rounded-full baseline hover:bg-brightRedLight"
  >Contact Me</a>
  </div>
    </>
  )
}
