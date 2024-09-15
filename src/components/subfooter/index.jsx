import React from 'react'
import helper from '../../helper'
import { motion } from 'framer-motion'


const SubFooter = () => {
  return (
    <motion.div
    
      className='bg-[#300D2B]  h-[400px] flex flex-col gap-[50px] md:gap-[30px] justify-center'>
        <motion.h2
        initial={{opacity: 0,  scale:0}}
        whileInView={{opacity: 1,   scale: 1 }}
        transition={{delay: 1, duration: 1, type: "spring", bounce: 0.6}}
        viewport={{ once: true }} 
        className='font-[700] text-center text-[30px] leading-[40px] md:mx-auto md:w-4/12 text-[#FFFFFF] px-[5px]'>Relocate with Doryina for a Seamless Experience</motion.h2>
         <motion.div
         initial={{opacity: 0,  scale:0}}
         whileInView={{opacity: 1,   scale: 1 }}
         transition={{delay: 2, duration: 1, type: "spring", bounce: 0.6}}
         viewport={{ once: true }} 
         className="w-8/12 mx-auto  h-[110px] relative md:flex justify-center md:w-4/12 md:h-[70px] ">
            <button className="btn-colored w-full md:w-[50%]">Explore our packages</button>
            <img src={helper.ArrowWhite} alt="arrow button" className="absolute bottom-0 -right-[40px]  md:-right-[100px]"/>
        </motion.div>
    </motion.div>
  )
}

export default SubFooter