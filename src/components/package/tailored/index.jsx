import { section } from 'framer-motion/client'
import React from 'react'
import helper from '../../../helper'

const Tailored = () => {
  return (
    <section>
        <div className='w-[95%] py-[50px] h-full flex flex-col gap-y-[40px] md:gap-y-[100px]  mx-auto '>
            <div>
                <h2 className='heading-2 mb-3'>Tailored Packages for Your Unique Journey</h2>
                <p className='heading-2-paragragph text-center md:w-6/12 md:mx-auto'>Guided by a commitment to excellence, our mission and vision drive us to deliver unmatched service and set new industry standards.</p>
            </div>
            <div className='flex flex-col gap-y-[20px] md:flex-row md:w-11/12 md:mx-auto md:gap-x-[20px] '>
                <div>
                    <img src={helper.Tailor1} alt="flier" />
                </div>
                <div>
                    <img src={helper.Tailor2} alt="flier" />
                </div>
                <div>
                    <img src={helper.Tailor3} alt="flier" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Tailored