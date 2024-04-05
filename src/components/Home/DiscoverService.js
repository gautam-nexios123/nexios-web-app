"use client";
import Image from "next/image";
import webDevImg from "../../assets/images/home/ic-web-devlopment.png";
import mobileDevImg from "../../assets/images/home/Group-54-mobile-1.png";
import internetThingsImg from "../../assets/images/home/internetThings.png";
import softImg from "../../assets/images/home/Layer-1-soft-1.png";
import uiUXImg from "../../assets/images/home/uiux.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomDot } from "@/utils";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselData = [
  {
    name: "Website Development",
    image: webDevImg,
  },
  {
    name: "UI/UX Design",
    image: uiUXImg,
  },
  {
    name: "Mobile App Development",
    image: mobileDevImg,
  },
  {
    name: "Software Developing and Management",
    image: softImg,
  },
  {
    name: "Internet Of Things",
    image: internetThingsImg,
  },
];

const DiscoverService = () => {
  return (
    <div className="mt-11">
      <div className="text-center font-MuseoSans font-light text-[22px] sm:text-[26px]">
        Discover Our <span className="font-semibold">Services</span>
        <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[225px] sm:w-[268px] mx-auto mt-[-12px] sm:mt-[-15px]"></div>
      </div>

      <div className="mx-8">
        <Carousel
          arrows={false}
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          customDot={<CustomDot />}
        >
          {carouselData?.map((item, index) => (
            <div key={index}>
              <Card data={item} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default DiscoverService;

const Card = ({ data }) => {
  return (
    <div className="bg-white shadow-xl px-2 py-4 rounded-[20px] md:w-[200px] lg:w-[260px] h-[280px] flex flex-col justify-between items-center mt-5 mb-9 cursor-pointer">
      <Image
        src={data?.image}
        alt="focusInnoImg"
        className="my-4"
        width={180}
        height={100}
      />
      <p className="text-[#121212] font-MuseoSans font-semibold text-lg text-center ">
        {data?.name}
      </p>
    </div>
  );
};
