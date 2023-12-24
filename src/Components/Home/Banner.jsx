import React from 'react';
import video from "../../assets/mainpagevideo.mov"
const Banner = () => {
  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          width="100%"
          height="100%"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          autoPlay
          muted
          loop
          
          allowFullScreen
        ></video>
      </div>

  
    </div>
  );
};

export default Banner;