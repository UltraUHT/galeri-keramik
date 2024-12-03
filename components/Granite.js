import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const graniteTiles = [
  {
    id: 1,
    name: "EFATA",
    link: ["EFATA 2024"],
    pdf: [
      "https://drive.google.com/file/d/1znOF8zrblfICD9dYq1U7Ek3aX6khU84E/preview",
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
      "https://drive.google.com/file/d/12W3HBOLKoorFVZri1Zx3ZCEKKUOVS93I/preview",
    ],
  },
  {
    id: 4,
    name: "GRANITO",
    link: ["GRANITO"],
    pdf: [
      "https://drive.google.com/file/d/1mXt37mf1MyjzPtbnye3-X_p7uhCg-eqA/preview",
    ],
  },
  {
    id: 5,
    name: "INDOGRESS",
    link: ["INDOGRESS catalogue 2024"],
    pdf: [
      "https://drive.google.com/file/d/1dEbZ-ulejIArj05BGtzuMA-yFqlx5exY/preview",
    ],
  },
  {
    id: 6,
    name: "INFINITI",
    link: ["INFINITI catalogue 2024"],
    pdf: [
      "https://drive.google.com/file/d/17Lpk5qbZcz48NPCZsK_3yoVhfrRwaU43/preview",
    ],
  },
  {
    id: 7,
    name: "NIRO",
    link: ["NIRO BIG SLAB 2024", "NIRO REGULAR SIZE 2024"],
    pdf: [
      "https://drive.google.com/file/d/1CkP-udzBmqZZ71NhTVwcqXfqFa0Sxw8A/preview",
      "https://drive.google.com/file/d/1dJsm2O2RYIUlPAjz66DwR_YIzuR2HTYr/preview",
    ],
  },
  {
    id: 8,
    name: "PORTINO",
    link: ["PORTINO catalogue 2024"],
    pdf: [
      "https://drive.google.com/file/d/1lKpUK_evkMDjGq2pvrp-cNzUh1uirSY7/preview",
    ],
  },
  {
    id: 9,
    name: "ROMAN GRANIT",
    link: [
      "ROMAN GRANIT GRANDE",
      "ROMAN GRANIT DESIGNMOOD",
      "ROMAN GRANIT STONEMOOD",
      "ROMAN GRANIT HARDROCK",
      "ROMAN GRANIT STEPTILE",
      "ROMAN GRANIT VINTAGE",
      "ROMAN GRANIT GLASSMOOD",
      "ROMAN GRANIT WOODMOOD",
      "ROMAN GRANIT XTRA",
      "ROMAN GRANIT FITMOOD"
    ],
    pdf: [
      "https://drive.google.com/file/d/10zoNTO--yJz4QTv7Q76hfpZ8KlqAaVmV/preview",
      "https://drive.google.com/file/d/1uQvWgHZZXTQmad-MCa9o2GLPO4hb05tz/preview",
      "https://drive.google.com/file/d/1tdQ7axuaFV7WphOAnYcuM44qLvvxuFjF/preview",
      "https://drive.google.com/file/d/11tRz7G-XoFkoUiFCwPDHZIX-mYMso-7s/preview",
      "https://drive.google.com/file/d/13ulbfJWqnw85H136hvzsfisPO_zPwPNr/preview",
      "https://drive.google.com/file/d/19S2r70xc5uOm28H7q1h5cxO4Rf8Ox23p/preview",
      "https://drive.google.com/file/d/1PdNtlUxXEAZUz62-tpuqHLCRaZcDuQr1/preview",
      "https://drive.google.com/file/d/1u-lJHHk7VTEAaNWhYFa_49JcZV_obIH8/preview",
      "https://drive.google.com/file/d/1sfK1U2AteiuVpPdeUwYUYVfD3X4mf9Zj/preview",
      "https://drive.google.com/file/d/1cs4FIlYHnGHs9WQPMtosN8lMM50-xiV6/preview",
    ],
  },
  {
    id: 10,
    name: "SANDIMAS",
    link: ["SANDIMAS granite catalgoue 2024"],
    pdf: [
      "https://drive.google.com/file/d/1KhqVmNTxhm8qY5K06to_67OEPnXzIUAu/preview",
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
    link: ["TITANIUM Rejuvenate", "Titanium 2024"],
    pdf: [
      "https://drive.google.com/file/d/1GVG--Nd1qUPNMcfigddOrcmR9VyLMbuM/preview",
      "https://drive.google.com/file/d/1kjsMlHKMbgdM1Bn7_PwB42up6u-XL6qy/preview",
    ],
  },
  {
    id: 13,
    name: "VALENTINO GRESS",
    link: ["VG Double Loading", "VG New Motif", "Catalogue VG", "VG Slip Proof & VG Pro"],
    pdf: [
      "https://drive.google.com/file/d/1PiKozxjdgy6UyGr363HAHgmTsf-yIAxh/preview",
      "https://drive.google.com/file/d/1VrNZOb5MIpNa-7iK-i9c0ToxM7eoENGP/preview",
      "https://drive.google.com/file/d/1cS-cN6IkdidnWoILYmkuKDOZCbjiXJSc/preview",
      "https://drive.google.com/file/d/1ulwNAisHjfK35C2TxYTWyq6cR-yDT6L2/preview",
    ],
  },
  {
    id: 14,
    name: "VENUS TILES",
    link: [
      "2024_e-Catalogue VCI Jkt Venus Tiles",
    ],
    pdf: [
      "https://drive.google.com/file/d/1TtYxJ5izNdJFheBGPg0wEjvbLb1UVUZc/preview",
    ],
  },
  {
    id: 15,
    name: "VINCENZA",
    link: [
      "Vicenza Digital Glazed tiles 100x100",
      "Vicenza Digital Glazed tiles 60x120",
      "Vicenza Digital Glazed tiles 75x150",
      "Vicenza Digital Glazed tiles",
      "Vicenza Rustic Tiles",
      "Vicenza Wood Ceramics",
    ],
    pdf: [
      "https://drive.google.com/file/d/1QoHIee9zSUAyJ7XH8Xdp4sOSQO9iwI-v/preview",
      "https://drive.google.com/file/d/1CjfQpsky5S3QPzyiPwLXfpKXbKZDp0Ql/preview",
      "https://drive.google.com/file/d/1NUtc55rqbuESJvRLGsWyMworiNzJtwp5/preview",
      "https://drive.google.com/file/d/1IOjeyoNOgNcvadw4GWFwEcE5meLPKnVZ/preview",
      "https://drive.google.com/file/d/1aVftzGAr6XJFsFF8f74uptcST45i2phB/preview",
      "https://drive.google.com/file/d/1k39TT15QcFXRLs0Y8gGJ1NREQYhdoT5B/preview",
    ],
  },
  {
    id: 16,
    name: "MELIUZ",
    link: ["Meliuz"],
    pdf: ["https://drive.google.com/file/d/15fIMI1JLsen13OC7Ibke0drvUow0Bc87/preview"]
  },
  {
    id: 17,
    name: "VELLINO",
    link: ["Vellino"],
    pdf: ["https://drive.google.com/file/d/1-oV0VzmyALUOkfPOHYqGKco8FvZIGE5y/preview"]
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
              {brand === "MELIUZ" ? mainImage("MELIUZ") : null}
              {brand === "VELLINO" ? mainImage("VELLINO") : null}
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
