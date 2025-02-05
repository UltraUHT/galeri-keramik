import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const productType2 = [
  {
    id: 1,
    name: "Granite Tile",
    brand: [
      "efata",
      "essenza",
      "fico",
      "granito",
      "indogress",
      "infiniti",
      "niro",
      "portino",
      "roman granit",
      "sandimas",
      "summit",
      "titanium",
      "valentino gress",
      "venus tiles",
      "vincenza",
      "vellino",
      "meliuz"
    ],
    link: ["NIRO", "TITANIUM", "SUMMIT", "VENUS TILES"],
  },
  {
    id: 2,
    name: "Ceramic",
    brand: [
      "habitat",
      "herkules",
      "ikad",
      "jupiter",
      "milan",
      "platinum",
      "roman",
      "ellagress",
      "mulia",
      "singres",
      "mosaic tiles mandiri"
    ],
    link: ["PLATINUM", "ROMAN", "HABITAT", "MILAN"],
  },
  {
    id: 3,
    name: "Sanitary",
    brand: [
      "american standard",
      "cotto",
      "fliessen",
      "sandimas oulu",
      "roca",
      "toto",
      "volk",
    ],
    link: ["TOTO", "FLIESSEN", "AMERICAN STANDARD", "ROCA"],
  },
  {
    id: 4,
    name: "Door",
    brand: ["angzdoor", "matadoor", "top door"],
    link: ["MATADOOR", "ANGZDOOR", "MATADOOR", "TOP DOOR"],
  },
  {
    id: 5,
    name: "Sink",
    brand: ["blanco", "fico", "royal"],
    link: ["BLANCO", "ROYAL", "FICO", "ROYAL"],
  },
  {
    id: 6,
    name: "Mortar",
    brand: ["am", "mu", "sika"],
    link: ["AM", "MU", "AM", "SIKA"],
  },
  {
    id: 7,
    name: "Water Appliances",
    brand: ["ariston", "profil tank", "solahart", "tirta tank"],
    link: ["PROFIL TANK", "ARISTON", "ARISTON", "SOLAHART"],
  },
  {
    id: 8,
    name: "Galvalume",
    brand: ["galvalume"],
    link: ["GALVALUME", "GALVALUME", "GALVALUME", "GALVALUME"],
  },
];

//.

const smallIco = [
  "granite tile",
  "ceramic",
  "sanitary",
  "door",
  "sink",
  "mortar",
  "water appliances",
  "galvalume",
];

function Products() {
  const [selected, setSelected] = useState("Granite Tile");
  const [selectedIndex, setSelectedIndex] = useState("0");
  const selectedLogo = productType2.filter((obj) => obj.name === selected);
  const brand = selectedLogo.map((obj) => obj.brand);
  const selectedLink = productType2[selectedIndex].link;

  return (
    <div className="flex justify-center w-full mt-[20px] md:mt-20">
      <div className="flex w-full flex-col gap-[10px] md:gap-[40px] max-w-[500px] md:max-w-[640px] lg:max-w-[840px]  xl:max-w-[980px] 2xl:max-w-[1280px] border-t pt-[10px] md:pt-[20px]">
        <div className="flex w-full justify-between ">
          <div className="md:w-1/5"></div>
          <div className="w-full md:w-4/5">
            <h2 className="text-center md:text-left">Our Products</h2>
          </div>
        </div>
        <div className="hidden md:flex w-full justify-between ">
          <div className="w-1/5">
            <ul className="cursor-pointer flex flex-col gap-[20px]">
              {productType2.map((obj, index) => (
                <li
                  key={obj.id}
                  onClick={() => {
                    setSelected(obj.name);
                    setSelectedIndex(index);
                  }}
                  className={
                    selected === obj.name
                      ? `underline underline-offset-4 drop-shadow-md`
                      : null
                  }
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-4/5">
            <div
              className="flex items-center justify-center gap-[20px] animate-fadeDown transition-all"
              key={`${selected}`}
            >
              <Link
                href={{
                  pathname: `/product/${selected
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`,
                  query: { brand: selectedLink[0] },
                }}
                passHref
              >
                <a>
                  <Image
                    className="object-contain cursor-pointer"
                    src={`/products/${selected}/highlight/1.png`}
                    alt="highlight product 1"
                    width={508}
                    height={440}
                  />
                </a>
              </Link>
              <div className="flex flex-col gap-[15px]">
                <Link
                  href={{
                    pathname: `/product/${selected
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`,
                    query: { brand: selectedLink[1] },
                  }}
                  passHref
                >
                  <a>
                    <Image
                      className="object-contain cursor-pointer"
                      src={`/products/${selected}/highlight/2.png`}
                      alt="highlight product 2"
                      width={513}
                      height={210}
                    />
                  </a>
                </Link>
                <div className="flex gap-[20px]">
                  <Link
                    href={{
                      pathname: `/product/${selected
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`,
                      query: { brand: selectedLink[2] },
                    }}
                    passHref
                  >
                    <a>
                      <Image
                        className="object-contain cursor-pointer"
                        src={`/products/${selected}/highlight/3.png`}
                        alt="highlight product 3"
                        width={246}
                        height={210}
                      />
                    </a>
                  </Link>
                  <Link
                    href={{
                      pathname: `/product/${selected
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`,
                      query: { brand: selectedLink[3] },
                    }}
                    passHref
                  >
                    <a>
                      <Image
                        className="object-contain cursor-pointer "
                        src={`/products/${selected}/highlight/4.png`}
                        alt="highlight product 4"
                        width={246}
                        height={210}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              {brand[0].map((obj) => (
                <Link
                  key={obj}
                  href={{
                    pathname: `/product/${selected
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`,
                    query: { brand: obj.toUpperCase() },
                  }}
                  passHref
                >
                  <div
                    key={obj}
                    className="w-[80px] h-[80px] xl:w-[110px] xl:h-[110px] animate-fadeDown relative"
                  >
                    <Image
                      className="object-contain cursor-pointer"
                      src={`/products/${selected}/logo/${obj}.png`}
                      alt="logo"
                      layout="fill"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="w-full flex items-end justify-end pt-[20px] xl:pt-0">
              <Link href="/product" passHref>
                <a className="flex relative items-center cursor-pointer group px-[20px]">
                  <p className="z-10">more about our products</p>
                  <div className="absolute z-0 left-0 bg-[#FFE8AC] rounded-full w-[40px] h-[40px] group-hover:w-full transition-all duration-300" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:hidden px-4">
          <div className="flex flex-wrap gap-y-[10px] w-full justify-between">
            {productType2.map((obj, index) => (
              <Link
                key={obj.id}
                href={{
                  pathname: `/product/${obj.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`,
                  query: { tkey: smallIco[index] },
                }}
                passHref
              >
                <div className="relative w-[48%] sm:w-[230px] h-[100px] sm:h-[140px]">
                  <Image
                    className="object-cover cursor-pointer shadow-lg brightness-[.78]"
                    src={`/products/${obj.name}/highlight/1.png`}
                    alt="highlight product 1"
                    layout="fill"
                  />
                  <h2 className="text-white absolute bottom-[5px] left-[5px] drop-shadow-md">
                    {obj.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
