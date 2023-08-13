import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/loading';

function Onboard() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to another page after 10 seconds
      navigate('/home'); // Replace '/destination' with the actual URL
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts before the timeout completes
    };
  }, []);
  return (
    <Loading/>
  )
}

export default Onboard