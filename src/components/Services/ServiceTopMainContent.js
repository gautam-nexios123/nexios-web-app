import Image from "next/image";
import squreImg from "../../assets/images/about/squere.svg";
import circleBlank from "../../assets/images/about/circle-blank.svg";
import tringleDark from "../../assets/images/about/tringle-dark.svg";
import tringleLight from "../../assets/images/about/tringle-light.svg";
import dotImg from "../../assets/images/home/dot-dot.svg";
import squreLight from "../../assets/images/about/squre-light.svg";
import circleSolid from "../../assets/images/about/circle-solid.svg";
import lineThree from "../../assets/images/about/line-three.svg";

const ServiceTopMainContent = ({ text, description, banner }) => {
  return (
    <div className="w-full bg-[#F8FBFF]">
      <div className="w-full lg:w-[80%] flex md:flex-row flex-col mx-auto">
        <div className="w-full md:w-[50%] relative h-[300px] md:h-[380px]">
          <div className="w-[70%] mx-auto flex flex-col justify-center h-full">
            <p
              className={`font-MuseoSans font-semibold text-[26px] pb-4  text-[#121212]`}
            >
              {text}
            </p>
            <p
              className={`font-MuseoSans font-normal text-[12px] text-[#9BA9B4]`}
            >
              {description}
            </p>
          </div>
          <Image
            src={squreImg}
            alt="squre"
            className="absolute top-[10%] left-[10%]"
            width={15}
          />
          <Image
            src={circleBlank}
            alt="circle"
            className="absolute top-[50%] left-[10%]"
            width={15}
          />
          <Image
            src={tringleLight}
            alt="trungle"
            className="absolute top-[14%] left-[40%]"
            width={20}
          />
          <Image
            src={circleBlank}
            alt="circle"
            className="absolute top-[30%] left-[55%]"
            width={15}
          />
          <Image
            src={squreLight}
            alt="squreLight"
            className="absolute top-[6%] right-0"
            width={15}
          />
          <Image
            src={lineThree}
            alt="lineThree"
            className="absolute top-[66%] right-[2%]"
            width={80}
          />
        </div>
        <div className="w-full md:w-[50%] relative flex items-center pl-10">
          <Image src={banner} alt="banner" width={350} className="" />
          <Image
            src={squreLight}
            alt="squreLight"
            className="absolute top-[10%] right-[15%]"
            width={15}
          />
          <Image
            src={circleSolid}
            alt="circleSolid"
            className="absolute top-[74%] right-[15%]"
            width={15}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceTopMainContent;
