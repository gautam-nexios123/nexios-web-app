import React from "react";
import logo from "../../assets/images/footer-Logo.svg";
import fbImg from "../../assets/images/facebook.svg";
import instagramImg from "../../assets/images/instagram.svg";
import twiterImg from "../../assets/images/twiter.svg";

import locationImg from "../../assets/images/location.svg";
import phoneImg from "../../assets/images/phone.svg";
import mailImg from "../../assets/images/mail.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#1B1C30]">
      <div className="flex flex-wrap lg:flex-nowrap gap-[80px] lg:mx-20 mx-10 py-12">
        <div className="">
          <Image src={logo} alt="logo" className="w-[179px] h-[43px] mb-8" />
          <div className="font-MuseoSans font-normal text-[18px] text-[#9BA9B4] mb-10">
            nexios allows businesses to narrow the technology gap in their
            organization and get a competitive edge through innovative software
            development solutions tailored to their goals.
          </div>
          <div className="flex items-center gap-6">
            <Image
              src={fbImg}
              alt="fbImg"
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <Image
              src={instagramImg}
              alt="instagramImg"
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <Image
              src={twiterImg}
              alt="twiterImg"
              className="w-[30px] h-[30px] cursor-pointer"
            />
          </div>
        </div>
        <div className="">
          <div className="text-white font-MuseoSans font-semibold text-xl pb-4">
            Company
          </div>
          <div className="font-MuseoSans font-normal text-[18px] text-[#9BA9B4]">
            Home
          </div>
          <div className="font-MuseoSans font-normal text-[18px] text-[#9BA9B4]">
            About Us
          </div>
          <div className="font-MuseoSans font-normal text-[18px] text-[#9BA9B4]">
            Portfolio
          </div>
          <div className="font-MuseoSans font-normal text-[18px] text-[#9BA9B4]">
            Careers
          </div>
          <div className="font-MuseoSans font-normal text-[18px] text-[#9BA9B4]">
            Contact Us
          </div>
        </div>
        <div className="">
          <div className="text-white font-MuseoSans font-semibold text-xl pb-4">
            Services
          </div>
          <div className="font-MuseoSans whitespace-nowrap font-normal text-[18px] text-[#9BA9B4]">
            Mobile App Development
          </div>
          <div className="font-MuseoSans whitespace-nowrap font-normal text-[18px] text-[#9BA9B4]">
            Web Development UI &
          </div>
          <div className="font-MuseoSans whitespace-nowrap font-normal text-[18px] text-[#9BA9B4]">
            UX Internet Of Things
          </div>
          <div className="font-MuseoSans whitespace-nowrap font-normal text-[18px] text-[#9BA9B4]">
            Quality Assurance
          </div>
        </div>
        <div className="">
          <div className="text-white font-MuseoSans font-semibold text-xl pb-4">
            Get In Touch
          </div>
          <div className="font-MuseoSans flex items-start gap-2 font-normal text-[18px] text-[#9BA9B4]">
            <Image src={locationImg} alt="location" className="mt-1" />
            707, Silver Trade Center, near Oxygen Park, Digital Valley (Uttran),
            Surat, Gujarat 394105
          </div>
          <div className="font-MuseoSans flex items-center gap-2 font-normal text-[18px] text-[#9BA9B4]">
            <Image src={phoneImg} alt="location" />
            +91 88668 56039
          </div>
          <div className="font-MuseoSans flex items-center gap-2 font-normal text-[18px] text-[#9BA9B4]">
            <Image src={mailImg} alt="location" />
            info@nexios.in
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#9BA9B4]"></div>
      <div className="text-[#9BA9B4] font-MuseoSans font-normal text-sm text-center py-4">
        © 2022 nexios technologies, | All right reserved Terms of Services |
        Privacy Policy
      </div>
    </div>
  );
};

export default Footer;
