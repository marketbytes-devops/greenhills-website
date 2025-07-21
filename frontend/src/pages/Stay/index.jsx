import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Banner from "../../components/Banner";
import HighlightSection from "./HighlightSection";
import AmenitiesSection from "./AmenitiesSection";
import ExploreSection from "./ExploreSection";
import GallerySection from "./GallerySection";
import OtherStays from "./OtherStays";
import GetInTouch from "../../components/UiComponents/GetInTouch";
import {
  fetchStayBanner,
  fetchStayHighlights,
  fetchStayAmenitiesTitle,
  fetchStayAmenitiesListings,
  fetchStayExplore,
  fetchStayGallery,
  fetchStayRoomsTitle,
  fetchStayRoomsListings,
} from "../../helpers/apiService";

const Stay = () => {
  const { slug } = useParams();
  const [bannerData, setBannerData] = useState(null);
  const [highlightsData, setHighlightsData] = useState([]);
  const [amenitiesTitleData, setAmenitiesTitleData] = useState({
    title: "",
    description: "",
  });
  const [amenitiesListingsData, setAmenitiesListingsData] = useState([]);
  const [exploreSectionData, setExploreSectionData] = useState(null);
  const [gallerySectionData, setGallerySectionData] = useState([]);
  const [otherStaysData, setOtherStaysData] = useState(null);

  const seoData = {
    "deluxe-double-bedroom": {
      title: "Deluxe Double Room in Valparai | Hotel Green Hills",
      description: "Book a deluxe double room at Hotel Green Hills, Valparai ideal for couples or small families, with scenic views, cozy interiors, and modern amenities.",
      keywords: "Best deluxe double room in Valparai",
      canonical: "https://www.hotelgreenhills.in/stay/deluxe-double-bedroom",
    },
    "super-deluxe-room": {
      title: "Super Deluxe Room in Valparai | Hotel Green Hills",
      description: "Experience luxury in Valparai with our Deluxe Room at Hotel Green Hills spacious interiors, valley views, premium amenities, ideal for special stays.",
      keywords: "Best super deluxe room in Valparai",
      canonical: "https://www.hotelgreenhills.in/stay/super-deluxe-room",
    },
    "standard-double-room": {
      title: "Standard Double Room in Valparai | Hotel Green Hills",
      description: "Book a Standard Double Room at Hotel Green Hills, Valparai cozy, budget-friendly accommodations with scenic views and essential amenities.",
      keywords: "standard double room in Valparai",
      canonical: "https://www.hotelgreenhills.in/stay/standard-double-room",
    },
  };

  useEffect(() => {
    Promise.all([
      fetchStayBanner(slug),
      fetchStayHighlights(slug),
      fetchStayAmenitiesTitle(slug),
      fetchStayAmenitiesListings(slug),
      fetchStayExplore(slug),
      fetchStayGallery(slug),
      fetchStayRoomsTitle(),
      fetchStayRoomsListings(slug),
    ])
      .then(
        ([
          bannerResponse,
          highlightsResponse,
          amenitiesTitleResponse,
          amenitiesListingsResponse,
          exploreResponse,
          galleryResponse,
          roomsTitleResponse,
          roomsListingsResponse,
        ]) => {
          const banner = bannerResponse.data.length > 0 ? bannerResponse.data[0] : null;
          const highlights = Array.isArray(highlightsResponse.data)
            ? highlightsResponse.data
            : [];
          const amenitiesTitle =
            Array.isArray(amenitiesTitleResponse.data) && amenitiesTitleResponse.data[0]
              ? amenitiesTitleResponse.data[0]
              : { title: "", description: "" };
          const amenitiesListings = Array.isArray(amenitiesListingsResponse.data)
            ? amenitiesListingsResponse.data.sort((a, b) => (a.order || 0) - (b.order || 0))
            : [];
          const explore = exploreResponse.data.length > 0 ? exploreResponse.data[0] : null;

          const stayPages = [
            { id: 1, link: "deluxe-double-bedroom" },
            { id: 2, link: "super-deluxe-room" },
            { id: 3, link: "standard-double-room" },
          ];
          const currentStayId = stayPages.find((page) => page.link === slug)?.id || null;

          const gallery = Array.isArray(galleryResponse.data)
            ? galleryResponse.data.filter((item) => item.stay_page_create === currentStayId)
            : [];
          const gallerySectionDataFiltered = gallery.length > 0 ? gallery : [];

          const roomsTitle =
            Array.isArray(roomsTitleResponse.data) && roomsTitleResponse.data[0]
              ? roomsTitleResponse.data[0]
              : null;
          const roomsListings = Array.isArray(roomsListingsResponse.data)
            ? roomsListingsResponse.data
                .filter((item) => item.link !== slug)
                .slice(0, 2)
            : [];

          console.log("Current Slug:", slug);
          console.log("Rooms Listings (after filter):", roomsListings);
          
          const images = roomsListings.map((item) => ({
            id: item.id,
            image: item.image || null,
            title: item.title || "",
            description: item.description || "",
            link: item.link || "#",
          }));

          const content = roomsTitle
            ? {
                title: roomsTitle.title || "",
                description: roomsTitle.description || "",
                link: roomsTitle.link || "#",
              }
            : null;

          console.log("OtherStays Data:", { images, content });

          setBannerData(banner);
          setHighlightsData(highlights);
          setAmenitiesTitleData({
            title: amenitiesTitle.title || "",
            description: amenitiesTitle.description || "",
          });
          setAmenitiesListingsData(amenitiesListings);
          setExploreSectionData(explore);
          setGallerySectionData(gallerySectionDataFiltered);
          setOtherStaysData({
            images: images.length ? images : null,
            content,
          });
        }
      )
      .catch((err) => {
        setBannerData(null);
        setHighlightsData([]);
        setAmenitiesTitleData({ title: "", description: "" });
        setAmenitiesListingsData([]);
        setExploreSectionData(null);
        setGallerySectionData([]);
        setOtherStaysData(null);
        console.error("Error fetching data:", err);
      });
  }, [slug]);

  if (!bannerData) {
    return <div></div>;
  }

  return (
    <>
      <Helmet>
        <title>{seoData[slug]?.title || "Stay at Hotel Green Hills Valparai"}</title>
        <meta
          name="description"
          content={seoData[slug]?.description || "Explore comfortable and scenic stays at Hotel Green Hills in Valparai."}
        />
        <meta
          name="keywords"
          content={seoData[slug]?.keywords || "stay in Valparai, Hotel Green Hills"}
        />
        <link
          rel="canonical"
          href={seoData[slug]?.canonical || "https://www.hotelgreenhills.in/stay"}
        />
      </Helmet>
      <Banner
        image={bannerData.image}
        title={bannerData.title}
        description={bannerData.description}
        isButton={false} 
      />
      <section>
        <HighlightSection highlights={highlightsData} />
      </section>
      <section className="mx-auto mt-8 sm:mt-8 lg:mt-16">
        <AmenitiesSection
          sectionData={amenitiesTitleData}
          cardsData={amenitiesListingsData}
        />
      </section>
      <section className="mx-auto mt-8 sm:mt-8 lg:mt-16">
        <ExploreSection exploreData={exploreSectionData} />
      </section>
      <section className="container-secondary mx-auto mt-8 sm:mt-8 lg:mt-16">
        <GallerySection galleryData={gallerySectionData} />
      </section>
      <section className="bg-[#181818] py-8 sm:py-8 lg:py-16 mx-auto mt-8 sm:mt-8 lg:mt-16">
        <OtherStays sectionData={otherStaysData} />
      </section>
      <section>
        <GetInTouch />
      </section>
    </>
  );
};

export default Stay;