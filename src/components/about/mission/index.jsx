import helper from "../../../helper";
import { motion } from "framer-motion";
const Mission = () => {
  return (
    <section className="">
      <div className="h-full  py-[60px] flex flex-col gap-[20px]">
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
            className="heading-2 text-center md:mb-3"
          >
            Our Mission and Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
              type: "spring",
              bounce: 0.6,
            }}
            viewport={{ once: true }}
            className="heading-2-paragragh w-11/12 mx-auto text-center md:w-[70%] lg:w-[45%]"
          >
            Guided by a commitment to excellence, our mission and vision drive
            us to deliver unmatched service and set new industry standards.
          </motion.p>
        </div>

        <div className="md:w-11/12 md:mt-[40px] w-[90%]  mx-auto flex flex-col md:flex-row-reverse lg:gap-[200px]  gap-[30px]">
          <div className="md:w-1/2 h-[250px] md:flex  justify-center items-center md:rounded-[20px">
            <img
              src={helper.Mission1}
              alt="our mission picture"
              className="w-full md:rounded-[20px] h-full object-cover"
            />
          </div>

          <div className=" md:w-1/2 flex flex-col justify-center  gap-[30px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1,
                duration: 1,
                type: "spring",
                bounce: 0.6,
              }}
              viewport={{ once: true }}
            >
              <h3 className="heading-3 mb-2"> Vision</h3>
              <p className="font-[400] text-[12px] md:text-[14px] md:leading-[25px] lg:leading-[30px] lg:text-[16px]  leading-[18px] text-[#333333CC]">
                To be the leading provider of exceptional services, known for
                our unwavering commitment to excellence, integrity, and customer
                satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.5,
                duration: 1,
                type: "spring",
                bounce: 0.6,
              }}
              viewport={{ once: true }}
            >
              <h3 className="heading-3 mb-2"> Mission</h3>
              <p className="font-[400] text-[12px] lg:text-[16px] md:text-[14px] leading-[18px] text-[#333333CC] md:leading-[25px] lg:leading-[30px]">
                Since our official licensing in 2020, Doryina Enterprise has
                been dedicated to delivering the highest quality in every aspect
                of our business. Whether in general contracting, procurement,
                consultation, or professional services, our mission is to exceed
                customer expectations through unparalleled service and a
                relentless pursuit of excellence.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-0 md:mt-[40px] mx-auto">
          <button className="btn-colored w-5/12 md:w-auto md:px-[20px] ">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
