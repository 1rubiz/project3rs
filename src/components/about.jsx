import React from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {AiOutlineEye, AiOutlineFlag, AiOutlineAim} from 'react-icons/ai'
import { FaSeedling } from 'react-icons/fa'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className='flex flex-col gap-7'>
        <motion.div
        className='m-5 text-[white] bg-[#094D03] p-3 rounded-[9px]'
        style={{boxShadow: 'rgba(0,0,0,0.56) 0px 22px 70px 4px'}}
        // style={{boxShadow: 'rgba(17,17,26,0.1) 0px 4px 16px, rgba(17,17,26,0.1) 0px 8px 24px 24px, rgba(17,17,26,0.1) 0px 16px 56px'}}
        // style={{boxShadow:'rgb(204,219,232) 3px 3px 6px 0px inset, rgba(255,255,255,0.5) -3px -3px 6px 1px inset'}}
         initial={{x: -70}}
         animate={{x: 0}}
         transition={{duration: 2}}
        >
         <div className='flex gap-9 bg-gradient-to-r from-green-400 to-white w-[100%]'>
            <span className='block text-[22px] font-bold text-[blue]'>ABOUT PROJECT 3R’S</span>
         <FaSeedling className='text-[green] text-[29px]'/>
         </div>
         <p>
Combating the menace of plastic waste pollution has become a global economic
 challenge. Plastic waste pollution is 
 capable of affecting our land, waterways and oceans 
(Ecosystem) as a large percentage of land aesthetics and drainage has been negatively affected from 
this, leading to flooding, erosion and a lot of dilapidating issues. 
We are Project 3R’s a project that is aimed to cub the menace of 
plastic waste pollution through our sensitization programs ,alternatives to 
plastic  and plastic waste collecting initiative.</p>
        </motion.div>

        <motion.div
            className='m-5 text-[white] bg-[#094D03] p-3 rounded-[9px]'
            style={{boxShadow: 'rgba(0,0,0,0.56) 0px 22px 70px 4px'}}
            // style={{boxShadow:'rgb(38,57,77) 0px 20px 30px -10px'}}
            initial={{x: 70}}
            animate={{x: 0}}
            transition={{duration: 2}}
        >
            <div className='flex gap-9 bg-gradient-to-r from-green-400 to-white'>
            <span className='text-[22px] font-bold text-[blue]'>OUR MISSION</span>
            <AiOutlineAim className='text-[green] text-[29px]'/>
            </div>
<p>Our mission is to combat one of the world’s biggest issues i.e., pollution 
caused by plastic, by raising awareness and 
standing as a plastic waste collector were we get to gather plastic waste 
from various places  in benin city Nigeria and take them to recycling 
companies in benin city were they are further aggregated and recycled. 
We also teach skills on how to recreate some of these plastic waste 
into something more useful creating skill acquisition to the masses 
reducing unemployability.
            </p>

        </motion.div>

        <motion.div
        className='m-5 text-[white] bg-[#094D03] p-3 rounded-[9px]'
        style={{boxShadow: 'rgba(0,0,0,0.56) 0px 22px 70px 4px'}}
        // style={{boxShadow:'rgb(38,57,77) 0px 20px 30px -10px'}}
        initial={{x: -25}}
        animate={{x: 0}}
        transition={{duration: 2}}
        >
    <div className='flex gap-9 bg-gradient-to-r from-green-400 to-white'>
    <span className='text-[22px] font-bold text-[blue]'>VISION</span>
    <AiOutlineEye className='text-[green] text-[29px]'/>
    </div>
    <p> Our vision is to make benin city a safer, cleaner and a  more eco-friendly 
    place by 2027, and to teach as many hands possible on how to create plastic 
    waste to wealth.
            </p>
        </motion.div>

        <motion.div
            className='m-5 text-[white] bg-[#094D03] p-3 rounded-[9px]'
            style={{boxShadow: 'rgba(0,0,0,0.56) 0px 22px 70px 4px'}}
            // style={{boxShadow:'rgb(38,57,77) 0px 20px 30px -10px'}}
            initial={{x: 50}}
            animate={{x: 0}}
            transition={{duration: 2}}
        >
            <div className='flex gap-9 bg-gradient-to-r from-green-400 to-white'>
           <span className='text-[22px] font-bold text-[blue]'> OUR GOALS</span>
           <AiOutlineFlag className='text-[green] text-[29px]'/>
           </div>
           <p> Project 3R’s is to minimize plastic pollution and the risks connected with 
        it by sensitizing the masses on the dangers of plastic waste pollution and 
        becoming a body of plastic waste collector in Benin City. 
        Project 3R’s goal  over the next 5 years is to entirely turn Benin city 
        to a cleaner and a more eco-friendly place.
            </p>
        </motion.div>
    </div>
  )
}

export default About