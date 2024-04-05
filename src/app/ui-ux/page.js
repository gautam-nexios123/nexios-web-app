import React from "react";
import TopBanner from "../../assets/images/services/ui-ux-top-right-.png";
import CountingBanner from "@/common/CountingBanner";
import ServiceTopMainContent from "@/components/Services/ServiceTopMainContent";
import mobilePic from "../../assets/images/services/ui-ux-mobile.png";
import Image from "next/image";

const UiAndUx = () => {
  return (
    <div className="relative">
      <ServiceTopMainContent
        text="UI/UX"
        description="UI/UX designers are responsible for creating the look and feel of a website or application, and they use a variety of software programs to do so. Some of the most popular UI/UX programs include Figma, Adobe XD, Adobe Illustrator, and Photoshop."
        banner={TopBanner}
      />
      <div className="w-full mt-16">
        <div className="font-MuseoSans font-normal text-[14px] text-[#9BA9B4] w-[80%] md:w-[75%] lg:w-[60%] mx-auto text-justify md:text-center">
          Whether you’re looking for a designer to create a new user interface
          or improve existing ones, we have a talented professional in-house who
          can help. One of the most popular tools for UI/UX designers are Figma
          and Adobe XD. This program is versatile and user-friendly, making it
          perfect for creating high-quality user interfaces and user experience
          designs. Additionally, Vector Image is another powerful tool that can
          be used for UI/UX design. This program allows you to create vector
          illustrations that can be used in user interfaces and other graphical
          elements. So if you’re looking for a designer who can help you design
          stunning user interfaces and user experience designs, look no further
          than the professionals at Figma or Adobe XD.
        </div>
      </div>

      <div className="w-full mt-20">
        <div className="w-[80%] lg:w-[70%] mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[50%] ">
            <Image src={mobilePic} alt="pic" width={380} className="mx-auto" />
          </div>
          <div className="w-full md:w-[50%]">
            <div className="font-MuseoSans text-[#121212] font-semibold text-[24px] pb-3">
              What We Provides
            </div>
            <div className="font-MuseoSans text-[#9BA9B4] font-normal text-[14px] text-justify pb-2">
              UI/UX is a field that’s growing more and more in popularity, and
              for good reason. It’s an important part of any web or mobile
              application, and it can make a big difference in how users feel
              about your site or app.
            </div>
            <div className="font-MuseoSans text-[#9BA9B4] font-normal text-[14px] text-justify pb-2">
              Another great tool for UI/UX design is Figma. It’s a web-based
              design platform that lets you create user interfaces and user
              experience designs in a drag-and-drop format. It also has built-in
              support for prototyping and testing, so you can quickly see how
              your designs look in different scenarios.
            </div>
          </div>
        </div>
      </div>

      <CountingBanner />
    </div>
  );
};

export default UiAndUx;
