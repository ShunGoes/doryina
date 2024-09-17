import { Button } from "@/components/ui/button";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import PackageHero from "../../components/package/package-hero";
import Tailored from "../../components/package/tailored";
import GetInTouch from "../../components/package/touch";
import FAQ from "@/components/package/faq";

const Packages = () => {
  return (
    <main className="relative">
      <Navbar />
      <PackageHero />
      <Tailored />
      <GetInTouch />
      <FAQ />
      {/* <Footer /> */}
    </main>
  );
};

export default Packages;
