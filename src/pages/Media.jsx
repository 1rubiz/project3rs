import React from 'react'
import Image from '../components/image'
import img from '../assets/img3.jpg';

function Media() {
  return (
    <div className='pl-9 w-[100%] pb-9 flex flex-col gap-2 justify-center items-center pt-[18vh] mb-4 md:grid md:grid-cols-3 md:gap-2'>
      <Image image={img} customClass=''/>
      <Image image={img}/>
      <Image image={img}/>
      <Image image={img}/>
      <Image image={img}/>
      <Image image={img}/>
    </div>
  )
}

export default Media