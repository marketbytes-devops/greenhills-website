import { Helmet } from 'react-helmet-async';
import GalleryImages from "./GalleryImages";
import Hero from "./Hero";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery Hotel Green Hills Valparai | Scenic Photos</title>
        <meta name="description" content="Browse the Gallery of Hotel Green Hills Valparai see lush landscapes, cozy interiors, charming amenities and unforgettable moments." />
        <meta name="keywords" content="Best hotel in valparai photos" />
        <link rel="canonical" href="https://www.hotelgreenhills.in/gallery" />
      </Helmet>
      <Hero />
      <section className="container-secondary mx-auto my-8 sm:my-8 lg:my-16">
        <GalleryImages />
      </section>
    </>
  );
};

export default Gallery;