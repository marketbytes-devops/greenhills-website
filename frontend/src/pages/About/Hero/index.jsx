import { useState, useEffect } from "react";
import Banner from "../../../components/Banner";
import { fetchAboutBannerData } from "../../../helpers/apiService";

const Hero = () => {
  const [bannerData, setBannerData] = useState({ image: "", title: "", description: "" });

  useEffect(() => {
    const getBannerData = async () => {
      try {
        const response = await fetchAboutBannerData();
        const data = response.data[0] || {};
        setBannerData({
          image: data.image || "",
          title: data.title || "",
          description: data.description || "",
        });
      } catch (error) {
        setBannerData({ image: "", title: "", description: "" });
      }
    };
    getBannerData();
  }, []);

  if (!bannerData.image && !bannerData.title && !bannerData.description) {
    return <div></div>;
  }

  return (
    <>
      <Banner image={bannerData.image} title={bannerData.title} />
      <header
        className="container-secondary mx-auto my-8 sm:my-8 lg:my-16 w-full h-auto flex flex-col items-center justify-center"
      >
        <div
          dangerouslySetInnerHTML={{ __html: bannerData.description }}
        />
      </header>
    </>
  );
};

export default Hero;