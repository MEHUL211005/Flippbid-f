import React from "react";
import backgroundImage from "../assets/backImage.png";
import Zoom from "../assets/zoom.png";
import Bull from "../assets/Freddie Bullworth 3 1.png";
import Button from "../Component/Button";
import Search from "../assets/search-2-line.png";
import Vector from "../assets/Vector.png";
import Group from "../assets/Group 568.png";

function MainSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-center

        min-h-[660px]

        sm:min-h-[620px]

        md:min-h-[680px]

        lg:min-h-[200px]

        xl:h-[calc(100vh-90px)]
        xl:min-h-[640px]
      "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* ================= JOIN DEMO ================= */}
      <div
        className="
          absolute
          z-30

          top-[16px]
          right-[12px]

          w-[72px]
          h-[68px]

          sm:top-[20px]
          sm:right-[20px]
          sm:w-[62px]
          sm:h-[52px]

          md:top-[25px]
          md:right-[25px]
          md:w-[95px]
          md:h-[90px]

          xl:top-[4%]
          xl:right-[2%]
          xl:w-[108px]
          xl:h-[103px]

          bg-gradient-to-tl
          from-[#1C1A1B]
          to-[#5B5555]

          rounded-[12px]

          flex
          flex-col
          items-center
          justify-center
        "
      >
        <img
          src={Zoom}
          alt="Zoom"
          className="
            w-[24px]
            h-[24px]

            sm:w-[24px]
            sm:h-[23px]

            md:w-[32px]
            md:h-[32px]

            xl:w-[38px]
            xl:h-[38px]
          "
        />

        <p
          className="
            text-white
            font-semibold
            text-[10px]

            sm:text-[10px]
            md:text-[13px]
            xl:text-[16px]
          "
        >
          Join Demo
        </p>
      </div>

      <div
        className="
          absolute
          z-10
          top-[100px]
          right-0
          aspect-[453/734]
          w-[125px]

          sm:top-[88px]
          sm:right-[8px]
          sm:w-[200px]

          md:top-[120px]
          md:right-[20px]
          md:w-[250px]

          lg:top-[9%]
          lg:right-[60px]
          lg:w-[330px]

          xl:top-auto
          xl:bottom-0
          xl:right-[10%]
          xl:w-[350px]
        "
      >
        <img
          src={Bull}
          alt="Bull"
          className="absolute inset-0 h-full w-full object-contain object-bottom xl:h-[570px] xl:left-[30px]"
        />

        <div
          className="
          absolute
          z-10
          top-[1%]
          right-[100%]
          w-[200px]
          h-[36px]

          sm:top-[15%]
          sm:w-[275px]
          sm:h-[40px]
          lg:top-[8%]
          md:top-[5%]
          md:w-[315px]
          md:h-[44px]

          xl:top-[6%]
          xl:w-[349px]
          xl:h-[44px]
          xl:right-[310px]

          bg-white
          rounded-[50px]
        "
        >
          <img
            src={Vector}
            alt="Vector"
            className="
            absolute
            left-[6px]
            top-[10px]
            w-[16px]
            h-[16px]
            sm:left-[12px]
            sm:top-[10px]
            sm:w-[20px]
            sm:h-[19px]
            md:w-[22px]
            md:h-[20px]
          "
          />

          <p
            className="
            absolute
            left-[28px]
            top-[10px]
            right-[28px]
            sm:left-[42px]
            sm:right-[40px]
            md:left-[45px]
            md:right-[40px]
            whitespace-nowrap
            overflow-hidden
            text-ellipsis
            bg-gradient-to-r
            from-[#003F79]
            to-[#00ACDB]
            bg-clip-text
            text-transparent
            font-semibold
            font-alkatra
            text-[9px]
            sm:text-[12px]
            md:text-[14px]
          "
          >
            Just Real State Investments...No Bull
          </p>

          <div
            className="
            absolute
            right-[2px]
            top-[9px]
            w-[28px]
            h-[32px]
            sm:right-[2px]
            sm:top-[12px]
            sm:w-[34px]
            sm:h-[38px]
            md:right-[2px]
            md:top-[13px]
            md:w-[38px]
            md:h-[42px]
            xl:w-[39px]
            xl:h-[60px]
            bg-white
            rotate-[170deg]
          "
            style={{
              clipPath: "polygon(0 0, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>

      {/* ================= CONTENT (flow on small screens, absolute on xl) ================= */}
      <div
        className="
          relative
          z-20

          w-full
          px-5
          pt-[315px]
          pb-8

          sm:px-8
          sm:pt-[430px]

          md:px-12
          md:pt-[545px]

          lg:px-16
          lg:pt-[230px]

          xl:static
          xl:block
          xl:p-0
        "
      >
        {/* ================= HEADING ================= */}
        <h1
          className="
            relative
            xl:absolute

            font-bold
            text-white

            text-[27px]
            leading-[34px]

            sm:text-[36px]
            sm:leading-[43px]

            md:text-[44px]
            md:leading-[52px]

            xl:top-[30%]
            xl:left-[5%]
            xl:text-[50px]
            xl:leading-[64px]

            text-shadow-[3px_4px_5px_rgba(0,0,0,0.6)]
          "
        >
          Enter The Address.We'll show
          <br />
          you what it's actually worth
        </h1>

        {/* ================= SEARCH ================= */}
        <div
          className="
            relative
            mt-6
            w-full

            lg:max-w-[620px]

            xl:absolute
            xl:mt-0
            xl:top-[330px]
            xl:left-[70px]
            xl:w-[680px]
            xl:max-w-none
          "
        >
          <div
            className="
              relative
              w-full
              h-[52px]

              md:h-[55px]

              xl:h-[55px]

              bg-white
              rounded-[10px]
            "
          >
            {/* Search Icon */}
            <img
              src={Search}
              alt="Search"
              className="
                absolute

                left-[15px]
                top-[14px]

                w-[23px]
                h-[23px]
              "
            />

            {/* Placeholder */}
            <p
              className="
                absolute

                left-[48px]
                top-[15px]

                text-[#9593A2]

                text-[13px]

                sm:text-[14px]
                xl:text-[15px]
              "
            >
              Search Property...
            </p>

            {/* Search Button */}
            <Button
              className="
                absolute

                right-[5px]
                top-[4px]

                w-[110px]
                h-[44px]

                sm:w-[125px]
                sm:h-[46px]
                sm:top-[4px]

                md:w-[140px]

                xl:w-[163px]
                xl:h-[45px]

                bg-gradient-to-r
                from-[#003F79]
                to-[#00ACDB]

                rounded-[8px]
                text-white

                text-[14px]
                sm:text-[15px]
                xl:text-[16px]
              "
            >
              Search
            </Button>
          </div>

          {/* Download Text */}
          <p
            className="
              relative
              mt-2
              pr-1

              xl:absolute
              xl:mt-0
              xl:top-[68px]
              xl:left-[2px]
              xl:pr-0

              whitespace-normal
              min-[360px]:whitespace-nowrap

              font-semibold

              text-[15px]
              leading-[22px]

              sm:text-[17px]
              sm:leading-[26px]

              md:text-[24px]
              md:leading-[30px]

              xl:text-[28px]
              xl:leading-[100%]

              text-white

              drop-shadow-[0_4px_6px_rgba(0,0,0,0.33)]

              [-webkit-text-stroke:1px_rgba(0,0,0,1)]
            "
          >
            Download it.Use it.Pay when it makes sense.
          </p>
        </div>

        {/* ================= APP BUTTONS ================= */}
        <div
          className="
            relative
            mt-8

            flex
            h-[52px]
            w-[280px]
            max-w-full
            items-center
            justify-center

            bg-white
            rounded-[13px]

            sm:h-[54px]
            sm:w-[298px]

            md:h-[56px]
            md:w-[313px]

            xl:absolute
            xl:mt-0
            xl:left-[73px]
            xl:top-[460px]
            xl:w-[322px]
            xl:h-[58px]
            xl:max-w-none
          "
        >
          <img
            src={Group}
            alt="Group"
            className="
              w-[274px]
              h-[44px]
              max-w-full
              object-contain

              sm:w-[292px]
              sm:h-[46px]

              md:w-[307px]
              md:h-[48px]

              xl:w-[314px]
              xl:h-[49px]
            "
          />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
