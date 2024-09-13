import "./style.css"

const PackageHero = () => {
  return (
    <section className="package-hero h-[400px] md:h-screen flex justify-center items-center w-full">
        <header className="backdrop-blur-sm md:backdrop-blur-0 md:w-7/12 py-[20px] px-[10px] w-full  md:h-1/3">
            <h1 className="heading-1 text-white w-11/12 mb-3 mx-auto">Choose the Perfect Package for Your Journey</h1>
            <p className="heading-paragraph text-[#fff] md:px-[20px]">Whether you’re looking for comprehensive support or just the essentials, Doryina offers a range of tailored packages to suit your unique relocation needs. Find the right fit and start your journey with confidence.</p>
        </header>
    </section>
  )
}

export default PackageHero