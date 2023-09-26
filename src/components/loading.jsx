import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineLoading } from 'react-icons/ai'; // Import the icon
import trash from '../assets/trash.svg';
import trashCan from '../assets/trash_bin.svg'
import '../App.css'
function Loading() {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
    <div className=''>
        <motion.img src={trash}
        className='w-[80px] ml-12 h-[60vh] absolute z-[-2]'
        initial={{y:-50}}
        animate={{y: 100}}
        transition={{duration: 4}}
        ></motion.img>

        <motion.img src={trashCan}
          className='w-[180px] h-[40vh] mt-[25vh]'
          />
        <div className="flex items-center justify-center absolute top-[46vh] left-[24vh]">
            <div className="w-16 h-16 flex items-center justify-center rounded-full animate-spin">
                <AiOutlineLoading className="text-[blue] font-bold" size={38} />
              </div>
        </div>
      </div>
    </div>
  )
}

export default Loading