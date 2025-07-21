import { Helmet } from 'react-helmet-async';
import Hero from "./Hero";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Explore = () => {
  return (
    <>
      <Helmet>
        <title>Explore Valparai Attractions and Activities | Green Hills</title>
        <meta name="description" content="Explore Valparai near Hotel Green Hills tea estates, Monkey Falls, Aliyar Dam, wildlife sanctuaries and scenic trails." />
        <meta name="keywords" content="explore around Valparai Hills" />
        <link rel="canonical" href="https://www.hotelgreenhills.in/explore" />
      </Helmet>
      <Hero />
      <section>
        <SectionTwo />
      </section>
      <section className="container-secondary mx-auto my-8 sm:my-8 lg:my-16">
        <SectionThree />
      </section>
    </>
  );
};

export default Explore;