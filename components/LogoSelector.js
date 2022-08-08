import React from "react";
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
    brand: ["angz", "matadoor", "top door"],
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
];

function LogoSelector() {
  const router = useRouter();
  const query = router.query;
  const tkey = query.tkey || "granite tile";
  const selectedLogo = productType2.filter((obj) => obj.name === tkey);
  const brand = selectedLogo.map((obj) => obj.brand);
  console.log("selectedbrand", brand);
  return (
    <div className="flex justify-center py-[40px] min-h-screen flex-grow">
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
                {tkey.toUpperCase()}
              </h2>
              <div className="absolute hidden lg:flex z-0 left-0 bg-[#FFE8AC] rounded-full w-[60px] h-[60px] group-hover:w-full transition-all duration-300" />
            </a>
          </Link>
        </div>
        <div className="flex flex-wrap gap-[10px]">
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
        </div>
      </div>
    </div>
  );
}

export default LogoSelector;
