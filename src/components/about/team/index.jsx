import React from "react";
import helper from "../../../helper";
import { motion } from "framer-motion";


const Team = () => {
  return (
    <section className="bg-[#F9F2F8CC] overflow-hidden">
      <div className="h-full  py-[60px] flex flex-col gap-[50px]">
        <motion.div
           initial={{opacity: 0,  scale: 0.3}}
           whileInView={{opacity: 1,   scale: 1 }}
           transition={{delay: 1, duration: 1, type: "spring", bounce: 0.6}}
           viewport={{ once: true }}
          className="w-full">
          <h2 className="heading-2 text-center md:mb-3">The Team</h2>
          <p className="heading-2-paragragh w-11/12 mx-auto text-center md:w-[45%]">
            Meet the dedicated professionals behind Doryina. Our team combines
            expertise, passion, and a shared commitment to delivering
            exceptional service
          </p>
        </motion.div>

        <div className="md:w-11/12 md:mt-[40px] w-[90%] mx-auto flex flex-col md:flex-row md:gap-[200px]  gap-[30px]">
          <motion.div
           initial={{opacity: 0,  x: -100}}
           whileInView={{opacity: 1,   x: 0 }}
           transition={{delay: 1, duration: 1, type: "spring", bounce: 0.6}}
           viewport={{ once: true }}
          className="md:w-1/2 h-[380px] md:flex justify-center items-center md:rounded-[20px">
            <img
              src={helper.Mission2}
              alt="our mission picture"
              className="w-full md:rounded-[20px] h-full object-cover"
            />
          </motion.div>

          <div className="md:w-1/2 md:flex flex-col justify-center md:gap-[30px]">
            <motion.div
             initial={{opacity: 0,  x: 100}}
             whileInView={{opacity: 1,   x: 10}}
             transition={{delay: 1, duration: 1, type: "spring", bounce: 0.6}}
             viewport={{ once: true }}
            >
              <h3 className="heading-3 mb-2"> Meet Our Leadership and Team</h3>
              <p className="font-[400] text-[20px] md:text-[16px] leading-[30px] text-[#333333CC]">
                Doryina Enterprise is spearheaded by our founder, Engr.
                Oyinbrakemi J. Nabena, affectionately known as “PJ,” along with
                a team of dedicated and highly skilled professionals. Together,
                we are committed to providing each client with exceptional and
                personalized experiences. From the very beginning, our primary
                focus has been on achieving complete customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
