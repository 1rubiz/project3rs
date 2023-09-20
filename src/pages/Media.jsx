import React from 'react'
import Image from '../components/image'
import img from '../assets/img3.jpg';

function Media() {
  return (
    <div className='min-h-[70vh] flex flex-col gap-3 justify-center items-center mt-[18vh] mb-4'>
      <Image image={img}/>
      <Image image={img}/>
      <Image image={img}/>
      <Image image={img}/>
    </div>
  )
}

export default Media