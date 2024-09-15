import "./styles.css"
import helper from "../../../helper"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const HomeHero = () => {
    
  return (
    <section className=" h-auto mb-[60px] md:mb-0 w-full header  ">
        <header className="header-gradient h-full flex flex-col  gap-[20px]">
            <div className="h-[40px] md:h-[120px]"/>
            <motion.h1
              initial={{opacity: 0,  scale: 0.3}}
              animate={{opacity: 1,   scale: 1 }}
              transition={{delay: 1, duration: 1, type: "spring", bounce: 0.6}}
              viewport={{ once: true }} 
              className="heading-1 md:w-7/12 md:mx-auto text-[#28282B] px-[10px]">Seamless <span className="text-[#962985]">Pathways </span> to Study Work and <span className="text-[#962985]"> Live Abroad </span> </motion.h1>
            <motion.p 
              initial={{opacity: 0,  scale: 0.3}}
              animate={{opacity: 1,   scale: 1 }}
              transition={{delay: 1.5, duration: 1, type: "spring", bounce: 0.6}}
              viewport={{ once: true }} 
              className="heading-paragraph w-10/12 md:w-7/12 mx-auto text-[#28282B]">Unlock the easiest pathways to study, work, or settle abroad. Let us guide you through every step with trusted expertise and a seamless process. Start your journey today</motion.p>
            <motion.div 
              initial={{opacity: 0,  scale: 0.3}}
              animate={{opacity: 1,   scale: 1 }}
              transition={{delay: 2, duration: 1, type: "spring", bounce: 0.6}}
              viewport={{ once: true }} 
              className="flex justify-between w-10/12 md:w-3/12 mx-auto  gap-[10px] mt-5">
                <Link to="/packages" className="btn-colored w-7/12">
                  <button className="w-full h-full">Book a consultation</button>
                </Link>
                <Link to="/about" className="btn-plain w-5/12">
                  <button className="w-full h-full">Learn More</button>
                </Link>
            </motion.div>
            <motion.div 
              initial={{opacity: 0,  scale: 0.3}}
              animate={{opacity: 1,   scale: 1 }}
              transition={{delay: 2.5, duration: 1, type: "spring", bounce: 0.6}}
              viewport={{ once: true }} 
              className="  mt-[50px] md:mt-[30px] md:w-[70%] w-11/12 mx-auto ">
                <img src={helper.HeaderPeople} alt="people smiling"  className="w-full h-full object-cover"/>
            </motion.div>
        </header>
    </section>
  )
}

export default HomeHero