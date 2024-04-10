"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import leftGroup from "../assets/images/about/left-grp.svg";
import rightGroup from "../assets/images/about/right-group.svg";

const CountingBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("counting-banner");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight * 0.75) {
          // Adjust this value as per your requirement
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const employeeInterval = setInterval(() => {
        if (employeeCount < 50) {
          setEmployeeCount((prevCount) => prevCount + 1);
        }
      }, 45);
      return () => {
        clearInterval(employeeInterval);
      };
    }
  }, [isVisible, employeeCount]);

  useEffect(() => {
    if (isVisible) {
      const projectInterval = setInterval(() => {
        if (projectCount < 200) {
          setProjectCount((prevCount) => prevCount + 1);
        }
      }, 10);

      return () => {
        clearInterval(projectInterval);
      };
    }
  }, [isVisible, projectCount]);

  useEffect(() => {
    if (isVisible) {
      const yearsInterval = setInterval(() => {
        if (yearsCount < 6) {
          setYearsCount((prevCount) => prevCount + 1);
        }
      }, 200);

      return () => {
        clearInterval(yearsInterval);
      };
    }
  }, [isVisible, yearsCount]);

  return (
    <div
      id="counting-banner"
      className="relative w-full bg-[#399EFD] h-auto md:h-[200px] my-[50px]"
    >
      <div className="flex flex-col md:flex-row justify-center items-center h-full gap-6 py-6 md:py-0 md:gap-[205px] md:mx-10">
        <div className="50">
          <div className="font-MuseoSans font-semibold text-white text-[69px]">
            {employeeCount}+
          </div>
          <div className="font-MuseoSans font-semibold text-white text-[19px]">
            Employees
          </div>
        </div>
        <div className="">
          <div className="font-MuseoSans font-semibold text-white text-[69px]">
            {projectCount}+
          </div>
          <div className="font-MuseoSans font-semibold text-white text-[19px]">
            Successful Projects
          </div>
        </div>
        <div className="">
          <div className="font-MuseoSans font-semibold text-white text-[69px]">
            {yearsCount}+
          </div>
          <div className="font-MuseoSans font-semibold text-white text-[19px]">
            Years
          </div>
        </div>
      </div>

      <Image
        src={leftGroup}
        alt="leftGroup"
        className="hidden md:block absolute bottom-[-57px] left-0"
        width={250}
      />
      <Image
        src={rightGroup}
        alt="rightGroup"
        className="hidden md:block absolute bottom-[-50px] right-0"
        width={250}
      />
    </div>
  );
};

export default CountingBanner;
