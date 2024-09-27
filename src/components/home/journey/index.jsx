import { JourneyData } from "../../../../component-data";
import helper from "../../../helper";
import Card from "../../card";

import { motion } from "framer-motion";

const Journey = () => {
  return (
    <div className="">
      <motion.h2
        initial={{opacity: 0,  scale: 0.3}}
        whileInView={{opacity: 1,   scale: 1 }}
        transition={{delay: 1, duration: 1, type: "spring", bounce: 0.6}}
        viewport={{ once: true }} 
        className="heading-2 mb-1 md:mb-3 px-[30px] border-4">
        Your Journey to Relocating Made Simple
      </motion.h2>
      <motion.p
        initial={{opacity: 0,  scale: 0.3}}
        whileInView={{opacity: 1,   scale: 1 }}
        transition={{delay: 1.5, duration: 1, type: "spring", bounce: 0.6}}
        viewport={{ once: true }} 
        className="heading-2-paragragh md:w-9/12 lg:w-5/12 w-11/12 md:px-7 mx-auto ">
        We’ve streamlined the entire process so you can focus on what matters
        most achieving your goals abroad
      </motion.p>

      <div className="mt-[3rem] md:mt-2 md:flex  justify-center gap-[20px]  lg:gap-[40px] md:w-11/12 md:mx-auto">
        {JourneyData.map((journey) => (
          <Card key={journey.id} {...journey} />
        ))}
      </div>
        <div className="w-8/12 md:w-4/12 lg:w-2/12 mx-auto my-[40px] md:my-[30px] lg:my[50px] h-[110px] md:h-[70px] relative">
            <button className="btn-colored w-full ">Explore our packages</button>
            <img src={helper.Arrow} alt="arrow button" className="absolute bottom-[10px] md:bottom-0 -right-[40px] md:-right-[170px]"/>
        </div>
    </div>
  );
};

export default Journey;
