import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/loading';
import Flower from '../components/flower'
import Home from './Home';

function Onboard() {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to another page after 10 seconds
      // navigate('/home'); // Replace '/destination' with the actual URL
      setDisplay(true);
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts before the timeout completes
    };
  }, []);
  
  return (
    <>
      {!display ? <Flower/> : <Home/> }
    </>
  )
}

export default Onboard