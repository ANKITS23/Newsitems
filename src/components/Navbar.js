import { useState } from "react";
import DarkModeToggles from "./Dark";
import { NavLink  } from "react-router-dom";
// import { AiOutlineArrowRight } from 'react-icons/ai';

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false); 
  return (
    <div className="main-container">
      <div className="wrapper ">
        <div className=" navbar-container  ">
          <nav className="w-full bg-blue-400 dark:bg-blue-800 shadow py-4">
           
            <div className="px-5 ">
              <div className="flex w-full justify-between items-center gap-5  md:px-8 ">
                <div className="">
                  <a href="#">
                  <h2 className="text-2xl font-bold text-black dark:text-white ">LOGO</h2>
                  </a>
                </div>
                <section className="MOBILE-MENU md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen(!isNavOpen)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          </section>
   
    
                <div className=" DESKTOP-MENU hidden space-x-8 lg:flex flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ">
                  <ul className="items-center justify-center md:flex flex-col md:flex-row gap-7">
                    <li className="text-black dark:text-white hover:text-gray-200">
                      <NavLink className="navbar-item" to="/">
                        Home
                      </NavLink>
                    </li>

                    <li className="text-black dark:text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/about">
                        About
                      </NavLink>
                    </li>

                    <li className="text-black dark:text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/News">
                      News
                      </NavLink>
                    </li>
                    <li className="text-black dark:text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/charts">
                    Chart
                      </NavLink>
                    </li>
                    <li className="text-black dark:text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/list">
                    List
                      </NavLink>
                    </li>
             


                    <li className="">
                  <DarkModeToggles />
                  </li>
                  </ul>
                </div>
              </div>

            </div>
            {isNavOpen &&
            <div className="MENU-LINK-MOBILE-OPEN">
                  <ul className="flex  md:hidden flex-col mt-2 ml-5 w-full  gap-5 justify-between">
                    <li className="text-black dark:text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/">
                        Home
                      </NavLink>
                    </li>

                    <li className="text-black dark:text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/about">
                        About
                      </NavLink>
                    </li>

                    <li className="text-black dark:text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/News">
                      News
                      </NavLink>
                    </li>
                    <li className="text-black dark:text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/chart">
                    Chart
                      </NavLink>
                    </li>
                    <li className="text-black dark:text-white hover:text-indigo-200">
                      <NavLink className="navbar-item" to="/list">
                    List
                      </NavLink>
                    </li>
                

                    <li className="">
                  <DarkModeToggles />
                  </li>
                  </ul>
                </div>
}  
     
          </nav>
        </div>
      </div>
 
    </div>
  );
}


