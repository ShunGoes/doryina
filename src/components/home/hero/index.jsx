import "./styles.css"
import helper from "../../../helper"

const HomeHero = () => {
    
  return (
    <section className=" h-auto mb-[60px] md:mb-0 w-full header  ">
        <header className="header-gradient h-full flex flex-col  gap-[20px]">
            <div className="h-[40px] md:h-[120px]"/>
            <h1 className="heading-1 md:w-7/12 md:mx-auto px-[10px]">Seamless <span className="text-[#962985]">Pathways </span> to Study Work and <span className="text-[#962985]"> Live Abroad </span> </h1>
            <p className="heading-paragraph w-10/12 md:w-7/12 mx-auto">Unlock the easiest pathways to study, work, or settle abroad. Let us guide you through every step with trusted expertise and a seamless process. Start your journey today</p>
            <div className="flex justify-between w-10/12 md:w-3/12 mx-auto  gap-[10px] mt-5">
                <button className="btn-colored w-7/12">Book a consultation</button>
                <button className="btn-plain w-5/12">Learn More</button>
            </div>
            <div className="  mt-[50px] md:mt-[30px] md:w-[70%] w-11/12 mx-auto ">
                <img src={helper.HeaderPeople} alt="people smiling"  className="w-full h-full object-cover"/>
            </div>
        </header>
    </section>
  )
}

export default HomeHero