import React from "react";
import House1 from "../assets/House1.png";
import House2 from "../assets/House2.png";
import House3 from "../assets/House3.png";
import House4 from "../assets/House4.png";
import House5 from "../assets/House5.png";
import House6 from "../assets/House6.png";
import Button from "../Component/Button";
import Dollar from "../assets/Dollar.png";
import Bed from "../assets/tabler_bed-filled.png";
import Icon from "../assets/iconoir_bathroom-solid.svg";
import TableBed from "../assets/tabler_bed-filled.svg";
import Map from "../assets/ri_map-pin-fill.svg";
function Properties() {
  const propertiesData = [
    {
      id: 1,
      image: House1,
      tag: "WHOLESALE",
      title: "Modern Family Home",
      beds: "03",
      baths: "02",
      sqft: "1,850 sqft",
      address: "125 Park Avenue, New York, NY 10017, USA",
      price: "35,000",
    },
    {
      id: 2,
      image: House2,
      tag: "WHOLESALE",
      title: "Luxury Family House",
      beds: "04",
      baths: "03",
      sqft: "2,400 sqft",
      address: "78 Maple Street, Brooklyn, NY 11201, USA",
      price: "48,500",
    },
    {
      id: 3,
      image: House3,
      tag: "WHOLESALE",
      title: "Spacious Townhouse",
      beds: "03",
      baths: "02",
      sqft: "1,950 sqft",
      address: "214 Madison Avenue, New York, NY 10016, USA",
      price: "42,000",
    },
    {
      id: 4,
      image: House4,
      tag: "WHOLESALE",
      title: "Contemporary Villa",
      beds: "05",
      baths: "04",
      sqft: "3,200 sqft",
      address: "56 Ocean Drive, Queens, NY 11375, USA",
      price: "65,000",
    },
    {
      id: 5,
      image: House5,
      tag: "WHOLESALE",
      title: "Cozy Suburban Home",
      beds: "02",
      baths: "02",
      sqft: "1,500 sqft",
      address: "342 Elm Street, Bronx, NY 10458, USA",
      price: "29,500",
    },
    {
      id: 6,
      image: House6,
      tag: "WHOLESALE",
      title: "Elegant Modern House",
      beds: "04",
      baths: "03",
      sqft: "2,750 sqft",
      address: "89 Riverside Drive, Manhattan, NY 10024, USA",
      price: "55,000",
    },
  ];

  return (
    <div className="relative bg-[#F3F6F9] min-h-0 py-10 px-4 xl:top-[450px] xl:min-h-[1100px] xl:py-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[24px] sm:text-[28px] xl:text-[32px] font-semibold mb-8 sm:mb-10 xl:mb-12">
          <span className="text-[#575665]">New</span>
          <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            Properties
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 xl:gap-8 justify-items-center">
          {propertiesData.map((item) => (
            <div
              key={item.id}
              className="bg-white w-full sm:max-w-[360px] xl:max-w-none rounded-[10px] shadow-lg p-2 flex flex-col justify-between xl:h-[400px]"
            >
              <div className="relative">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-cover rounded-[10px] sm:h-48"
                  />

                  <div
                    className="absolute inset-0 "
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(200,48,235,0.25) 0%, rgba(0,172,219,0.26) 50%, rgba(0,172,219,0) 100%)",
                    }}
                  ></div>
                </div>
                <div className="mt-3 xl:absolute xl:left-[12px] xl:top-[210px] xl:mt-0">
                  <span className="text-[15px] font-bold tracking-wider bg-gradient-to-r from-[#C830EB] to-[#00ACDB] bg-clip-text text-transparent">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#575665] mt-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-[#6B747B] my-2 sm:gap-4 xl:gap-4">
                    <div className="flex items-center gap-1">
                      <img src={Bed} alt="Beds" className="w-[14px] h-[14px]" />
                      <span> {item.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img
                        src={Icon}
                        alt="Baths"
                        className="w-[14px] h-[14px]"
                      />
                      <span> {item.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img
                        src={TableBed}
                        alt="Sqft"
                        className="w-[14px] h-[14px]"
                      />
                      <span> {item.sqft}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#6B747B] truncate">
                    <img
                      src={Map}
                      alt="Location"
                      className="w-[16px] h-[16px] shrink-0"
                    />
                    {item.address}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 xl:mt-0 xl:relative xl:justify-start">
                <Button className="h-[40px] w-[150px] shrink-0 rounded-[8px] bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white xl:absolute xl:top-[-50px] xl:left-[12px]">
                  View Details
                </Button>
                <span className="text-[#575665] font-semibold flex items-center gap-1 xl:absolute xl:top-[-40px] xl:left-[260px]">
                  <img
                    src={Dollar}
                    alt="Price"
                    className="w-[16px] h-[16px] xl:absolute xl:left-[-25px] xl:w-auto xl:h-auto"
                  />
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center xl:hidden">
          <Button className="h-[50px] w-[150px] rounded-[8px] bg-[#CCF1F7] text-[#00ACDB]">
            See More
          </Button>
        </div>
      </div>
      <Button className="hidden xl:block absolute top-[1020px] left-1/2 -translate-x-1/2 h-[50px] w-[150px] rounded-[8px] bg-[#CCF1F7] text-[#00ACDB] ">
        See More
      </Button>
    </div>
  );
}

export default Properties;