import CustomAccordion from "@/components/accordion-comp";
import helper from "../../../helper";
import "./style.css";
import { useState } from "react";

const GetInTouch = () => {
  const [formDAta, setFormData] = useState({
    travelOptions: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const arrOfRadioElement = [
    {
      label: "inquiry",
      value: "General Inquiry",
    },
    {
      label: "assistance",
      value: "Relocation Assistance",
    },
    {
      label: "abroad",
      value: "Study Abroad Packages",
    },
    {
      label: "tour",
      value: "Tour Packages",
    },
    {
      label: "travel",
      value: "Medical Travel Packages",
    },
    {
      label: "visa",
      value: "Visa Application Support",
    },
  ];

  

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
                value={formDAta.name}
                onChange={(e) => setFormData({...formDAta, name: e.target.value})}
                className="h-full pl-[70px] bg-[#300D2B33] focus:bg-[#300D2B33] w-full outline-none placeholder-[#28282BCC] placehoder-[20px]  "
              />
              <div className="absolute top-0 h-full left-[30px] flex items-center ">
                <img src={helper.InputProfile} alt="" />
              </div>
            </div>
            <div className="h-[50px] relative rounded-[6px] overflow-hidden w-full">
              <input
                type="text"
                name="email"
                value={formDAta.email}
                onChange={(e) => setFormData({...formDAta, email: e.target.value})}
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
                value={formDAta.phone}
                onChange={(e) => setFormData({...formDAta, phone: e.target.value})}
                className="h-full pl-[70px] bg-[#300D2B33] focus:bg-[#300D2B33] w-full outline-none placeholder-[#28282BCC] placehoder-[20px]  "
              />
              <div className="absolute top-0 h-full left-[30px] flex items-center ">
                <img src={helper.InputPhone} alt="" />
              </div>
            </div>
          </div>
          <CustomAccordion question="Select a topic">
            <div className="pl-[20px] md:pl-[30px]">
              {arrOfRadioElement.map((option, idx) => (
                <div key={idx} className="flex items-center gap-[7px] my-2">
                  <input
                    type="radio"
                    id={option.label}
                    checked={formDAta.travelOptions === option.value}
                    value={option.value}
                    name="travelOptions"
                    onChange={(e) => setFormData({...formDAta, travelOptions: e.target.value})}
                    className=""
                  />
                  <label
                    htmlFor={option.label}
                    className="md:text-[20px] font-600 text-white md:leading-[18px] "
                  >
                    {option.value}
                  </label>
                </div>
              ))}
            </div>
          </CustomAccordion>
          <textarea
            value={formDAta.message}
            onChange={(e) => setFormData({...formDAta, message: e.target.value})}
            className="w-full h-[184px] p-4  rounded-[6px] bg-[#300D2B33] text-[20px] text-[#28282BCC] leading-[25.2px] focus:outline-none focus:border-blue-500 placeholder-[#28282BCC] placehoder-[20px] mb-[20px] mt-[10px]"
            placeholder="Type a message"
          ></textarea>
          <button className="btn-colored px-[25px] md:px-[40px]">
            Send a message
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
