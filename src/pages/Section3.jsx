import React from "react";
import Vector from "../assets/Vector 2.png";
import LaptopImg from "../assets/LaptopImg.png";
import Silver from "../assets/Silver.png";
import Mockup from "../assets/Mockup.png";
import HutIcon from "../assets/hutIcon.png";
import HutSearch from "../assets/hutSearch.png";
import HutRect from "../assets/HutRect.png";
import HutTick from "../assets/HutBlueTick.png";
import HandImg from "../assets/HandImg.png";
function Section3() {
  const featuresList = [
    "Source Off-Market Deals",
    "Polygon Lead Search",
    "Showcase Your Investments",
    "Property Data & Comps",
    "Network - In App Calls/Messaging",
    "FlippBidd One Touch",
    "National Skiptracing, and More...",
  ];
  return (
    <div className="relative w-full xl:h-[518px]">
      <div className="relative w-full px-5 py-12 sm:px-8 xl:h-0 xl:p-0">
        {/* ============ TITLE ============ */}
        <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 xl:block">
          <p className="font-semibold bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent text-[24px] sm:text-[27px] xl:absolute xl:top-[50px] xl:left-[100px] xl:text-[27px]">
            FlipBidd
          </p>
          <p className="text-[24px] sm:text-[27px] font-semibold text-[#575665] xl:absolute xl:top-[50px] xl:left-[220px] xl:text-[27px]">
            Key
          </p>
          <p className="text-[20px] sm:text-[25px] font-bold font-semibold text-[#575665] basis-full xl:basis-auto xl:absolute xl:top-[90px] xl:left-[100px] xl:text-[25px]">
            Features
          </p>
        </div>

        {/* ============ FEATURE LIST ============ */}
        <div className="mt-6 flex w-full flex-col gap-3 xl:absolute xl:mt-0 xl:top-[150px] xl:left-[80px] xl:w-[650px] xl:gap-4">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] w-full h-[62px] px-4 flex items-center gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.06)] xl:w-[450px] xl:h-[71px] xl:px-0 xl:gap-5"
            >
              <img
                src={Vector}
                alt="Vector Icon"
                className="w-[18px] h-[18px] shrink-0"
              />
              <h3 className="text-[#1C1A1B] font-medium text-[14px] sm:text-[15px] xl:text-[16px]">
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* ============ ARTWORK ============ */}
        <div className="relative mt-8 h-[283px] w-full overflow-hidden sm:h-[480px] sm:mt-10 md:h-[565px] md:mt-12 xl:absolute xl:mt-0 xl:left-[620px] xl:top-[150px] xl:h-[565px] xl:w-[615px] xl:overflow-visible">
          <div className="absolute left-1/2 top-0 w-[615px] h-[565px] -translate-x-1/2 origin-top scale-[0.5] sm:scale-[0.85] md:scale-100 xl:left-0 xl:translate-x-0 xl:scale-100">
            {/* Gradient circle */}
            <div className="rounded-[50%] absolute top-[30px] left-[30px] h-[518px] w-[518px] bg-gradient-to-r from-[#A6F0F7]  to-[#FDE3FA]">
              <div className="bg-black h-[278px] w-[453px] absolute top-[120px] left-[34px] flex items-center justify-center">
                <img
                  src={LaptopImg}
                  alt="LaptopImg"
                  className="h-[250px] w-[430px]"
                />
              </div>
              <div className="absolute top-[70px] left-[340px] w-[220px] h-[55px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] rounded-[14px] z-0 flex items-center justify-center">
                <div className="absolute top-[1px] left-[1px] bg-white rounded-[13px] w-[218px] h-[53px] flex items-center justify-center">
                  <p className="text-[#00ACDB] text-[17px]">
                    FlippBidd One Touch
                  </p>
                </div>
              </div>
            </div>
            {/* Sell My Deal */}
            <div className="absolute top-[102px] left-[0px] w-[196px] h-[55px] border border-[#00ACDB] rounded-[14px] flex items-center justify-center bg-white">
              <p className="text-[#00ACDB]">Sell My Deal</p>
            </div>
            {/* Mobile mockup */}
            <div
              className="absolute top-[230px] left-[410px] w-[132px] h-[261px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
              style={{ backgroundImage: `url(${Silver})` }}
            >
              <img
                src={Mockup}
                alt="Mockup"
                className="w-[118px] h-[256px] object-contain"
              />
            </div>
            {/* Contract Holders */}
            <div className="absolute top-[400px] left-[430px] w-[190px] h-[50px] bg-gradient-to-r from-[#C830EB] to-[#00ACDB] rounded-[14px] z-0 flex items-center justify-center">
              <div className="absolute top-[1px] left-[1px] bg-white rounded-[13px] w-[188px] h-[47px] flex items-center justify-center">
                <p className="text-[#00ACDB] text-[17px] bg-gradient-to-l from-[#00ACDB] to-[#C830EB] bg-clip-text text-transparent">
                  Contract Holders
                </p>
              </div>
            </div>
            {/* Find My Lead */}
            <div className="absolute top-[510px] left-[100px] border border-[#575665] bg-white rounded-[13px] w-[196px] h-[55px] flex items-center justify-center">
              <p className="text-[#00ACDB] text-[17px] bg-gradient-to-r from-[#9AA1AB] to-[#575665] bg-clip-text text-transparent">
                Find My Lead
              </p>
            </div>
            {/* HutIcon */}
            <div className="absolute rounded-[50%] bg-white h-[65px] w-[65px] top-[326px] left-[550px] shadow-[0px_10.85px_43.38px_rgba(219,222,225,1)] realtive">
              <img
                src={HutIcon}
                alt="HutIcon"
                className="object-contain absolute left-[8px] top-[7px]"
              />
            </div>
            {/* HutSearch */}
            <div className="absolute rounded-[50%] bg-white h-[65px] w-[65px] top-[400px] left-[100px] realtive">
              <img
                src={HutSearch}
                alt="HutSearch"
                className="object-contain absolute left-[10px] top-[10px]"
              />
            </div>
            {/* HutRect */}
            <div className="absolute rounded-[50%] bg-white h-[65px] w-[65px] top-[30px] left-[120px] realtive">
              <img
                src={HutRect}
                alt="HutRect"
                className="object-contain absolute left-[8px] top-[7px] "
              />
            </div>
            {/* One Touch */}
            <div className="absolute rounded-[50%] bg-white h-[80px] w-[80px] top-[10px] left-[380px] flex items-center justify-center">
              <div className="rounded-[50%] bg-gradient-to-r from-[#003F79] to-[#00ACDB] h-[70px] w-[70px]">
                <img
                  src={HutTick}
                  alt="HutSearch"
                  className="object-contain absolute h-[35px] left-[14px] top-[13px] "
                />
                <img
                  src={HandImg}
                  alt="HandImg"
                  className="object-contain absolute h-[35px] left-[30px] top-[36px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;