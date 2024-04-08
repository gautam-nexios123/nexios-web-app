import Image from "next/image";
import interImg from "../../assets/images/about/international.svg";
import plusyear from "../../assets/images/about/7-plus-year.png";
import dotHalf from "../../assets/images/about/dot-half.svg";
import leftCerve from "../../assets/images/about/left-cerve.svg";
import rightCerve from "../../assets/images/about/right-cerve.svg";
import { Zoom_In_Animation } from "../Animations";

const WelcomeNexios = () => {
  return (
    <div className="my-11 w-full relative">
      <Zoom_In_Animation>
        <div className="relative font-MuseoSans font-light text-[#121212] text-[24px] text-center">
          Welcome To <span className="font-semibold">nexios</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[220px] mx-auto mt-[-15px]"></div>
        </div>
      </Zoom_In_Animation>
      <div className="lg:px-[200px] px-[50px]">
        <div className="font-MuseoSans font-normal text-[#9BA9B4] text-[16px] md:text-center text-justify py-7">
          Nexios Technologies is one of the reckoned Software Development
          Company in Surat. Rapidly changing business state of affairs and
          latest technologies being introduced day by day, always raises the
          requirement for change in development which suits the client
          requirement and also alter the existing software’s to match the latest
          technology by not changing the methodologies defined for good
          software. Our teams have 3 years of experience in the development of
          Software Applications & Systems.
        </div>
        <div className="font-MuseoSans font-normal text-[#9BA9B4] text-[16px] md:text-center text-justify pb-7">
          We have command over the Platforms of Android Development, Angular,
          .Net, PHP, SQL Server, Photoshop, Microsoft Office (Access, Excel, and
          PowerPoint). We also excel in mobile technology and cater to your need
          to develop classy iPad and iPhone application.
        </div>
        <div className="font-MuseoSans font-semibold text-[#399EFD] text-[18px] text-center pb-7">
          We Provide IT Solutions That Help You Succeed
        </div>
      </div>
      <div className="w-full px-[30px] md:px-[160px] md:flex gap-10 mt-5">
        <div className="w-full md:w-[50%] flex flex-col items-center">
          <Image src={interImg} alt="inter" width={200} />
          <div className="font-MuseoSans font-semibold text-[#121212] text-lg py-3">
            International Service Provider
          </div>
          <div className="font-MuseoSans font-normal text-[#9BA9B4] text-base text-center">
            Our team is providing IT solutions internationally with great
            communication and accuracy.
          </div>
        </div>
        <div className="w-full md:w-[50%] mt-6 md:mt-0  flex flex-col items-center">
          <Image src={plusyear} alt="plusyear" width={200} />
          <div className="font-MuseoSans font-semibold text-[#121212] text-lg py-3">
            7 Plus Years Of Trust
          </div>
          <div className="font-MuseoSans font-normal text-[#9BA9B4] text-base text-center">
            nexios believes in a long term relationship with quality of work. We
            have continuously worked with fixed clients for more than 5 years.
          </div>
        </div>
      </div>
      <Image
        src={dotHalf}
        alt="dot"
        className="absolute top-0 left-0"
        width={100}
      />
      <Image
        src={leftCerve}
        alt="dot"
        className="absolute bottom-[15%] left-0"
        width={50}
      />
      <Image
        src={rightCerve}
        alt="dot"
        className="absolute top-0 right-0"
        width={50}
      />
    </div>
  );
};

export default WelcomeNexios;
