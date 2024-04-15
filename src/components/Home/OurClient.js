"use client";
import Image from "next/image";
import dotImg from "../../assets/images/home/dot-dot.svg";
import manImg from "../../assets/images/home/man.svg";
import quateIcon from "../../assets/images/home/quateIcon.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AnimationOnScroll } from "../Animations";
import { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const data = [
  {
    name: "Edward Newgate",
    description:
      "My agency and consultancy clients have worked with Nexios over the past four years in various projects, from Laravel Frameworks, to App Development.",
    desgnation: "Founder Circle",
  },
  {
    name: "John Doe",
    description:
      "Nexios excel in their communication and ability to understand tech needs. If I have a question about something or there is bug to be resolved, the response time is always within a few hours.",
    desgnation: "CEO",
  },
  {
    name: "John Doe",
    description:
      "Most importantly, when pursuing new projects and ideas, we are able to reliably work with Nexios on scaling business goals. I feel assured growing my business with Nexios handling our tech stack and would highly recommend them to any company wanting to have a IT support and development team in meeting their business needs.",
    desgnation: "CEO",
  },
];

const OurClient = () => {
  const [isVisible, setIsVisible] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button
      className="absolute bottom-0 left-[60%] md:left-[80%] lg:left-[70%] xl:left-[80%] bg-[#c2e1f9]  px-[10px] text-[20px] rounded-lg"
      onClick={onClick}
    >
      <WestIcon
        className="text-[#399EFD] font-semibold lg:text-[60px]"
        fontSize="large"
      />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      className="absolute bottom-0 right-0 lg:right-[0%] bg-[#c2e1f9]  px-[10px] text-[20px] rounded-lg"
      onClick={onClick}
    >
      <EastIcon
        className="text-[#399EFD] font-semibold lg:text-[60px]"
        fontSize="large"
      />
    </button>
  );

  return (
    <div className="relative w-full bg-[#F2F8FA]">
      <AnimationOnScroll id="whatour-client" setIsVisible={setIsVisible}>
        <div
          className={`${
            isVisible ? "animation-zoomIn" : ""
          } text-[#121212] font-MuseoSans font-semibold text-[22px] sm:text-[40px] text-center pt-[60px] mt-16`}
        >
          What our clients have to say
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[300px] sm:w-[530px] mt-[-12px] sm:mt-[-15px] mx-auto"></div>
        </div>
      </AnimationOnScroll>
      <Image
        src={dotImg}
        alt="dotImg"
        className="w-[220px] h-[220px] absolute sm:left-[20%] sm:top-[15%] lg:left-[17%] lg:top-[18%]"
      />
      <div className="main-container w-[80%] lg:w-[60%] mx-auto py-[80px]">
        <Carousel
          arrows={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          transitionDuration={500}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {data?.map((item, index) => (
            <CarouselCard item={item} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurClient;

const CarouselCard = ({ item }) => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-[40px] w-full mb-[45px] cursor-pointer">
      <div className="w-[200px] h-[200px] bg-[#399EFD] relative mr-[30px]">
        <Image
          src={manImg}
          alt="manImg"
          className="w-full object-cover ml-[35px] mt-[20px]"
        />
      </div>
      <div className="w-full lg:w-[70%]">
        <Image src={quateIcon} alt="quate" width={45} height={45} />
        <div className="text-[#121212] mb-2 text-justify font-MuseoSans font-normal text-[21px] py-6 italic">
          {item?.description}
        </div>
        <div className="text-[#121212] font-MuseoSans font-semibold text-lg pb-2 italic">
          {item?.name}
        </div>
        <div className="text-[#9BA9B4] font-MuseoSans font-normal text-lg pb-2 italic">
          {item?.desgnation}
        </div>
      </div>
    </div>
  );
};
