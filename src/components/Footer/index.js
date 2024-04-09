"use client";
import React from "react";
import logo from "../../assets/images/footer-Logo.svg";
import fbImg from "../../assets/images/facebook.svg";
import instagramImg from "../../assets/images/instagram.svg";
import linkDinIcon from "../../assets/images/icons8-linkedin.svg";

import locationImg from "../../assets/images/location.svg";
import phoneImg from "../../assets/images/phone.svg";
import mailImg from "../../assets/images/mail.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-[#1B1C30] my-auto">
      <div className="flex flex-wrap lg:flex-nowrap gap-[40px] lg:gap-[80px] lg:mx-20 mx-10 py-12">
        <div className="">
          <Image src={logo} alt="logo" className="w-[140px] h-[43px] mb-4" />
          <div className="font-MuseoSans text-justify font-normal text-[16px] text-[#9BA9B4] mb-10 lg:w-[80%]">
            nexios allows businesses to narrow the technology gap in their
            organization and get a competitive edge through innovative software
            development solutions tailored to their goals.
          </div>
          <div className="flex items-center gap-6">
            <Image
              src={fbImg}
              alt="fbImg"
              className="w-[25px] h-[25px] cursor-pointer"
            />
            <Image
              src={instagramImg}
              alt="instagramImg"
              className="w-[25px] h-[25px] cursor-pointer"
            />
            <a
              href="https://www.linkedin.com/company/nexiostechnologies/"
              target="_blank"
            >
              <Image
                src={linkDinIcon}
                alt="linkDinIcon"
                className="w-[30px] h-[30px] cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="">
          <div className="text-white font-MuseoSans font-semibold text-[18px] pb-4">
            Company
          </div>
          <div
            onClick={() => router.push("/")}
            className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] hover:text-[#399EFD] cursor-pointer pb-3"
          >
            Home
          </div>
          <div
            onClick={() => router.push("/about")}
            className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] hover:text-[#399EFD] cursor-pointer pb-3"
          >
            About Us
          </div>
          <div
            onClick={() => router.push("/portfolio")}
            className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] hover:text-[#399EFD] cursor-pointer pb-3"
          >
            Portfolio
          </div>
          <div
            onClick={() => router.push("/career")}
            className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] hover:text-[#399EFD] cursor-pointer pb-3"
          >
            Careers
          </div>
          <div
            onClick={() => router.push("/contact-us")}
            className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] hover:text-[#399EFD] cursor-pointer pb-3"
          >
            Contact Us
          </div>
        </div>
        <div className="">
          <div className="text-white font-MuseoSans font-semibold text-[18px] pb-4">
            Services
          </div>
          <div className="font-MuseoSans whitespace-nowrap font-normal text-[16px] text-[#9BA9B4] pb-3">
            Mobile App Development
          </div>
          <div className="font-MuseoSans whitespace-nowrap font-normal text-[16px] text-[#9BA9B4] pb-3">
            Web Development UI &
          </div>
          <div className="font-MuseoSans whitespace-nowrap font-normal text-[16px] text-[#9BA9B4] pb-3">
            UX Internet Of Things
          </div>
          <div className="font-MuseoSans whitespace-nowrap font-normal text-[16px] text-[#9BA9B4] pb-3">
            Quality Assurance
          </div>
        </div>
        <div className="">
          <div className="text-white font-MuseoSans font-semibold text-[18px] pb-4">
            Get In Touch
          </div>
          <div className="font-MuseoSans flex items-start gap-2 font-normal text-[16px] text-[#9BA9B4] pb-4">
            <Image src={locationImg} alt="location" className="mt-1" />
            707, Silver Trade Center, near Oxygen Park, Digital Valley (Uttran),
            Surat, Gujarat 394105
          </div>
          <div className="font-MuseoSans flex items-center gap-2 font-normal text-[16px] text-[#9BA9B4] pb-4">
            <Image src={phoneImg} alt="location" />
            +91 88668 56039
          </div>
          <div className="font-MuseoSans flex items-center gap-2 font-normal text-[16px] text-[#9BA9B4]">
            <Image src={mailImg} alt="location" />
            info@nexios.in
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#9BA9B4]"></div>
      <div className="text-[#9BA9B4] font-MuseoSans font-normal text-[12px] text-center py-4">
        ©2024 nexios technologies, | All right reserved Terms of Services |
        Privacy Policy
      </div>
    </div>
  );
};

export default Footer;
