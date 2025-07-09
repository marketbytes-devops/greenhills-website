import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Banner from "../../components/Banner";
import { fetchEatBanner, fetchEatTime, fetchEatMenuTabCreate, fetchEatMenuTabItems, fetchEatMenuTitle, fetchEatMenuListings, fetchEatAmenitiesTitle, fetchEatAmenitiesListings, fetchEatExplore, fetchEatPages } from "../../helpers/apiService";
import GetInTouch from "../../components/UiComponents/GetInTouch";
import MenuListings from "./MenuListing";
import MenuTabItems from "./MenuTabItems";
import AmenitiesSection from "./AmenitiesSection";
import ExploreSection from "./ExploreSection";

const Eat = () => {
  const { slug } = useParams();
  const [bannerData, setBannerData] = useState(null);
  const [timeData, setTimeData] = useState(null);
  const [tabData, setTabData] = useState([]);
  const [tabMenuItemsData, setTabMenuItemsData] = useState([]);
  const [titleData, setTitleData] = useState(null);
  const [menuListingsData, setMenuListingsData] = useState([]);
  const [amenitiesTitleData, setAmenitiesTitleData] = useState(null);
  const [amenitiesListingsData, setAmenitiesListingsData] = useState([]);
  const [exploreSectionData, setExploreSectionData] = useState(null);
  const [eatPages, setEatPages] = useState([]);

  useEffect(() => {
    Promise.all([
      fetchEatBanner(slug),
      fetchEatTime(slug),
      fetchEatMenuTabCreate(slug),
      fetchEatMenuTabItems(slug),
      fetchEatMenuTitle(slug),
      fetchEatMenuListings(slug),
      fetchEatAmenitiesTitle(slug),
      fetchEatAmenitiesListings(slug),
      fetchEatExplore(slug),
      fetchEatPages()
    ])
      .then(([bannerRes, timeRes, tabRes, itemsRes, titleRes, listingsRes, amenitiesTitleRes, amenitiesListingsRes, exploreRes, pagesRes]) => {
        const banner = Array.isArray(bannerRes.data) && bannerRes.data.length > 0 ? bannerRes.data[0] : null;
        const time = Array.isArray(timeRes.data) && timeRes.data.length > 0 
          ? timeRes.data.find(t => t.opening_time !== "<p>No Time</p>" && t.closing_time !== "<p>No Time</p>")
          : null;
        const tabs = Array.isArray(tabRes.data) 
          ? tabRes.data.filter(tab => tab.tab_name !== "No Tab")
          : [];
        const items = Array.isArray(itemsRes.data) ? itemsRes.data : [];
        const title = Array.isArray(titleRes.data) && titleRes.data.length > 0 ? titleRes.data[0] : null;
        const listings = Array.isArray(listingsRes.data) ? listingsRes.data : [];
        const amenitiesTitle = Array.isArray(amenitiesTitleRes.data) && amenitiesTitleRes.data.length > 0 ? amenitiesTitleRes.data[0] : null;
        const amenitiesListings = Array.isArray(amenitiesListingsRes.data) ? amenitiesListingsRes.data : [];
        const explore = Array.isArray(exploreRes.data) && exploreRes.data.length > 0 ? exploreRes.data[0] : null;
        const pages = Array.isArray(pagesRes.data) ? pagesRes.data : [];
        setBannerData(banner);
        setTimeData(time);
        setTabData(tabs);
        setTabMenuItemsData(items);
        setTitleData(title);
        setMenuListingsData(listings);
        setAmenitiesTitleData(amenitiesTitle);
        setAmenitiesListingsData(amenitiesListings);
        setExploreSectionData(explore);
        setEatPages(pages);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setBannerData(null);
        setTimeData(null);
        setTabData([]);
        setTabMenuItemsData([]);
        setTitleData(null);
        setMenuListingsData([]);
        setAmenitiesTitleData(null);
        setAmenitiesListingsData([]);
        setExploreSectionData(null);
        setEatPages([]);
      });
  }, [slug]);

  if (!bannerData) {
    return <div></div>;
  }

  return (
    <>
      <Banner
        image={bannerData.image}
        title={bannerData.title}
      />
      {eatPages.length > 0 && (
        <div className="container-secondary mx-auto my-8 sm:my-8 lg:my-16">
          <ul className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 md:space-y-0">
            {eatPages.map((page) => (
              <li key={page.id}>
                <NavLink
                  to={`/eat/${page.link}`}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition-colors duration-300 ${
                      isActive || slug === page.link
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
      <div
        className="container-secondary mx-auto my-8 sm:my-8 lg:my-16 w-full h-auto flex flex-col items-center justify-center"
      >
        <div
          dangerouslySetInnerHTML={{ __html: bannerData.description }}
        />
      </div>
      {timeData && (
        <div className="mx-auto my-8 sm:my-8 lg:my-16 flex items-center justify-center">
          <div className="w-fit flex items-center justify-center space-x-6 border border-secondaryBlack rounded-full px-4 py-2">
            <div dangerouslySetInnerHTML={{ __html: timeData.opening_time }} />
            <div dangerouslySetInnerHTML={{ __html: timeData.closing_time }} />
          </div>
        </div>
      )}
      {tabData.length > 0 && (
        <section className="container-secondary mx-auto my-8 sm:my-8 lg:my-16">
          <MenuTabItems tabData={tabData} tabMenuItemsData={tabMenuItemsData} />
        </section>
      )}
      {menuListingsData.length > 0 && (
        <section className="bg-secondaryBlack py-8 md:py-16 my-8 sm:my-8 lg:my-16">
          <MenuListings titleData={titleData} menuListingsData={menuListingsData} />
        </section>
      )}
      {(amenitiesTitleData || amenitiesListingsData.length > 0) && (
        <section className="mx-auto mt-8 sm:mt-8 lg:mt-16">
          <AmenitiesSection
            sectionData={amenitiesTitleData}
            cardsData={amenitiesListingsData}
          />
        </section>
      )}
      {exploreSectionData && (
        <section className="mx-auto my-8 sm:my-8 lg:my-16">
          <ExploreSection exploreData={exploreSectionData} />
        </section>
      )}
      <section>
        <GetInTouch />
      </section>
    </>
  );
};

export default Eat;