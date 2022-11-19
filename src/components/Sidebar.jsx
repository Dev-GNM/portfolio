import React from 'react';
import { AiFillGithub } from 'react-icons/fa'



const Sidebar = () => {
    return (
        <>
          <div className="container relative mx-auto my-60">
            <div>
               <div className="bg-white absolute inset-y-0 shadow rounded-lg w-5/6 md:w-3/6 lg:w-3/6  xl:w-2/6 mx-auto">
<div className="flex justify-center">
    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className='rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-white transition duration-200 transform hover:scale-110' />
</div>
<div className="mt-16">
    <h1 className='font-bold text-center text-3xl text-gray-900'>Geoffrey Njihia</h1>
    <p className='text-center text-sm text-gray-400 font-medium pt-4'>Fullstack Software Developer</p>
    <div className="text-sm text-center leading-normal mt-0 mb-2 text-blueGray-400 font-medium uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Nairobi, Kenya
            </div>
</div>
<span>

</span>
<div className="my-5 px-6">
<a href="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white" >Connect with <span class="font-bold">@Dev-GNM</span></a>
</div>
<div className="flex justify-between items-center my-5 px-6">
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Linkedin</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                        <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                    </div>

                    <div className="w-full">
                        <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" className="w-full border-t border-gray-100 text-black-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Created a new Github repository
                                    <span className="text-gray-500 text-xs"> 24 min ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-black-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Added new profile picture
                                    <span className="text-gray-500 text-xs"> 42 min ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-black-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Posted new article in <span class="font-bold">#WebDev</span>
                                <span className="text-gray-500 text-xs"> 49 min ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-black-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Edited website settings
                                <span className="text-gray-500 text-xs">1 day ago</span>
                            </a>

                            <a href="#" className="w-full border-t border-gray-100 text-black-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Added new rank
                                <span className="text-gray-500 text-xs"> 5 days ago</span>
                            </a>
                            
                        </div>
                    </div>
                </div>

               </div>

            </div>
        </>
    );
}

export default Sidebar;

