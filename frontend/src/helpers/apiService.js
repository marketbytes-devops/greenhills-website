import axios from "axios";

const apiService = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchSubmitContactForm = () => {
  return apiService.get("/contact/contact-form/");
};

export const fetchSliderData = () => {
  return apiService.get("/home/home-banner/");
};

export const fetchServiceSlider = () => {
  return apiService.get("/home/home-services/");
};

export const fetchAboutSectionTitle = () => {
  return apiService.get("/home/home-about-section-title/");
};

export const fetchAboutSectionImages = () => {
  return apiService.get("/home/home-about-section-image/");
};

export const fetchRatingSection = () => {
  return apiService.get("/home/home-rating/");
};

export const fetchStatsSection = () => {
  return apiService.get("/home/home-stats/");
};

export const fetchRoomsTitle = () => {
  return apiService.get("/home/home-rooms-title/");
};

export const fetchRooms = () => {
  return apiService.get("/home/home-rooms/");
};

export const fetchExplore = () => {
  return apiService.get("/home/home-explore/");
};

export const fetchEatSectionImages = () => {
  return apiService.get("/home/home-eat-section-listing/");
};

export const fetchEatSectionContent = () => {
  return apiService.get("/home/home-eat-section-content/");
};

export const fetchGatherSectionImages = () => {
  return apiService.get("/home/home-gather-section-listing/");
};

export const fetchGatherSectionContent = () => {
  return apiService.get("/home/home-gather-section-content/");
};

export const fetchTeamSectionTitle = () => {
  return apiService.get("/home/home-team-title/");
};

export const fetchTeamSection = () => {
  return apiService.get("/home/home-team-section/");
};

export const fetchBlogTitle = () => {
  return apiService.get("/home/home-blog-title/");
};

export const fetchBlogItems = () => {
  return apiService.get("/blog/blog-posts/");
};

// about us

export const fetchAboutBannerData = () => {
  return apiService.get("/about/about-banner/");
};

export const fetchAboutSectionTwo = () => {
  return apiService.get("/about/about-section-two/");
};

export const fetchAboutSectionThreeTitle = () => {
  return apiService.get("/about/about-section-three-title/");
};

export const fetchAboutSectionThree = () => {
  return apiService.get("/about/about-section-three/");
};

export const fetchAboutSectionFour = () => {
  return apiService.get("/about/about-section-four/");
};

export const fetchAboutSectionFive = () => {
  return apiService.get("/about/about-section-five/");
};

// gallery

export const fetchGalleryBannerData = () => {
  return apiService.get("/gallery/gallery-banner/");
};

export const fetchGalleryImagesData = () => {
  return apiService.get("/gallery/gallery-images/");
};

// explore

export const fetchExploreBannerData = () => {
  return apiService.get("/explore/explore-banner/");
};

export const fetchExploreSectionTwo = () => {
  return apiService.get("/explore/explore-section-two/");
};

export const fetchExploreSectionThreeTitle = () => {
  return apiService.get("/explore/explore-section-three-title/");
};

export const fetchExploreSectionThreeData = () => {
  return apiService.get("/explore/explore-section-three/");
};

// blog

export const fetchBlogBannerData = () => {
  return apiService.get("/blog/blog-banner/");
};

export const fetchBlogPostsData = () => {
  return apiService.get("/blog/blog-posts/");
};


// stay

export const fetchStayRoomsTitle = () => {
  return apiService.get(`/stay/stay-rooms-title/`);
};

export const fetchStayRoomsListings = () => {
  return apiService.get(`/stay/stay-rooms-listings/`);
};

export const fetchStayPages = () => {
  return apiService.get("/stay/stay-page-create/");
};

export const fetchStayBanner = (slug) => {
  return apiService.get(`/stay/stay-banner/?stay_page_create__link=${slug}`);
};

export const fetchStayHighlights = (slug) => {
  return apiService.get(`/stay/stay-highlights/?stay_page_create__link=${slug}`);
};

export const fetchStayAmenitiesTitle = (slug) => {
  return apiService.get(`/stay/stay-amenities-title/?stay_page_create__link=${slug}`);
};

export const fetchStayAmenitiesListings = (slug) => {
  return apiService.get(`/stay/stay-amenities-listings/?stay_page_create__link=${slug}`);
};

export const fetchStayExplore = (slug) => {
  return apiService.get(`/stay/stay-explore/?stay_page_create__link=${slug}`);
};

export const fetchStayGallery = (slug) => {
  return apiService.get(`/stay/stay-gallery/?stay_page_create__link=${slug}`);
};

// Eat

export const fetchEatPages = () => {
  return apiService.get("/eat/eat-page-create/");
};

export const fetchEatBanner = (slug) => {
  return apiService.get(`/eat/eat-banner/?eat_page_create__link=${slug}`);
};

export const fetchEatTime = (slug) => {
  return apiService.get(`/eat/eat-time/?eat_page_create__link=${slug}`);
};

export const fetchEatMenuTabCreate = (slug) => {
  return apiService.get(`/eat/eat-menu-tab-create/?eat_page_create__link=${slug}`);
};

export const fetchEatMenuTabItems = (slug) => {
  return apiService.get(`/eat/eat-menu-tab-items/?eat_page_create__link=${slug}`);
};

export const fetchEatMenuTitle = (slug) => {
  return apiService.get(`/eat/eat-menu-title/?eat_page_create__link=${slug}`);
};

export const fetchEatMenuListings = (slug) => {
  return apiService.get(`/eat/eat-menu-listings/?eat_page_create__link=${slug}`);
};

export const fetchEatAmenitiesTitle = (slug) => {
  return apiService.get(`/eat/eat-amenities-title/?eat_page_create__link=${slug}`);
};

export const fetchEatAmenitiesListings = (slug) => {
  return apiService.get(`/eat/eat-amenities-listings/?eat_page_create__link=${slug}`);
};

export const fetchEatExplore = (slug) => {
  return apiService.get(`/eat/eat-explore/?eat_page_create__link=${slug}`);
};

// Gather
export const fetchGatherPages = () => {
  return apiService.get("/gather/gather-page-create/");
};

export const fetchGatherBanner = (slug) => {
  return apiService.get(`/gather/gather-banner/?gather_page_create__link=${slug}`);
};

export const fetchGatherHighlightsTitle = (slug) => {
  return apiService.get(`/gather/gather-highlights-title/?gather_page_create__link=${slug}`);
};

export const fetchGatherHighlights = (slug) => {
  return apiService.get(`/gather/gather-highlights/?gather_page_create__link=${slug}`);
};

export const fetchGatherServices = (slug) => {
  return apiService.get(`/gather/gather-services/?gather_page_create__link=${slug}`);
};

export const fetchGatherAmenitiesTitle = (slug) => {
  return apiService.get(`/gather/gather-amenities-title/?gather_page_create__link=${slug}`);
};

export const fetchGatherAmenitiesListings = (slug) => {
  return apiService.get(`/gather/gather-amenities-listings/?gather_page_create__link=${slug}`);
};

export const fetchGatherExplore = (slug) => {
  return apiService.get(`/gather/gather-explore/?gather_page_create__link=${slug}`);
};

export const fetchSocialMediaLinks = () => {
  return apiService.get("/social-media/social-media-links/");
};

export const fetchAdditionalSettings = () => {
  return apiService.get("/additional-settings/settings/");
};

export const submitBookingForm = (data) => {
  return apiService.post("/enquiry/bookings/create/", data);
};

export const submitContactForm = (data) => {
  return apiService.post("/enquiry/contact/create/", data);
};

export const fetchTermsConditions = () => {
  return apiService.get("/terms-and-privacy/terms-and-conditions/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching terms and conditions:", error);
      return []; 
    });
};

export const fetchPrivacyPolicy = () => {
  return apiService.get("/terms-and-privacy/privacy-policy/")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching privacy policy:", error);
      return [];
    });
};