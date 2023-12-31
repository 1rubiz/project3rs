import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img.jpg';
import earth from '/earth-icon.svg'
import {motion} from 'framer-motion'
function Home() {
  return (
    <>
    <div className='relative block lg:hidden'>
      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      src={img} alt='' className='h-screen'/>
      <motion.div
      className='absolute w-[100%] flex flex-col justify-center items-center top-[36vh] text-[#f1f1f5]'>
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        className='text-[40px] font-bold font-serif flex justify-center items-center'>PR<img src={earth} className='h-[7vh] w-[7vh]'/> JECT  <p className='text-[70px] pl-4'>3Rs</p></motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        className='flex gap-4 font-bold text-[18px]'><li>REDUCE </li><li>REUSE</li> <li>RECYCLE</li></motion.div>
      </motion.div>
      <Link to='/about'><motion.li className='absolute flex justify-center items-center bottom-[12vh] list-none p-3 text-[23px] text-[white] w-[40%] left-[30%] bg-[rgb(0,128,0)] rounded-[9px]'
        initial={{opacity: 0}}
        animate={{opacity: 2}}
        transition={{duration: 1}}
        >ABOUT US</motion.li></Link>
    </div>


    <div className='hidden relative lg:block w-[45%] min-h-screen bg-[#556B2F] lg:top-0 left-0'>
      <motion.div
      className='absolute w-[100%] flex flex-col justify-center items-center top-[36vh] text-[#f1f1f5]'>
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        className='text-[40px] font-bold font-serif flex justify-center items-center'>PROJECT  <p className='text-[70px] pl-4'>3Rs</p>

        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        className='flex gap-4 font-bold text-[18px]'><li>REDUCE </li><li>REUSE</li> <li>RECYCLE</li>
        </motion.div>
      </
      motion.div>
      <Link to='/about'><motion.li className='absolute flex justify-center items-center bottom-[12vh] list-none p-3 text-[23px] text-[white] w-[40%] left-[30%] bg-[rgb(0,128,0)] rounded-[9px]'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        >ABOUT US</motion.li></Link>
    </div>
    <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      src={img} alt='' className='h-screen w-[57%] absolute top-0 right-0 lg:block hidden'/>
    </>
  )
}

export default Home