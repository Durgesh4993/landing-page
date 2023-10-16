import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1124);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <div>
          <div className="flex py-2 container mx-auto justify-between px-5">
            <button
              className="hamburger-button text-primary text-[30px] flex justify-end self-center"
              onClick={toggleSidebar}
            >
              &#9776;
            </button>
            <img src="./images/logo.png" width={"80px"} />
          </div>

          {sidebarOpen && (
            <div className="sidebar">
              <button
                className="close-button text-primary w-full text-[40px] flex justify-end"
                onClick={toggleSidebar}
              >
                &times;
              </button>
              <div className="flex justify-center mb-4">
                <img src="./images/logo.png" width={"80px"} />
              </div>

              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeSidebar}
              >
                <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full">
                  Home
                </button>
              </Link>
              <Link
                to="impact"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeSidebar}
              >
                <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full">
                  Impact
                </button>
              </Link>
              <Link
                to="chapters"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeSidebar}
              >
                <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full">
                  Chapters
                </button>
              </Link>
              <Link
                to="chapter-structure"
                smooth={true}
                duration={500}
                offset={-50}
                onClick={closeSidebar}
              >
                <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium text-[16px] mt-4 w-full">
                  Chapter Structure
                </button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <nav className="bg-white px-4 pt-6 pb-3 flex container mx-auto justify-between items-center">
          <div>
            <img src="./images/logo.png" width={"80px"} />
          </div>
          <div className="flex mt-[-10px]">
            <Link to="home" smooth={true} duration={500} offset={-50}>
              <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
                Home
              </button>
            </Link>
            <Link to="impact" smooth={true} duration={500} offset={-50}>
              <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
                Impact
              </button>
            </Link>
            <Link to="chapters" smooth={true} duration={500} offset={-50}>
              <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary mr-4 text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
                Chapters
              </button>
            </Link>
            <Link
              to="chapter-structure"
              smooth={true}
              duration={500}
              offset={-50}
            >
              <button className="bg-primary cursor-pointer hover:bg-[#b99806] hover:text-primary text-white px-10 py-2 rounded-full font-mono-medium w-fit text-[16px]">
                Chapter Structure
              </button>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
