import React from "react";
import FotterImg from "../assets/FooterImg.png";
import AppStone from "../assets/AppStone.png";
import Play from "../assets/play.png";
import FotterIcon from "../assets/FooterIcon.svg";
import FaceBook from "../assets/FotterFaceBook.png";
import Linkdin from "../assets/LinkdinFooter.png";
import Instagram from "../assets/InstagramFooter.png";
import youTube from "../assets/YouTubeFoteer.png";
import Video from "../assets/VideoFooter.png";
import Calender from "../assets/Calender.png";
import MobileImg from "../assets/MobileIcon.png";
import MapImg from "../assets/MapIcon.png";
import AppFotter from "../assets/AppStoreFooter.svg";
import GoogleFotter from "../assets/GoggleplayFooter.png";
import Button from "../Component/Button";
import BuildingImg from "../assets/Building.png";
function Footer() {
  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="relative h-[300px] sm:h-[360px] bg-red-600 bg-cover bg-center xl:h-[400px]"
        style={{
          backgroundImage: `url(${FotterImg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001014]/20 to-[#003F79]/80"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-5 px-5 text-center">
          <p className="text-[22px] sm:text-[28px] xl:text-[35px] font-bold text-white">
            Available Now on AppStore & GooglePlay
          </p>
          <p className="font-semibold text-white text-[13px] sm:text-[15px]">
            WebApp Package Coming Spring 2025!
          </p>
          <div className="flex gap-4">
            <img
              src={AppStone}
              alt="AppStone Icon"
              className="w-[150px] sm:w-auto object-cover rounded-[10px]"
            />
            <img
              src={Play}
              alt="Play Icon"
              className="w-[150px] sm:w-auto object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
      {/* Footer Start Here */}
      <div className="relative hidden xl:block">
        <img
          src={BuildingImg}
          alt="BuildingImg"
          className="h-[400px] absolute top-[-3px] left-[830px]  opacity-[30%]"
        />
      </div>
      <div className="bg-[#002241] text-white w-full px-5 sm:px-8 xl:px-30 py-10 xl:h-[400px] xl:py-10 flex flex-col justify-evenly gap-8 xl:gap-0">
        {/* Top Content Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src={FotterIcon}
                alt="FotterIcon"
                className="object-cover rounded-[10px]"
              />
            </div>
            <div className="">
              <span className="block text-xs text-gray-300 text-[14px] leading-relaxed">
                FlippBidd is the ultimate real estate
              </span>

              <span className="block text-xs text-gray-300 text-[14px]  leading-relaxed">
                investment platform, providing
              </span>

              <span className="block text-xs text-gray-300 text-[14px]  leading-relaxed">
                nationwide off-market leads,
              </span>

              <span className="block text-xs text-gray-300 text-[14px]  leading-relaxed">
                financial services, and data-driven
              </span>

              <span className="block text-xs text-gray-300 text-[14px]  leading-relaxed">
                insights to empower investors.
              </span>
            </div>
            <div className="flex gap-3 mt-1">
              {/* Social Icons Placeholders */}
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={FaceBook}
                  alt="Facebook Icon"
                  className="object-cover rounded-[10px]"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={Linkdin}
                  alt="Linkdin Icon"
                  className="object-cover rounded-[10px]"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={Instagram}
                  alt="Instagram Icon"
                  className="object-cover rounded-[10px]"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={youTube}
                  alt="youTube Icon"
                  className="object-cover rounded-[10px]"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-[#003F79] flex items-center justify-center cursor-pointer hover:opacity-80">
                <img
                  src={Video}
                  alt="Video Icon"
                  className="object-cover rounded-[10px]"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm text-[#00b4d8] mb-1">
              Quick Links
            </h3>
            <a href="#" className="text-[14px]  text-gray-300">
              Home
            </a>
            <a href="#" className="text-[14px]  text-gray-300 ">
              7 Day Trial
            </a>
            <a href="#" className="text-[14px]  text-gray-300">
              Book a Demo
            </a>
            <a href="#" className="text-[14px]  text-gray-300">
              Submit Property
            </a>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="flex flex-col gap-4 relative">
            <h3 className="font-semibold text-sm text-[#00b4d8] mb-1">
              Get in Touch
            </h3>
            <p className="text-xs text-gray-300 flex items-center gap-3 text-[14px]">
              <img
                src={MapImg}
                alt="MapImg Icon"
                className="w-[18px] h-[18px] xl:w-[24px] xl:h-[24px] object-cover rounded-[10px] shrink-0"
              />
              New York, NY
            </p>
            <div className="text-xs text-gray-300 flex items-start gap-3 text-[14px]">
              <img
                src={Calender}
                alt="Calender Icon"
                className="w-[18px] h-[18px] object-cover rounded-[10px] shrink-0 xl:w-[24px] xl:h-[24px]"
              />
              <div className="break-words xl:absolute xl:left-[35px] xl:top-[75px] xl:w-[300px]">
                <p className="xl:absolute xl:top-0">
                  https://calendly.com/flippbidd/{" "}
                </p>
                <p className="xl:absolute xl:top-[15px]">
                  flippbidd-network-intro-demo
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-300 flex items-center text-[14px] gap-5">
              <img
                src={MobileImg}
                alt="MobileImg Icon"
                className="w-[18px] h-[18px] object-cover rounded-[10px] shrink-0"
              />
              +1 376-688-3298
            </p>
          </div>

          {/* Column 4: Newsletter & Apps */}
          <div className="flex flex-col gap-3 z-1">
            <h3 className="font-semibold text-sm text-[#00b4d8]">
              Get our Weekly Email Updates
            </h3>
            <span className="text-[14px] text-gray-400">Your Email</span>
            <div className="flex bg-white rounded-lg overflow-hidden p-1 max-w-[280px]">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full min-w-0 text-xs px-2 text-black outline-none bg-transparent"
              />
              <Button className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white text-xs px-4 py-2 rounded-md font-medium hover:bg-[#005f87] transition-colors shrink-0">
                Send
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <img
                src={AppFotter}
                alt="AppFotter Icon"
                className="object-cover rounded-[10px] h-[40px] w-auto max-w-[139px]"
              />
              <img
                src={GoogleFotter}
                alt="GoogleFotter Icon"
                className="object-contain rounded-[10px] h-[40px] w-auto max-w-[130px] xl:max-w-none shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row items-center justify-between gap-3 text-[12px] text-gray-400 relative ">
          <p>© Copyright 2025 FlippBidd App</p>
          <div className="flex flex-wrap justify-center gap-2 xl:gap-4 mt-2 xl:mt-0 xl:absolute xl:left-[190px]">
            <span>|</span>
            <a href="#">Terms & Conditions</a>
            <span>|</span>
            <a href="#">Privacy policy</a>
            <span>|</span>
            <a href="#">Cancellation & Refund Policy</a>
          </div>
          <div className="flex gap-4 mt-2 xl:mt-0">
            <a href="#">Contact Sales</a>
            <span>|</span>
            <a href="#">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
