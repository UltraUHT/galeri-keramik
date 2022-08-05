import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const graniteTiles = [
  {
    id: 1,
    name: "HABITAT",
    link: ["HABITAT 2022"],
    pdf: [
      "https://drive.google.com/file/d/183YxWOV-Wrs7Tfs_lcomFPu1hZWzCa4P/preview",
    ],
  },
  {
    id: 2,
    name: "HERKULES",
    link: ["HERKULES"],
    pdf: [
      "https://drive.google.com/file/d/1TPyDt-adADyAXAXBppqpQCd5J_sbYSD-/preview",
    ],
  },
  {
    id: 3,
    name: "IKAD",
    link: ["Catalog IKAD"],
    pdf: [
      "https://drive.google.com/file/d/13OfNB7q8b6KgpKCjbNTb1kixRagF2s4V/preview",
    ],
  },
  {
    id: 4,
    name: "JUPITER",
    link: ["JUPITER 2021"],
    pdf: [
      "https://drive.google.com/file/d/123F_CqCBP8s3OQKEuHWZPsYiUN69JfT5/preview",
    ],
  },
  {
    id: 5,
    name: "MILAN",
    link: ["MILAN 2022"],
    pdf: [
      "https://drive.google.com/file/d/1_oS6ZvrsPt-lV5R5hQ3hPUv2PRinNgw-/preview",
    ],
  },
  {
    id: 6,
    name: "PLATINUM",
    link: ["PLATINUM CERAMIC 2022"],
    pdf: [
      "https://drive.google.com/file/d/1cCs44Z8qQ_0t4qIsaNgV6Zgo8s2_4oHE/preview",
    ],
  },
  {
    id: 7,
    name: "ROMAN",
    link: [
      "Roman Floor Tile 050422",
      "Roman Interlok 050422",
      "Roman Interlok Hexagonal 050422",
      "Roman Rectificado 050422",
      "Roman Wall Tile 050422",
    ],
    pdf: [
      "https://drive.google.com/file/d/1kgkhal1JKTDdugMMLh4_oIOvM7w7CvGg/preview",
      "https://drive.google.com/file/d/1q7iYLM-MAIr1aEV557mR5hKU59VWKntR/preview",
      "https://drive.google.com/file/d/1lMttpDQYEy7bR1obsYLeI-gTgCjwVBBn/preview",
      "https://drive.google.com/file/d/1-DQOsrvkUOx4EgdExOWbPWrX9GzXltix/preview",
      "https://drive.google.com/file/d/1gvgXP3DzQ4m3ZFr3kkAZqxpPrPiD4yny/preview",
    ],
  },
];

const mainImage = (props) => {
  return (
    <Image
      className="object-contain cursor-pointer"
      src={`/products/Ceramic/${props}/highlight/1.png`}
      alt="highlight product 1"
      layout="fill"
    />
  );
};

function CeramicComponent() {
  const router = useRouter();
  const query = router.query;
  const brand = query.brand || "HABITAT";
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
                    CERAMIC
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
              className="w-full flex lg:hidden bg-white drop-shadow-sm border mb-[20px] py-2"
              onChange={(e) => {
                setSelected(e.target.value.replace(/[0-9]/g, ""));
                setSelectedIndex(e.target.value.replace(/\D/g, ""));
                router.push({
                  pathname: "/product/ceramic/",
                  query: {
                    brand: e.target.value.replace(/[0-9]/g, ""),
                  },
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
              {brand === "HABITAT" ? mainImage("HABITAT") : null}
              {brand === "HERKULES" ? mainImage("HERKULES") : null}
              {brand === "IKAD" ? mainImage("IKAD") : null}
              {brand === "JUPITER" ? mainImage("JUPITER") : null}
              {brand === "IKAD" ? mainImage("IKAD") : null}
              {brand === "MILAN" ? mainImage("MILAN") : null}
              {brand === "PLATINUM" ? mainImage("PLATINUM") : null}
              {brand === "ROMAN" ? mainImage("ROMAN") : null}
            </div>
            <div className="pt-[40px]">
              <h2>About Product</h2>
              <p className="pt-[25px]">
                {brand} merupakan salah satu merek keramik yang menyediakan
                berbagai macam ukuran dan motif untuk memenuhi kebutuhan Anda.
                <br />
                <br />
                Berikut ini merupakan ecatalogue {brand}. Hubungi kami untuk
                informasi lebih lanjut.
              </p>
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
                        src={`/products/Ceramic/${brand}/pdf/${obj}.png`}
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
                      src={`/products/Ceramic/${brand}/pdf/${pdf}.pdf`}
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

export default CeramicComponent;
