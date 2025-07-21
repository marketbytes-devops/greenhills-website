import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Banner from "../../components/Banner";
import HighlightSection from "./HighlightSection";
import ServicesSection from "./ServicesSection";
import AmenitiesSection from "./AmenitiesSection";
import ExploreSection from "./ExploreSection";
import GetInTouch from "../../components/UiComponents/GetInTouch";
import {
  fetchGatherBanner,
  fetchGatherHighlightsTitle,
  fetchGatherHighlights,
  fetchGatherServices,
  fetchGatherAmenitiesTitle,
  fetchGatherAmenitiesListings,
  fetchGatherExplore,
  fetchGatherPages,
} from "../../helpers/apiService";

const Gather = () => {
  const { slug } = useParams();
  const [bannerData, setBannerData] = useState(null);
  const [highlightsTitleData, setHighlightsTitleData] = useState({
    title: "",
    description: "",
  });
  const [highlightsData, setHighlightsData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [amenitiesTitleData, setAmenitiesTitleData] = useState({
    title: "",
    description: "",
  });
  const [amenitiesListingsData, setAmenitiesListingsData] = useState([]);
  const [exploreSectionData, setExploreSectionData] = useState(null);
  const [gatherPages, setGatherPages] = useState([]);

  const seoData = {
    "events": {
      title: "Events and Family Gatherings | Hotel Green Hills Valparai",
      description: "Celebrate your special occasion at Hotel Green Hills Valparai ideal venue for weddings, Family Gathering, retreats with scenic mountain views.",
      keywords: "Best hotel event space in Valparai",
      canonical: "https://www.hotelgreenhills.in/gather/events",
    },
    "business-gatherings": {
      title: "Business Gatherings and Meetings | Green Hills Valparai",
      description: "Host your business meetings and corporate events at Hotel Green Hills, Valparai, professional facilities, scenic environment and customizable catering.",
      keywords: "Best Business event venue in Valparai",
      canonical: "https://www.hotelgreenhills.in/gather/business-gatherings",
    },
  };

  useEffect(() => {
    Promise.all([
      fetchGatherBanner(slug),
      fetchGatherHighlightsTitle(slug),
      fetchGatherHighlights(slug),
      fetchGatherServices(slug),
      fetchGatherAmenitiesTitle(slug),
      fetchGatherAmenitiesListings(slug),
      fetchGatherExplore(slug),
      fetchGatherPages(),
    ])
      .then((
        [
          bannerResponse,
          highlightsTitleResponse,
          highlightsResponse,
          servicesResponse,
          amenitiesTitleResponse,
          amenitiesListingsResponse,
          exploreResponse,
          gatherPagesResponse,
        ]
      ) => {
        const banner = bannerResponse.data.length > 0 ? bannerResponse.data[0] : null;
        const highlightsTitle =
          Array.isArray(highlightsTitleResponse.data) && highlightsTitleResponse.data[0]
            ? highlightsTitleResponse.data[0]
            : { title: "", description: "" };
        const highlights = Array.isArray(highlightsResponse.data)
          ? highlightsResponse.data.sort((a, b) => (a.order || 0) - (b.order || 0))
          : [];
        const services = Array.isArray(servicesResponse.data)
          ? servicesResponse.data.sort((a, b) => (a.order || 0) - (b.order || 0))
          : [];
        const amenitiesTitle =
          Array.isArray(amenitiesTitleResponse.data) && amenitiesTitleResponse.data[0]
            ? amenitiesTitleResponse.data[0]
            : { title: "", description: "" };
        const amenitiesListings = Array.isArray(amenitiesListingsResponse.data)
          ? amenitiesListingsResponse.data.sort((a, b) => (a.order || 0) - (b.order || 0))
          : [];
        const explore = exploreResponse.data.length > 0 ? exploreResponse.data[0] : null;
        const gatherPages = Array.isArray(gatherPagesResponse.data)
          ? gatherPagesResponse.data
          : [];

        setBannerData(banner);
        setHighlightsTitleData({
          title: highlightsTitle.title || "",
          description: highlightsTitle.description || "",
        });
        setHighlightsData(highlights);
        setServicesData(services);
        setAmenitiesTitleData({
          title: amenitiesTitle.title || "",
          description: amenitiesTitle.description || "",
        });
        setAmenitiesListingsData(amenitiesListings);
        setExploreSectionData(explore);
        setGatherPages(gatherPages);
      })
      .catch((err) => {
        setBannerData(null);
        setHighlightsTitleData({ title: "", description: "" });
        setHighlightsData([]);
        setServicesData([]);
        setAmenitiesTitleData({ title: "", description: "" });
        setAmenitiesListingsData([]);
        setExploreSectionData(null);
        setGatherPages([]);
        console.error("Error fetching data:", err);
      });
  }, [slug]);

  if (!bannerData) {
    return <div></div>;
  }

  return (
    <>
      <Helmet>
        <title>{seoData[slug]?.title || "Gatherings at Hotel Green Hills Valparai"}</title>
        <meta
          name="description"
          content={seoData[slug]?.description || "Host your events and gatherings at Hotel Green Hills in Valparai with scenic venues and professional services."}
        />
        <meta
          name="keywords"
          content={seoData[slug]?.keywords || "event venue in Valparai, Hotel Green Hills"}
        />
        <link
          rel="canonical"
          href={seoData[slug]?.canonical || "https://www.hotelgreenhills.in/gather"}
        />
      </Helmet>
      <Banner
        image={bannerData.image}
        title={bannerData.title}
        description={bannerData.description}
      />
      {gatherPages.length > 0 && (
        <div className="container-secondary mx-auto my-8 sm:my-8 lg:my-16">
          <ul className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 space-y-6 md:space-y-0">
            {gatherPages.map((page) => (
              <li key={page.id}>
                <NavLink
                  to={`/gather/${page.link}`}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors duration-300 ${isActive || slug === page.link
                      ? "flex items-center justify-center space-x-2 bg-secondaryBlack text-md text-white font-medium px-10 w-full xl:w-fit h-10 xl:h-12 rounded-full hover:bg-[#2b6843] hover:text-white transition-all duration-300"
                      : "flex items-center justify-center space-x-2 border border-black hover:border-none text-md text-black font-normal px-10 w-full xl:w-fit h-10 xl:h-12 rounded-full hover:bg-[#2b6843] hover:text-white transition-all duration-300"
                    }`
                  }
                  end
                >
                  {page.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="container-secondary mx-auto my-8 sm:my-8 lg:my-16 w-full h-auto flex flex-col items-center justify-center">
        <div
          dangerouslySetInnerHTML={{ __html: bannerData.description }}
          className="text-center md:text-left"
        />
      </div>
      <section className="mx-auto mt-8 sm:mt-8 lg:mt-16">
        <HighlightSection titleData={highlightsTitleData} highlights={highlightsData} />
      </section>
      <section className="mx-auto mt-8 sm:mt-8 lg:mt-16 bg-black">
        <ServicesSection services={servicesData} />
      </section>
      <section className="mx-auto mt-8 sm:mt-8 lg:mt-16">
        <AmenitiesSection
          sectionData={amenitiesTitleData}
          cardsData={amenitiesListingsData}
        />
      </section>
      <section className="mx-auto my-8 sm:my-8 lg:my-16">
        <ExploreSection exploreData={exploreSectionData} />
      </section>
      <section>
        <GetInTouch />
      </section>
    </>
  );
};

export default Gather;