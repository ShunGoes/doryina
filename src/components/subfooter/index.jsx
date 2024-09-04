import React from 'react'
import helper from '../../helper'

const SubFooter = () => {
  return (
    <div className='bg-[#300D2B]  h-[400px] flex flex-col gap-[50px] md:gap-[30px] justify-center'>
        <h2 className='font-[700] text-center text-[30px] leading-[40px] md:mx-auto md:w-5/12 text-[#FFFFFF] px-[5px]'>Relocate with Doryina for a Seamless Experience</h2>
         <div className="w-8/12 mx-auto  h-[110px] relative md:flex justify-center md:w-4/12 md:h-[70px] ">
            <button className="btn-colored w-full md:w-[50%]">Explore our packages</button>
            <img src={helper.ArrowWhite} alt="arrow button" className="absolute bottom-0 -right-[40px]  md:-right-[100px]"/>
        </div>
    </div>
  )
}

export default SubFooter