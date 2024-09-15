import { section } from "framer-motion/client";
import React from "react";
import helper from "../../../helper";
import { motion } from "framer-motion";

const Tailored = () => {
  return (
    <section className="md:py-[50px]">
      <div className="w-[95%] py-[50px] h-full flex flex-col gap-y-[40px] md:gap-y-[50px]  mx-auto ">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", bounce: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-3">
            Tailored Packages for Your Unique Journey
          </h2>
          <p className="heading-2-paragragph text-center md:w-6/12 md:mx-auto">
            Guided by a commitment to excellence, our mission and vision drive
            us to deliver unmatched service and set new industry standards.
          </p>
        </motion.div>
        <div className="flex flex-col gap-y-[20px] md:flex-row md:w-11/12 md:mx-auto md:gap-x-[20px] ">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={helper.Tailor1} alt="flier" />
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
            <img src={helper.Tailor2} alt="flier" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 1, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={helper.Tailor3} alt="flier" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tailored;
