import GetInTouch from "../../components/UiComponents/GetInTouch";
import AboutSection from "../Home/AboutSection";
import Services from "../Home/Services";
import Hero from "./Hero";
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const About = () => {
  return (
    <>
      <Hero />
      <section className="mx-auto my-8 sm:my-8 lg:my-16">
        <SectionTwo />
      </section>
      <section>
        <Services/>
      </section>
      <section className="mx-auto my-8 sm:my-8 lg:my-16">
        <SectionFour />
      </section>
      <section className="container-secondary mx-auto">
        <AboutSection />
      </section>
      <section className="mx-auto mb-8 sm:mb-8 lg:mb-16">
        <SectionFive />
      </section>
      <section>
        <GetInTouch />
      </section>
    </>
  );
};

export default About;
