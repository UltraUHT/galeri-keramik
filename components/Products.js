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
      "infinity",
      "niro",
      "roman",
      "sanjimas",
      "summit",
      "titanium",
      "valentino",
      "venus",
      "vincenza",
    ],
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
    ],
  },
  {
    id: 3,
    name: "Sanitary",
    brand: ["american", "cotto", "fliessen", "oulu", "roca", "toto"],
  },
  {
    id: 4,
    name: "Door",
    brand: ["angz", "matadoor", "topdoor"],
  },
  {
    id: 5,
    name: "Sink",
    brand: ["fico", "royal"],
  },
  {
    id: 6,
    name: "Mortar",
    brand: ["am", "mu", "sika"],
  },
  {
    id: 7,
    name: "Water Appliances",
    brand: ["ariston", "profil", "royal", "solahart", "tirta"],
  },
];

function Products() {
  const [selected, setSelected] = useState("Granite Tile");
  // const useSelected = (type) => {
  //   setSelected(type);
  // };
  const selectedLogo = productType2.filter((obj) => obj.name === selected);
  const selectedBrand = selectedLogo.map((obj) => obj.brand);
  const linkTo = selected.replace(/\s+/g, "-").toLowerCase();
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
              {productType2.map((obj) => (
                <li
                  key={obj.id}
                  onClick={() => setSelected(obj.name)}
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
            <Link href={`/product/${linkTo}`} passHref>
              <div
                className="flex items-center justify-center gap-[20px] animate-fadeDown transition-all"
                key={`${selected}`}
              >
                <div>
                  <Image
                    className="object-contain cursor-pointer"
                    src={`/products/${selected}/highlight/1.png`}
                    alt="highlight product 1"
                    width={508}
                    height={440}
                  />
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div>
                    <Image
                      className="object-contain cursor-pointer"
                      src={`/products/${selected}/highlight/2.png`}
                      alt="highlight product 2"
                      width={513}
                      height={210}
                    />
                  </div>
                  <div className="flex gap-[20px]">
                    <div>
                      <Image
                        className="object-contain cursor-pointer"
                        src={`/products/${selected}/highlight/3.png`}
                        alt="highlight product 3"
                        width={246}
                        height={210}
                      />
                    </div>
                    <div>
                      <Image
                        className="object-contain cursor-pointer "
                        src={`/products/${selected}/highlight/4.png`}
                        alt="highlight product 4"
                        width={246}
                        height={210}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex flex-wrap">
              {selectedBrand[0].map((obj) => (
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
          <div className="flex flex-wrap justify-between gap-y-[5px]">
            {productType2.map((obj) => (
              <Link key={obj.id} href={`/product/${linkTo}`} passHref>
                <div className="relative w-[160px] sm:w-[230px] h-[100px] sm:h-[140px]">
                  <Image
                    className="object-cover cursor-pointer shadow-lg"
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
