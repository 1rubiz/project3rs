import React from 'react'
import mail from '../assets/mail.png';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa'

function Contact() {
  return (
    <div className='min-h-[70vh] relative'>
      <motion.img
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      src={mail}
      width='100%'
      height={100}
      className='h-100 absolute bottom-0 z-1'
      />
      <motion.div
      initial={{opacity: 0, y: -100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 4}}
      className='h-[300px] w-[88%] z-3 absolute ml-[6%] flex justify-center items-center'
      style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
      >
        <div
        className='w-[80%]'
        >
        <input
        className='p-3 w-[100%] h-[6vh] mb-2'
        placeholder='Full Name'
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        <input
        className='p-3 w-[100%] h-[6vh] mb-2'
        placeholder='Email'
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        <textarea
        className='p-3 w-[100%] h-[19vh]'
        placeholder='Body .....'
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        <motion.li className='flex justify-center gap-[5%] items-center bottom-7 list-none p-3 text-[23px] text-[white] left-[30%] bg-[rgb(0,128,0)] rounded-[9px]'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        >Send
        <FaPaperPlane/>
        </motion.li>
        </div>
      </motion.div>
      </div>
  )
}

export default Contact