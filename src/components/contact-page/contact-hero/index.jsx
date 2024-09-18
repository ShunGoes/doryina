import React from 'react'
import { motion } from 'framer-motion'
import "./style.css"

const ContactHero = () => {
  return (
    <section  className="contact-hero h-[400px] md:h-screen flex justify-center items-center w-full">
    <header className=" md:backdrop-blur-0 md:w-6/12 py-[20px] px-[10px] w-full  md:h-1/3">
      <motion.h1
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.6 }}
        viewport={{ once: true }}
        className="heading-1 text-white w-11/12 mb-3 mx-auto"
      >
        Get in Touch with Doryina
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1, type: "spring", bounce: 0.6 }}
        viewport={{ once: true }}
        className="heading-paragraph text-[#fff]"
      >
        We’re here to help with all your relocation needs. Reach out to us for personalized assistance and expert guidance.
      </motion.p>
    </header>
  </section>
  )
}

export default ContactHero