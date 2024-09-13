import helper from "../../helper";

const Footer = () => {
  return (
    <footer className="py-[60px] border-t-[5px] border-[#962985] md:w-[80%] md:mx-auto md:border-t-[2px] md:mt-[80px]">
      <section className="w-11/12 mx-auto md:w-full">
        <div className="flex gap-[60px] flex-col md:flex-row md:gap-[20px]">
          <div className=" flex justify-center md:w-[40%] md:items-center">
            <img src={helper.Dorinya} alt="dorinya logo"  className="md:h-[73.5px] "/>
          </div>
          <div className="flex flex-col gap-[100px]  md:w-full md:gap-[40px]">
            <div className="w-10/12 mx-auto flex flex-col gap-[60px] md:gap-[10px] ">
              <div className="flex gap-[20px] md:w-full ">
                <div className="">
                  <img
                    src={helper.FooterLocation}
                    alt="location icon"
                    className="size-[30px] md:size-[20px]"
                  />
                </div>
                <p className="md:text-[14px] font-[400] md:leading-[22px] text-[#300D2B] ">
                  No.27, Rumuagholu Road, Romokoro, Portharcourt. Rivers State.
                </p>
              </div>
              <div className="md:flex justify-between">
                <div className="flex gap-[20px] md:w-[50%]">
                  <div className="">
                    <img src={helper.FooterPhone} alt="phone icon" />
                  </div>
                  <p className="md:text-[14px] font-[400] md:leading-[22px] text-[#300D2B]">(234) 8081749781</p>
                </div>
                <div className="flex gap-[20px] md:w-[50%] ">
                  <div className=" ">
                    <img src={helper.FooterMessage} alt="message icon"  />
                  </div>
                  <p className="md:text-[14px] font-[400] md:leading-[22px] text-[#300D2B]">hello@doryina.com.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-11/12 mx-auto md:w-10/12 md:gap-[25px] md:justify-start">
              <span className="text-[14px] font-[500] leading-[20px] text-[#300D2B]">Social Media</span>
              <img src={helper.FooterFb} alt="facebook icon" />
              <img src={helper.FooterX} alt="twitter icon" />
              <img src={helper.FooterIg} alt="Instagram icon" />
              <img src={helper.FooterLinkedIn} alt="LinkedIn icon" />
              <img src={helper.FooterGoogle} alt="Google icon" />
            </div>
          </div>
        </div>
        <div className="mt-[100px] flex flex-col md:flex-row md:justify-between gap-[30px] w-9/12 mx-auto">
          <div className="flex justify-between gap-[40px]">
            <span className="text-[14px] font-[500] leading-[18.23px] text-[#300D2B]">
              ABOUT US
            </span>
            <span className="text-[14px] font-[500] leading-[18.23px] text-[#300D2B]">
              CONTACT US
            </span>
            <span className="text-[14px] font-[500] leading-[18.23px] text-[#300D2B]">
              HELP
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-[14px] font-[400] leading-[18.31px] text-[#300D2B]">
              Copyright © 2024 • Doryina.
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
