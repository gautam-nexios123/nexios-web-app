import CustomButton from "@/common/CustomButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import bgBannerOne from "../assets/images/bg-1.png";
import bgBannertwo from "../assets/images/Rectangle-61-1.png";
import frame from "../assets/images/home/Frame.svg";
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
        <p className="font-MuseoSans text-xl text-[#9BA9B4] font-normal text-center sm:mx-32 mx-5 pt-4">
          Nexios is a global technology partner that enables long-lasting value
          for businesses via the latest technologies. It provides a complete
          solution from concept to reality. We've worked with different
          industries creating mobile and web apps that solved business intricate
          problems in innovative ways that ease their operations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 my-5">
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
        <div className="flex flex-col sm:flex-row justify-between gap-4 w-full px-7 sm:px-[150px] mt-12">
          <div className="w-[100%] sm:w-[50%]">
            <div className="font-MuseoSans font-normal text-[26px] text-[#121212] pb-3">
              Who is <span className="font-semibold">nexios?</span>
            </div>
            <div className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4] pb-3">
              From expertise-based services and product development services to
              becoming a one-stop solution for all talent needs, Nexios has
              indeed come a long way. We make it easy for businesses to find the
              most talented developers, designers, and marketers as per their
              needs faster and more efficiently. Over the last 8 years, Nexios
              has worked with over 50+ overseas clients..
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 my-5">
              <CustomButton
                bgColor="#399EFD"
                textColor="white"
                btnWidth="187px"
                text="Know More"
              />
              <CustomButton
                bgColor="#121212"
                textColor="white"
                btnWidth="240px"
                text="Free Quote"
              />
            </div>
          </div>
          <Image src={frame} alt="frame" width={400} height={200} />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 w-full px-7 sm:px-[150px] mt-12">
          <Image src={frame} alt="frame" width={400} height={200} />
          <div className="w-[100%] sm:w-[50%]">
            <div className="font-MuseoSans font-normal text-[26px] text-[#121212] pb-3">
              Why Choose <span className="font-semibold"> nexios?</span>
            </div>
            <div className="font-MuseoSans font-normal text-[16px] text-[#9BA9B4]">
              We take care of your projects from brainstorming an idea to
              handing it over to your dream users. All we need from you is your
              amazing idea and trust. At Nexios, We brainstorm, Design, and
              Develop so your business runs as smoothly as possible. We believe
              that the key to good design is to take things that are difficult
              to work with or understand and make them easy for everyone
              involved.
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
            <div className="flex flex-col sm:flex-row items-center gap-5 my-5">
              <CustomButton
                bgColor="#399EFD"
                textColor="white"
                btnWidth="187px"
                text="Know More"
              />
              <CustomButton
                bgColor="#121212"
                textColor="white"
                btnWidth="240px"
                text="Free Quote"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
