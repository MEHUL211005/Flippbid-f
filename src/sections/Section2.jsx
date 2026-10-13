
import Section2Image from "../assets/GroupSection2.png";
import Button from "../Component/Button";

function Section2() {
  return (
    <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px] 2xl:h-[420px] bg-[#F3F6F9] flex flex-col items-center justify-center gap-5 sm:gap-7 lg:gap-8 px-4">
      {/* Header Text */}
      <p className="bg-gradient-to-l from-[#00ACDB] to-[#C830EB] bg-clip-text text-transparent font-semibold leading-tight text-[11px] sm:text-sm lg:text-base 2xl:text-[17px] text-center tracking-wide">
        GET NATIONAL EXPOSURE TO REAL ESTATE INVESTORS
      </p>

      {/* Section Image */}
      <img
        src={Section2Image}
        alt="Section 2 Display"
        className="w-[280px] sm:w-[450px] lg:w-[650px] xl:w-[700px] 2xl:w-[750px] h-auto object-contain"
      />

      {/* Action Button */}
      <Button className="h-[42px] sm:h-[46px] lg:h-[49px] w-[110px] sm:w-[120px] lg:w-[126px] rounded-[8px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white font-medium">
        Click Here
      </Button>
    </div>
  );
}

export default Section2;
