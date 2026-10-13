
import Elips from "../assets/Ellipse 187.svg";
import Tick from "../assets/gridTick.svg";
function InvestorCard({ name, role, image, positionClass }) {
  return (
    <div
      className={`absolute origin-top-left bg-white backdrop-blur-md p-4 rounded-2xl shadow-2xl flex flex-col items-center w-[120px] h-[147px] max-[360px]:scale-[0.7] scale-[0.8] sm:scale-[0.9] md:scale-[0.85] lg:scale-[0.95] xl:scale-100 ${positionClass}`}
    >
      {/* Profile Image with Gradient Border */}
      <div className="relative w-14 h-14 rounded-full p-[2px] bg-gradient-to-r from-[#AF16CD] to-[#00ACDB] mb-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
        {/* Verified Tick Badge */}
      </div>
      <div className="absolute left-1/2 top-[58px] -translate-x-1/2 xl:relative xl:left-auto xl:top-[-20px] xl:translate-x-0">
        <img src={Elips} alt="" className="w-[20px] h-[20px] object-cover" />
        <img
          src={Tick}
          alt=""
          className="w-[10px] h-[10px] object-cover rounded-full absolute top-[7px] left-[5px]"
        />
      </div>
      {/* Name and Role */}
      <h4 className="mt-1 text-sm font-bold bg-gradient-to-r from-[#AF16CD] to-[#00ACDB] bg-clip-text text-transparent xl:absolute xl:mt-0 xl:top-[80px]">
        {name}
      </h4>
      <span className="text-xs text-gray-400 font-medium xl:absolute xl:top-[100px]">
        {role}
      </span>
    </div>
  );
}

export default InvestorCard;
