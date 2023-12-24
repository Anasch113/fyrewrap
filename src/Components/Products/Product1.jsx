import React from 'react'
import product1 from "../../assets/crmproduct1.mp4"
import { PiNumberSquareOneLight } from "react-icons/pi";
import filepdf from "../../assets/Fyre-wrap.com.pdf"


const Product1 = () => {
  return (
    <div className =" w-full flex items-center justify-center flex-col border-b-2 border-gray-300 gap-10 overflow-hidden min-h-screen">
    
    
    <div className="flex flex-col items-center justify-center gap-5 ">

      <PiNumberSquareOneLight className='text-5xl text-text-gray  wow animate__animated animate__fadeInLeft'/>
        <h2 className="font-poppins font-semibold text-5xl text-white mb-4 max-[1200px]:text-lg wow animate__animated animate__fadeInLeft">
          Grease Duct System
        </h2>
        <div className='px-52 max-[700px]:px-8'>
        <p className=" text-white text-center leading-8  max-[1200px]:text-sm max-[500px]:text-xs wow animate__animated animate__fadeInLeft ">
          FyreWrap® Elite® 1.5 Duct Insulation is a two-layer flexible enclosure for
          two-hour rated commercial kitchen grease ducts. FyreWrap Elite 1.5 Duct
          Insulation is tested per ASTM E2336 and is acceptable as an alternate to a
          traditional fire-rated shaft. Installed as a two-layer system, FyreWrap
          Elite 1.5 complies with the International Mechanical Code (IMC) and
          Uniform Mechanical Code (UMC)
        </p>
        </div>
        
        <a
      href={filepdf}
      download='file'
      className='bg-red-color px-20 py-3 rounded-3xl text-text-gray wow animate__animated animate__fadeInLeft'
    >
      Read More
    </a>
      </div>



      <div className="w-[900px] flex items-center justify-center rounded-lg mb-3">
  {/* component #1 */}
  <video
    autoPlay
    loop
    muted
    src={product1}
    alt="product1"
    className="w-full h-[500px] rounded-xl wow animate__animated animate__fadeInUp animate__delay-0s max-[1200px]:w-2/3"
  />
  
  {/* component #2 (Overlayed on top of #1) */}
</div>
    
    
    
        </div>
  )
}

export default Product1
