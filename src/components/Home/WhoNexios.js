import CustomButton from "@/common/CustomButton";
import Image from "next/image";
import frame from "../../assets/images/home/Frame.svg";
import { scrollToBottom } from "@/utils";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Zoom_In_Animation } from "../Animations";

const WhoNexios = () => {
  const scrollButtonRef = useRef(null);
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-14 w-full px-7 sm:px-[100px] mt-12">
      <div className="w-[100%] lg:w-[40%]">
        <div className="font-MuseoSans font-normal text-[26px] text-[#121212] pb-3">
          Who is <span className="font-semibold">nexios?</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[180px] mt-[-15px]"></div>
        </div>
        <div className="font-MuseoSans text-justify font-normal text-[16px] text-[#9BA9B4] pb-3">
          From expertise-based services and product development services to
          becoming a one-stop solution for all talent needs, Nexios has indeed
          come a long way. We make it easy for businesses to find the most
          talented developers, designers, and marketers as per their needs
          faster and more efficiently. Over the last 8 years, Nexios has worked
          with over 50+ overseas clients..
        </div>
        <div
          ref={scrollButtonRef}
          className="flex flex-col sm:flex-row items-center gap-5 my-5"
        >
          <Zoom_In_Animation>
            <CustomButton
              onSubmitButton={() => router.push("/about")}
              bgColor="#399EFD"
              textColor="white"
              btnWidth="120px"
              text="Know More"
            />
          </Zoom_In_Animation>

          <Zoom_In_Animation>
            <CustomButton
              onSubmitButton={() => scrollToBottom()}
              bgColor="#121212"
              textColor="white"
              btnWidth="160px"
              text="Free Quote"
            />
          </Zoom_In_Animation>
        </div>
      </div>
      <div className="w-[100%] lg:w-[40%]">
        <Image
          src={frame}
          alt="frame"
          width={400}
          height={200}
          className="sm:ml-5"
        />
      </div>
    </div>
  );
};

export default WhoNexios;
