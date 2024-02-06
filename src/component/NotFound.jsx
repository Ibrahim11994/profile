import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center h-screen mt-[-50px]">
      <h1 className=" text-4xl font-extrabold">page not found</h1>
      <p className="text-center">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        laboriosam ab doloremque repudiandae nam quod est eos eligendi eum, fuga
        tempore eveniet cupiditate tenetur, repellat atque! Quia excepturi quae
        omnis?
      </p>
      <p className="text-lg capitalize  font-primary font-bold">
        you can go to{" "}
        <NavLink className={"underline text-red-600"}>home page</NavLink>
      </p>
    </div>
  );
};

export default NotFound;
