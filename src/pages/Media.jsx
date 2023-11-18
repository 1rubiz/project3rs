import React, { useState, useEffect } from 'react'
import Image from '../components/image'
import { createClient } from "@supabase/supabase-js";
import Loading from '../components/loader'

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Media() {
  const [imageUrl, setImageUrl] = useState('logo.jpg')
  const [images, setImages] = useState(null);
  const [errs, setErrs]= useState('')
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
      const getImages= async ()=>{
            const { data, error } = await supabase
            .storage
            .from('media')
            .list('1ps738_0', {
              limit: 100,
              offset: 0,
              sortBy: { column: 'name', order: 'asc' },
            })
            if(error){ setErrs('Error loading images.....Try refreshing')}
            if(data.length > 0){
              // console.log(data)
              if(data[0].name[0] === '.'){
                setImages(null)
                setErrs('No New Images....')  
                setLoading(false)
              }else{
                setImages(data);
                setErrs('')
                setLoading(false)
              }
            }else{
              setErrs('No New Images....')
              setLoading(false)
            }
      }
      getImages()
  }, [])
  return (
    <div className='pl-9 w-[100%] pb-9 flex flex-col gap-2 justify-center items-center pt-[18vh] mb-4 md:grid md:grid-cols-3 md:gap-2'>
      {
        loading && <Loading/>
      }
      {(images !== null) && (
          images.map((items, i)=>{
            return(
                <Image key={i} image={items.name}/>
              )
          })
        )}
        <h1 className='text-white text-[3vh] text-center underline'>{errs}</h1>
      }
    </div>
  )
}

export default Media