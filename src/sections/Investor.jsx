
import InvestorCard from "../Component/InvestorCard";
import TownImg from "../assets/TownImg.png";
import ChristopherImg from "../assets/Christopher.png";
import AlexandraImg from "../assets/Alexandra.png";
import JohnImg from "../assets/John.png";
import Button from "../Component/Button";
import Line1 from "../assets/Line1.svg";
import Line2 from "../assets/Line2.svg";
function Investor() {
  const investorsData = [
    {
      name: "John",
      role: "Investor",
      image: JohnImg,
    },
    {
      name: "Alexandra",
      role: "Investor",
      image: AlexandraImg,
    },
    {
      name: "Christopher",
      role: "Investor",
      image: ChristopherImg,
    },
  ];
  // Positions are relative to the TownImg box so a card can never leave it.
  const positions = [
    "left-[2%] top-[47%] sm:left-[6%] sm:top-[50%] md:left-[34%] md:top-[47.4%]",
    "left-[36%] top-[15%] sm:left-[36%] sm:top-[15%] md:left-[53%] md:top-[15.8%]",
    "left-[70%] top-[26%] sm:left-[68%] sm:top-[26%] md:left-[72.5%] md:top-[26.3%]",
  ];

  return (
    <section className="relative mt-0 w-full overflow-hidden bg-gradient-to-r from-[#00ACDB] via-[#A6F0F7] to-[#FDE3FA] h-[660px] sm:h-[740px] md:h-[500px] lg:h-[520px] xl:mt-16 xl:h-[500px]">
      {/* ================= TOWN IMAGE (stage for the cards + lines) ================= */}
      <div
        className="absolute bg-cover bg-center bg-no-repeat rounded-[14px] left-[5%] top-[280px] w-[90%] h-[340px] sm:left-[6%] sm:top-[330px] sm:w-[88%] sm:h-[380px] md:left-[24%] md:top-[60px] md:w-[74%] md:h-[380px] lg:left-[32%] lg:top-[60px] lg:w-[63%] lg:h-[400px] xl:left-[420px] xl:top-[60px] xl:w-[800px] xl:h-[380px] 2xl:left-[calc(50%-270px)]"
        style={{ backgroundImage: `url(${TownImg})` }}
      >
        {/* ================= DECORATIVE LINES (sized/positioned relative to the town) ================= */}
        <img
          src={Line1}
          alt="Line1 Icon"
          className="absolute left-[55%] top-[26%] w-[30%] sm:left-[52%] sm:top-[24%] sm:w-[28%] md:left-[53%] md:top-[16%] md:w-[35%] pointer-events-none select-none"
        />
        <img
          src={Line2}
          alt="Line2 Icon"
          className="absolute left-[6%] top-[45%] w-[78%] rotate-[150deg] sm:left-[6%] sm:top-[36%] sm:w-[76%] md:left-[45%] md:top-[58%] md:w-[44%] pointer-events-none select-none"
        />

        {/* ================= INVESTOR CARDS (always inside the town) ================= */}
        {investorsData.map((item, index) => (
          <InvestorCard
            key={index}
            name={item.name}
            role={item.role}
            image={item.image}
            positionClass={positions[index]}
          />
        ))}
      </div>

      {/* ================= TEXT + BUTTON ================= */}
      <div className="absolute bg-white rounded-[14px] px-6 py-6 sm:px-10 left-[5%] top-[24px] w-[90%] sm:left-[6%] sm:top-[28px] sm:w-[80%] md:left-[5%] md:top-[80px] md:w-[40%] md:px-6 lg:left-[7%] lg:top-[80px] lg:w-[38%] lg:px-10 xl:left-[160px] xl:top-[100px] xl:w-[490px] xl:h-[300px] xl:p-0 2xl:left-[calc(50%-530px)]">
        <p className="text-[26px] sm:text-[32px] md:text-[30px] xl:text-[40px] font-bold xl:ml-10 xl:mt-5 bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
          FREE Verified
        </p>
        <p className="text-[26px] sm:text-[32px] md:text-[30px] xl:text-[40px] font-bold xl:ml-10 bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
          Investor ID CARD
        </p>
        <p className="mt-2 text-[13px] sm:text-[14px] xl:ml-10 xl:mt-0 xl:text-[16px] text-[#575665]">
          Get on the Map and let our sellers reach
        </p>
        <p className="text-[13px] sm:text-[14px] xl:ml-10 xl:text-[16px] text-[#575665]">
          you DIRECT!
        </p>
        <Button className="mt-5 bg-gradient-to-r from-[#C830EB] to-[#00ACDB] h-[45px] w-[150px] rounded-[8px] font-semibold text-white sm:h-[50px] xl:absolute xl:left-[40px] xl:top-[200px] xl:mt-0 xl:h-[50px]">
          Click Here
        </Button>
      </div>
    </section>
  );
}

export default Investor;
