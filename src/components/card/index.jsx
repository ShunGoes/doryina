import { motion } from "framer-motion"


const Card = ({image, title, text, id}) => {
  return (
    <motion.div
    initial={{opacity: 0,  scale: 0.3}}
    whileInView={{opacity: 1,   scale: 1 }}
    transition={{delay: 1 + id * 0.5, duration: 1, type: "spring", bounce: 0.6}}
    viewport={{ once: true }} 
      className='w-11/12  mx-auto flex flex-col my-[30px] rounded-[20px] p-3 bg-[#FEEEFB80] shadow shadow-[#96298514]'>
        <div>
            <img src={image} alt={title} />
        </div>
        <div className="py-3 px-2 mt-1">
            <h4 className="font-[500] text-[20.66px] md:text-[22px] leading-[20.66px] md:leading-[22px] text-[#333333CC] mb-2">{title} </h4>
            <p className="text-[#33333399] md:leading-[20px] leading-[18.78px] text-[16px] font-[400]">{text}</p>
        </div>
    </motion.div>
  )
}

export default Card