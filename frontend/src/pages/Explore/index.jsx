import Hero from "./Hero"
import SectionThree from "./SectionThree"
import SectionTwo from "./SectionTwo"

const Explore = () => {
  return (
    <>
      <Hero />
      <section>
        <SectionTwo />
      </section>
      <section className="container-secondary mx-auto my-8 sm:my-8 lg:my-16">
        <SectionThree />
      </section>
    </>
  )
}

export default Explore