import React from "react";
import helper from "../../../helper";

const Experience = () => {
  return (
    <div className="bg-[#F9F2F8] py-[60px]">
      <div className="md:flex md:px-[60px] ">
        <div className="md:w-[70%] border-4 border-red-500">
          <h2 className="heading-2 md:text-start mb-3">Our Experience </h2>
          <p className="heading-2-paragragh md:text-start w-11/12 mx-auto md:mx-0 md:w-[65%] md:pr-7">
            since inception we have always prioritize the convenience of our
            clients by providing low prices and easy processes
          </p>
          <div className="grid grid-cols-3 place-items-center justify-between gap-[20px] w-10/12 md:w-[50%] md:mx-0 mx-auto border-4 border-red-500  mt-[50px]">
            <div className="h-[90px] border-4 border-red-500">
              <h4 className="font-[700] text-[32px] leading-[35.2px] text-[#962985] mb-3">
                10
              </h4>
              <p className="font-[400] text-[16px] leading-[20px] text-[#28282BCC] ">
                Years Experience
              </p>
            </div>
            <div className="h-[90px] border-4 border-red-500">
              <h4 className="font-[700] text-[32px] leading-[35.2px] text-[#962985] mb-3">
                100+
              </h4>
              <p className="font-[400] text-[16px] leading-[20px] text-[#28282BCC] ">
                Destination Collaboration
              </p>
            </div>
            <div className="h-[90px] border-4 border-red-500">
              <h4 className="font-[700] text-[32px] leading-[35.2px] text-[#962985] mb-3">
                50+
              </h4>
              <p className="font-[400] text-[16px] leading-[20px] text-[#28282BCC] ">
                Happy Customer
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <button className="btn-colored mt-[40px] w-4/12 md:w-2/12">
              Get started{" "}
            </button>
          </div>
        </div>
        {/* parallax image */}
        <div className="mt-[60px] md:my-0 mb-[30px] flex justify-center  ">
          <img src={helper.ParallaxGirl} alt="girl smiling" className=""/>
        </div>
      </div>
    </div>
  );
};

export default Experience;
