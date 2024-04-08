"use client";
import Image from "next/image";
import hrInterviewPic from "../../assets/images/career/hr-interview.svg";
import practicalRoundPic from "../../assets/images/career/practical-round.svg";
import { useEffect, useState } from "react";
import { Zoom_In_Animation } from "../Animations";
const InterViewProcess = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("process-interview");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) {
          // Adjust this value as per your requirement
          setActive(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="process-interview" className="w-full mb-[80px]">
      <div className="w-[80%] lg:w-[60%] mx-auto">
        <Zoom_In_Animation>
          <div className="font-MuseoSans font-normal text-[18px] sm:text-[24px] text-[#121212] pb-4 text-center">
            Process of <span className="font-semibold">Interview</span>
            <div className="bg-[#399EFD] opacity-[25%] h-[6px] w-[180px] sm:w-[235px] mt-[-12px] sm:mt-[-15px] mx-auto"></div>
          </div>
        </Zoom_In_Animation>
        <div className="font-MuseoSans font-normal text-[12px] sm:text-[14px] text-[#9BA9B4] text-justify md:text-center">
          We are one of the best places to work. nexios makes an atmosphere
          where you can grow your inner self and outer self, show your talent
          It’s a perfect combination between you and nexios when the career and
          your passion come together. We’re always hard at work crafting clever
          and thoughtful digital experiences for our products. We are finding
          for some fresh talents who can add cultural values at nexios, someone
          who has the same mission that is ours but also can bring diversity at
          a similar time.
        </div>
      </div>

      <div className="relative flex flex-col sm:flex-row items-center w-fit mx-auto mt-12 pr-[40%] sm:pr-0">
        <div className="relative">
          <div className="border-[6px] border-[#399EFD] rounded-full w-[140px] h-[140px] flex justify-center items-center">
            <Image
              src={hrInterviewPic}
              alt="pic"
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>

        <div className="hidden sm:block relative h-[5px] w-[100px]  bg-[#E8F3FE]">
          <div
            className={`h-full bg-[#399EFD] ${
              active && "animate-horizontalLine-show"
            } `}
          ></div>
        </div>

        <div className="sm:hidden relative h-[80px] w-[5px]  bg-[#E8F3FE]">
          <div
            className={`h-full bg-[#399EFD] ${
              active && "animate-verticalLine-show"
            }`}
          ></div>
        </div>

        <div className="relative">
          <div className="border-[6px] border-[#399EFD] rounded-full w-[140px] h-[140px] flex justify-center items-center">
            <Image
              src={hrInterviewPic}
              alt="pic"
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>

        <div className="hidden sm:block relative h-[5px] w-[100px]  bg-[#E8F3FE]">
          <div
            className={`h-full bg-[#399EFD] ${
              active && "animate-horizontalLine-show"
            } `}
          ></div>
        </div>

        <div className="sm:hidden relative h-[80px] w-[5px]  bg-[#E8F3FE]">
          <div
            className={`h-full bg-[#399EFD] ${
              active && "animate-verticalLine-show"
            }`}
          ></div>
        </div>

        <div className="relative">
          <div className="border-[6px] border-[#399EFD] rounded-full w-[140px] h-[140px] flex justify-center items-center">
            <Image
              src={practicalRoundPic}
              alt="pic"
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>

        <div className="absolute top-[8%] right-0 sm:top-[100%] sm:left-[3%] py-3 text-[#121212] font-MuseoSans font-semibold text-[16px]">
          HR Interview
        </div>
        <div className="absolute top-[46%] right-0 sm:top-[100%] sm:left-[39%] py-3 text-[#121212] font-MuseoSans font-semibold text-[16px]">
          Personal Interview
        </div>
        <div className="absolute top-[85%] right-0 sm:top-[100%] sm:right-[2%] py-3 text-[#121212] font-MuseoSans font-semibold text-[16px]">
          Practical Round
        </div>
      </div>
    </div>
  );
};

export default InterViewProcess;
