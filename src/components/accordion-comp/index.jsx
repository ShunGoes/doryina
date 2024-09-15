import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const CustomAccordion = ({ question, children }) => {
  return (
    <div className="bg-[#300D2B] rounded-[6px] ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[14px] h-[70px] font-[400] leading-[18px] text-white px-[10px] text-start md:text-[22px] md:leading-[18px] md:px-[30px]">
            {question}
          </AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
