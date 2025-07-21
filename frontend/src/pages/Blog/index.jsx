import { Helmet } from 'react-helmet-async';
import GetInTouch from "../../components/UiComponents/GetInTouch";
import BlogPost from "./BlogPost";
import Hero from "./Hero";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog Explore Valparai and Western Ghats | Green Hills</title>
        <meta name="description" content="Discover travel tips, wildlife insights, local attractions and scenic must-visits in Valparai through the Hotel Green Hills blog." />
        <meta name="keywords" content="Best Blogs from Valparai" />
        <link rel="canonical" href="https://www.hotelgreenhills.in/blogs" />
      </Helmet>
      <Hero />
      <section className="bg-secondaryLightBlack my-8 sm:my-8 lg:my-16">
        <BlogPost/>
      </section>
      <section>
        <GetInTouch />
      </section>
    </>
  );
};

export default Blog;