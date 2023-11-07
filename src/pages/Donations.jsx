import { motion } from 'framer-motion'
import donate from '../assets/img1.jpg'
import { FaCreditCard } from 'react-icons/fa'
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import img from '../assets/img5.jpg'
import logo from '/logo.jpg'

function Donations() {

  const publicKey = "pk_test_32b249e416818f500de8009ac50e29976a45cab8"
//   const amount = 924
    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState(0);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [errs, setErrs] = useState('')
  const navigate = useNavigate();
  const success =async ()=>{
    // await axios.post("https://eclat-backend-server.onrender.com/mail",body)
    navigate('/home');
  }



  const handleClick = ()=>{
    if (!email[0] || (amount < 1) || !name[0] || !phone[0]){
      setErrs('All inputs are required *')
    }
  }
// <PaystackButton {...componentProps} className='btn'/>
  // const button = (email ? (<button className='' onClick={handleClick}> Donates</button>) : )

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Donate",
    onSuccess: () =>
      success(),
    onClose: () => alert("Wait! Don't leave :("),
  }
  
  return (
    <div className='h-screen'>
      <div className='hidden lg:block absolute top-0 right-0 h-screen w-[48%]'>
        <div className='w-[100%] h-[100%] relative flex justify-center items-center'>
          <img src={img} className='hidden lg:block opacity-50 absolute top-0 right-0 h-screen w-[100%] z-0'/>
          <img src={logo} className='w-[48%] opacity-90'/>
        </div>
      </div>
      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      src={donate} 
      alt='' 
      className='h-screen lg:hidden w-[100%] lg:absolute opacity-30 top-0 right-0 lg:w-[47%]'/>
      <motion.div
      initial={{opacity: 0, y: -100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 4}}
      className='h-[300px] top-[25vh] w-[88%] z-3 absolute ml-[6%] flex justify-center items-center lg:left-0 lg:w-[40%]'
      style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
      >
        <div
        className='w-[80%]'
        >
        <input
        className='p-3 w-[100%] h-[6vh] mb-2'
        placeholder="FULL NAME"
        type="text"
        id="name"
        onChange={(e) => {setName(e.target.value); setErrs('')}}
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        <input
        className='p-3 w-[100%] h-[6vh] mb-2'
        placeholder="EMAIL ADDRESS"
        type="text"
        id="email"
        onChange={(e) => {setEmail(e.target.value); setErrs('')}}
        style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
        />
        <input
          className='p-3 w-[100%] h-[6vh] mb-2'
          placeholder="PHONE NUMBER"
          type="number"
          id="phone"
          onChange={(e) => {setPhone(e.target.value); setErrs('')}}
        />
        <input
          className='p-3 w-[100%] h-[6vh] mb-2'
          placeholder="AMOUNT"
          type="number"
          id="amount"
          onChange={(e) => {setAmount(e.target.value); setErrs('')}}
        />
        <p className='text-[red] text-[1.8vh] bg-white font-semibold'>{errs}</p>
        <motion.li className='flex justify-center gap-[5%] items-center bottom-7 list-none p-3 text-[23px] text-[white] left-[30%] bg-[rgb(0,128,0)] rounded-[9px]'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
        >
        <button className={`${(!email[0] || (amount < 1) || !name[0] || !phone[0]) ? 'block' : 'hidden'}`} onClick={handleClick}> Donate</button>
        <span className={`${(email[0] && (amount > 0) && name[0] && phone[0]) ? 'block' : 'hidden'}`}><PaystackButton {...componentProps} className={`${(email[0] !== null) ? 'block' : 'hidden'} btn`}/></span>
        <FaCreditCard/>
        </motion.li>
        </div>
      </motion.div>
      </div>
  )
}

export default Donations