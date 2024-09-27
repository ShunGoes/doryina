import {motion} from "framer-motion"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import helper from "@/helper";
import { useNavigate } from "react-router-dom";


const Experience = () => {
  const carousel1 = [helper.Experience1, helper.Experience2, helper.Experience3]
  const carousel2 = [helper.Experience4, helper.Experience5, helper.Experience6]
  const carousel3 = [helper.Experience7, helper.Experience8, helper.Experience9]

  const navigate = useNavigate()
  
  const goToABout = () => {
    navigate("/about")
  }

  const settings = {
    dots: false,
    vertical: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };
  const settings2 = {
    dots: false,
    vertical: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const bacgroundImage = {
    backgroundImage: "linear-gradient(180deg, #F9F2F8, transparent)"
  }

  return (
    <div className="bg-[#F9F2F8] py-[20px] md:py-[60px]">
      <div className="md:flex md:w-11/12 md:mx-auto md:h-[80vh]">
        <div className="md:w-[50%]   md:flex flex-col justify-center">
          <motion.h2 
            initial={{opacity: 0,  scale: 0.3}}
            whileInView={{opacity: 1,   scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.6}}
            viewport={{ once: true }} 
            className="heading-2 md:text-start ">Our Experience </motion.h2>
          <motion.p
          initial={{opacity: 0,  scale: 0.3}}
          whileInView={{opacity: 1,   scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.6}}
          viewport={{ once: true }} 
          className="heading-2-paragragh md:text-start w-full px-[10px] mx-auto md:mx-0 md:w-[78%] ">
            since inception we have always prioritize the convenience of our
            clients by providing low prices and easy processes
          </motion.p>
          <motion.div 
            initial={{opacity: 0,  scale: 0.3}}
            whileInView={{opacity: 1,   scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.6}}
            viewport={{ once: true }} 
            className="grid grid-cols-3 place-items-center justify-between gap-[20px] w-10/12 md:w-[60%] md:mx-0 mx-auto   mt-[50px]">
            <div className="h-[90px] ">
              <h4 className="font-[700] text-[32px] leading-[35.2px] text-[#962985] mb-3">
                10
              </h4>
              <p className="font-[400] text-[16px] leading-[20px] text-[#28282BCC] ">
                Years Experience
              </p>
            </div>
            <div className="h-[90px] ">
              <h4 className="font-[700] text-[32px] leading-[35.2px] text-[#962985] mb-3">
                100+
              </h4>
              <p className="font-[400] text-[16px] leading-[20px] text-[#28282BCC] ">
                Destination Collaboration
              </p>
            </div>
            <div className="h-[90px] ">
              <h4 className="font-[700] text-[32px] leading-[35.2px] text-[#962985] mb-3">
                50+
              </h4>
              <p className="font-[400] text-[16px] leading-[20px] text-[#28282BCC] ">
                Happy Customer
              </p>
            </div>
          </motion.div>
          <div className="flex justify-center md:justify-start">
            <button onClick={goToABout} className="btn-colored mt-[40px] w-4/12 lg::w-[20%]">
              Get started{" "}
            </button>
          </div>
        </div>
        {/* parallax image */}
        <div className="mt-[60px] md:my-0 mb-[30px] rounded-[20px]  md:w-[50%] relative flex justify-between overflow-hidden" >
          <Slider {...settings}  className=" w-[30%] h-full ">
            {
              [...carousel1,...carousel1].map((picture,idx) => (
              <div key={idx}  className="w-[200px] h-[150px]  flex gap-[10px]" >
                <img src={picture} loading="lazy" alt="people happy" className="w-full h-full object-cover" />
              </div>

              ))
            }
          </Slider>
          <Slider {...settings2}  className=" w-[30%] h-full ">
            {
              [...carousel2,...carousel2].map((picture, idx) => (
              <div key={idx}  className="w-[200px] h-[150px]  flex gap-[10px]" >
                <img src={picture} loading="lazy" alt="people happy" className="w-full h-full object-cover" />
              </div>

              ))
            }
          </Slider>
          <Slider {...settings}  className=" w-[30%] h-full ">
            {
              [...carousel3,...carousel3].map((picture, idx) => (
              <div key={idx} className="w-[200px] h-[150px]  flex gap-[10px]" >
                <img src={picture} loading="lazy" alt="people happy" className="w-full h-full object-cover" />
              </div>

              ))
            }
          </Slider>
            <div style={bacgroundImage} className="w-full h-[70px]  absolute -top-0 z-2"/>
        </div>
      </div>
    </div>
  );
};

export default Experience;
