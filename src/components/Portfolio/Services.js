"use client";
import React from "react";
import serviceOne from "../../assets/images/portfolio/s1.svg";
import serviceTwo from "../../assets/images/portfolio/s2.svg";
import serviceThree from "../../assets/images/portfolio/s3.svg";
import serviceFour from "../../assets/images/portfolio/s4.svg";
import serviceFive from "../../assets/images/portfolio/s5.svg";
import serviceSix from "../../assets/images/portfolio/s6.svg";
import Image from "next/image";

const servicesData = [
  {
    image: serviceOne,
    title: "Concierge Service App",
    description:
      "Your exclusive personal concierge and lifestyle management service, helping improve your work-life balance, connecting you to lifestyle experts and advisors through your mobile device.",
  },
  {
    image: serviceTwo,
    title: "Courier Delivery App",
    description:
      "Designed to improve the consistency of our operations and process efficiency, and add value to the customer through time and cost savings.",
  },
  {
    image: serviceThree,
    title: "HomeHealth Services App",
    description:
      "HOMECARE2GO® is created to connect people seeking help to verified care providers that can serve them...",
  },
  {
    image: serviceFour,
    title: "Stylist Booking App",
    description:
      "This app is a marketplace for beauty and grooming where the customer can easily discover beautician and stylist and book them online at their preferred location.",
  },
  {
    image: serviceFive,
    title: "Place For Online Car Auctions",
    description:
      "Sell Buy Drive Auctions Are Designed To Provide The Best Experience For Buyers And Sellers Alike.",
  },
  {
    image: serviceSix,
    title: "Care Coordinations App",
    description:
      "Care Coordinations is HIPAA secured & AI-powered communication app for Home Health & Hospice Care Organizations...",
  },
];

const Services = () => {
  return (
    <div className="mt-10 w-full px-[30px] md:px-[60px] lg:px-[150px] xl:px-[220px]">
      {servicesData?.map((service, index) => (
        <div
          key={index}
          className="w-[100%] mx-auto flex flex-col md:flex-row lg:flex-row items-center"
        >
          {index % 2 === 0 ? (
            <>
              <div className="w-full lg:w-[50%] pb-4 md:pb-0 lg:pb-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-fit h-full"
                />
              </div>
              <div className="w-full lg:w-[50%] m-auto  pb-4 md:pb-0 lg:pb-0">
                <div className="font-MuseoSans font-semibold text-[#121212] text-[24px] text-center pb-3">
                  {service.title}
                </div>
                <div className="px-10 font-MuseoSans font-semibold text-[#9BA9B4] text-[12px] text-justify lg:text-center md:line-clamp-6 lg:line-clamp-none">
                  {service.description}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full lg:w-[50%] m-auto  pb-4 md:pb-0 lg:pb-0">
                <div className="font-MuseoSans font-semibold text-[#121212] text-[24px] text-center pb-3">
                  {service.title}
                </div>
                <div className="px-10 font-MuseoSans font-semibold text-[#9BA9B4] text-[12px] text-justify lg:text-center md:line-clamp-6 lg:line-clamp-none">
                  {service.description}
                </div>
              </div>
              <div className="w-full lg:w-[50%] pb-4 md:pb-0 lg:pb-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-fit h-full"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;
