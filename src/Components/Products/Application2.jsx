import React from 'react'
import product5 from "../../assets/crmproduct5.mp4"
import product6 from "../../assets/crmproduct1.mp4"
import { useState, useEffect } from 'react'
import "./applications.css"

const Application2 = () => {

  const [isImage1Grayscale, setIsImage1Grayscale] = useState(true);

  useEffect(() => {
    const section = document.getElementById('section-2');
    const imageBox1 = document.getElementById('imageBox1-2');
    const imageBox2 = document.getElementById('imageBox2-2');
    const textBox1 = document.getElementById('textBox1-2');
    const textBox2 = document.getElementById('textBox2-2');
    
    const options = {
      threshold: 0.80, // Adjust as needed
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Image box 1 is in view
          imageBox1.classList.remove('grayscale');
          imageBox2.classList.add('grayscale');
          textBox1.style.backgroundColor = '';
        textBox2.style.backgroundColor = 'white';
          setIsImage1Grayscale(false);
        } else {
          // Image box 2 is in view
          imageBox1.classList.add('grayscale');
          imageBox2.classList.remove('grayscale');
          textBox1.style.backgroundColor = 'white'; // Revert to default
        textBox2.style.backgroundColor = ''; // Revert to default
          setIsImage1Grayscale(true);
        }
      });
    }, options);

    observer.observe(section);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);



  return (
    <div className='w-full flex items-center justify-evenly min-h-500 flex-col mb-9'>
      <div className='flex flex-row w-full  gap-3  justify-center wow animate__animated animate__rotateIn'>

     

</div>

<div id="section-2" className='flex flex-col items-center w-2/3 max-[550px]:w-full '>
      {/* 1 */}
      <div  className='flex flex-row w-full '>
        <div id='imageBox1-2' className='w-2/4 h-72 wow animate__animated animate__fadeIn'>
          <video autoPlay loop muted playsInline 
          playsinline 
          preload="auto"  src={product5} className='w-full h-full object-cover ' alt="" />
        </div>
        <div id='textBox1-2' className={`bg-yellow-500 w-2/4 flex justify-center flex-col px-5  cursor-pointer max-[550px]:w-2/4 transition-colors duration-500`}>
          <h1 className='text-4xl text-gray-500 font-poppins font-semibold max-[550px]:'>Carpark</h1>
          <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Exhaust</h1>
          <h1 className='text-4xl text-gray-400 font-poppins font-semibold'>Duct</h1>
        </div>
      </div>
      {/* 2 */}
      <div  className='w-full flex flex-row justify-between'>
        <div id='textBox2-2' className={`bg-yellow-500 w-2/4 flex items-end  justify-center flex-col px-5  cursor-pointer max-[550px]:w-2/4 transition-colors duration-500 `}>
          <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Kitchen</h1>
          <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Extraction</h1>
          <h1 className='text-4xl text-gray-400 font-poppins font-semibold'>Duct</h1>
        </div>
        <div id='imageBox2-2' className='w-2/4 h-72 wow animate__animated animate__fadeIn'>
          <video autoPlay loop muted playsInline 
          playsinline 
          preload="auto"  src={product6} className='w-full h-full object-cover ' alt="" />
        </div>
      </div>
    </div>

</div>

  )
}

export default Application2
