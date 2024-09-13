import CustomAccordion from "@/components/accordion-comp";

const FAQ = () => {
  const faq = [
    {
      question: "What services does Doryina offer?",
      answer: "",
    },
    {
      question: "How long has Doryina been in business?",
      answer: "",
    },
    {
      question: "Which countries does Doryina operate in?",
      answer: "",
    },
    {
      question: "How can I start my relocation process with Doryina?",
      answer: "",
    },
    {
      question: "Can I get personalized assistance?",
      answer: "",
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
            <CustomAccordion key={item.question} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
