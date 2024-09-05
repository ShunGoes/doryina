import helper from "../../../helper";

const Mission = () => {
  return (
    <section className="">
      <div className="h-full  py-[60px] flex flex-col gap-[50px]">
        <div className="w-full">
          <h2 className="heading-2 text-center md:mb-3">Our Mission and Vision</h2>
          <p className="heading-2-paragragh w-11/12 mx-auto text-center md:w-[45%]">
            Guided by a commitment to excellence, our mission and vision drive
            us to deliver unmatched service and set new industry standards.
          </p>
        </div>

        <div className="md:w-11/12 md:mt-[40px] w-[90%] mx-auto flex flex-col md:flex-row-reverse md:gap-[200px]  gap-[30px]">

          <div className="md:w-1/2 h-[380px] md:flex justify-center items-center md:rounded-[20px">
            <img src={helper.Mission1} alt="our mission picture" className="w-full md:rounded-[20px] h-full object-cover"/>
          </div>

          <div className="md:w-1/2 md:flex flex-col justify-center md:gap-[30px]">
            <div>
              <h3 className="heading-3 mb-2"> Vision</h3>
              <p className="font-[400] text-[20px] md:text-[16px] leading-[30px] text-[#333333CC]">
                To be the leading provider of exceptional services, known for
                our unwavering commitment to excellence, integrity, and customer
                satisfaction.
              </p>
            </div>
            <div>
              <h3 className="heading-3 mb-2"> Mission</h3>
              <p className="font-[400] text-[20px] md:text-[16px] leading-[30px] text-[#333333CC]">
                Since our official licensing in 2020, Doryina Enterprise has
                been dedicated to delivering the highest quality in every aspect
                of our business. Whether in general contracting, procurement,
                consultation, or professional services, our mission is to exceed
                customer expectations through unparalleled service and a
                relentless pursuit of excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-[40px] mx-auto">
          <button className="btn-colored w-5/12 md:w-auto md:px-[20px] ">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
