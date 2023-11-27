import React from 'react'

import { FiSun } from 'react-icons/fi';
import { MdOutlineNightlight } from 'react-icons/md';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ darkMode, isOpen, toggleMenu, toggleTheme }) => {
  return (
  
    <div className={`px-0 2xl:px-40 ${!darkMode && 'shadow-md'}`}>
      <div className='w-full items-center justify-between py-4 px-4 md:px-12'>
        <div className='flex items-center justify-between w-full'>
          <a
            href='/'
            className='text-2xl font-bold text-blue-500 cursor-pointer '
          >
            Abdalle Hnauuniye
          </a>
          <ul className='hidden md:flex gap-10 text-lg text-slate-800 dark:text-gray-200'>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href='#home'>Home</a>
            </li>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href='#about'>About</a>
            </li>
            <li className='cursor-pointer hover:text-blue-500'>
              <a href='#projects'>Projects</a>
            </li>
          </ul>

          <button
            // Attach click event listener to the button, invoking the toggleTheme function
            onClick={toggleTheme}
            // Apply padding of 2 units to the button
            className='p-2'
          >
            {/* Conditional rendering based on darkMode */}
            {darkMode ? (
              // Display the sun icon if darkMode is true
              <FiSun size={24} color={"white"} />
            ) : (
              // Display the nightlight icon if darkMode is false
              <MdOutlineNightlight size={24} color={"gray"} />
            )}
          </button>


          <div className='md:hidden'>
            <button
              type='button'
              className=''
              aria-controls='onile-menu'
              aria-expanded='false'
              onClick={toggleMenu}
            >
              {isOpen ? (
                <AiOutlineClose
                  size={26}
                  className='h-6 w-6 dark:text-gray-400'
                />
              ) : (
                <BiMenu
                  size={26}
                  className='text-gray-700 dark:text-gray-300'
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <div
          // Conditional class: If isOpen is true, display the menu block with padding top 4; otherwise, hide it
          className={`${isOpen ? "block pt-4" : "hidden"} md:hidden`}
          id='mobile-menu'
        >
          <div
            className='flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200'
          >

            <a href='#home' onClick={toggleMenu} className='cursor-pointer pb-2 border-b border-transparent hover:border-white'>
              Home
            </a>

            <a href='#about' onClick={toggleMenu} className='cursor-pointer pb-2 border-b border-transparent hover:border-white'>
              About
            </a>
            <a href='#projects' onClick={toggleMenu} className='cursor-pointer pb-2 border-b border-transparent hover:border-white'>
              Projects
            </a>
          </div>
        </div>


      </div>
    </div>

  );
}

export default Navbar
