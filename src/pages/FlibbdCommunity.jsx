import React from "react";
import PlayButton from "../assets/Play.svg"
import House1 from "../assets/CommHouse1.png"
import House2 from "../assets/CommHouse2.png";
import House3 from "../assets/CommHouse3.png";
import House4 from "../assets/CommHouse4.png";

function FlibbdCommunity() {
  const cardsData = [
    {
      id: 1,
      image:
       House1,
      title: "Real Estate Wholesaling and Networking",
    },
    {
      id: 2,
      image:
        House2,
      title: "FlippBidd NYC NYREM Event Dec 2023",
    },
    {
      id: 3,
      image:
        House3,
      title: "Real Estate Wholesaling and Networking",
    },
    {
      id: 4,
      image:
       House4,
      title: "Real Estate Wholesaling and Networking",
    },
  ];
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12 sm:py-16 xl:h-[600px] xl:py-0">
      <div className="relative w-full max-w-[1300px] px-5 sm:px-8 xl:h-[400px] xl:px-0">
        <div className="flex flex-col items-center justify-center gap-y-1 sm:flex-row sm:flex-wrap sm:gap-3">
          <span className="text-center text-[22px] sm:text-[26px] xl:text-[35px] font-bold text-[#575665]">
            See what our
          </span>
          <span className="text-center text-[22px] sm:text-[26px] xl:text-[35px] font-bold bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            FlippBidd
          </span>
          <span className="text-center text-[22px] sm:text-[26px] xl:text-[35px] font-bold text-[#575665]">
            Community is Saying
          </span>
        </div>
        <p className="mt-3 text-center text-[14px] sm:text-[16px] xl:absolute xl:left-[550px] xl:mt-2 xl:text-left xl:text-[18px] bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent font-semibold">
          VIEW VIDEOS BELOW
        </p>
      </div>
      <div className="grid w-fit max-w-[calc(100vw-32px)] grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 mt-8 sm:mt-10 xl:absolute xl:top-[230px] xl:mt-0 xl:left-0 xl:right-0 xl:w-full xl:max-w-none xl:grid-cols-[repeat(4,250px)] xl:gap-9 xl:justify-center">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="relative xl:static bg-white rounded-[10px] w-[250px] h-[290px] shadow-lg overflow-hidden"
          >
            {/* Card Image with Play Button */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 "
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0, 63, 121,0.60) 0%, rgba(0, 172, 219, 0) 100%)",
                }}
              ></div>
            </div>

            <div className="rounded-[50%] h-[55px] w-[55px] absolute top-[140px] ml-5 bg-white shadow-lg flex items-center justify-center">
              <img
                src={PlayButton}
                alt="Play"
                className="w-[25px] h-[25px] object-cover"
              />
            </div>

            <div className="relative">
              <h3 className="text-[#575665] font-semibold text-[13px] sm:text-[15px] absolute top-[40px] left-[11px] pr-3">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlibbdCommunity;