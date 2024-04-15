"use client";
import Image from "next/image";
import logo from "../assets/images/shedule-call.svg";
import CustomButton from "@/common/CustomButton";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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
      toast.success("Successfully Submited!");
    }
  };

  return (
    <div className="w-full md:flex">
      <Toaster />
      <div className="w-full md:w-[50%] flex items-center justify-center py-[50px]">
        <Image src={logo} alt="24hour_logo" className="mx-auto w-[520px] h-[450px]" />
      </div>
      <div className="bg-[#399EFD] w-full md:w-[50%] pl-6 pt-12">
        <div className="text-[#FFFFFF] font-MuseoSans font-semibold underline text-[42px] pb-8">
          Schedule a Call
        </div>
        <div className="w-[100%]">
          <div className="mb-8">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="bg-transparent w-[80%] lg:w-[65%] text-white text-[20px] border-b outline-none placeholder-white p-2"
              onChange={(e) => handleOnChange(e)}
            />
            {error?.name && (
              <div className="font-MuseoSans font-normal text-red-600 text-[18px]">
                {error?.name}
              </div>
            )}
          </div>
          <div className="mb-8">
            <input
              type="text"
              name="email"
              placeholder="Work Email"
              className="bg-transparent w-[80%] lg:w-[65%] text-white text-[20px] border-b outline-none placeholder-white p-2"
              onChange={(e) => handleOnChange(e)}
            />
            {error?.email && (
              <div className="font-MuseoSans font-normal text-red-600 text-[18px]">
                {error?.email}
              </div>
            )}
          </div>
          <div className="mb-8">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="bg-transparent w-[80%] lg:w-[65%] text-white text-[20px] border-b outline-none placeholder-white p-2"
              onChange={(e) => handleOnChange(e)}
            />
            {error?.phone && (
              <div className="font-MuseoSans font-normal text-red-600 text-[18px]">
                {error?.phone}
              </div>
            )}
          </div>
          <div className="mb-8">
            <input
              type="text"
              name="brif"
              placeholder="Share your requirements in brief"
              className="bg-transparent w-[80%] lg:w-[65%] text-white text-[20px] border-b outline-none placeholder-white p-2"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="pt-4 pb-11">
            <CustomButton
              onSubmitButton={formSubmit}
              bgColor="#FFFF"
              textColor="#399EFD"
              btnWidth="120px"
              text="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShedualeCall;
