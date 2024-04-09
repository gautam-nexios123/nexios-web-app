"use client";
import CustomButton from "@/common/CustomButton";
import bgBannerOne from "../assets/images/bg-1.png";
import bgBannertwo from "../assets/images/Rectangle-61-1.png";
import settingGif from "../assets/images/home/setting-gif.gif";
import Image from "next/image";
import ChooseNexios from "@/components/Home/ChooseNexios";
import WhoNexios from "@/components/Home/WhoNexios";
import DiscoverService from "@/components/Home/DiscoverService";
import Technology from "@/components/Home/Technology";
import OurClient from "@/components/Home/OurClient";
import ShedualeCall from "@/components/ShedualeCall";
import { useRef } from "react";
import { scrollToBottom } from "@/utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const scrollButtonRef = useRef(null);
  const router = useRouter();

  return (
    <div className="relative">
      <div className="">
        <h2 className="font-MuseoSans text-[30px] text-[#121212] font-normal text-center mx-8">
          <span className="font-bold">We Create Simple Solution</span> <br></br>{" "}
          For Your Complex Business Task
        </h2>
        <div className="w-full">
          <p className="font-MuseoSans text-[18px] text-[#9BA9B4] font-normal md:text-center text-justify lg:mx-auto lg:w-[60%] mx-5 pt-4">
            Nexios is a global technology partner that enables long-lasting
            value for businesses via the latest technologies. It provides a
            complete solution from concept to reality. We've worked with
            different industries creating mobile and web apps that solved
            business intricate problems in innovative ways that ease their
            operations.
          </p>
        </div>

        <div
          ref={scrollButtonRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 my-5"
        >
          <div className="animation-fadeInLeft">
            <CustomButton
              onSubmitButton={() => router.push("/portfolio")}
              bgColor="#399EFD"
              textColor="white"
              btnWidth="180px"
              text="Explore Our Portfolio"
            />
          </div>
          <div className="animation-fadeInRight">
            <CustomButton
              onSubmitButton={() => scrollToBottom()}
              bgColor="#121212"
              textColor="white"
              btnWidth="180px"
              text="Free Quote"
            />
          </div>
        </div>
        <div className="relative mt-12">
          <Image
            src={bgBannerOne}
            alt="bgBannerOne"
            className="mx-auto w-[60%] sm:w-[40%]"
          />
          <Image
            src={bgBannertwo}
            alt="bgBannerOne"
            className="absolute bottom-0"
          />
          <Image
            src={settingGif}
            alt="bgBannerOne"
            className="hidden sm:block absolute bottom-[38%] left-[10%]"
            width={100}
            height={100}
          />
        </div>
        <WhoNexios />
        <ChooseNexios />
        <DiscoverService />
        <Technology />
        <OurClient />
        <ShedualeCall />
      </div>
    </div>
  );
}
