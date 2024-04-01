"use client";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logo.svg";
import CustomButton from "../../common/CustomButton";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const location = usePathname();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  const getCurrentPath = () => {
    if (location === "/") {
      setCurrentPath("home");
    } else if (location === "/about") {
      setCurrentPath("about");
    }
  };

  useEffect(() => {
    getCurrentPath();
  }, [location]);

  return (
    <div className="bg-white w-full flex items-center justify-around py-3">
      <Image src={logo} alt="logo" className="w-[95px] h-[65px]" />
      <div className="flex items-center gap-6">
        <div
          onClick={() => router.push("/")}
          className={`font-MuseoSans font-normal text-lg ${
            currentPath === "home" ? "text-[#399EFD]" : "text-[#121212]"
          } cursor-pointer`}
        >
          Home
        </div>
        <div
          onClick={() => router.push("/about")}
          className={`font-MuseoSans font-normal text-lg ${
            currentPath === "about" ? "text-[#399EFD]" : "text-[#121212]"
          } cursor-pointer`}
        >
          About Us
        </div>
        <div
          className={`font-MuseoSans font-normal text-lg text-[#121212] cursor-pointer`}
        >
          Portfolio
        </div>
        <div
          className={`font-MuseoSans font-normal text-lg text-[#121212] cursor-pointer`}
        >
          Services
        </div>
        <div
          className={`font-MuseoSans font-normal text-lg text-[#121212] cursor-pointer`}
        >
          Career
        </div>
        <div
          className={`font-MuseoSans font-normal text-lg text-[#121212] cursor-pointer`}
        >
          Contact Us
        </div>
        <CustomButton
          bgColor="#399EFD"
          textColor="white"
          btnWidth="151px"
          text="Free Quote"
        />
      </div>
    </div>
  );
};

export default Header;
