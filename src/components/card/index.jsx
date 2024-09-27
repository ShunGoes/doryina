import { motion } from "framer-motion"


const Card = ({image, title, text, id}) => {
  return (
    <motion.div
    initial={{opacity: 0,  scale: 0.3}}
    whileInView={{opacity: 1,   scale: 1 }}
    transition={{delay:  id * 0.5, duration: 1, type: "spring", bounce: 0.6}}
    viewport={{ once: true }} 
      className='w-11/12  mx-auto flex flex-col my-[30px] rounded-[20px]  bg-[#FEEEFB80] shadow shadow-[#96298514] overflow-hidden'>
        <div className="w-full">
            <img src={image} alt={title} className="w-full " />
        </div>
        <div className="py-3 px-3 mt-1">
            <h4 className="font-[700] text-[20.66px] md:text-[17px] lg:text-[20px] leading-[20.66px] md:leading-[22px] text-[#333333CC] mb-2">{title} </h4>
            <p className="text-[#33333399]  leading-[20px] text-[16px] md:text-[14px] font-[700]">{text}</p>
        </div>
    </motion.div>
  )
}

export default Card