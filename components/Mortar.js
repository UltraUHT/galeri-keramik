import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const graniteTiles = [
  {
    id: 1,
    name: "AM",
    link: ["AM Katalog Produk_2021"],
    pdf: [
      "https://drive.google.com/file/d/12ajy-IeLUbdH6_kD-CzqU7yYbXwUx_Z2/preview",
    ],
  },
  {
    id: 2,
    name: "MU",
    link: ["Retail Catalog - New 2022"],
    pdf: [
      "https://drive.google.com/file/d/13FGRoC2Wp3SZ3Kz2dUBgDaTQ3H1zbxr9/preview",
    ],
  },
  {
    id: 3,
    name: "SIKA",
    link: ["SIKA PRODUCT CATALOGUE"],
    pdf: [
      "https://drive.google.com/file/d/12ZjVKiTn5SimIsWtGloF_iwRizrj4ScO/preview",
    ],
  },
];

function MortarComponent() {
  const router = useRouter();
  const query = router.query;
  const brand = query.brand || "AM";
  const [selected, setSelected] = useState(brand);
  const [selectedIndex, setSelectedIndex] = useState("0");

  const selectedLogo = graniteTiles.filter((obj) => obj.name === brand);
  const pdfList = selectedLogo.map((obj) => obj.link);

  const [pdf, setPdf] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const googlePdf = selectedLogo[0].pdf[pdfLink];

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
              {graniteTiles.map((obj, index) => (
                <Link
                  key={obj.id}
                  href={{
                    query: { brand: obj.name },
                  }}
                  passHref
                >
                  <a>
                    <li
                      key={obj.id}
                      onClick={() => {
                        setSelected(obj.name);
                        setSelectedIndex(index);
                        setPdf("");
                      }}
                      className={
                        brand === obj.name
                          ? `font-bold underline underline-offset-4 drop-shadow-md`
                          : null
                      }
                    >
                      {obj.name}
                    </li>
                  </a>
                </Link>
              ))}
            </ul>
            <select
              className="w-full flex lg:hidden bg-white drop-shadow-sm border mb-[20px]"
              onChange={(e) => {
                setSelected(e.target.value.replace(/[0-9]/g, ""));
                setSelectedIndex(e.target.value.replace(/\D/g, ""));
                router.push({
                  pathname: "/product/mortar/",
                  query: { brand: e.target.value.replace(/[0-9]/g, "") },
                });
                setPdf("");
              }}
            >
              {graniteTiles.map((obj, index) => (
                <>
                  {obj.name === brand ? (
                    <option key={obj.id} value={obj.name + index} selected>
                      {obj.name}
                    </option>
                  ) : (
                    <option key={obj.id} value={obj.name + index}>
                      {obj.name}
                    </option>
                  )}
                </>
              ))}
            </select>
          </div>
          <div className="lg:w-4/5">
            <div className="w-full h-[165px] border sm:h-[240px] md:h-[320px] lg:h-[350px] xl:h-[400px] 2xl:h-[514px] relative">
              <Image
                className="object-contain cursor-pointer"
                src={`/products/Mortar/${brand}/highlight/1.png`}
                alt="highlight product 1"
                layout="fill"
              />
            </div>
            <div className="pt-[40px]">
              <h2>About Product</h2>
              {brand === "AM" ? (
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
              {brand === "MU" ? (
                <p className="pt-[25px]">
                  MU (Mortar Utama) merupakan produsen semen instan terbesar di
                  Indonesia, bagian dari Saint-Gobain Weber.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue MU. Hubungi kami untuk
                  informasi lebih lanjut.
                </p>
              ) : null}
              {brand === "SIKA" ? (
                <p className="pt-[25px]">
                  SIKA merupakan salah satu produsen semen instan terbesar di
                  Indonesia.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue SIKA. Hubungi kami untuk
                  informasi lebih lanjut.
                </p>
              ) : null}
            </div>
            <div className="py-[40px] xl:pb-0">
              <h2>Read Our Catalog</h2>

              <div className="pt-[20px] flex flex-wrap gap-[20px]">
                {pdfList[0].map((obj, index) => (
                  <div
                    key={obj}
                    className="flex flex-col items-center gap-[8px] w-[120px] md:w-[180px] flex-wrap"
                    onClick={() => {
                      setPdf(obj);
                      setPdfLink(index);
                    }}
                  >
                    <div className="border w-[90px] h-[90px] xl:w-[150px] xl:h-[150px] relative">
                      <Image
                        className="object-contain cursor-pointer"
                        src={`/products/Mortar/${brand}/pdf/${obj}.png`}
                        alt="logo"
                        layout="fill"
                      />
                    </div>
                    <p className="text-black text-center">{obj}</p>
                  </div>
                ))}
                {pdf ? (
                  <div className="w-full flex relative pt-[40px]">
                    <iframe
                      src={`/products/Mortar/${brand}/pdf/${pdf}.pdf`}
                      type="application/pdf"
                      className="w-full h-[900px] hidden md:flex"
                    ></iframe>
                    <iframe
                      src={googlePdf}
                      className="w-full h-[500px] md:hidden"
                      allow="autoplay"
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
