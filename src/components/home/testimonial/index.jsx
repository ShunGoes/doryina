import { Testimoonials } from "../../../../component-data"
import helper from "../../../helper"
import TestimonialCard from "../../testimonial-card"

import "./style.css"




const Testimonial = () => {
  return (
    <div className="my-[60px]">
        <h2 className="heading-2 mb-5 md:mb-[40px]">Trusted by Thousands for a New Beginning</h2>
        <div className="md:flex md:w-10/12 md:mx-auto gap-[60px] items-center">
          <div className="w-11/12 mx-auto md:mx-0 md:w-1/2">
              <img src={helper.TestimonialImage} alt="images for testimonial" className="w-full md:object-cover"/>
          </div>
          <div className="md:w-1/2" >
            <h2 className="heading-2 mt-[30px] md:text-start md:mb-3">Real Stories, Real Success</h2>
            <p className="heading-2-paragragh w-10/12 mx-auto md:text-start md:mx-0">At Doryina, every successful relocation is a testament to our commitment and expertise. Hear from our clients who have turned their dreams into reality with our seamless support. These stories showcase the transformative journeys we’ve made possible.</p>
          </div>

        </div>

        <div
         
          className="pl-[20px]  mt-[40px] flex gap-[20px] py-[20px] overflow-x-auto  scroll-smooth testimonial">
          {
            Testimoonials.map(testimony => (
                <TestimonialCard key={testimony.id} {...testimony} />
            ))
          }
        </div>
    </div>
  )
}

export default Testimonial