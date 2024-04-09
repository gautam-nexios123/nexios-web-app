"use client";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";
import Image from "next/image";
import squreBig from "../../assets/images/contact-us/squre-big.svg";
import circleBlank from "../../assets/images/about/circle-blank.svg";
import squreLight from "../../assets/images/about/squre-light.svg";
import circlesolid from "../../assets/images/about/circle-solid.svg";
import girlImg from "../../assets/images/contact-us/girl-img.svg";
import kamla from "../../assets/images/contact-us/kamla.svg";
import lightCircle from "../../assets/images/contact-us/light-circle.svg";
import peopleImg from "../../assets/images/contact-us/people-img.svg";
import downArrow from "../../assets/images/contact-us/down-arrow.svg";
import mentop from "../../assets/images/contact-us/men-top.svg";
const ContactUs = () => {
  return (
    <div className="relative bg-[#EDF5FF] w-full pt-[50px] md:pt-[100px] pb-[80px]">
      <div className="text-center pb-3 text-[#9BA9B4] font-MuseoSans font-semibold text-[18px]">
        Contact Us
      </div>
      <div className="text-center pb-6 text-[#121212] font-MuseoSans font-semibold text-[20px]">
        Lets Get In Touch Now
      </div>
      <ContactForm />
      <Image
        src={squreBig}
        alt="squre"
        className="hidden md:block w-[130px] absolute top-0 left-[8%]"
      />
      <Image
        src={circleBlank}
        alt="circleBlank"
        className="hidden md:block w-[18px] absolute top-[40%] left-[8%]"
      />
      <Image
        src={girlImg}
        alt="girlImg"
        className="hidden lg:block h-[200px] absolute bottom-0 left-[10%]"
      />
      <Image
        src={lightCircle}
        alt="lightCircle"
        className="hidden lg:block w-[130px] absolute bottom-[16%] left-[11.5%]"
      />
      <Image
        src={kamla}
        alt="kamla"
        className="hidden lg:block w-[60px] absolute bottom-0 left-[8%]"
      />
      <Image
        src={peopleImg}
        alt="peopleImg"
        className="hidden lg:block h-[200px] absolute right-[8%] bottom-0"
      />
      <Image
        src={downArrow}
        alt="downArrow"
        className="hidden lg:block absolute w-[150px] top-[25%] right-[15%]"
      />
      <Image
        src={squreLight}
        alt="squreLight"
        className="hidden md:block w-[20px] absolute top-[5%] right-[50%]"
      />
      <Image
        src={squreLight}
        alt="squreLight"
        className="hidden md:block w-[60px] absolute top-[5%] right-[5%]"
      />
      <Image
        src={circleBlank}
        alt="circleBlank"
        className="hidden md:block w-[15px] absolute top-[10%] right-[16%]"
      />
      <Image
        src={circleBlank}
        alt="circleBlank"
        className="hidden md:block w-[40px] absolute bottom-3 left-[50%]"
      />
      <Image
        src={circlesolid}
        alt="circlesolid"
        className="hidden md:block w-[60px] absolute bottom-[40%] right-[10%]"
      />
      <Image
        src={mentop}
        alt="mentop"
        className="hidden md:block w-[100px] absolute top-[18%] right-[18%] lg:right-[28%]"
      />
    </div>
  );
};

export default ContactUs;
