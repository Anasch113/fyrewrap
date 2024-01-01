import { lazy } from "react"
import product1 from "../../assets/crmproduct1.mp4"
const Product1 = () => {
  return (
    <div className=" w-full  flex items-center justify-center relative  overflow-hidden max-[680px]:flex-col ">


      <div className=" min-h-500 w-full flex items-center justify-center  rounded-lg relative  max-[680px]:min-h-72    ">
        {/* component #1 */}
        <video autoPlay muted loop playsInline
          playsinline
          preload="auto"
           src={product1} alt="product1" className="w-2/4 rounded-sm wow animate__animated animate__fadeInUp animate__delay-0s max-[1200px]:w-2/3 max-[800px]:w-full  max-[500px]:min-h-700" />

        {/* component #2 (Overlayed on top of #1) */}
        <div className="absolute inset-y-56 flex justify-center flex-col bg-yellow-600 bg-opacity-85  p-10 w-2/4 transform translate-y-56 wow animate__animated animate__fadeInUp animate__delay-1s max-[1200px]:w-2/3 max-[800px]:w-full max-[800px]:inset-y-24 max-[800px]:translate-y-24   max-[500px]:p-1">
          <h2 className="font-poppins font-semibold text-3xl text-white mb-4 max-[1200px]:text-lg  max-[500px]:mb-0 ">
            Grease Duct System
          </h2>
          <p className=" text-white max-[1200px]:text-sm max-[500px]:text-xs  ">
            FyreWrap® Elite® 1.5 Duct Insulation is a two-layer flexible enclosure for
            two-hour rated commercial kitchen grease ducts. FyreWrap Elite 1.5 Duct
            Insulation is tested per ASTM E2336 and is acceptable as an alternate to a
            traditional fire-rated shaft. Installed as a two-layer system, FyreWrap
            Elite 1.5 complies with the International Mechanical Code (IMC) and
            Uniform Mechanical Code (UMC)
          </p>
        </div>
      </div>



    </div>
  )
}

export default Product1