import GalleryImages from "./GalleryImages"
import Hero from "./Hero"

const Gallery = () => {
  return (
    <>
    <Hero/>
    <section className="container-secondary mx-auto my-8 sm:my-8 lg:my-16">
      <GalleryImages/>
    </section>
    </>
  )
}

export default Gallery