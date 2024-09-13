import CustomAccordion from "@/components/accordion-comp";
import helper from "../../../helper";
import "./style.css";

const GetInTouch = () => {
  return (
    <section className="md:bg-[#FAF4F9] md:mb-[30px]">
      <div className="w-[95%] py-[50px] h-full flex flex-col gap-y-[40px] md:gap-y-[50px]  mx-auto  ">
        <div>
          <h2 className="heading-2 mb-3">Get in Touch with Us</h2>
          <p className="heading-2-paragragph text-center md:w-6/12 md:mx-auto">
            Have questions or need more information? Fill out the form below,
            and our team will get back to you promptly.
          </p>
        </div>
        <div>
          <div className="input-container flex flex-col md:flex-row gap-[15px] mb-[20px] w-full border-4">
            <div className="h-[50px] relative rounded-[6px] overflow-hidden  w-full">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="h-full pl-[70px] bg-[#300D2B33] focus:bg-[#300D2B33] w-full outline-none placeholder-[#28282BCC] placehoder-[20px]  "
              />
              <div className="absolute top-0 h-full left-[30px] flex items-center ">
                <img src={helper.InputProfile} alt="" />
              </div>
            </div>
            <div className="h-[50px] relative rounded-[6px] overflow-hidden w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Email Address"
                className="h-full pl-[70px] bg-[#300D2B33] focus:bg-[#300D2B33] w-full outline-none placeholder-[#28282BCC] placehoder-[20px]  "
              />
              <div className="absolute top-0 h-full left-[30px] flex items-center ">
                <img src={helper.InputMessage} alt="" />
              </div>
            </div>
            <div className="h-[50px] relative rounded-[6px] overflow-hidden w-full">
              <input
                type="text"
                name="name"
                placeholder="Phone Number"
                className="h-full pl-[70px] bg-[#300D2B33] focus:bg-[#300D2B33] w-full outline-none placeholder-[#28282BCC] placehoder-[20px]  "
              />
              <div className="absolute top-0 h-full left-[30px] flex items-center ">
                <img src={helper.InputPhone} alt="" />
              </div>
            </div>
          </div>
          <CustomAccordion question="Select a topic" />
          <textarea
            className="w-full h-[184px] p-4  rounded-[6px] bg-[#300D2B33] text-[20px] text-[#28282BCC] leading-[25.2px] focus:outline-none focus:border-blue-500 placeholder-[#28282BCC] placehoder-[20px] mb-[20px]"
            placeholder="Type a message"
          ></textarea>
          <button className="btn-colored px-[25px] md:px-[40px]">Send a message</button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
