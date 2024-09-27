import { Testimoonials } from "../../../../component-data";
import helper from "../../../helper";
import TestimonialCard from "../../testimonial-card";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "./style.css";
import Slider from "react-slick/lib/slider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const location = useLocation();
  let hideSection = false;

  if (location.pathname === "/about") {
    hideSection = true;
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-[60px] md:my-0   overflow-hidden ">
      <div className={` ${hideSection ? "h-auto" : " md:h-[70vh] lg:h-[90vh]"} `}>
        <motion.h2
           initial={{opacity: 0,  scale: 0.5}}
           whileInView={{opacity: 1,   scale: 1 }}
           transition={{delay: 2, duration: 1, type: "spring", bounce: 0.6}}
           viewport={{ once: true }} 
          className="heading-2 w-9/12 mx-auto md:mx-0 md:w-auto mb-5 md:mb-[10px] lg:mb-[40px] ">
          Trusted by Thousands for a New Beginning
        </motion.h2>
        <div
          className={`  ${
            hideSection
              ? "hidden"
              : "md:flex md:h-auto lg:h-[80%]  items-center md:w-[90%]   mt-2 md:mt-0 md:mx-auto gap-[60px]"
          } `}
        >
          <motion.div
            initial={{opacity: 0,  x: -100}}
            whileInView={{opacity: 1,   x: 0 }}
            transition={{delay: 1, duration: 1, type: "spring", bounce: 0.6}}
            viewport={{ once: true }} 
            className="w-11/12 md:h-full md:flex items-center  mx-auto md:mx-0 md:w-[50%]">
            <img
              src={helper.TestimonialImage}
              alt="images for testimonial"
              className="w-full md:object-cover"
            />
          </motion.div>
          <motion.div
             initial={{opacity: 0,  x: 100}}
             whileInView={{opacity: 1,   x: 0 }}
             transition={{delay: 1.3, duration: 1, type: "spring", bounce: 0.6}}
             viewport={{ once: true }} 
            className="md:w-[50%]">
            <h2 className="heading-2 mt-[30px] md:text-start mb-3 ">
              Real Stories, Real Success
            </h2>
            <p className="heading-2-paragragh w-11/12 md:w-10/12 mx-auto md:text-start md:mx-0">
              At Doryina, every successful relocation is a testament to our
              commitment and expertise. Hear from our clients who have turned
              their dreams into reality with our seamless support. These stories
              showcase the transformative journeys we’ve made possible.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="h-[70vh] md:h-auto  lg:h-[100vh]  ">
        <Slider
          {...settings}
          className="pl-[20px]  md:h-[120vh] lg:h-auto  mt-[40px] md:mt-0 lg:mt-[40px] w-full "
        >
          {Testimoonials.map((testimony) => (
            <TestimonialCard key={testimony.id} {...testimony} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
