"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const ServicesDropDown = ({ setIsServicesDropdownOpen }) => {
  const router = useRouter();
  const location = usePathname();

  return (
    <div className="py-2">
      <div
        className={`px-4 py-2 ${
          location === "/mobile-app-development"
            ? "text-[#399EFD]"
            : "text-[#121212]"
        } font-normal text-xs whitespace-nowrap cursor-pointer hover:bg-gray-100`}
        onClick={() => {
          setIsServicesDropdownOpen(false);
          router.push("/mobile-app-development");
        }}
      >
        Mobile App Development
      </div>
      <div
        className={`px-4 py-2 ${
          location === "/web-development" ? "text-[#399EFD]" : "text-[#121212]"
        } font-normal text-xs whitespace-nowrap cursor-pointer hover:bg-gray-100`}
        onClick={() => {
          setIsServicesDropdownOpen(false);
          router.push("/web-development");
        }}
      >
        Website Development
      </div>
      <div
        className={`px-4 py-2 ${
          location === "/ui-ux" ? "text-[#399EFD]" : "text-[#121212]"
        } font-normal text-xs whitespace-nowrap cursor-pointer hover:bg-gray-100`}
        onClick={() => {
          setIsServicesDropdownOpen(false);
          router.push("/ui-ux");
        }}
      >
        UI & UX
      </div>
      <div
        className={`px-4 py-2 ${
          location === "/internet-of-things"
            ? "text-[#399EFD]"
            : "text-[#121212]"
        } font-normal text-xs whitespace-nowrap cursor-pointer hover:bg-gray-100`}
        onClick={() => {
          setIsServicesDropdownOpen(false);
          router.push("/internet-of-things");
        }}
      >
        Internet of Things
      </div>
      <div
        className={`px-4 py-2 ${
          location === "/qa" ? "text-[#399EFD]" : "text-[#121212]"
        } font-normal text-xs whitespace-nowrap cursor-pointer hover:bg-gray-100`}
        onClick={() => {
          setIsServicesDropdownOpen(false);
          router.push("/qa");
        }}
      >
        QA
      </div>
    </div>
  );
};

export default ServicesDropDown;
