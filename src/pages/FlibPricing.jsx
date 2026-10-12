import React from "react";
import TickIcon from "../assets/TickIcon.svg"
import Button from "../Component/Button";
function FlibPricing() {
  const pricingPlans = [
    {
      id: 1,
      title: "Free Version",
      price: "$0.00",
      period: "/ Month",
      badge: null,
      features: [
        "Includes 7 Day Full Access",
        "Deal Notifications",
        "CRM+Networks Feature",
        "Basic Property Data",
      ],
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "WebApp Package",
      price: "$199.00",
      period: "/ Month",
      badge: "GET A 7-DAY TRIAL",
      features: [
        "WebApp + Mobile Device Access",
        "100 Property Reports",
        "FlippBidd Leads",
        "National Investor Search",
        "100 SkipTraces/Month",
      ],
      buttonText: "Subscribe",
    },
    {
      id: 3,
      title: "Pro-Plus+ Coming Soon",
      price: "$299.00",
      period: "/ Month",
      badge: null,
      features: [
        "WebApp Package",
        "Virtual Tours w/ RSVP Reminders",
        "500 Property Reports",
        "200 SkipTraces/Month",
      ],
      buttonText: "Subscribe"
    },
  ];

  return (
    <div
      className="relative min-h-0 py-10 px-4 sm:py-14 xl:top-[450px] xl:min-h-[550px] xl:py-16"
      style={{
        background:
          "linear-gradient(90deg, rgba(200,48,235,0.3) 0%, rgba(0,172,219,0.2592) 0%, rgba(0,172,219,0) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Title Section */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-[24px] sm:text-[28px] xl:text-[32px] font-semibold mb-10 sm:mb-14 xl:mb-16">
          <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
            FlippBidd
          </span>
          <span className="text-[#575665]">Pricing & Plans</span>
        </div>

        {/* 7-DAY TRIAL badge — inline on small screens, absolute above card 2 on xl */}
        <div className="relative mb-6 flex justify-center xl:mb-0 xl:h-0">
          <div
            className="hidden xl:block absolute bg-[#0AA6DC6B] top-[-26px] left-[580px] h-[50px] w-[50px]"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            }}
          ></div>
          <div
            className="relative xl:absolute xl:top-[-25px] xl:left-[405px] bg-gradient-to-r from-[#AF16CD] to-[#00ACDB] h-[40px] w-[200px] z-3 rounded-tl-2xl flex items-center xl:h-[45px]"
            style={{
              clipPath: "polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)",
            }}
          >
            <p className="ml-3 text-white font-semibold text-[12px] sm:text-[14px] xl:text-[16px]">
              GET A 7-DAY TRIAL
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 xl:gap-8 justify-items-center ">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white w-full max-w-[340px] rounded-2xl shadow-md overflow-hidden flex flex-col`}
            >
              <div className="p-6 sm:p-8 flex-1 flex flex-col ">
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-[#00ACDB]">
                      {plan.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2B3842] mt-1">
                    {plan.title}
                  </h3>
                </div>
                <hr className="border-gray-100 mb-6" />
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-[#2B3842]"
                    >
                      <img
                        src={TickIcon}
                        alt="TickIcon Img"
                        className="shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <Button
                  className={`w-full py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#003F79] to-[#00ACDB] text-white`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlibPricing;