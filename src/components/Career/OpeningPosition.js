"use client";
import CustomButton from "@/common/CustomButton";
import { useRouter } from "next/navigation";
import React from "react";
import { Zoom_In_Animation } from "../Animations";

const OpeningPosition = () => {
  const router = useRouter();

  const openPositionData = [
    {
      name: "Laravel Developer",
      vacancy: "05",
      experience: "3 to 8",
    },
    {
      name: "Android Developer",
      vacancy: "03",
      experience: "3 to 8",
    },
    {
      name: "ios Developer",
      vacancy: "03",
      experience: "1 to 5",
    },
  ];

  return (
    <div className="w-full mb-[80px]">
      <Zoom_In_Animation>
        <div className="font-MuseoSans font-normal text-[18px] sm:text-[24px] text-[#121212] pb-4 text-center">
          Opening <span className="font-semibold">Position</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[145px] mx-auto sm:w-[190px] mt-[-12px] sm:mt-[-15px]"></div>
        </div>
      </Zoom_In_Animation>
      <div className="flex w-full  flex-wrap justify-center gap-6 px-[30px] md:px-[50px] lg:px-[80px] xl:px-[160px]">
        {openPositionData?.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-[90%] md:w-[260px] ${
                index % 2 !== 0 ? "bg-[#399EFD]" : "bg-[#F2F8FA]"
              }  py-6 shadow-3xl mt-8 px-3 rounded-2xl`}
            >
              <div
                className={`text-center ${
                  index % 2 !== 0 ? "text-white" : "text-[#121212]"
                } font-MuseoSans font-semibold text-[22px] pb-6`}
              >
                {item?.name}
              </div>
              <div
                className={`text-center ${
                  index % 2 !== 0 ? "text-white" : "text-[#9BA9B4]"
                } font-MuseoSans font-normal text-[16px]`}
              >
                Openings Position
              </div>
              <div
                className={`text-center ${
                  index % 2 !== 0 ? "text-white" : "text-[#121212]"
                } font-MuseoSans font-normal text-[22px] pb-3`}
              >
                {item?.vacancy}
              </div>
              <div
                className={`text-center ${
                  index % 2 !== 0 ? "text-white" : "text-[#9BA9B4]"
                } font-MuseoSans font-normal text-[16px]`}
              >
                Experience in Year
              </div>
              <div
                className={`text-center ${
                  index % 2 !== 0 ? "text-white" : "text-[#121212]"
                } font-MuseoSans font-normal text-[22px] pb-3`}
              >
                {item?.experience}
              </div>
              <div className="flex justify-center mt-2">
                <CustomButton
                  onSubmitButton={() => router.push("/applynow")}
                  bgColor={index % 2 !== 0 ? "white" : "#399EFD"}
                  textColor={index % 2 !== 0 ? "#399EFD" : "white"}
                  btnWidth="110px"
                  text="Apply Now"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OpeningPosition;
