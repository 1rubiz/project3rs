import React from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {AiOutlineEye, AiOutlineFlag, AiOutlineAim} from 'react-icons/ai'
import { FaSeedling } from 'react-icons/fa'
import { motion } from 'framer-motion'
import img1 from '/logo.jpg'
import img2 from '/img4.jpg'
import img3 from '/img5.jpg'
import img4 from '/img6.jpg'

// bg-[#094D03]
function AboutMobile() {
  return (
    <div className='block md:hidden flex pt-2 flex-col gap-7'>
        <section className='flex justify-center items-center mt-12 mb-7 w-[100%]'>
            <motion.div
            className='flex w-[90%] gap-3 text-[#094D03] font-semibold rounded-md bg-[white] p-7'
            style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
             initial={{x: -70}}
             whileInView={{x: 0}}
             transition={{duration: 2}}
            >
            <div className='ml-[1.5vh] w-[100%] flex flex-col justify-center items-center'>
                 <div className='flex gap-9 mb-3 p-2 relative rounded-md bg-gradient-to-r from-green-400 to-white w-[100%]'>
                    <span className='block text-[22px] font-bold text-[black] pl-1'>PROJECT 3R’S</span>
                 <FaSeedling className='text-[green] absolute right-3 text-[29px]'/>
                 </div>
                 <motion.img
                    initial={{opacity: 0}}
                    whileInView={{opacity: 2}}
                    exit={{opacity: 0}}
                    transition={{duration: 2}}
                src={img1} className='border-2 w-[70%] h-[20vh] m-2 rounded-md'/>
                 <p className='font-normal text-center'>
                    Combating the menace of plastic waste pollution has become a global economic
                    challenge. Plastic waste pollution is 
                    capable of affecting our land, waterways and oceans 
                    (Ecosystem) as a large percentage of land aesthetics and drainage has been negatively affected from 
                    this, leading to flooding, erosion and a lot of dilapidating issues. 
                    We are Project 3R’s a project that is aimed to cub the menace of 
                    plastic waste pollution through our sensitization programs ,alternatives to 
                    plastic  and plastic waste collecting initiative.
                </p>
            </div>            
            </motion.div>
        </section>

        <section className='flex justify-center items-center mb-7 w-[100%]'>
            <motion.div
                className='flex w-[90%] gap-3 text-[#094D03] font-semibold rounded-md bg-[white] p-7'
                style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                // style={{boxShadow: 'rgba(0,0,0,0.56) 0px 22px 70px 4px'}}
                // style={{boxShadow:'rgb(38,57,77) 0px 20px 30px -10px'}}
                initial={{x: 70}}
                whileInView={{x: 0}}
                transition={{duration: 2}}
            >
            <div className='w-[100%] flex flex-col justify-center items-center'>
                <div className='flex gap-9 mb-3 p-2 relative bg-gradient-to-r from-green-400 to-white w-[100%]'>
                    <span className='text-[22px] pl-2 font-bold text-[black]'>OUR MISSION</span>
                    <AiOutlineAim className='text-[green] absolute right-3 text-[29px]'/>
                </div>
                <motion.img
                    initial={{opacity: 0}}
                    whileInView={{opacity: 2}}
                    exit={{opacity: 0}}
                    transition={{duration: 2}}
                    src={img2} 
                className='w-[100%] h-[20vh] m-2 rounded-md'/>
                    <p className='font-normal'>Our mission is to combat one of the world’s biggest issues i.e., pollution 
                    caused by plastic, by raising awareness and 
                    standing as a plastic waste collector were we get to gather plastic waste 
                    from various places  in benin city Nigeria and take them to recycling 
                    companies in benin city were they are further aggregated and recycled. 
                    We also teach skills on how to recreate some of these plastic waste 
                    into something more useful creating skill acquisition to the masses 
                    reducing unemployability.
                                </p>
            </div>
            </motion.div>
        </section>

        <section className='flex justify-center items-center mb-7 w-[100%]'>
            <motion.div
            className='flex w-[100%] gap-3 text-[#094D03] font-semibold rounded-md bg-[white] p-7'
            style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
            initial={{x: -25}}
            whileInView={{x: 0}}
            transition={{duration: 2}}
            >
            <div className='w-[100%] flex flex-col justify-center items-center'>
                <div className='w-[90%] flex gap-9 mb-3 p-2 relative bg-gradient-to-r from-green-400 to-white'>
                    <span className='text-[22px] pl-2 font-bold text-[black]'>VISION</span>
                    <AiOutlineEye className='text-[green] absolute right-3 text-[29px]'/>
                </div>
            <img
                initial={{opacity: 0}}
                whileInView={{opacity: 2}}
                exit={{opacity: 0}}
                transition={{duration: 2}}
                src={img3} 
                className='w-[90%] h-[20vh] m-2 rounded-md'/>
            <p className='font-normal text-center'> Our vision is to make benin city a safer, cleaner and a  more eco-friendly 
                place by 2027, and to teach as many hands possible on how to create plastic 
                waste to wealth.
            </p>
            </div>
            </motion.div>
        </section>

        <section className='flex justify-center items-center mb-7 w-[100%]'>            
            <motion.div
                className='flex w-[100%] gap-3 text-[#094D03] font-semibold rounded-md bg-[white] p-6'
                style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
                // style={{boxShadow: 'rgba(0,0,0,0.56) 0px 22px 70px 4px'}}
                // style={{boxShadow:'rgb(38,57,77) 0px 20px 30px -10px'}}
                initial={{x: 50}}
                whileInView={{x: 0}}
                transition={{duration: 2}}
            >
                 <div className='w-[100%] flex flex-col justify-center items-center'>
                        <div className='flex gap-9 mb-3 p-2 w-[100%] relative bg-gradient-to-r from-green-400 to-white'>
                           <span className='text-[22px] pl-2 font-bold text-[black]'> OUR GOALS</span>
                           <AiOutlineFlag className='text-[green] absolute right-3 text-[29px]'/>
                       </div>
                       <img
                            initial={{opacity: 0}}
                            whileInView={{opacity: 2}}
                            exit={{opacity: 0}}
                            transition={{duration: 2}}
                            src={img4}
                             className='w-[100%] h-[20vh] rounded-md'/>
                       <p className='font-normal'> Project 3R’s is to minimize plastic pollution and the risks connected with 
                            it by sensitizing the masses on the dangers of plastic waste pollution and 
                            becoming a body of plastic waste collector in Benin City. 
                            Project 3R’s goal  over the next 5 years is to entirely turn Benin city 
                            to a cleaner and a more eco-friendly place.
                        </p>
                </div>
            </motion.div>
        </section>
    </div>
  )
}

export default AboutMobile

// className='flex m-8 w-[80%] text-[#094D03] font-semibold rounded-md bg-[white] p-3'