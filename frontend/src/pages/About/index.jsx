import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>About Hotel Green Hills Valparai | Best Hospitality</title>
        <meta name="description" content="Learn about Hotel Green Hills Valparai, a family-run best hotel in Valparai known for local hospitality, scenic views, and heritage in Valparai." />
        <meta name="keywords" content="about the best hotel in Valparai" />
        <link rel="canonical" href="https://www.hotelgreenhills.in/about" />
      </Helmet>
      <Hero />
      <section className="mx-auto my-8 sm:my-8 lg:my-16">
        <SectionTwo />
      </section>
      <section className="-mt-8 -mb-2 sm:-mt-4 sm:-mb-0">
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