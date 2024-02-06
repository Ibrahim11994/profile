import React from "react";
import Btn from "./Btn";


const Text = (props) => {
  return (
    <div className="flex flex-col px-2 md:px-0  justify-center">
      <p className=" font-extrabold text-gray-300 font-main tracking-wide md:text-3xl lg:text-4xl  capitalize ">
       {props.head}
      </p>
      <h2 className=" font-extrabold text-gray-300 font-main tracking-wide md:text-3xl lg:text-4xl capitalize md:ps-14 ps-2 py-3 ">
        {props.mid}
      </h2>
      <p className="text-gray-500">
        {props.text}
      </p>
      <div className="flex gap-4 justify-center my-6">
       <Btn button='hire me'/>
       <Btn button='contact'/>
      </div>
    </div>
  );
};

export default Text;
