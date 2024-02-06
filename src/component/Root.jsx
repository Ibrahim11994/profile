import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Root = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" ">
      <div className="">
        <header className="flex px-3 md:px-0 flex-row py-4 justify-between container items-center">
          <NavLink className={"text-black"}>
            <h1 className=" font-secondary text-xl">
              Abraham.
              <span className=" bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-yellow-400">
                Jacob
              </span>
            </h1>
          </NavLink>
          <nav className="hidden md:flex  font-primary">
            <NavLink className={"pr-4 text-white"}>home</NavLink>
            <NavLink className={"text-white"} to="about">
              about{" "}
            </NavLink>
          </nav>
          <div className="md:hidden">
            <div
              className="text-white cursor-pointer "
              onClick={() => {
                setNav(!nav);
              }}
            >
              {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            <div
              className={
                nav
                  ? "fixed bg-gray-600 left-0 top-0 w-[60%] text-center py-4 text-white bottom-0 "
                  : "fixed  left-[-100%]"
              }
            >
              <NavLink className={""}>
                <h1 className=" font-secondary text-xl">
                  Abraham.
                  <span className=" bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-yellow-400">
                    Jacob
                  </span>
                </h1>
              </NavLink>
              <nav className="flex flex-col uppercase  font-primary">
                <NavLink className={"py-2"}>home</NavLink>
                <NavLink className={"py-2"} to="about">
                  about
                </NavLink>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
