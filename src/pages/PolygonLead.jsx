
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import BlurTick from "../assets/BlueTick.png";
import SerachIcon from "../assets/searchIcon.png";
function FlyTo({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 13, { duration: 0.8 });
    }
  }, [position, map]);
  return null;
}

function PolygonLead() {
  const featuresList = [
    "FSBO (Coming Soon!)",
    "Retiree Homeowners",
    "Expired Listing (Coming Soon!)",
    "Tax Delinquency",
    "Pre-Foreclosure",
    "Foreclosure",
    "High Equity",
    "Lis Pendens",
    "Underwater Mortgage",
    "Likely to Sell",
  ];

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  // Search location
  const searchPlace = (value) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${encodeURIComponent(value)}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Location search failed");
        }

        const data = await res.json();
        setResults(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 400);
  };

  // Select location
  const pickPlace = (item) => {
    setSelected([Number(item.lat), Number(item.lon)]);
    setQuery(item.display_name.split(",")[0]);
    setResults([]);
    setLoading(false);

    clearTimeout(timerRef.current);
  };

  // // Clear pending search timer
  // useEffect(() => {
  //   return () => clearTimeout(timerRef.current);
  // }, []);

  return (
    <div className="relative w-full xl:h-[300px] xl:top-[200px]">
      <div className="relative w-full px-5 py-12 sm:px-8 xl:h-0 xl:p-0">

        {/* Heading */}
        <div className="flex justify-center text-center xl:absolute xl:left-[100px] xl:justify-start xl:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[24px] sm:text-[28px] xl:justify-start xl:text-[32px] font-semibold">
            <span className="bg-gradient-to-r from-[#003F79] to-[#00ACDB] bg-clip-text text-transparent">
              Polygon
            </span>

            <span className="text-[#575665]">
              Lead Search
            </span>
          </div>
        </div>

        {/* Features list */}
        <div className="mx-auto mt-6 grid w-full max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-2 xl:absolute xl:mx-0 xl:mt-0 xl:top-[50px] xl:left-[80px] xl:gap-4 xl:w-[620px]">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px] w-full h-[60px] px-4 flex items-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.06)] xl:h-[69px] xl:px-5 xl:gap-4"
            >
              <img
                src={BlurTick}
                alt="BlurTick Icon"
                className="w-[18px] h-[18px] shrink-0"
              />

              <h3 className="text-[#1C1A1B] font-medium text-[13px] sm:text-[14px] xl:text-[16px]">
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* Map container */}
        <div className="relative mx-auto mt-8 w-full max-w-[430px] xl:absolute xl:mx-0 xl:mt-0 xl:top-[20px] xl:left-[790px] xl:max-w-none xl:w-[430px] xl:h-[430px]">
          <div className="relative w-full aspect-square rounded-[24px] overflow-hidden sm:rounded-[30px] xl:rounded-[37px]">

            <MapContainer
              center={[40.7128, -74.006]}
              zoom={11}
              zoomControl={true}
              className="w-full h-full"
              scrollWheelZoom={true}
            >
              <TileLayer
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Move map after selecting a location */}
              <FlyTo position={selected} />

              {/* Selected location marker */}
              {selected && (
                <Marker position={selected}  />
              )}
            </MapContainer>
            <div className="absolute top-[10px] left-[56px] right-[16px] z-[1000] sm:top-[12px] sm:left-[58px] sm:right-[30px] xl:right-auto xl:w-[320px]">
              <div className="relative bg-white rounded-[5px] h-[40px] w-full sm:h-[44px]">

                <img
                  src={SerachIcon}
                  alt="Search Icon"
                  className="w-[16px] h-[16px] absolute top-[12px] left-[14px] sm:top-[14px] sm:left-[16px]"
                />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    const value = e.target.value;

                    setQuery(value);

                    if (value.trim().length >= 3) {
                      searchPlace(value.trim());
                    } else {
                      clearTimeout(timerRef.current);
                      setResults([]);
                      setLoading(false);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && results[0]) {
                      pickPlace(results[0]);
                    }

                    if (e.key === "Escape") {
                      setResults([]);
                    }
                  }}
                  placeholder="Polygon Search"
                  className="absolute inset-0 pl-[40px] pr-4 w-full bg-transparent outline-none font-medium text-[13px] sm:text-[14px] sm:pl-[42px]"
                />

                {loading && (
                  <span className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[12px] text-[#575665]">
                    Loading...
                  </span>
                )}
              </div>

              {/* Search suggestions */}
              {results.length > 0 && (
                <ul className="mt-2 max-h-[220px] overflow-y-auto rounded-[8px] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
                  {results.map((item) => (
                    <li key={item.place_id}>
                      <button
                        type="button"
                        onClick={() => pickPlace(item)}
                        className="w-full text-left px-4 py-2 text-[12px] sm:text-[13px] text-[#1C1A1B] hover:bg-[#F1F8FC]"
                      >
                        {item.display_name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
export default PolygonLead;
