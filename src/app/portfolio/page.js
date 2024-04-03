import TopMainContent from "@/components/About/TopMainContent";
import React from "react";
import portTopBanner from "../../assets/images/portfolio/portfolio-top-banner.svg";
import CountingBanner from "@/common/CountingBanner";

const Portfolio = () => {
  return (
    <div className="">
      <TopMainContent
        page="portfolio"
        text="We work your ideas"
        banner={portTopBanner}
      />
      <CountingBanner />
    </div>
  );
};

export default Portfolio;
