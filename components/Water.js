import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const graniteTiles = [
  {
    id: 1,
    name: "ARISTON",
    link: ["Catalogue Ariston 2022 -1-18"],
  },
  {
    id: 2,
    name: "PROFIL TANK",
    link: ["ProfilTank Brosur"],
  },
  {
    id: 3,
    name: "SOLAHART",
    link: ["Brosur Solahart SL Series A5", "Brosur Sole A4"],
  },
  {
    id: 4,
    name: "TIRTA TANK",
    link: ["TIRTA WATER TANK"],
  },
];

function WaterComponent() {
  const [selected, setSelected] = useState("ARISTON");
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
                    Water Appliances
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
                src={`/products/Water Appliances/${selected}/highlight/1.png`}
                alt="highlight product 1"
                layout="fill"
              />
            </div>
            <div className="pt-[40px]">
              <h2>About Product</h2>
              {selected === "ARISTON" ? (
                <p className="pt-[25px]">
                  ARISTON adalah spesialis global dalam pemanas air dan pemanas.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue ARISTON. Hubungi kami untuk
                  informasi lebih lanjut.
                </p>
              ) : null}
              {selected === "SOLAHART" ? (
                <p className="pt-[25px]">
                  SOLAHART adalah pemanas air tenaga surya pertama di Indonesia
                  sejak 1982. SOLAHART memiliki berbagai produk yang siap
                  menghangatkan keluarga Anda.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue SOLAHART. Hubungi kami untuk
                  informasi lebih lanjut.
                </p>
              ) : null}
              {selected === "PROFIL TANK" ? (
                <p className="pt-[25px]">
                  PROFIL TANK sudah dikenal cukup lama sebagai salah satu
                  produsen tangki air berkualitas. Produk-produknya pun cukup
                  variatif dengan ukuran yang bisa dipilih sesuai kebutuhan.
                  Tidak hanya itu, selain mengeluarkan produk tangki air dari
                  bahan stainless steel, Profil Tank juga memiliki varian tandon
                  air dengan bahan plastik berkualitas yang kokoh.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue PROFIL TANK. Hubungi kami
                  untuk informasi lebih lanjut.
                </p>
              ) : null}
              {selected === "TIRTA TANK" ? (
                <p className="pt-[25px]">
                  TIRTA TANK merupakan salah satu produsen tangki air. Tersedia
                  dalam berbagai ukuran.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue TIRTA TANK. Hubungi kami
                  untuk informasi lebih lanjut.
                </p>
              ) : null}
            </div>
            <div className="py-[40px] xl:pb-0">
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
                        src={`/products/Water Appliances/${selected}/pdf/${obj}.png`}
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
                      src={`/products/Water Appliances/${selected}/pdf/${pdf}.pdf`}
                      type="application/pdf"
                      className="w-full h-[450px] sm:h-[900px]"
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

export default WaterComponent;
