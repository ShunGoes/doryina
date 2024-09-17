import AboutHero from "@/components/about/about-home"
import ContactHero from "@/components/contact-page/contact-hero"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import FAQ from "@/components/package/faq"
import GetInTouch from "@/components/package/touch"

const ContactPage = () => {
  return (
    <main className="relative">
    <Navbar />
    <ContactHero />
    <GetInTouch />
    <FAQ />
    {/* <Footer /> */}
</main>
  )
}

export default ContactPage