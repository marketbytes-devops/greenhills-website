import GetInTouch from "../../components/UiComponents/GetInTouch"
import BlogPost from "./BlogPost"
import Hero from "./Hero"

const Blog = () => {
  return (
    <>
      <Hero />
      <section className="bg-secondaryLightBlack my-8 sm:my-8 lg:my-16">
        <BlogPost/>
      </section>
      <section>
        <GetInTouch />
      </section>
    </>
  )
}

export default Blog