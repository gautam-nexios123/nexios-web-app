"use client";
import Image from "next/image";
import logo from "../assets/images/shedule-call.svg";
import CustomButton from "@/common/CustomButton";
import { useState } from "react";

const ShedualeCall = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brif: "",
  });
  const [error, setError] = useState({});

  const handleError = () => {
    let isValid = false;

    let newErrors = {};

    if (!formData?.name) {
      newErrors.name = "Name is required*";
      isValid = true;
    }
    if (!formData?.email) {
      newErrors.email = "Email is required*";
      isValid = true;
    }
    if (!formData?.phone) {
      newErrors.phone = "Phone is required*";
      isValid = true;
    }
    setError(newErrors);
    return isValid;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };

  const formSubmit = () => {
    if (handleError()) {
      console.log("Faillllllllll");
    } else {
      console.log("Sucess");
    }
  };

  return (
    <div className="w-full md:flex">
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <Image src={logo} alt="" width={350} height={200} className="mx-auto" />
      </div>
      <div className="bg-[#399EFD] w-full md:w-[50%] pl-6 pt-8">
        <div className="text-[#FFFFFF] font-MuseoSans font-semibold underline text-[24px] pb-3">
          Schedule a Call
        </div>
        <div className="flex flex-col w-[70%]">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="bg-transparent mb-3 text-white border-b placeholder-white p-2"
            onChange={(e) => handleOnChange(e)}
          />
          {error?.name && (
            <div className="font-MuseoSans font-normal text-red-600 text-sm">
              {error?.name}
            </div>
          )}
          <input
            type="text"
            name="email"
            placeholder="Work Email"
            className="bg-transparent mb-3 text-white border-b placeholder-white p-2"
            onChange={(e) => handleOnChange(e)}
          />
          {error?.email && (
            <div className="font-MuseoSans font-normal text-red-600 text-sm">
              {error?.email}
            </div>
          )}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="bg-transparent mb-3 text-white border-b placeholder-white p-2"
            onChange={(e) => handleOnChange(e)}
          />
          {error?.phone && (
            <div className="font-MuseoSans font-normal text-red-600 text-sm">
              {error?.phone}
            </div>
          )}
          <input
            type="text"
            name="brif"
            placeholder="Share your requirements in brief"
            className="bg-transparent mb-3 text-white border-b placeholder-white p-2"
            onChange={(e) => handleOnChange(e)}
          />
          <div className="mt-5 mb-11">
            <CustomButton
              onSubmitButton={formSubmit}
              bgColor="#FFFF"
              textColor="#399EFD"
              btnWidth="100px"
              text="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShedualeCall;
