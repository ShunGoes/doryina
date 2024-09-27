import "./style.css"
import { motion } from "framer-motion"


const PackageHero = () => {
  return (
    <section className="package-hero h-[400px] md:h-screen flex justify-center items-center w-full">
        <header className=" md:backdrop-blur-0 lg:w-7/12 md:w-11/12  py-[20px] px-[10px] w-full  md:h-1/3">
            <motion.h1
             initial={{opacity: 0,  scale: 0.3}}
             whileInView={{opacity: 1,   scale: 1 }}
             transition={{delay: 1, duration: 1, type: "spring", bounce: 0.6}}
             viewport={{ once: true }}
            className="heading-1 text-white w-11/12 mb-3 mx-auto">Choose the Perfect Package for Your Journey</motion.h1>
            <motion.p
             initial={{opacity: 0,  scale: 0.3}}
             whileInView={{opacity: 1,   scale: 1 }}
             transition={{delay: 1.5, duration: 1, type: "spring", bounce: 0.6}}
             viewport={{ once: true }}
            className="heading-paragraph text-[#fff] md:px-[20px]">Whether you’re looking for comprehensive support or just the essentials, Doryina offers a range of tailored packages to suit your unique relocation needs. Find the right fit and start your journey with confidence.</motion.p>
        </header>
    </section>
  )
}

export default PackageHero