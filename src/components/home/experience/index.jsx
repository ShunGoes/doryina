import useMeasure from "react-use-measure";
import {animate, motion, useMotionValue} from "framer-motion"
import { useEffect } from "react";




const Experience = () => {
  const [ref, {height}] = useMeasure()
  
  const yTranslation = useMotionValue(0)

  useEffect(() => {
    const finalPosition = -height
  let controls = animate(yTranslation, [0, finalPosition], {
    ease: "linear",
    duration: 5,
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 0
  })
    
  return controls.stop
  }, [yTranslation, height])
  

  return (
    <div className="bg-[#F9F2F8] py-[60px]">
      <div className="md:flex md:w-11/12 md:mx-auto  md:h-[80vh]">
        <div className="md:w-[50%]  md:flex flex-col justify-center">
          <motion.h2 
            initial={{opacity: 0,  scale: 0.3}}
            whileInView={{opacity: 1,   scale: 1 }}
            transition={{delay: 4, duration: 1, type: "spring", bounce: 0.6}}
            viewport={{ once: true }} 
            className="heading-2 md:text-start mb-3">Our Experience </motion.h2>
          <motion.p
          initial={{opacity: 0,  scale: 0.3}}
          whileInView={{opacity: 1,   scale: 1 }}
          transition={{delay: 3, duration: 1, type: "spring", bounce: 0.6}}
          viewport={{ once: true }} 
          className="heading-2-paragragh md:text-start w-11/12 mx-auto md:mx-0 md:w-[78%] ">
            since inception we have always prioritize the convenience of our
            clients by providing low prices and easy processes
          </motion.p>
          <motion.div 
            initial={{opacity: 0,  scale: 0.3}}
            whileInView={{opacity: 1,   scale: 1 }}
            transition={{delay: 2, duration: 1, type: "spring", bounce: 0.6}}
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
            <button className="btn-colored mt-[40px] w-4/12 md:w-[20%]">
              Get started{" "}
            </button>
          </div>
        </div>
        {/* parallax image */}
        <div className="mt-[60px] md:my-0 mb-[30px]  md:w-[50%] flex justify-center relative border-4 border-red-500 overflow-hidden" >
          <motion.div ref={ref} style={{y:yTranslation}}>
              <div  className="size-[200px] border-4 border-blue-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-blue-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-blue-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-blue-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-blue-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-blue-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-blue-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
              <div  className="size-[200px] border-4 border-red-500 flex gap-[10px]"/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
