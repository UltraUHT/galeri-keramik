import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [index0, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const [transL, setTransL] = useState(false);
  const [transR, setTransR] = useState(false);

  const images = [
    "/hero/1.png",
    "/hero/2.png",
    "/hero/3.png",
    "/hero/4.png",
    "/hero/5.png",
  ];

  const handleNext = () => {
    setTransL(true);
    setTransR(false);
  };

  useEffect(() => {
    if (transR) {
      setTimeout(() => {
        setTransR(false);
      }, 1000);
    }
    if (transL) {
      setTimeout(() => {
        setTransL(false);
        setIndex((index0 + 1) % images.length);
        setIndex1((index1 + 1) % images.length);
      }, 1000);
    }
    const slideShow = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(slideShow);
  }, [transL, transR]);
  const setNewIndex = (index) => {
    setIndex(index) % images.length;
    setIndex1(index + 1) % images.length;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[152px] sm:h-[260px] md:h-[310px] lg:h-[450px] xl:h-[550px] 2xl:h-[780px] relative overflow-hidden flex items-center justify-center">
        <Image
          className={`absolute object-contain z-10 w-full h-full ${
            transL
              ? "transition duration-500 ease-linear transform -translate-x-full"
              : transR
              ? "animate-slideL"
              : ""
          }`}
          src={images[index0]}
          layout="fill"
          alt=""
        />
        <Image
          className={`absolute object-contain w-full h-full ${
            transL
              ? "animate-slideR"
              : transR
              ? "transition duration-500 ease-linear transform translate-x-full"
              : ""
          }`}
          src={images[index1]}
          layout="fill"
          alt=""
        />
        <div className="absolute bottom-2 md:bottom-5 xl:bottom-10 z-20 flex gap-[10px] cursor-pointer">
          {images.map((obj, index) => (
            <div
              className={`w-[8px] h-[8px] md:w-[10px] md:h-[10px] xl:w-[15px] xl:h-[15px] rounded-full ${
                obj === images[index0]
                  ? "bg-white border border-black/40 "
                  : "bg-black/40"
              }`}
              key={index}
              onClick={() => setNewIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px]  xl:max-w-[980px] 2xl:max-w-[1280px] pt-[20px]">
        <div className="flex flex-col lg:flex-row w-full justify-between ">
          <div className=" px-4 md:px-0 lg:w-3/5 animate-fadeDown">
            <p>
              GALERI KERAMIK menyediakan berbagai macam granite tile, keramik,
              sanitary, pintu PVC, pintu aluminium, tandon, bak cuci piring, dan
              lain-lain. Melayani pengiriman ke berbagai wilayah di Indonesia,
              baik ecer maupun partai.
            </p>
          </div>
          <div className="items-end md:pt-[30px] lg:pt-0 justify-end hidden md:flex">
            <Link href="/about" passHref>
              <a className="flex relative items-center cursor-pointer group px-[20px]">
                <p className="z-10">more about our company</p>
                <div className="absolute z-0 left-0 bg-[#FFE8AC] rounded-full w-[40px] h-[40px] group-hover:w-full transition-all duration-300" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
