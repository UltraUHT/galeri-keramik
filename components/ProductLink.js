import React from "react";
import Image from "next/image";
import Link from "next/link";

const imageLink = [
  {
    id: 2,
    name: "Ceramic",
    link: "/product/ceramic",
  },
  {
    id: 3,
    name: "Sanitary",
    link: "/product/sanitary",
  },
  {
    id: 4,
    name: "Door",
    link: "/product/door",
  },
  {
    id: 5,
    name: "Sink",
    link: "/product/sink",
  },
  {
    id: 6,
    name: "Mortar",
    link: "/product/mortar",
  },
  {
    id: 7,
    name: "Water Appliances",
    link: "/product/water-appliances",
  },
];

const smallIco = ["PLATINUM", "TOTO", "MATADOOR", "FICO", "AM", "PROFIL TANK"];

function ProductLink() {
  return (
    <div className="flex justify-center w-full py-[20px]">
      <div className="flex flex-col gap-[20px] justify-between items-center w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px]">
        <h2 className="text-center md:text-left w-full">Our Products</h2>
        <div className="w-full flex flex-col animate-fadeDown">
          <Link
            href={{
              pathname: "/product/granite-tile",
              query: { brand: "NIRO" },
            }}
            passHref
          >
            <a className="w-full h-[150px] md:h-[220px] lg:h-[225px] xl:h-[350px] 2xl:w-[1280px] 2xl:h-[470px] relative drop-shadow-xl group overflow-hidden">
              <Image
                className="object-cover cursor-pointer z-0 md:group-hover:blur-sm"
                src="/products/Link/1.png"
                alt="Granite tile link image"
                layout="fill"
              />
              <div className="absolute translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-black/20 z-10 w-full h-full hidden md:flex items-center justify-center">
                <p className="text-white font-bold text-[32px] 2xl:text-[64px]">
                  Granite Tile
                </p>
              </div>
              <div className="absolute w-full h-full bg-black/10 flex md:hidden items-center justify-center text-white">
                <h2 className="drop-shadow-sm">Granite Tile</h2>
              </div>
            </a>
          </Link>
          <div className="w-full flex flex-wrap gap-x-[10px] gap-y-[20px] justify-between pt-[20px]">
            {imageLink.map((obj, index) => (
              <Link
                key={obj.id}
                href={{
                  pathname: `${obj.link}`,
                  query: { brand: smallIco[index] },
                }}
                passHref
              >
                <a className="w-full h-[150px] md:h-[220px] xl:w-[480px] 2xl:w-[628px] lg:h-[225px] relative drop-shadow-xl group overflow-hidden">
                  <Image
                    className="object-cover cursor-pointer z-0 md:group-hover:blur-sm"
                    src={`/products/Link/${obj.id}.png`}
                    alt={obj.name}
                    layout="fill"
                  />
                  <div className="absolute translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-black/20 z-10 w-full h-full hidden md:flex items-center justify-center">
                    <p className="text-white font-bold text-[32px] 2xl:text-[48px]">
                      {obj.name}
                    </p>
                  </div>
                  <div className="absolute bg-black/20 w-full h-full flex md:hidden items-center justify-center text-white">
                    <h2 className="drop-shadow-sm">{obj.name}</h2>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductLink;
