import Footer from "@/components/footer"
import AboutHero from "../../components/about/about-home"
import Mission from "../../components/about/mission"
import Team from "../../components/about/team"
import Testimonial from "../../components/home/testimonial"
import Navbar from "../../components/navbar"
import SubFooter from "../../components/subfooter"

const AboutPage = () => {
  return (
    <main className="relative">
        <Navbar />
        <AboutHero />
        <Mission />
        <Team />
        <Testimonial />
        <SubFooter />
        {/* <Footer /> */}
    </main>
  )
}

export default AboutPage