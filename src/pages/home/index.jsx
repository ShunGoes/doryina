import Experience from "../../components/home/experience";
import HomeHero from "../../components/home/hero";
import Journey from "../../components/home/journey";
import Testimonial from "../../components/home/testimonial";
import Navbar from "../../components/navbar";
import SubFooter from "../../components/subfooter";
import "./style.css"

const HomePage = () => {
  return (
    <main className="relative">
      <div className="header md:mb-[70px]">
        <div className="header-gradient">
        <Navbar />
        <HomeHero />

        </div>
      </div>
      <Journey />
      <Experience />
      <Testimonial />
      <SubFooter />
    </main>
  );
};

export default HomePage;
