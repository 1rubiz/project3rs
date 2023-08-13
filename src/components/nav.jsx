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
    <div className='flex relative w-[100%] '>
       <Link to='/home'> <motion.img 
            src={logo}
            className='w-[130px] h-[120px] '
            initial={{y: -30}}
            animate={{y: 0}}
            transition={{duration: 1}}
        /></Link>
        <motion.div 
            className='absolute top-[5vh] right-9'
            // initial={{y: 0}}
        >
        {nav ? (
            <IoCloseOutline size={35} onClick={handleNav}/>
        ) : (
            <FaBars size={30} onClick={handleNav}/>
        )}
        </motion.div>
        <AnimatePresence>
        {
            nav && (
                <motion.div className='absolute bg-[#99f89f] p-9 top-[9vh] right-0 z-10'
                    initial={{x: 100}}
                    animate={{x: 0}}
                    transition={{duration: 1}}
                    exit={{ opacity: 0 }}
                    >
                    <div className='list-none text-[20px] w-[100%] flex flex-col gap-8 font-bold text-[white]'>
                    <Link to='/home'><motion.li className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{y: 50}}
                            animate={{y: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >HOME</motion.li></Link>
                        <Link to='/about'><motion.li className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{y: 50}}
                            animate={{y: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >ABOUT US</motion.li></Link>
                       <Link to='/media'> <motion.li
                            className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{y: 50}}
                            animate={{y: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >MEDIA</motion.li></Link>
                        <Link to='/donation'><motion.li
                            className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{y: 50}}
                            animate={{y: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >DONATIONS</motion.li></Link>
                        <Link to='/contact'><motion.li
                            className='p-2 bg-[rgb(0,128,0)] rounded-[9px]'
                            initial={{y: 50}}
                            animate={{y: 0}}
                            transition={{duration: 1}}
                            onClick={handleNav}
                        >CONTACT US</motion.li></Link>
                    </div>
                </motion.div>
            )
        }
        </AnimatePresence>
    </div>
  )
}

export default Nav