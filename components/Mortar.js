import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const graniteTiles = [
  {
    id: 1,
    name: "AM",
    link: ["AM Katalog Produk_2021"],
  },
  {
    id: 2,
    name: "MU",
    link: ["Retail Catalog - New 2022"],
  },
  {
    id: 3,
    name: "SIKA",
    link: ["SIKA PRODUCT CATALOGUE"],
  },
];

function MortarComponent() {
  const [selected, setSelected] = useState("AM");
  // const useSelected = (type) => {
  //   setSelected(type);
  //   setPdf("");
  // };
  const selectedLogo = graniteTiles.filter((obj) => obj.name === selected);
  const pdfList = selectedLogo.map((obj) => obj.link);

  const [pdf, setPdf] = useState("");
  // const usePdf = (t) => {
  //   setPdf(t);
  // };

  return (
    <div className="flex justify-center w-full pt-[20px]">
      <div className="flex w-full flex-col gap-[40px] px-4 md:px-0 max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px]">
        <div className="flex w-full justify-between ">
          <div className="hidden lg:flex w-1/5"></div>
          <div className="lg:w-4/5">
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
                    MORTAR
                  </h2>
                  <div className="absolute hidden lg:flex z-0 left-0 bg-[#FFE8AC] rounded-full w-[60px] h-[60px] group-hover:w-full transition-all duration-300" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between ">
          <div className="lg:w-1/5 w-full">
            <ul className="cursor-pointer hidden lg:flex flex-col gap-[20px]">
              {graniteTiles.map((obj) => (
                <li
                  key={obj.id}
                  //onClick={() => useSelected(obj.name)}
                  onClick={() => {
                    setSelected(obj.name);
                    setPdf("");
                  }}
                  className={
                    selected === obj.name
                      ? `font-bold underline underline-offset-4 drop-shadow-md`
                      : null
                  }
                >
                  {obj.name}
                </li>
              ))}
            </ul>
            <select className="w-full flex lg:hidden bg-white drop-shadow-sm border mb-[20px]">
              {graniteTiles.map((obj) => (
                <option
                  key={obj.id}
                  //onClick={() => useSelected(obj.name)}
                  onClick={() => {
                    setSelected(obj.name);
                    setPdf("");
                  }}
                  value={obj.name}
                >
                  {obj.name}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:w-4/5">
            <div className="w-full h-[165px] border sm:h-[240px] md:h-[320px] lg:h-[350px] xl:h-[400px] 2xl:h-[514px] relative">
              <Image
                className="object-contain cursor-pointer"
                src={`/products/Mortar/${selected}/highlight/1.png`}
                alt="highlight product 1"
                layout="fill"
              />
            </div>
            <div className="pt-[40px]">
              <h2>About Product</h2>
              {selected === "AM" ? (
                <p className="pt-[25px]">
                  Selama lebih dari 30 tahun, AM telah menjadi pelopor bahan
                  bangunan. Memberikan solusi mulai dari pembangunan dinding
                  lantai, sampai finishing. AM terus berinovasi melahirkan
                  rangkaian produk untuk berbagai kebutuhan bangunan Anda
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue AM. Hubungi kami untuk
                  informasi lebih lanjut.
                </p>
              ) : null}
              {selected === "MU" ? (
                <p className="pt-[25px]">
                  MU (Mortar Utama) merupakan produsen semen instan terbesar di
                  Indonesia, bagian dari Saint-Gobain Weber.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue MU. Hubungi kami untuk
                  informasi lebih lanjut.
                </p>
              ) : null}
              {selected === "SIKA" ? (
                <p className="pt-[25px]">SIKA merupakan salah satu produsen</p>
              ) : null}
            </div>
            <div className="pt-[40px]">
              <h2>Read Our Catalog</h2>

              <div className="pt-[20px] flex flex-wrap gap-[20px]">
                {pdfList[0].map((obj) => (
                  <div
                    key={obj}
                    className="flex flex-col items-center gap-[8px] w-[180px]"
                    //onClick={() => usePdf(obj)}
                    onClick={() => setPdf(obj)}
                  >
                    <div className="border w-[90px] h-[90px] xl:w-[150px] xl:h-[150px] relative">
                      <Image
                        className="object-contain cursor-pointer"
                        src={`/products/Mortar/${selected}/pdf/${obj}.png`}
                        alt="logo"
                        layout="fill"
                      />
                    </div>
                    <p className="text-black text-center">{obj}</p>
                  </div>
                ))}
                {pdf ? (
                  <div className="w-full relative pt-[40px]">
                    <iframe
                      src={`/products/Mortar/${selected}/pdf/${pdf}.pdf`}
                      type="application/pdf"
                      className="w-fullh-[450px] sm:h-[900px]"
                    ></iframe>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MortarComponent;
