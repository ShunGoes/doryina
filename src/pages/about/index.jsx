import AboutHero from "../../components/about/about-home"
import Mission from "../../components/about/mission"
import Navbar from "../../components/navbar"

const AboutPage = () => {
  return (
    <main className="relative">
        <Navbar bgColor={"white"}/>
        <AboutHero />
        <Mission />
    </main>
  )
}

export default AboutPage