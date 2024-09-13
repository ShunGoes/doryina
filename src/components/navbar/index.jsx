import { Link, useLocation } from "react-router-dom"
import helper from "../../helper"
import "./style.css"

import { motion } from "framer-motion"

const Navbar = () => {
  let location = useLocation() 

  let bgColor;

  if( location.pathname === "/" ){
    bgColor = "md:bg-[#FFD8F9CC]"
  } else {
    bgColor = "md:bg-white"
  }

  return (
    <motion.nav
    initial={{opacity: 0,  }}
    animate={{opacity: 1,    }}
    transition={{delay: 3, duration: 1}}
    viewport={{ once: true }} 
    className={`w-full bg-transparent md:w-9/12 lg:mx-auto md:rounded-[40px] md:backdrop-blur-md ${bgColor} md:h-[60px] md:fixed md:right-0 md:left-0 md:top-[30px]  nav-shadow z-[999]`}>
        <div className="w-[95%] mx-auto h-[70px]  flex justify-between items-center md:h-full md:w-[90%] ">
            <Link to="/" className="h-full w-4/12 md:w-auto py-2 md:flex md:items-center " >
                <img src={helper.Logo} alt="dorinya logo" className=" h-full md:h-[70%]"/>
            </Link>
            <div className=" md:hidden">
                <img src={helper.Hamburger} alt="hamburger menu" />
            </div>
            <div className="hidden md:flex gap-4 ">
              <Link to="/about" className="">
                <p className="font-[400] text-[15px] leading-[25.2px] text-[#1E1E1ECC]">About US</p>
              </Link>
              <Link to="/packages" className="">
                <p className="font-[400] text-[15px] leading-[25.2px] text-[#1E1E1ECC]">Packages</p>
              </Link>
              <Link to="/" className="">
                <p className="font-[400] text-[15px] leading-[25.2px] text-[#1E1E1ECC]">Contact Us</p>
              </Link>
            </div>
            <div className="hidden md:block">
              <button className="rounded-[8px] bg-[#962985] border border-[#4F4F4F] flex justify-center items-center h-[30px] px-[8px] font-[600] text-[14px] text-[#FBECDC]">Get Started</button>
            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar