import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";


function Header() {
    return (
        <div className='absolute z-10 flex h-14 px-6 w-[100%] items-center justify-between bg-gradient-to-b from-black'>
            <img className='w-56' src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="netflix-logo" />
            <div className='flex items-center'>
                < IoIosArrowDropdown size="20px" className='text-white' />
                <h1 className='text-xl font-medium text-white'>Nitesh MERN stack</h1>
                <div className='ml-4'>
                    <button className='bg-red-800 text-white px-4 py-2 '>Logout</button>
                    <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
                </div>
            </div>
        </div>
    )
}

export default Header