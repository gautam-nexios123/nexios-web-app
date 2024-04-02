"use client";
import Image from "next/image";
import logo from "../assets/images/shedule-call.svg";
import CustomButton from "@/common/CustomButton";

const ShedualeCall = () => {
  const formSubmit = () => {};

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
            placeholder="Name*"
            className="bg-transparent mb-3 text-white border-b placeholder-white p-2"
          />
          <input
            type="text"
            placeholder="Work Email"
            className="bg-transparent mb-3 text-white border-b placeholder-white p-2"
          />
          <input
            type="text"
            placeholder="Phone"
            className="bg-transparent mb-3 text-white border-b placeholder-white p-2"
          />
          <input
            type="text"
            placeholder="Share your requirements in brief"
            className="bg-transparent mb-3 text-white border-b placeholder-white p-2"
          />
          <div className="mt-5 mb-11">
            <CustomButton
              onSubmitButton={formSubmit}
              bgColor="#FFFF"
              textColor="#399EFD"
              btnWidth="150px"
              text="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShedualeCall;
