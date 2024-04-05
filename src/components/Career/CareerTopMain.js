import Image from "next/image";

const CareerTopMain = ({ text, description, banner }) => {
  return (
    <div className="w-full bg-[#F8FBFF]">
      <div className="w-full lg:w-[80%] flex md:flex-row flex-col mx-auto">
        <div className="w-full md:w-[50%] relative h-[300px] md:h-[380px]">
          <div className="w-[70%] mx-auto flex flex-col justify-center h-full">
            <p
              className={`font-MuseoSans font-semibold text-[26px] sm:text-[34px] pb-4  text-[#121212]`}
            >
              {text}
            </p>
            <p
              className={`font-MuseoSans font-normal text-[14px] text-[#9BA9B4]`}
            >
              {description}
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative flex items-center pl-10">
          <Image src={banner} alt="banner" width={350} className="" />
        </div>
      </div>
    </div>
  );
};

export default CareerTopMain;
