"use client";
import Image from "next/image";
import dotImg from "../../assets/images/home/dot-dot.svg";
import manImg from "../../assets/images/home/man.svg";
import quateIcon from "../../assets/images/home/quateIcon.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomDot } from "@/utils";
import { Zoom_In_Animation } from "../Animations";

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
      "Most importantly, when pursuing new projects and ideas, we are able to reliably work with Nexios on scaling business goals. I feel assured growing my business with Nexios handling our tech stack and would highly recommend them to any company wanting to have a IT support and development team in meeting their business needs.					",
    desgnation: "CEO",
  },
];

const OurClient = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <div className="relative bg-[#F2F8FA] ">
      <Zoom_In_Animation>
        <div className="text-[#121212] font-MuseoSans font-semibold text-[18px] sm:text-[26px] text-center py-7 mt-16">
          What our clients have to say
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[245px] sm:w-[350px] mt-[-12px] sm:mt-[-15px] mx-auto"></div>
        </div>
      </Zoom_In_Animation>
      <div className="mx-8 lg:mx-[150px] py-4">
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
          {data?.map((item, index) => (
            <div
              className="flex lg:flex-row flex-col  w-full mb-5 cursor-pointer"
              key={index}
            >
              <div className="flex lg:block justify-center relative lg:w-[30%] w-full ">
                <Image src={dotImg} alt="" width={180} height={180} />
                <div className="bg-[#399EFD] w-[120px] h-[140px] absolute top-[62px] lg:left-[62px] left-[48%]"></div>
                <Image
                  src={manImg}
                  alt=""
                  width={160}
                  height={150}
                  className="absolute top-[72px] lg:left-[70px] left-[48%]"
                />
              </div>
              <div className="w-full lg:w-[60%] mt-[90px] lg:mt-0">
                <Image src={quateIcon} alt="quate" width={45} height={45} />
                <div className="text-[#121212] mb-2 text-justify font-MuseoSans font-normal text-lg py-6 line-clamp-4">
                  {item?.description}
                </div>
                <div className="text-[#121212] font-MuseoSans font-semibold text-lg pb-2">
                  {item?.name}
                </div>
                <div className="text-[#9BA9B4] font-MuseoSans font-normal text-lg pb-2">
                  {item?.desgnation}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurClient;
