import "./style.css";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="about-hero h-[400px] md:h-screen flex justify-center items-center w-full">
      <header className="backdrop-blur-sm md:backdrop-blur-0 md:w-6/12 py-[20px] px-[10px] w-full  md:h-1/3">
        <motion.h1
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.6 }}
          viewport={{ once: true }}
          className="heading-1 text-white w-11/12 mb-3 mx-auto"
        >
          Your Trusted Partner in Global Relocation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1, type: "spring", bounce: 0.6 }}
          viewport={{ once: true }}
          className="heading-paragraph text-[#fff]"
        >
          At Doryina, we specialize in turning your dreams of moving abroad into
          reality. With expert guidance, personalized service, and a commitment
          to your success, we’ve helped countless individuals and families start
          new chapters in countries around the world className
        </motion.p>
      </header>
    </section>
  );
};

export default AboutHero;
