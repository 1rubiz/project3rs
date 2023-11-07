import React from 'react'
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Nav() {
    const [nav, setNav]= useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }

  return (
    <>
    <div className='flex fixed top-0 left-0 z-10 w-[100%] md:hidden'>
       <Link to='/home'> <motion.img 
            src={logo}
            className='w-[8vh] h-[8vh] mt-9 ml-6 mix-blend-multiply'
            initial={{y: -30}}
            animate={{y: 0}}
            transition={{duration: 1}}
        /></Link>
        <motion.div 
            className='absolute top-[5vh] right-9'
            // initial={{y: 0}}
        >
        {nav ? (
            <IoCloseOutline className='h-[6vh] w-[4.7vh] text-[lime]' onClick={handleNav}/>
        ) : (
            <FaBars className='h-[6vh] w-[3vh] text-[lime]' onClick={handleNav}/>
        )}
        </motion.div>
        <AnimatePresence>
        {
            nav && (
                <motion.div className='absolute bg-[white] p-9 top-[9vh] right-0 z-10'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    exit={{ opacity: 0 }}
                    >
                    <div className='list-none text-[20px] w-[100%] flex flex-col gap-8 font-bold text-[white]'>
                    <Link to='/home'><motion.li className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >HOME</motion.li></Link>
                        <Link to='/about'><motion.li className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >ABOUT US</motion.li></Link>
                       <Link to='/media'> <motion.li
                            className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >MEDIA</motion.li></Link>
                        <Link to='/donation'><motion.li
                            className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >DONATIONS</motion.li></Link>
                        <Link to='/contact'><motion.li
                            className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{x: 30}}
                            animate={{x: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >CONTACT US</motion.li></Link>
                    </div>
                </motion.div>
            )
        }
        </AnimatePresence>
    </div>
    <nav className="fixed top-0 left-0 z-10 transparent hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-[12vh] w-[13vh] md:mt-[5vh] lg:mt-12"
                  src={logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 mt-[8%] flex items-baseline space-x-4">
                  <a
                    href="/home"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    HOME
                  </a>

                  <a
                    href="/about"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    ABOUT US
                  </a>

                  <a
                    href="/media"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    MEDIA
                  </a>

                  <a
                    href="/donation"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    DONATIONS
                  </a>

                  <a
                    href="/contact"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </nav>
      </>
  )
}

export default Nav