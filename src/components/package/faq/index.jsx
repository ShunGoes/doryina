import CustomAccordion from "@/components/accordion-comp";

const FAQ = () => {
  const faq = [
    {
      question: "What services does Doryina offer?",
      answer: "Doryina specializes in helping individuals relocate abroad through study, tour, and medical assistance packages, including visa processing, flight booking, and accommodation sourcing.",
    },
    {
      question: "How long has Doryina been in business?",
      answer: "Doryina has been providing expert relocation services since 2020, helping numerous clients transition smoothly to their new destinations.",
    },
    {
      question: "Which countries does Doryina operate in?",
      answer: "We assist clients in relocating to various countries, including the US, UK, Canada, and many more, based on the type of service package selected.",
    },
    {
      question: "How can I start my relocation process with Doryina?",
      answer: "You can start by selecting one of our tailored packages and contacting our team for a personalized consultation.",
    },
    {
      question: "Can I get personalized assistance?",
      answer: "Absolutely! Our team offers personalized guidance and support to ensure a smooth and successful relocation experience.",
    },
  ];
  return (
    <section className="md:bg-[#FAF4F9]">
      <div className="w-[95%] py-[50px] h-full flex flex-col gap-y-[40px] md:gap-y-[50px]  mx-auto  ">
        <div>
          <h2 className="heading-2 mb-3">FAQ</h2>
          <p className="heading-2-paragragph text-center md:w-6/12 md:mx-auto">
            Got questions about our packages? We’ve got answers. Explore our
            most commonly asked questions below.
          </p>
        </div>

        <div className="flex flex-col gap-[10px]">
          {faq.map((item) => (
            <CustomAccordion key={item.question} question={item.question} >
              <p className="md:text-[20px] font-[600] md:px-[30px] leading-[30px] text-[#FFFFFF]  ">{item.answer}</p>
            </CustomAccordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
