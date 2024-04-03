import Image from "next/image";
import visionImg from "../../assets/images/about/vision-img.svg";
import missionImg from "../../assets/images/about/mission-img.svg";

const OurVision = () => {
  return (
    <div className="ourvision-bg relative bg-cover py-[50px] w-full">
      <div className="w-full pb-[40px] px-[30px] md:px-[160px] flex flex-col md:flex-row gap-[10%]">
        <div className="w-full md:w-[45%] mb-5 md:mb-0">
          <Image
            src={visionImg}
            alt="visionImg"
            className="mx-auto"
            width={200}
          />
        </div>
        <div className="w-full md:w-[45%]">
          <div className="text-[#121212] font-MuseoSans font-semibold text-xl pb-3 text-justify">
            Our Vision
          </div>
          <div className="text-[#9BA9B4] font-MuseoSans font-normal text-base text-justify">
            We envision ourselves as one of the leading technology consulting
            and development firms in the digital space, providing world-class
            services that will propel your business to new heights.
          </div>
        </div>
      </div>
      <div className="w-full px-[30px] md:px-[160px] flex flex-col-reverse md:flex-row gap-[10%]">
        <div className="w-full md:w-[45%]">
          <div className="text-[#121212] font-MuseoSans font-semibold text-xl pb-3 text-justify">
            Our Mission
          </div>
          <div className="text-[#9BA9B4] font-MuseoSans font-normal text-base text-justify">
            At nexios, we are on a mission to become the preferred choice for
            technology development and consultancy services across the globe,
            powering business innovation and digitalization across multiple
            industries and business domains.
          </div>
        </div>
        <div className="w-full md:w-[45%] mb-8 md:mb-0">
          <Image
            src={missionImg}
            alt="missionImg"
            className="mx-auto"
            width={250}
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
