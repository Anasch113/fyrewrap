import { lazy } from "react"
import product1 from "../../assets/crmproduct1.mp4"
import "./product.css"
const Product1 = () => {
  return (
    <div className =" w-full  max-[680px]:px-5  px-10 mt-2 max-[400px]:-top-12 relative max-[500px]:mt-14 overflow-hidden "> 

 

<div className=" min-h-screen  w-full flex    justify-center   relative  max-[500px]:max-h-none max-[500px]:min-h-min  ">
{/* component #1 */}

<video  autoPlay
          muted
          loop   allowFullScreen src={product1} loading='lazy' alt="product1" className="w-full object-cover  rounded-sm wow animate__animated animate__fadeIn max-h-screen h-full  " />



{/* component #2 (Overlayed on top of #1) */}
<div className=" w-full absolute inset-y-48 flex justify-center flex-col bg-yellow-600 bg-opacity-85  transform translate-y-48 wow animate__animated animate__fadeIn p-10   max-[800px]:w-full max-[800px]:inset-y-16 max-[800px]:translate-y-16   max-[500px]:p-1">
<h2 className="font-poppins font-semibold text-3xl text-white mb-4 max-[1200px]:text-lg wow animate__animated animate__fadeInUp animate__delay-1s">
Grease Duct System
</h2>
<p className=" text-white max-[1200px]:text-sm max-[500px]:text-xs wow animate__animated animate__fadeInUp animate__delay-1s">
FyreWrap® Elite® 1.5 Duct Insulation is a two-layer flexible enclosure for two-hour rated commercial kitchen grease ducts. FyreWrap Elite 1.5 Duct Insulation is tested per ASTM E2336 and is acceptable as an alternate to a traditional fire-rated shaft. Installed as a two-layer system, FyreWrap Elite 1.5 complies with the International Mechanical Code (IMC) and Uniform Mechanical Code (UMC)
</p>
</div>
</div>



</div>
  )
}

export default Product1