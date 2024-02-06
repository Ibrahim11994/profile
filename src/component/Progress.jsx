import React from "react";
const progressData = [
  { id: 1, name: "html", rate: "w-[90%]" },
  { id: 2, name: "css", rate: "w-[86%]" },
  { id: 3, name: "javascript", rate: "w-[73%] "},
  { id: 4, name: "react", rate: "w-[63%]" },
  //   {id:5,name:"Git",rate:"w-4/5"}
];

const Progress = () => {
  return (
    <div className=" mx-2  md:mx-0 text-gray-200">
      <p className="text-4xl font-extrabold ">skills</p>
      <div className="pt-4">
        {progressData.map((item) => (
          <div key={item.id}>
            <p className="text-gray-200 font-primary font-bold">{item.name}</p>
            <div className="bg-gray-200   rounded-full">
              <div
                className={`${item.rate} my-2  bg-gradient-to-r from-red-600 to-yellow-500 h-1 md:h-2 rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
