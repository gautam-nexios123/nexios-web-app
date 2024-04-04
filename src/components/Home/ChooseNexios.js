import CustomButton from "@/common/CustomButton";
import Image from "next/image";
import expertTeam from "../../assets/images/home/expert-team.svg";
import yearExpImg from "../../assets/images/home/year-exp.svg";
import focusInnoImg from "../../assets/images/home/focus-inno.svg";
import businessServeImg from "../../assets/images/home/business-serve.svg";
import { scrollToBottom } from "@/utils";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const ChooseNexios = () => {
  const scrollButtonRef = useRef(null);
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-14 w-full px-7 sm:px-[100px] mt-12">
      <div className="w-[100%] lg:w-[40%]">
        <div className="flex gap-8 sm:gap-12">
          <div className="bg-white shadow-3xl px-2 py-4 rounded-[20px] h-fit">
            <Image src={expertTeam} alt="expertTeam" width={180} height={150} />
            <p className="text-[#121212] font-MuseoSans font-semibold text-lg text-center pt-3">
              Experts Team
            </p>
          </div>
          <div className="bg-white shadow-3xl px-2 py-4 rounded-[20px] h-fit mt-10">
            <Image src={yearExpImg} alt="yearExpImg" width={180} height={150} />
            <p className="text-[#121212] font-MuseoSans font-semibold text-lg text-center pt-3">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="flex gap-8 sm:gap-12 lg:ml-9">
          <div className="bg-white shadow-3xl px-2 py-4 rounded-[20px] h-fit">
            <Image
              src={focusInnoImg}
              alt="focusInnoImg"
              width={180}
              height={150}
            />
            <p className="text-[#121212] font-MuseoSans font-semibold text-lg text-center pt-3">
              Focus on innovation
            </p>
          </div>
          <div className="bg-white shadow-3xl px-2 py-4 rounded-[20px] h-fit mt-10">
            <Image
              src={businessServeImg}
              alt="businessServeImg"
              width={180}
              height={150}
            />
            <p className="text-[#121212] font-MuseoSans font-semibold text-lg text-center pt-3">
              Business savvy
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] lg:w-[40%]">
        <div className="font-MuseoSans font-normal text-[26px] text-[#121212] pb-3">
          Why Choose <span className="font-semibold"> nexios?</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[252px] mt-[-15px]"></div>
        </div>
        <div className="font-MuseoSans text-justify font-normal text-[16px] text-[#9BA9B4]">
          We take care of your projects from brainstorming an idea to handing it
          over to your dream users. All we need from you is your amazing idea
          and trust. At Nexios, We brainstorm, Design, and Develop so your
          business runs as smoothly as possible. We believe that the key to good
          design is to take things that are difficult to work with or understand
          and make them easy for everyone involved.
        </div>
        <ul className="list-disc pl-[18px] mt-8">
          <li className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] pb-4">
            Skilled and motivated staff
          </li>
          <li className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] pb-4">
            Trained and certified professionals
          </li>
          <li className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] pb-4">
            Fully compatible with existing team
          </li>
          <li className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] pb-4">
            Timely Delivery
          </li>
        </ul>
        <div
          ref={scrollButtonRef}
          className="flex flex-col sm:flex-row items-center gap-5 my-5"
        >
          <CustomButton
            onSubmitButton={() => router.push("/about")}
            bgColor="#399EFD"
            textColor="white"
            btnWidth="120px"
            text="Know More"
          />
          <CustomButton
            onSubmitButton={() => scrollToBottom()}
            bgColor="#121212"
            textColor="white"
            btnWidth="160px"
            text="Free Quote"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseNexios;
