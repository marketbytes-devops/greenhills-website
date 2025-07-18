import Hero from "./Hero";
import Services from "./Services";
import AboutSection from "./AboutSection";
import RatingCard from "./RatingCard";
import Rooms from "./Rooms";
import ExploreSection from "./ExploreSection";
import EatSection from "./EatSection";
import GatherSection from "./GatherSection";
import Team from "./Team";
import Blog from "./Blog";
import GetInTouch from "../../components/UiComponents/GetInTouch";
import BookingForm from "../../components/UiComponents/Forms/BookingForm";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="z-40 relative -top-0 md:-top-32 mt-8 md:mt-0">
        <BookingForm />
      </div>
      <section className="-mt-0 md:-mt-24 mb-4 md:mb-10">
        <Services />
      </section>
      <section className="container-secondary mx-auto">
        <AboutSection />
      </section>
      <section className="mx-auto">
        <RatingCard />
      </section>
      <section className="container-secondary mx-auto my-8 sm:my-8 lg:my-16">
        <Rooms />
      </section>
      <section className="mx-auto">
        <ExploreSection />
      </section>
      <section className="container-primary mx-auto my-8 sm:my-8 lg:my-16">
        <EatSection />
      </section>
      <section className="bg-[#181818] py-8 sm:py-8 lg:py-16">
        <GatherSection />
      </section>
      <section className="bg-gray-100 py-8 sm:py-8 lg:py-16">
        <Team />
      </section>
      <section className="container-secondary mx-auto my-8 sm:my-8 lg:my-16">
        <Blog />
      </section>
      <section className="mx-auto">
        <GetInTouch />
      </section>
    </>
  )
}

export default Home