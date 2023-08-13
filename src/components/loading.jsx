import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineLoading } from 'react-icons/ai'; // Import the icon
import { FiTrash2 } from 'react-icons/fi'; // Import the icon
import { FiTrash } from 'react-icons/fi'; // Import the icon
// import { FiTrash } from 'react-icons/fi'; // Import the icon
import trash from '../assets/trash.svg';
import trashCan from '../assets/trash_bin.svg'
import '../App.css'
function Loading() {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
    {/* <motion.div className='m-9 p-4 bg-[green]' 
    animate={{x: [100, 0], opacity: 1}}
    initial={{opacity: 0}}
    transition={{ease: 'easeOut', duration:2 }}
    exit={{opacity: 0}}
    >Loading</motion.div> */}
    <div className=''>
        <motion.img src={trash}
        className='w-[80px] ml-12 h-[80px] absolute z-[-2]'
        initial={{y:-50}}
        animate={{y: 100}}
        transition={{duration: 4}}
        ></motion.img>

        <motion.img src={trashCan}
            className='w-[180px] h-[40vh]'
            ></motion.img>
            <div className="flex items-center justify-center absolute top-[46vh] left-[24vh]">
              <div className="w-16 h-16 flex items-center justify-center rounded-full animate-spin">
                 <AiOutlineLoading className="text-[green]" size={24} />
                </div>
            </div>
    </div>
    {/* <div className="flex items-center justify-center h-screen">
      <div className="mr-4">
        <TrashCanOpen />
      </div>
      <div className="mr-4">
        <TrashCanClosed />
      </div>
      <div>
        <Trash />
      </div>
    </div> */}
    </div>
  )
}

// import React from 'react';
// import { FiTrash2 } from 'react-icons/fi'; // Import the icon

const TrashCanOpen = () => {
  return <FiTrash2 size={32} color="blue" />;
};

const TrashCanClosed = () => {
    return <FiTrash size={32} color="red" />;
  };

  const Trash = () => {
    return <FiTrash size={32} color="gray" />;
  };
// export default TrashCanOpen;

export default Loading