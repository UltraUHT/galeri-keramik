import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerLink = [
  { id: 1, name: "Granite", link: "/product/granite-tile" },
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

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:mt-20 bg-[#242424] pb-[10px] md:pb-[60px]">
      <div className="relative hidden md:flex w-full justify-between gap-[40px] max-w-[500px] md:max-w-[640px] lg:max-w-[840px]  xl:max-w-[980px] 2xl:max-w-[1280px] pt-[20px] text-white border-b border-white">
        <div>
          <Link href="/" passHref>
            <div className="md:w-[170px] md:h-[65px] xl:w-[224px] xl:h-[82px] relative">
              <Image
                className="object-contain cursor-pointer"
                src="/icons/logo_white.svg"
                alt="galeri keramik logo"
                layout="fill"
              />
            </div>
          </Link>
          <ul className="pt-[10px] flex flex-col gap-y-[10px] gap-x-[20px] flex-wrap h-[120px]">
            {footerLink.map((obj) => (
              <Link key={obj.id} href={obj.link} passHref>
                <a className="hover:underline underline-offset-4 hover:drop-shadow-sm">
                  <li>{obj.name}</li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-[10px] text-right">
          <p className="text-[#FFE8AC]"> Contact Us for more Information</p>
          <a
            href="https://wa.me/6285108889991"
            target="_blank"
            rel="noopener noreferrer"
          >
            +62 851 0888 9991
          </a>
          <a
            href="mailto:galerikeramik@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            galerikeramik@yahoo.com
          </a>
        </div>
      </div>
      <div className="flex w-full justify-between max-w-[500px] md:max-w-[640px] lg:max-w-[840px]  xl:max-w-[980px] 2xl:max-w-[1280px] pt-[10px] md:pt-[20px]">
        <p className="text-white text-center w-full md:text-left text-[12px] md:text-[14px]">
          {`© 2022 Galeri Keramik`}
        </p>
      </div>
    </div>
  );
}

export default Footer;
