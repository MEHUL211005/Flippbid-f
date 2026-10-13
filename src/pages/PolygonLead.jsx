import React from "react";
import BlurTick from "../assets/BlueTick.png";
import MapIng from "../assets/MapImg.png";
import SerachIcon from "../assets/searchIcon.png";
function PolygonLead() {
  // Features data array jaisa screenshot mein diya gaya hai
  const featuresList = [
    "FSBO (Coming Soon!)",
    "Retiree Homeowners",
    "Expired Listing (Coming Soon!)",
    "Tax Delinquency",
    "Pre-Foreclosure",
    "Foreclosure",
    "High Equity",
    "Lis Pendens",
    "Underwater Mortgage",
    "Likely to Sell",
  ];

  return (
    <div className="relative w-full xl:h-[430px] xl:top-[320px]">
      <div className="relative w-full px-5 py-12 sm:px-8 xl:h-0 xl:p-0">
        <div className="flex justify-center text-center xl:absolute xl:left-[100px] xl:justify-start xl:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[24px] sm:text-[28px] xl:justify-start xl:text-[32px] font-semibold">
            <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
              Polygon
            </span>
            <span className="text-[#575665]">Lead Search</span>
          </div>
        </div>

        <div className="mx-auto mt-6 grid w-full max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-2 xl:absolute xl:mx-0 xl:mt-0 xl:top-[50px] xl:left-[80px] xl:gap-4 xl:w-[620px]">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] w-full h-[60px] px-4 flex items-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.06)] xl:h-[69px] xl:px-5 xl:gap-4"
            >
              <img
                src={BlurTick}
                alt="BlurTick Icon"
                className="w-[18px] h-[18px] shrink-0"
              />
              <h3 className="text-[#1C1A1B] font-medium text-[13px] sm:text-[14px] xl:text-[16px]">
                {item}
              </h3>
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-[430px] xl:absolute xl:mx-0 xl:mt-0 xl:top-[20px] xl:left-[790px] xl:max-w-none xl:w-[430px] xl:h-[430px]">
          <div
            className="relative w-full aspect-square bg-cover bg-center bg-no-repeat rounded-[24px] sm:rounded-[30px] xl:rounded-[37px]"
            style={{ backgroundImage: `url(${MapIng})` }}
          >
            <div className="bg-white rounded-[5px] h-[44px] w-[calc(100%-32px)] absolute top-[16px] left-[16px] sm:h-[50px] sm:w-[calc(100%-60px)] sm:top-[20px] sm:left-[30px] xl:h-[50px] xl:w-[370px]">
              <img
                src={SerachIcon}
                alt="SerachIcon Icon"
                className="w-[18px] h-[18px] absolute top-[13px] left-[18px] sm:top-[15px] sm:left-[20px]"
              />
              <p className="absolute top-[10px] left-[46px] sm:top-[12px] sm:left-[48px] font-medium text-[13px] sm:text-[15px] whitespace-nowrap">
                Polugon Search
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolygonLead;
