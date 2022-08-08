import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const graniteTiles = [
  {
    id: 1,
    name: "EFATA",
    link: ["EFATA JUNI 2022"],
    pdf: [
      "https://drive.google.com/file/d/1sbIN9TBzeXskMvYSPEAGSs4WtNKaVc3K/preview",
    ],
  },
  {
    id: 2,
    name: "ESSENZA",
    link: ["ESSENZA catalogue"],
    pdf: [
      "https://drive.google.com/file/d/1ebYBnLYStJk7ms3Cqn56DxFlu67fCHRf/preview",
    ],
  },
  {
    id: 3,
    name: "FICO",
    link: ["FICO GRESS GRANITE TILE"],
    pdf: [
      "https://drive.google.com/file/d/170aoLHvmW3Vr7poF6FYBLeHFgpIcW6ac/preview",
    ],
  },
  {
    id: 4,
    name: "GRANITO",
    link: ["GRANITO 2022-8"],
    pdf: [
      "https://drive.google.com/file/d/12bGojGAkSXDCcwjb4sY6Yq-oeqtEsYjQ/preview",
    ],
  },
  {
    id: 5,
    name: "INDOGRESS",
    link: ["INDOGRESS catalogue 2022"],
    pdf: [
      "https://drive.google.com/file/d/12bGojGAkSXDCcwjb4sY6Yq-oeqtEsYjQ/preview",
    ],
  },
  {
    id: 6,
    name: "INFINITI",
    link: ["INFINITI catalogue 2021"],
    pdf: [
      "https://drive.google.com/file/d/1g9juLAxoEMZYKTyZsGImhHFyzugyLGUr/preview",
    ],
  },
  {
    id: 7,
    name: "NIRO",
    link: ["NIRO BIG SLAB 2022", "NIRO REGULAR SIZE 2022"],
    pdf: [
      "https://drive.google.com/file/d/1Uq_WO5Nvr7Ly4WRgWpewX4m7RTaZOQxk/preview",
      "https://drive.google.com/file/d/19iWnzoiFRP8dBWdNvLnuDsxZattyP33W/preview",
    ],
  },
  {
    id: 8,
    name: "PORTINO",
    link: ["PORTINO catalogue 2022"],
    pdf: [
      "https://drive.google.com/file/d/13UyBJy08IsZedCVGIoJqAuIBENT0VNx8/preview",
    ],
  },
  {
    id: 9,
    name: "ROMAN GRANIT",
    link: [
      "ROMAN GRANIT DESIGNMOOD 130721",
      "ROMAN GRANIT GRANDE 130721",
      "ROMAN GRANIT HARDROCK 130721",
      "ROMAN GRANIT STEPTILE 130721",
      "ROMAN GRANIT STONEMOOD 130721",
      "ROMAN GRANIT VINTAGE 130721",
      "ROMAN GRANIT WOODMOOD 130721",
    ],
    pdf: [
      "https://drive.google.com/file/d/1oHGBPAc-4cV979DHPSVoktKWUownZveD/preview",
      "https://drive.google.com/file/d/1Ss4QH01th7l4Wi_TKnPPgL2mzlUrIm04/preview",
      "https://drive.google.com/file/d/1u7oWQrAXly3SxWbB15ULDVESS6DFTnOK/preview",
      "https://drive.google.com/file/d/1plw7hbF55e4fH76HhGwi4JoburTD2r3d/preview",
      "https://drive.google.com/file/d/1eE8sPXheqp5f5Dmt7HzoRUZvWJkukwVA/preview",
      "https://drive.google.com/file/d/19CME8RPdyMB4FJejumVut8lse0K1u00B/preview",
      "https://drive.google.com/file/d/1wPQAmZ6PDIiVQivy_QN00aHOxgY0JC41/preview",
    ],
  },
  {
    id: 10,
    name: "SANDIMAS",
    link: ["SANDIMAS granite catalgoue 2022"],
    pdf: [
      "https://drive.google.com/file/d/1ntXmUK0DUJj6N6q1v8IMurqIYQAYhxvx/preview",
    ],
  },
  {
    id: 11,
    name: "SUMMIT",
    link: ["SUMMIT catalogue 2022"],
    pdf: [
      "https://drive.google.com/file/d/122H-k_YJ_53YIOA1pZ8HxQq0uWBuf9lB/preview",
    ],
  },
  {
    id: 12,
    name: "TITANIUM",
    link: ["TITANIUM general catalogue 0722"],
    pdf: [
      "https://drive.google.com/file/d/14JJbqDWaSJKcsQ8z-owlMK4Zyy7xZL8z/preview",
    ],
  },
  {
    id: 13,
    name: "VALENTINO GRESS",
    link: ["VALENTINO GRESS RETAIL 2022"],
    pdf: [
      "https://drive.google.com/file/d/1vbkCC0gXn6p6gs5qHjqQuotCFaYLFMqv/preview",
    ],
  },
  {
    id: 14,
    name: "VENUS TILES",
    link: [
      "2022_e-Catalogue VCI Jkt Venus Tiles",
      "2022_e-Catalogue Venus Tiles BIG SLAB",
      "2022_e-Catalogue Venus Tiles New Arrival (Q1)",
    ],
    pdf: [
      "https://drive.google.com/file/d/1GA7zX-B6VC6us_VxEvDsDfALrtWFWzyp/preview",
      "https://drive.google.com/file/d/1exp8fpCAqTBKJOD6_SgMNE27tRHsjkp6/preview",
      "https://drive.google.com/file/d/1GfX0BxUzF3eFQVEhCvlAUB8GNGxnoY0d/preview",
    ],
  },
  {
    id: 15,
    name: "VINCENZA",
    link: [
      "Vicenza 2022 Digital Glazed tiles 100x100",
      "Vicenza Catalogue 2021",
      "Vicenza Rustic Tiles",
      "Vicenza Wood Ceramics",
    ],
    pdf: [
      "https://drive.google.com/file/d/13-9fVOD0Sb8xnCsB2xhOkPlCmVMLy_Kw/preview",
      "https://drive.google.com/file/d/136ZPNgqX4CQPWcGoVy3RKRTrcPw2U5mY/preview",
      "https://drive.google.com/file/d/137f5wD8O_lK3AWC4jCGYrfeZ6ftX0SMf/preview",
      "https://drive.google.com/file/d/1303qWG12DouhlZat6nXaPP-N4hJqRuB-/preview",
    ],
  },
];

const mainImage = (props) => {
  return (
    <Image
      className="object-contain cursor-pointer"
      src={`/products/Granite Tile/${props}/highlight/1.png`}
      alt="highlight product 1"
      layout="fill"
    />
  );
};

function GraniteComponent() {
  const router = useRouter();
  const query = router.query;
  const brand = query.brand || "EFATA";
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
            <div className="w-full flex ">
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
                    Granite Tile
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
            <p className="lg:hidden">Klik untuk memilih brand: </p>
            <select
              className="w-full flex lg:hidden bg-white drop-shadow-sm border mb-[20px] py-2"
              onChange={(e) => {
                setSelected(e.target.value.replace(/[0-9]/g, ""));
                setSelectedIndex(e.target.value.replace(/\D/g, ""));
                router.push({
                  pathname: "/product/granite-tile/",
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
              {brand === "EFATA" ? mainImage("EFATA") : null}
              {brand === "ESSENZA" ? mainImage("ESSENZA") : null}
              {brand === "FICO" ? mainImage("FICO") : null}
              {brand === "GRANITO" ? mainImage("GRANITO") : null}
              {brand === "INDOGRESS" ? mainImage("INDOGRESS") : null}
              {brand === "INFINITI" ? mainImage("INFINITI") : null}
              {brand === "NIRO" ? mainImage("NIRO") : null}
              {brand === "PORTINO" ? mainImage("PORTINO") : null}
              {brand === "ROMAN GRANIT" ? mainImage("ROMAN GRANIT") : null}
              {brand === "SANDIMAS" ? mainImage("SANDIMAS") : null}
              {brand === "SUMMIT" ? mainImage("SUMMIT") : null}
              {brand === "TITANIUM" ? mainImage("TITANIUM") : null}
              {brand === "VALENTINO GRESS"
                ? mainImage("VALENTINO GRESS")
                : null}
              {brand === "VENUS TILES" ? mainImage("VENUS TILES") : null}
              {brand === "VINCENZA" ? mainImage("VINCENZA") : null}
            </div>
            <div className="pt-[40px]">
              <h2>About Product</h2>
              <p className="pt-[25px]">
                {brand} merupakan salah satu merek granite tile yang menyediakan
                berbagai macam ukuran dan motif untuk memenuhi kebutuhan Anda.
                <br />
                <br />
                Berikut ini merupakan ecatalogue {brand}. Hubungi kami untuk
                informasi lebih lanjut.
              </p>
            </div>
            <div className="py-[40px] xl:pb-0">
              <h2>Read Our Catalogue</h2>

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
                        src={`/products/Granite Tile/${brand}/pdf/${obj}.png`}
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
                      src={`/products/Granite Tile/${brand}/pdf/${pdf}.pdf`}
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

export default GraniteComponent;
