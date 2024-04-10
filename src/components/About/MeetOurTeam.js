"use client";
import Image from "next/image";
import React, { useState } from "react";
import teemOne from "../../assets/images/about/team-1.svg";
import teemtwo from "../../assets/images/about/team-2.svg";
import teemThree from "../../assets/images/about/team-3.svg";
import teemFour from "../../assets/images/about/team-4.svg";
import teemFive from "../../assets/images/about/team-5.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomDot } from "@/utils";
import { AnimationOnScroll } from "../Animations";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const caurselData = [
  {
    name: "Chetan Jasani",
    photo: teemOne,
    designation: "Graphics Designer",
  },
  {
    name: "Mahi",
    photo: teemtwo,
    designation: "App developer",
  },
  {
    name: "Aditi",
    photo: teemThree,
    designation: "Web developer",
  },
  {
    name: "Shreya",
    photo: teemFour,
    designation: "UI/UX Design",
  },
  {
    name: "Bhavik",
    photo: teemFive,
    designation: "Software developer",
  },
];

const MeetOurTeam = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredID, setIsHoveredID] = useState();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="mb-12">
      <AnimationOnScroll id="meet-team" setIsVisible={setIsVisible}>
        <div
          className={`${
            isVisible ? "animation-zoomIn" : ""
          } relative font-MuseoSans font-semibold text-[#121212] text-[32px] sm:text-[48px] text-center`}
        >
          Meet Our Team
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[240px] sm:w-[350px] mx-auto mt-[-16px] sm:mt-[-24px]"></div>
        </div>
      </AnimationOnScroll>

      <div className="px-[30px] md:px-[160px]">
        <div className="text-[#9BA9B4] font-normal text-[20px] text-justify lg:text-center py-5">
          At nexios, we believe in the spirit of teamwork, creativity, and
          innovation to accomplish tasks quickly, seamlessly, and effectively.
          We are dedicated to creating work environments for our employees that
          encourage diversity in skill, talent, and culture, allowing us to come
          up with products ideated from different perspectives.
        </div>
        <div className="text-[#9BA9B4] font-normal text-[20px] text-justify lg:text-center">
          From concept to product release, our team of experienced professionals
          delivers intelligent, highly functional, interoperable, and scalable
          technology solutions that not only bring our clients' vision to life
          but also align with their business goals. We also work hard to
          establish and maintain a positive work environment for our employees
          that encourages growth, creativity, collaboration, and better service.
        </div>
      </div>

      <div className="mt-11 mx-9">
        <Carousel
          arrows={true}
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          transitionDuration={500}
          customDot={<CustomDot />}
        >
          {caurselData?.map((item, index) => (
            <div key={index} className="mb-8 w-full">
              <div
                className="relative cursor-pointer w-[200px] h-[280px] mx-auto"
                onMouseEnter={() => {
                  setIsHovered(true);
                  setIsHoveredID(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setIsHoveredID("");
                }}
              >
                <Image
                  className="h-full w-[200px] object-cover"
                  src={item?.photo}
                  alt="teemOne"
                />
                <div className="absolute top-0 w-[200px] h-full bg-transparent hover:bg-[rgba(57,158,253,0.5)] transition-all duration-500"></div>
                {isHovered && isHoveredID === index && (
                  <div className="absolute bottom-[30px] w-full ">
                    <div className="text-white text-center font-MuseoSans font-semibold text-lg">
                      {item?.name}
                    </div>
                    <div className="text-white text-center font-MuseoSans font-semibold text-sm">
                      {item?.designation}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MeetOurTeam;
