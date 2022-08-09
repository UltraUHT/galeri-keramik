import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const productType2 = [
  {
    id: 1,
    name: "granite tile",
    brand: [
      "efata",
      "essenza",
      "fico",
      "granito",
      "indogress",
      "infinity",
      "niro",
      "portino",
      "roman granit",
      "sanjimas",
      "summit",
      "titanium",
      "valentino gress",
      "venus tiles",
      "vincenza",
    ],
  },
  {
    id: 2,
    name: "ceramic",
    brand: [
      "habitat",
      "herkules",
      "ikad",
      "jupiter",
      "milan",
      "platinum",
      "roman",
    ],
  },
  {
    id: 3,
    name: "sanitary",
    brand: [
      "american standard",
      "cotto",
      "fliessen",
      "sandimas oulu",
      "roca",
      "toto",
    ],
  },
  {
    id: 4,
    name: "door",
    brand: ["angzdoor", "matadoor", "top door"],
  },
  {
    id: 5,
    name: "sink",
    brand: ["blanco", "fico", "royal"],
  },
  {
    id: 6,
    name: "mortar",
    brand: ["am", "mu", "sika"],
  },
  {
    id: 7,
    name: "water appliances",
    brand: ["ariston", "profil tank", "solahart", "tirta tank"],
  },
  {
    id: 8,
    name: "galvalume",
    brand: ["galvalume"],
  },
];

const logoImg = (...props) => {
  return (
    <div className="flex flex-wrap gap-[5px] sm:gap-[10px] justify-start">
      {props[0][0].map((obj) => (
        <Link
          key={obj}
          href={{
            pathname: `/product/${props[1].replace(/\s+/g, "-").toLowerCase()}`,
            query: { brand: obj.toUpperCase() },
          }}
          passHref
        >
          <div
            key={obj}
            className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] xl:w-[190px] xl:h-[190px] animate-fadeDown relative"
          >
            <Image
              className="object-contain cursor-pointer"
              src={`/products/${props[1]}/logo/${obj}.png`}
              alt="logo"
              layout="fill"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

function formatString(str) {
  return str
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
}

function LogoSelector() {
  const router = useRouter();
  const query = router.query;
  const tkey = query.tkey || "granite tile";
  const selectedLogo = productType2.filter((obj) => obj.name === tkey);
  const brand = selectedLogo.map((obj) => obj.brand);
  return (
    <div className="flex justify-center py-[20px] min-h-screen flex-grow">
      <div className="flex w-full flex-col gap-[40px] px-4 md:px-0 max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px]">
        <div className="w-full flex">
          <Link href="/product" passHref>
            <a className="flex relative items-center cursor-pointer group lg:px-[20px]">
              <h2 className="z-10 flex items-center gap-[8px]">
                <div className="relative w-[19px] h-[16px] xl:w-[26px] xl:h-[23px]">
                  <Image
                    className="object-contain cursor-pointer"
                    src="/../../icons/back.svg"
                    alt="galeri keramik why us 2"
                    layout="fill"
                  />
                </div>
                {formatString(tkey)}
              </h2>
              <div className="absolute hidden lg:flex z-0 left-0 bg-[#FFE8AC] rounded-full w-[60px] h-[60px] group-hover:w-full transition-all duration-300" />
            </a>
          </Link>
        </div>
        {/* <div className="flex flex-wrap gap-[10px]">
          {brand[0].map((obj) => (
            <Link
              key={obj}
              href={{
                pathname: `/product/${tkey.replace(/\s+/g, "-").toLowerCase()}`,
                query: { brand: obj.toUpperCase() },
              }}
              passHref
            >
              <div
                key={obj}
                className="w-[100px] h-[100px] xl:w-[190px] xl:h-[190px] animate-fadeDown relative"
              >
                <Image
                  className="object-contain cursor-pointer"
                  src={`/products/${tkey}/logo/${obj}.png`}
                  alt="logo"
                  layout="fill"
                />
              </div>
            </Link>
          ))}
        </div> */}
        {tkey === "granite tile" ? logoImg(brand, "Granite Tile") : null}
        {tkey === "ceramic" ? logoImg(brand, "Ceramic") : null}
        {tkey === "sanitary" ? logoImg(brand, "Sanitary") : null}
        {tkey === "door" ? logoImg(brand, "Door") : null}
        {tkey === "sink" ? logoImg(brand, "Sink") : null}
        {tkey === "mortar" ? logoImg(brand, "Mortar") : null}
        {tkey === "water appliances"
          ? logoImg(brand, "Water Appliances")
          : null}
        {tkey === "galvalume" ? logoImg(brand, "Galvalume") : null}
      </div>
    </div>
  );
}

export default LogoSelector;
