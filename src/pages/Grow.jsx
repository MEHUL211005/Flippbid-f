import React from "react";
import BgImage from "../assets/BgImage.png";
import Tick from "../assets/whiteTick.svg";
import TickTokImg from "../assets/TickTok.svg";
import FacebookIcon from "../assets/facebook.png";
import MessangerIcon from "../assets/Messanger.png";
import InstagramIcon from "../assets/Instagram.png";
import WhatsppIcon from "../assets/whatsapp.png";
import TwitterIcon from "../assets/Twitter.png";
function Grow() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#00ACDB] via-[#A6F0F7] to-[#FDE3FA] lg:min-h-[360px] xl:h-[450px]">
      <div className="relative w-full bg-white lg:h-[360px] xl:absolute xl:top-[20px] xl:h-[430px]">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BgImage})`,
          }}
        >
          <div className="flex h-full flex-col lg:flex-row lg:items-center lg:justify-center xl:justify-evenly">
            <div className="relative w-full px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:h-full lg:w-1/2 lg:flex-col lg:justify-center lg:px-8 lg:py-6 xl:w-[700px] xl:h-[430px] xl:p-0">
              {/* ================= LEFT COLUMN ================= */}
              <div className="relative lg:flex lg:h-full lg:flex-col lg:items-center lg:justify-center xl:contents">
                <p className="relative text-[26px] sm:text-[32px] lg:text-center xl:absolute xl:left-10 xl:top-[100px] xl:ml-0 xl:text-[45px] font-bold text-white">
                  Let's Grow our
                </p>
                <p className="relative text-[26px] sm:text-[32px] lg:text-center xl:absolute xl:left-10 xl:top-[160px] xl:ml-0 xl:text-[45px] font-bold text-white">
                  Community Together
                </p>
                <p
                  className="relative mt-3 text-[13px] sm:text-[15px] lg:text-center xl:absolute xl:left-11 xl:top-[230px] xl:mt-0 xl:text-[18px] font-semibold text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0, 172, 219, 1) 0%, rgba(166, 240, 247, 1) 50%, rgba(253, 227, 250, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
                  }}
                >
                  Inquire about our Affiliate Program Today.
                </p>
                <div className="relative mt-6 rounded-[10px] bg-white h-[46px] sm:h-[50px] w-full max-w-[250px] flex items-center justify-center lg:mx-auto xl:absolute xl:left-[43px] xl:top-[290px] xl:mt-0">
                  <p className="text-center text-[13px] sm:text-[14px] xl:text-[16px] font-semibold bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
                    Become a FlippBidd Affiliate
                  </p>
                </div>
                <div className="relative mt-3 sm:mt-4 rounded-[10px] h-[46px] sm:h-[50px] w-full max-w-[290px] flex items-center justify-center bg-transparent border border-white gap-1 lg:mx-auto xl:absolute xl:left-[330px] xl:top-[290px] xl:mt-0">
                  <img
                    src={Tick}
                    alt="Tick Icon"
                    className="w-[18px] h-[18px] xl:w-auto xl:h-auto object-cover rounded-[10px] shrink-0"
                  />
                  <p className="text-[11px] sm:text-[13px] xl:text-[16px] font-semibold text-white">
                    LetsNetwork@flippbidd.com
                  </p>
                </div>
              </div>
            </div>
            {/* ================= RIGHT COLUMN ================= */}
            <div className="flex w-full items-center justify-center py-10 sm:py-12 lg:h-full lg:w-1/2 xl:w-[700px] xl:h-[430px] xl:py-0">
              <div className="relative grid grid-cols-3 gap-4 sm:gap-5">
                <div className="bg-black rounded-[50%] h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] xl:h-[70px] xl:w-[70px] flex items-center justify-center">
                  <img
                    src={TickTokImg}
                    alt="TickTokImg Icon"
                    className="w-[38px] sm:w-[44px] xl:w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-[#3B579D] rounded-[50%] h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] xl:h-[70px] xl:w-[70px] flex items-center justify-center">
                  <img
                    src={FacebookIcon}
                    alt="FacebookIcon"
                    className="w-[38px] sm:w-[44px] xl:w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-white rounded-[50%] h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] xl:h-[70px] xl:w-[70px] flex items-center justify-center">
                  <img
                    src={MessangerIcon}
                    alt="MessangerIcon"
                    className="w-[38px] sm:w-[44px] xl:w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-white rounded-[50%] h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] xl:h-[70px] xl:w-[70px] flex items-center justify-center">
                  <img
                    src={InstagramIcon}
                    alt="InstagramIcon"
                    className="w-[38px] sm:w-[44px] xl:w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-white rounded-[50%] h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] xl:h-[70px] xl:w-[70px] flex items-center justify-center">
                  <img
                    src={WhatsppIcon}
                    alt="WhatsppIcon"
                    className="w-[38px] sm:w-[44px] xl:w-[50px] object-cover rounded-[10px]"
                  />
                </div>
                <div className="bg-black rounded-[50%] h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] xl:h-[70px] xl:w-[70px] flex items-center justify-center">
                  <img
                    src={TwitterIcon}
                    alt=" TwitterIcon"
                    className="w-[38px] sm:w-[44px] xl:w-[50px] object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grow;
