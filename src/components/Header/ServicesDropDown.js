"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const services = [
  { path: "/mobile-app-development", label: "Mobile App Development" },
  { path: "/web-development", label: "Website Development" },
  { path: "/ui-ux", label: "UI & UX" },
  { path: "/internet-of-things", label: "Internet of Things" },
  { path: "/qa", label: "QA" },
];

const ServicesDropDown = ({ setIsServicesDropdownOpen }) => {
  const router = useRouter();
  const location = usePathname();

  const handleServiceClick = (path) => {
    setIsServicesDropdownOpen(false);
    router.push(path);
  };

  return (
    <div className="py-2">
      {services?.map((service) => (
        <div
          key={service.path}
          className={`px-4 py-2 ${
            location === service.path ? "text-[#399EFD]" : "text-[#121212]"
          } font-normal text-xs whitespace-nowrap cursor-pointer hover:bg-gray-100`}
          onClick={() => handleServiceClick(service.path)}
        >
          {service.label}
        </div>
      ))}
    </div>
  );
};

export default React.memo(ServicesDropDown);
