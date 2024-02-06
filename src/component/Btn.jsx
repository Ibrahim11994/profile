import React from 'react'

const Btn = (props) => {
  return (
    <div>
      <button className=" uppercase w-40 py-2 bg-gradient-to-r hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-600 from-red-600 to-yellow-400 px-5 rounded text-gray-100 font-thin">
        {props.button}
      </button>
    </div>
  );
}

export default Btn
