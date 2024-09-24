import { Link, useLocation } from "react-router-dom";
import helper from "../../helper";
import "./style.css";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const Navbar = () => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const menuRef = useRef(null);

  // useClickAway(menuRef, (event) => {
  //   console.log(event.target)
  //   setShowHamburgerMenu(false);
  // });

  const appLinks = [
    {
      to: "about",
      name: "About us",
    },
    {
      to: "packages",
      name: "Packages",
    },
    {
      to: "contact",
      name: "Contact us",
    },
  ];

  let location = useLocation();

  let bgColor;

  if (location.pathname === "/") {
    bgColor = "md:bg-[#FFD8F9CC]";
  } else {
    bgColor = "md:bg-white";
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      viewport={{ once: true }}
      className={`w-full bg-transparent md:w-9/12 md:mx-auto md:rounded-[40px] md:backdrop-blur-md ${bgColor} md:h-[60px] md:fixed md:right-0 md:left-0 md:top-[30px] relative nav-shadow z-[999]`}
    >
      <div className="w-[95%] mx-auto h-[70px]  flex justify-between items-center md:h-full md:w-[90%] ">
        <Link
          to="/"
          className="h-full w-4/12 md:w-auto py-2 md:flex md:items-center "
        >
          <img
            src={helper.Logo}
            alt="dorinya logo"
            className=" h-full md:h-[70%]"
          />
        </Link>
        <div
          
          className="cursor-pointer md:hidden"
        >
          {
            showHamburgerMenu ? 
            <img src={helper.Cancel} alt="cancel button" onClick={() => setShowHamburgerMenu(false)} /> : 
          <img src={helper.Hamburger} alt="hamburger menu" onClick={() => setShowHamburgerMenu(true)} />
          }
        </div>
        <div className="hidden md:flex gap-4 ">
          <Link to="/about" className="">
            <p className="font-[400] text-[15px] leading-[25.2px] text-[#1E1E1ECC]">
              About uS
            </p>
          </Link>
          <Link to="/packages" className="">
            <p className="font-[400] text-[15px] leading-[25.2px] text-[#1E1E1ECC]">
              Packages
            </p>
          </Link>
          <Link to="/contact" className="">
            <p className="font-[400] text-[15px] leading-[25.2px] text-[#1E1E1ECC]">
              Contact us
            </p>
          </Link>
        </div>
        <div className="hidden md:block">
          <button className="rounded-[8px] bg-[#962985] border border-[#4F4F4F] flex justify-center items-center h-[30px] px-[8px] font-[600] text-[14px] text-[#FBECDC]">
            Get Started
          </button>
        </div>
      </div>
  
      <AnimatePresence>
        {showHamburgerMenu && (
          <motion.div
          ref={menuRef}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ when: "beforeChildren", staggerChildren: 0.3 }}
            className="absolute top-[80px] bg-[#EBD6E8] backdrop-blur-sm right-3  py-[60px] rounded-[10px] overflow-hidden w-[70%] "
          >
            <div className="h-full flex flex-col justify-center items-center  w-full">
              {appLinks.map((links, idx) => (
                <Link to={`/${links.to}`} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: idx * 0.5,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    className="text-[20px] text-[#28282BE5] font-[600] text-center h-[50px] flex items-center justify-center  "
                  >
                    {links.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;
