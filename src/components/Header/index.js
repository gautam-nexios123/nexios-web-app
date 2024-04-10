"use client";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/Logo.svg";
import menuIcon from "../../assets/images/menu-icon.png";
import closeIcon from "../../assets/images/close.svg";
import CustomButton from "../../common/CustomButton";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Drawer } from "@mui/material";
import ServicesDropDown from "./ServicesDropDown";
import { scrollToBottom } from "@/utils";

const Header = () => {
  const scrollButtonRef = useRef(null);
  const location = usePathname();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const getCurrentPath = () => {
    let path;
    switch (location) {
      case "/":
        path = "home";
        break;
      case "/about-us":
        path = "about-us";
        break;
      case "/portfolio":
        path = "portfolio";
        break;
      case "/career":
        path = "career";
        break;
      case "/contact-us":
        path = "contact-us";
        break;
      default:
        path = "";
        break;
    }
    setCurrentPath(path);
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    getCurrentPath();
  }, [location]);

  const handleMenuClick = (path) => {
    router.push(path);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="main-container px-[40px] w-full flex items-center justify-between py-3">
      <Image
        onClick={() => router.push("/")}
        src={logo}
        alt="logo"
        className="w-[95px] h-[65px] cursor-pointer"
      />
      <div className="hidden lg:flex items-center gap-6">
        {[
          "home",
          "about-us",
          "portfolio",
          "services",
          "career",
          "contact-us",
        ]?.map((path) => (
          <MenuItem
            key={path}
            path={path}
            currentPath={currentPath}
            handleMenuClick={handleMenuClick}
            isServicesDropdownOpen={isServicesDropdownOpen}
            setIsServicesDropdownOpen={setIsServicesDropdownOpen}
          />
        ))}
        <div ref={scrollButtonRef}>
          <CustomButton
            onSubmitButton={() => scrollToBottom()}
            bgColor="#399EFD"
            textColor="white"
            btnWidth="110px"
            text="Free Quote"
          />
        </div>
      </div>
      <Image
        className="lg:hidden cursor-pointer"
        src={isDrawerOpen ? closeIcon : menuIcon}
        alt="menu"
        width={25}
        height={25}
        onClick={toggleDrawer}
      />
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <Image
          onClick={toggleDrawer}
          className="ml-auto mr-6 my-6 cursor-pointer"
          src={closeIcon}
          alt="close"
          width={30}
          height={30}
        />
        <DrawerContent
          currentPath={currentPath}
          handleMenuClick={handleMenuClick}
          isServicesDropdownOpen={isServicesDropdownOpen}
          setIsServicesDropdownOpen={setIsServicesDropdownOpen}
        />
      </Drawer>
    </div>
  );
};

const MenuItem = ({
  path,
  currentPath,
  handleMenuClick,
  isServicesDropdownOpen,
  setIsServicesDropdownOpen,
}) => {
  const formattedPath = path.replace("-", " ");
  const isServices = path === "services";

  const handleClick = () => {
    handleMenuClick(`/${path === "home" ? "" : path}`);
  };

  return (
    <div
      onClick={!isServices ? handleClick : () => {}}
      onMouseEnter={() => isServices && setIsServicesDropdownOpen(true)}
      onMouseLeave={() => isServices && setIsServicesDropdownOpen(false)}
      className={`font-MuseoSans font-normal text-[19px] capitalize ${
        currentPath === path ? "text-[#399EFD]" : "text-[#121212]"
      } cursor-pointer`}
    >
      {isServices ? (
        <>
          <div>{formattedPath}</div>
          {isServicesDropdownOpen && (
            <div className="absolute bg-white border border-gray-200 shadow-lg z-50">
              <ServicesDropDown
                setIsServicesDropdownOpen={setIsServicesDropdownOpen}
              />
            </div>
          )}
        </>
      ) : (
        formattedPath
      )}
    </div>
  );
};

const DrawerContent = ({
  currentPath,
  handleMenuClick,
  isServicesDropdownOpen,
  setIsServicesDropdownOpen,
}) => {
  return (
    <div className="px-[70px]">
      {[
        "home",
        "about-us",
        "portfolio",
        "services",
        "career",
        "contact-us",
      ]?.map((path) => (
        <div className="pb-2">
          <MenuItem
            key={path}
            path={path}
            currentPath={currentPath}
            handleMenuClick={handleMenuClick}
            isServicesDropdownOpen={isServicesDropdownOpen}
            setIsServicesDropdownOpen={setIsServicesDropdownOpen}
          />
        </div>
      ))}
      <div className="mt-4">
        <CustomButton
          onSubmitButton={() => scrollToBottom()}
          bgColor="#399EFD"
          textColor="white"
          btnWidth="130px"
          text="Free Quote"
        />
      </div>
    </div>
  );
};

export default Header;
