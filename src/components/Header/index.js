"use client";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logo.svg";
import menuIcon from "../../assets/images/menu-icon.png";
import closeIcon from "../../assets/images/close.svg";
import CustomButton from "../../common/CustomButton";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const location = usePathname();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

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

  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="bg-white w-full flex items-center justify-between lg:justify-around py-3 px-10 lg:px-0">
      <Image src={logo} alt="logo" className="w-[95px] h-[65px]" />
      <div className="hidden lg:flex items-center gap-6">
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
          className="relative"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <div
            className={`font-MuseoSans font-normal text-lg ${
              isServicesDropdownOpen ? "text-[#399EFD]" : "text-[#121212]"
            } cursor-pointer`}
          >
            Services
          </div>
          {isServicesDropdownOpen && (
            <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 shadow-lg z-50">
              <div className="py-2">
                <div
                  className="px-4 py-2 text-black font-medium text-base whitespace-nowrap cursor-pointer hover:bg-gray-100"
                  // onClick={() => router.push("/service1")}
                >
                  Mobile App Development
                </div>
                <div
                  className="px-4 py-2 font-medium text-base whitespace-nowrap cursor-pointer hover:bg-gray-100"
                  // onClick={() => router.push("/service2")}
                >
                  Website Development
                </div>
                <div
                  className="px-4 py-2 font-medium text-base whitespace-nowrap cursor-pointer hover:bg-gray-100"
                  // onClick={() => router.push("/service2")}
                >
                  UI & UX
                </div>
                <div
                  className="px-4 py-2 font-medium text-base whitespace-nowrap cursor-pointer hover:bg-gray-100"
                  // onClick={() => router.push("/service2")}
                >
                  Internet of Things
                </div>
                <div
                  className="px-4 py-2 font-medium text-base whitespace-nowrap cursor-pointer hover:bg-gray-100"
                  // onClick={() => router.push("/service2")}
                >
                  QA
                </div>
              </div>
            </div>
          )}
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
      <Image
        className="lg:hidden cursor-pointer"
        src={menuIcon}
        alt="menu"
        width={25}
        height={25}
        onClick={toggleDrawer}
      />
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-2xl z-50 transition-transform duration-500">
          <Image
            onClick={() => setIsDrawerOpen(false)}
            className="ml-auto mr-6 my-6 cursor-pointer"
            src={closeIcon}
            alt="close"
            width={30}
            height={30}
          />
          <div className="ml-10">
            <div
              onClick={() => router.push("/")}
              className={`font-MuseoSans font-normal pb-2 text-lg ${
                currentPath === "home" ? "text-[#399EFD]" : "text-[#121212]"
              } cursor-pointer`}
            >
              Home
            </div>
            <div
              onClick={() => router.push("/about")}
              className={`font-MuseoSans font-normal pb-2 text-lg ${
                currentPath === "about" ? "text-[#399EFD]" : "text-[#121212]"
              } cursor-pointer`}
            >
              About Us
            </div>
            <div
              className={`font-MuseoSans font-normal pb-2 text-lg text-[#121212] cursor-pointer`}
            >
              Portfolio
            </div>
            <div
              className={`font-MuseoSans font-normal pb-2 text-lg text-[#121212] cursor-pointer`}
            >
              Services
            </div>
            <div
              className={`font-MuseoSans font-normal pb-2 text-lg text-[#121212] cursor-pointer`}
            >
              Career
            </div>
            <div
              className={`font-MuseoSans font-normal pb-4 text-lg text-[#121212] cursor-pointer`}
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
      )}
    </div>
  );
};

export default Header;
