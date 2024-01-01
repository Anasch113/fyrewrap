import React from 'react';
import video from "../../assets/mainpagevideo.mov"

const Banner = () => {
 


  return (
    <div className=' '>
      {/* Video Background */}

      <div className="    ">
        <video
          width="100%"
          height="100%"
          src={video}
          title="FyreWrap Video"
          frameBorder="0"
          autoPlay
          muted
          loop
          playsInline 
          playsinline 
          preload="auto" 
          allowFullScreen
          className='min-h-screen-lg max-[600px]:min-h-0'
          
        ></video>
      </div>

  
    </div>
  );
};

export default Banner;