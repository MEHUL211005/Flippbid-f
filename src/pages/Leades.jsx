import React from "react";
import HomeSaleImg from "../assets/HomeSale.png";
import TickIcon from "../assets/LeaderTickImg.png";
import HeroIcon from "../assets/HeroIcon.png";
import Button from "../Component/Button";
import DollarImg from "../assets/DollarImg.png";
import People from "../assets/PeopleImg.png"
function Leades() {
  return (
    <div className="w-full relative py-12 sm:py-16 xl:h-[600px] xl:py-0">
      <div className="flex flex-col items-center justify-center text-[24px] sm:text-[28px] xl:text-[35px] font-bold xl:mt-20">
        <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent text-center">
          Real Investors, Real Leads
        </p>
        <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent text-center">
          in Real-Time
        </p>
      </div>
      <div className="relative mt-10 w-full px-5 sm:px-8 flex flex-col items-center justify-center gap-8 sm:gap-10 xl:absolute xl:top-[150px] xl:mt-0 xl:h-[420px] xl:flex-row xl:gap-10 xl:px-0">
        {/* ================= CARD 1 ================= */}
        <div className="relative h-[400px] w-full max-w-[580px] rounded-[10px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${HomeSaleImg})`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ACDB]/70 via-[#A6F0F7]/50 to-[#FDE3FA]/70"></div>
          <div className="absolute left-[16px] right-[16px] top-[20px] h-[36px] rounded-[5px] bg-white flex items-center justify-center font-semibold gap-2 sm:left-auto sm:right-auto sm:w-[250px] xl:left-[280px] xl:top-[40px] xl:h-[40px] xl:w-[270px]">
            <img
              src={TickIcon}
              alt=""
              className="w-[16px] h-[16px] xl:w-[19px] xl:h-[19px] shrink-0"
            />
            <p className="text-[10px] sm:text-[12px] xl:text-[16px] text-[#2B3842] truncate">
              LetsNetwork@flippbidd.com
            </p>
          </div>
          <div className="absolute top-[70px] left-[20px] sm:top-[76px] sm:left-[32px] bg-white rounded-[50%] h-[54px] w-[54px] xl:top-[50px] xl:left-[40px] xl:h-[60px] xl:w-[60px] flex items-center justify-center">
            <img
              src={HeroIcon}
              alt=""
              className="w-[26px] h-[26px] xl:w-[30px] xl:h-[30px]"
            />
          </div>
          <div className="absolute top-[134px] left-[20px] right-[16px] font-semibold text-[17px] sm:left-[32px] sm:text-[19px] xl:top-[140px] xl:left-[45px] xl:right-auto xl:text-[20px] text-[#000F1B]">
            <p>FlippBidd Pro-Services</p>
          </div>
          <div className="absolute top-[172px] left-[20px] right-[16px] text-[12px] sm:left-[32px] sm:text-[13px] xl:top-[190px] xl:left-[45px] xl:right-auto xl:text-[16px] text-[#2B3842]">
            <p className="text-[#2B3842]">
              A premium platform connecting real estate{" "}
            </p>
            <p className="text-[#2B3842]">
              professionals with top-tier investment{" "}
            </p>
            <p className="text-[#2B3842]">
              opportunities, tools, and resources.
            </p>
          </div>
          <div className="absolute top-[300px] left-[20px] bg-white rounded-[9px] sm:left-[32px] xl:top-[310px] xl:left-[45px]">
            <Button className="h-[46px] w-[150px] rounded-[9px] bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent xl:h-[50px]">
              <p className="bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent font-semibold text-[14px] xl:text-[16px]">
                Contact Us
              </p>
            </Button>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div className="relative h-[400px] w-full max-w-[580px] rounded-[10px] overflow-hidden bg-transparent">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 "
            style={{
              backgroundImage: `url(${People})`,
            }}
          ></div>

          <div className="absolute left-[16px] right-[16px] top-[20px] h-[36px] rounded-[5px] bg-white flex items-center justify-center font-semibold gap-2 sm:left-auto sm:right-auto sm:w-[250px] xl:left-[280px] xl:top-[40px] xl:h-[40px] xl:w-[270px]">
            <img
              src={TickIcon}
              alt=""
              className="w-[16px] h-[16px] xl:w-[19px] xl:h-[19px] shrink-0"
            />
            <p className="text-[10px] sm:text-[12px] xl:text-[16px] text-[#2B3842] truncate">
              LetsNetwork@flippbidd.com
            </p>
          </div>
          <div className="absolute top-[70px] left-[20px] sm:top-[76px] sm:left-[32px] bg-white rounded-[50%] h-[54px] w-[54px] xl:top-[50px] xl:left-[40px] xl:h-[60px] xl:w-[60px] flex items-center justify-center">
            <img
              src={DollarImg}
              alt=""
              className="w-[54px] h-[54px] xl:w-[60px] xl:h-[60px]"
            />
          </div>
          <div className="absolute top-[134px] left-[20px] right-[16px] font-semibold text-[17px] sm:left-[32px] sm:text-[19px] xl:top-[140px] xl:left-[45px] xl:right-auto xl:text-[20px] text-[#000F1B]">
            <p>National Lenders</p>
          </div>
          <div className="absolute top-[172px] left-[20px] right-[16px] text-[12px] sm:left-[32px] sm:text-[13px] xl:top-[190px] xl:left-[45px] xl:right-auto xl:text-[16px] text-[#2B3842]">
            <p className="text-[#2B3842]">
              Stay ahead of the Competition! Get Real-Time
            </p>
            <p className="text-[#2B3842]">
              Leads of Investors Nationally right to your Inbox or
            </p>
            <p className="text-[#2B3842]">
              CRM's when they view a real-estate investment.
            </p>
          </div>
          <div className="absolute top-[300px] left-[20px] bg-white rounded-[9px] sm:left-[32px] xl:top-[310px] xl:left-[45px]">
            <Button className="h-[46px] w-[150px] rounded-[9px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] font-semibold text-white xl:h-[50px]">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leades;