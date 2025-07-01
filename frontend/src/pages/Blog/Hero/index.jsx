import { useState, useEffect } from "react";
import Banner from "../../../components/Banner";
import { fetchBlogBannerData } from "../../../helpers/apiService";

const Hero = () => {
  const [bannerData, setBannerData] = useState({ image: "", title: "" });

  useEffect(() => {
    const getBannerData = async () => {
      try {
        const response = await fetchBlogBannerData();
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

  if (!bannerData.image && !bannerData.title) {
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