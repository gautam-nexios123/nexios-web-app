import Image from "next/image";
import squreImg from "../../assets/images/about/squere.svg";
import circleBlank from "../../assets/images/about/circle-blank.svg";
import tringleDark from "../../assets/images/about/tringle-dark.svg";
import tringleLight from "../../assets/images/about/tringle-light.svg";
import dotImg from "../../assets/images/home/dot-dot.svg";
import squreLight from "../../assets/images/about/squre-light.svg";
import circleSolid from "../../assets/images/about/circle-solid.svg";
import lineThree from "../../assets/images/about/line-three.svg";

const TopMainContent = ({ text, banner, page }) => {
  return (
    <div className="w-full flex md:flex-row flex-col bg-[#F8FBFF]">
      <div className="w-full md:w-[50%] relative h-[300px] md:h-[450px]">
        <p
          className={`font-MuseoSans font-semibold ${
            page === "portfolio"
              ? "text-[42px]  w-[300px]"
              : "text-[28px] md:text-[32px] md:w-[420px] lg:w-[490px]"
          } text-[#121212] mx-auto flex items-center h-full px-10`}
        >
          {text}
        </p>
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
          src={tringleDark}
          alt="tringle"
          className="absolute top-[80%] left-[15%]"
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
          src={dotImg}
          alt="dot"
          className="absolute top-[5%] left-[55%] md:!w-[180px] md:left-[65%]"
          width={120}
        />
        <Image
          src={squreLight}
          alt="squreLight"
          className="absolute top-[6%] right-0"
          width={15}
        />
        <Image
          src={squreLight}
          alt="squreLight"
          className="absolute top-[65%] left-[45%]"
          width={15}
        />
        <Image
          src={circleSolid}
          alt="circleSolid"
          className="absolute top-[77%] left-[55%]"
          width={10}
        />
        <Image
          src={circleBlank}
          alt="circleBlank"
          className="absolute top-[60%] right-[10%]"
          width={10}
        />
        <Image
          src={lineThree}
          alt="lineThree"
          className="absolute top-[66%] right-[2%]"
          width={80}
        />
      </div>
      <div className="w-full md:w-[50%] relative">
        <Image src={banner} alt="banner" width={520} className="" />
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
  );
};

export default TopMainContent;
