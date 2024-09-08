import { Testimoonials } from "../../../../component-data";
import helper from "../../../helper";
import TestimonialCard from "../../testimonial-card";
import { useLocation } from "react-router-dom";

import "./style.css";

const Testimonial = () => {
  const location = useLocation()
  let hideSection = false

  if(location.pathname === "/about"){
    hideSection = true
  }
  return (
    <div className="my-[60px]">
      <div className={` ${hideSection ? "h-auto": "md:h-[90vh]"} `}>
        <h2 className="heading-2 mb-5 md:mb-[40px] ">
          Trusted by Thousands for a New Beginning
        </h2>
        <div className={`  ${hideSection ? "hidden" : "md:flex md:h-[80%] items-center md:w-[90%] md:mx-auto gap-[60px]"} `}>
          <div className="w-11/12 md:h-full md:flex items-center  mx-auto md:mx-0 md:w-[50%]">
            <img
              src={helper.TestimonialImage}
              alt="images for testimonial"
              className="w-full md:object-cover"
            />
          </div>
          <div className="md:w-[50%]">
            <h2 className="heading-2 mt-[30px] md:text-start mb-3">
              Real Stories, Real Success
            </h2>
            <p className="heading-2-paragragh w-10/12 mx-auto md:text-start md:mx-0">
              At Doryina, every successful relocation is a testament to our
              commitment and expertise. Hear from our clients who have turned
              their dreams into reality with our seamless support. These stories
              showcase the transformative journeys we’ve made possible.
            </p>
          </div>
        </div>
      </div>

      <div className="pl-[20px]  mt-[40px] flex gap-[20px] md:gap-[30px] py-[20px] overflow-x-auto  scroll-smooth testimonial">
        {Testimoonials.map((testimony) => (
          <TestimonialCard key={testimony.id} {...testimony} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
