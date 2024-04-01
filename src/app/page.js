import CustomButton from "@/common/CustomButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import bgBannerOne from "../assets/images/bg-1.png";
import bgBannertwo from "../assets/images/Rectangle-61-1.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="mb-11">
        <h2 className="font-MuseoSans text-[40px] text-[#121212] font-normal text-center mx-8">
          <span className="font-bold">We Create Simple Solution</span> <br></br>{" "}
          For Your Complex Business Task
        </h2>
        <p className="font-MuseoSans text-xl text-[#9BA9B4] font-normal text-center mx-32 pt-4">
          Nexios is a global technology partner that enables long-lasting value
          for businesses via the latest technologies. It provides a complete
          solution from concept to reality. We've worked with different
          industries creating mobile and web apps that solved business intricate
          problems in innovative ways that ease their operations.
        </p>
        <div className="flex items-center justify-center gap-5 my-5">
          <CustomButton
            bgColor="#399EFD"
            textColor="white"
            btnWidth="240px"
            text="Explore Our Portfolio"
          />
          <CustomButton
            bgColor="#121212"
            textColor="white"
            btnWidth="240px"
            text="Free Quote"
          />
        </div>
        <div className="relative">
          <Image
            src={bgBannerOne}
            alt="bgBannerOne"
            className="mx-auto w-[70%]"
          />
          <Image
            src={bgBannertwo}
            alt="bgBannerOne"
            className="absolute bottom-0"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
