import React from 'react'
import image from '../component/image/hima.png'
const Photo = () => {
  return (
    <div className="">
      <img
        className=" bg-gradient-to-t from-red-600 to-yellow-400 md:rounded-tl-[190px] rounded-none md:rounded-tr-[200px] md:rounded-br-[90px] md:rounded-bl-[170px] bg-[#CFCDD0]"
        src={image}
        alt="hima"
      />
    </div>
  );
}

export default Photo
