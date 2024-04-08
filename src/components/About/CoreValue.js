import Image from "next/image";
import React from "react";
import transImg from "../../assets/images/about/transImg.svg";
import contiImg from "../../assets/images/about/conti-groth.svg";
import serviceImg from "../../assets/images/about/service-img.svg";
import valueImg from "../../assets/images/about/value-img.svg";
import { Zoom_In_Animation } from "../Animations";

const CoreValue = () => {
  const cardData = [
    {
      image: transImg,
      title: "Transparency",
      description:
        "We value the confidence our clients put in us to deliver quality services and always give our clients full visibility over their projects so they always know what they are paying for.",
    },
    {
      image: contiImg,
      title: "Continuous Growth",
      description:
        "We are dedicated to serving you better and always keep ourselves on the pulse of emerging technology to ensure that our services evolve as we grow while keeping up with its dynamic nature.",
    },
    {
      image: serviceImg,
      title: "Service",
      description:
        "Everything we do revolves around our clients and we take our time to capture their vision to ensure that our services not only go beyond their expectations but also align with their goals.",
    },
    {
      image: valueImg,
      title: "Value",
      description:
        "We lead our clients along the shortest path to business success through cost-effective solutions, drawing from the best talent, emerging technology, products, and tools that add value to their business.",
    },
  ];

  return (
    <div className="my-10 w-full relative">
      <Zoom_In_Animation>
        <div className="relative font-MuseoSans font-semibold text-[#121212] text-[24px] text-center">
          Our Core Values
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[190px] mx-auto mt-[-15px]"></div>
        </div>
      </Zoom_In_Animation>
      <div className="w-full px-[30px] lg:px-[160px] flex flex-wrap flex-col md:flex-row justify-between gap-5 mt-12">
        {cardData?.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-3xl flex flex-col md:flex-row gap-6 w-full md:w-[48%] p-6 rounded-2xl"
          >
            <Image
              src={item?.image}
              alt="trans"
              width={100}
              className="mx-auto"
            />
            <div className="">
              <div className="font-MuseoSans font-semibold text-center md:text-start text-xl text-black pb-2">
                {item?.title}
              </div>
              <div className="font-MuseoSans font-normal text-sm text-[#9BA9B4] text-justify">
                {item?.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValue;
