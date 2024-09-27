import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "framer-motion";

const CustomAccordion = ({ question, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y:100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#300D2B] rounded-[6px] ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[14px]  h-[70px] font-[400] leading-[18px] text-white px-[10px] text-start md:text-[17px] lg:text-[22px] md:leading-[18px] md:px-[30px]">
            {question}
          </AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default CustomAccordion;
