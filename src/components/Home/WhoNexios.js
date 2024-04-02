import CustomButton from "@/common/CustomButton";
import Image from "next/image";
import frame from "../../assets/images/home/Frame.svg";

const WhoNexios = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-14 w-full px-7 sm:px-[100px] mt-12">
      <div className="w-[100%] lg:w-[40%]">
        <div className="font-MuseoSans font-normal text-[26px] text-[#121212] pb-3">
          Who is <span className="font-semibold">nexios?</span>
        </div>
        <div className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] pb-3">
          From expertise-based services and product development services to
          becoming a one-stop solution for all talent needs, Nexios has indeed
          come a long way. We make it easy for businesses to find the most
          talented developers, designers, and marketers as per their needs
          faster and more efficiently. Over the last 8 years, Nexios has worked
          with over 50+ overseas clients..
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-5 my-5">
          <CustomButton
            onSubmitButton={() => {}}
            bgColor="#399EFD"
            textColor="white"
            btnWidth="187px"
            text="Know More"
          />
          <CustomButton
            onSubmitButton={() => {}}
            bgColor="#121212"
            textColor="white"
            btnWidth="240px"
            text="Free Quote"
          />
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
