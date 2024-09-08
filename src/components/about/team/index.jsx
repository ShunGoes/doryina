import React from "react";
import helper from "../../../helper";

const Team = () => {
  return (
    <section className="bg-[#F9F2F8CC]">
      <div className="h-full  py-[60px] flex flex-col gap-[50px]">
        <div className="w-full">
          <h2 className="heading-2 text-center md:mb-3">The Team</h2>
          <p className="heading-2-paragragh w-11/12 mx-auto text-center md:w-[45%]">
            Meet the dedicated professionals behind Doryina. Our team combines
            expertise, passion, and a shared commitment to delivering
            exceptional service
          </p>
        </div>

        <div className="md:w-11/12 md:mt-[40px] w-[90%] mx-auto flex flex-col md:flex-row md:gap-[200px]  gap-[30px]">
          <div className="md:w-1/2 h-[380px] md:flex justify-center items-center md:rounded-[20px">
            <img
              src={helper.Mission2}
              alt="our mission picture"
              className="w-full md:rounded-[20px] h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 md:flex flex-col justify-center md:gap-[30px]">
            <div>
              <h3 className="heading-3 mb-2"> Meet Our Leadership and Team</h3>
              <p className="font-[400] text-[20px] md:text-[16px] leading-[30px] text-[#333333CC]">
                Doryina Enterprise is spearheaded by our founder, Engr.
                Oyinbrakemi J. Nabena, affectionately known as “PJ,” along with
                a team of dedicated and highly skilled professionals. Together,
                we are committed to providing each client with exceptional and
                personalized experiences. From the very beginning, our primary
                focus has been on achieving complete customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
