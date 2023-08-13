import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <div className='flex justify-evenly items-center p-3'>
        <FaFacebook className='text-[green]' size={35}/>
        <FaInstagram className='text-[green]' size={35}/>
        <FaLinkedin className='text-[green]' size={35}/>
        <FaTwitter className='text-[green]' size={35}/>
        <FaWhatsapp className='text-[green]' size={35}/>
    </div>
  )
}

export default Footer