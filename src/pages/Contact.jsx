import React from 'react'
import mail from '../assets/mail.png';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa'
import img from '../assets/img.jpg'
import logo from '/logo.jpg'

function Contact() {
  return (
    <div className='h-screen'>
      <div className='hidden lg:block absolute top-0 right-0 h-screen w-[48%]'>
            <div className='w-[100%] h-[100%] relative flex justify-center items-center'>
              <img src={img} className='hidden lg:block opacity-50 absolute top-0 right-0 h-screen w-[100%] z-0'/>
              <img src={logo} className='w-[48%] opacity-90'/>
            </div>
      </div>
      <motion.img
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      src={mail}
      width='100%'
      height={100}
      className='h-100 absolute md:left-[5%] top-[32vh] md:top-[19vh] lg:top-[32vh] rounded-md z-1 md:w-[90%] lg:w-[45%] lg:left-[3%] lg:h-[68vh]'
      />
      <motion.div
      initial={{opacity: 0, y: -100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 4}}
      className='h-[300px] w-[88%] z-3 absolute top-[22vh] ml-[6%] flex justify-center items-center lg:w-[38%]'
      style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
      >
        <div
        className='w-[80%] pt-5 pb-5'
        >
        <input
        className='p-3 w-[100%] h-[6vh] mb-2 border-[rgb(0,128,0)] border-b-2 border-l-2'
        placeholder='Full Name'
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        <input
        className='p-3 w-[100%] h-[6vh] mb-2 border-[rgb(0,128,0)] border-b-2 border-l-2'
        placeholder='Email Address...'
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        <textarea
        className='p-3 w-[100%] h-[16vh] border-[rgb(0,128,0)] border-b-2 border-l-2'
        placeholder='Message Body ........'
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