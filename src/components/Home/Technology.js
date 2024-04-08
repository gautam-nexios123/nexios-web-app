import Image from "next/image";
import pattern from "../../assets/images/home/Patern.jpg";
import appleIcon from "../../assets/images/home/apple-icon.svg";
import androidIcon from "../../assets/images/home/android.svg";
import flutterIcon from "../../assets/images/home/flutter.svg";

import tOne from "../../assets/images/home/t1.svg";
import tTwo from "../../assets/images/home/t2.svg";
import angularIcon from "../../assets/images/home/angular.svg";
import tThree from "../../assets/images/home/t3.svg";

import laravelIcon from "../../assets/images/home/laravel.svg";
import mySqlIcon from "../../assets/images/home/mySql.svg";
import bootstrapIcon from "../../assets/images/home/bootstrap.svg";
import phpIcon from "../../assets/images/home/php.svg";
import tFour from "../../assets/images/home/t4.svg";
import { Zoom_In_Animation } from "../Animations";

const Technology = () => {
  return (
    <div className="relative mt-11">
      <Zoom_In_Animation>
        <div className="absolute top-[30px] w-full text-center font-MuseoSans font-light text-[22px] sm:text-[26px]">
          We Use <span className="font-semibold">Technologies</span>
          <div className="bg-[#399EFD] opacity-[25%] h-[8px] w-[220px] sm:w-[268px] mx-auto mt-[-12px] sm:mt-[-15px]"></div>
        </div>
      </Zoom_In_Animation>
      <div className="">
        <Image src={pattern} alt="" className="w-[100%] h-[600px] " />
      </div>

      <div className="absolute left-[48%] top-[22%] bg-white shadow-3xl rounded-full w-[75px] h-[75px] flex items-center justify-center">
        <Image src={appleIcon} alt="" width={32} height={32} />
      </div>
      <div className="absolute left-[25%] top-[30%] bg-white shadow-3xl rounded-full w-[70px] h-[70px] flex items-center justify-center">
        <Image src={androidIcon} alt="" width={30} height={30} />
      </div>
      <div className="absolute  left-[75%] top-[30%] bg-white shadow-3xl rounded-full w-[50px] h-[50px] flex items-center justify-center">
        <Image src={flutterIcon} alt="" width={20} height={20} />
      </div>

      <div className="absolute  left-[15%] top-[47%] bg-white shadow-3xl rounded-full w-[45px] h-[45px] flex items-center justify-center">
        <Image src={tOne} alt="" width={25} height={25} />
      </div>
      <div className="absolute  left-[35%] top-[45%] bg-white shadow-3xl rounded-full w-[45px] h-[45px] flex items-center justify-center">
        <Image src={tTwo} alt="" width={25} height={25} />
      </div>
      <div className="absolute  left-[55%] top-[55%] bg-white shadow-3xl rounded-full w-[60px] h-[60px] flex items-center justify-center">
        <Image src={angularIcon} alt="" width={30} height={30} />
      </div>
      <div className="absolute  left-[84%] top-[45%] bg-white shadow-3xl rounded-full w-[55px] h-[55px] flex items-center justify-center">
        <Image src={tThree} alt="" width={26} height={26} />
      </div>

      <div className="absolute  left-[25%] top-[75%] bg-white shadow-3xl rounded-full w-[70px] h-[70px] flex items-center justify-center">
        <Image src={laravelIcon} alt="" width={30} height={30} />
      </div>
      <div className="absolute  left-[38%] top-[65%] bg-white shadow-3xl rounded-full w-[60px] h-[60px] flex items-center justify-center">
        <Image src={mySqlIcon} alt="" width={26} height={26} />
      </div>
      <div className="absolute  left-[48%] top-[74%] bg-white shadow-3xl rounded-full w-[50px] h-[50px] flex items-center justify-center">
        <Image src={bootstrapIcon} alt="" width={22} height={22} />
      </div>
      <div className="absolute  left-[65%] top-[70%] bg-white shadow-3xl rounded-full w-[50px] h-[50px] flex items-center justify-center">
        <Image src={phpIcon} alt="" width={30} height={30} />
      </div>
      <div className="absolute  left-[84%] top-[75%] bg-white shadow-3xl rounded-full w-[60px] h-[60px] flex items-center justify-center">
        <Image src={tFour} alt="" width={25} height={25} />
      </div>
    </div>
  );
};

export default Technology;
