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
  return apiService.get("/home/home-blog-items/");
};

export const submitContactForm = () => {
  return apiService.get("/home/get-in-touch/");
};

// about us

export const fetchAboutBannerData = () => {
  return apiService.get("/about/about-banner/");
}

export const fetchAboutSectionTwo = () => {
  return apiService.get("/about/about-section-two/");
}

export const fetchAboutSectionThreeTitle = () => {
  return apiService.get("/about/about-section-three-title/");
}

export const fetchAboutSectionThree = () => {
  return apiService.get("/about/about-section-three/");
}

export const fetchAboutSectionFour = () => {
  return apiService.get("/about/about-section-four/");
}

export const fetchAboutSectionFive = () => {
  return apiService.get("/about/about-section-five/");
}

// gallery

export const fetchGalleryBannerData = () => {
  return apiService.get("/gallery/gallery-banner/");
}