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
        });
      } catch (error) {
        setBannerData({ image: "", title: "" });
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
    </>
  );
};

export default Hero;