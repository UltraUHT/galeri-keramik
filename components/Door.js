import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const graniteTiles = [
  {
    id: 1,
    name: "MATADOOR",
    link: ["MATADOOR CATALOGUE 2022"],
    pdf: [
      "https://drive.google.com/file/d/1vV7BBFXptk8LoxZuF92zIf7JsWrY6Kw_/preview",
    ],
  },
  {
    id: 2,
    name: "ANGZDOOR",
    link: ["ANGZ BROCHURE HDF DOOR 221220"],
    pdf: [
      "https://drive.google.com/file/d/1dWiXjRJM-jDw47JJRBulGCE1PwJxw0s3/preview",
    ],
  },

  {
    id: 3,
    name: "TOP DOOR",
    link: ["TOP STEEL DOOR"],
    pdf: [
      "https://drive.google.com/file/d/1ITZTEvabTDSG169IEu_UXC88OiQu5TAw/preview",
    ],
  },
];

const mataDoor = [
  "AGATE BLACK",
  "ARTLINE",
  "DAISY",
  "MAGNOLIA",
  "NEEDLE",
  "NIRVANA",
  "PEBBLE STONE",
  "PLANTS",
  "TRIANGLE",
];

const mataDoorSliding = [
  "CIRCLE LINE",
  "CLOUD",
  "FLOWER LAYS",
  "GARDENIA",
  "SQUARE",
  "WHITE LOTUS",
  "WILD FLOWERS",
];

function DoorComponent() {
  const router = useRouter();
  const query = router.query;
  const selectedBrand = query.brand || "MATADOOR";
  const [selected, setSelected] = useState(selectedBrand);
  const [selectedIndex, setSelectedIndex] = useState("0");

  const selectedLogo = graniteTiles.filter((obj) => obj.name === selected);
  const pdfList = selectedLogo.map((obj) => obj.link);

  const [pdf, setPdf] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const googlePdf = graniteTiles[selectedIndex].pdf[pdfLink];

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
                    Door
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
                        selected === obj.name
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
                setPdf("");
              }}
            >
              {graniteTiles.map((obj, index) => (
                <Link
                  key={obj.id}
                  href={{
                    query: { brand: obj.name },
                  }}
                  passHref
                >
                  <option key={obj.id} value={obj.name + index}>
                    {obj.name}
                  </option>
                </Link>
              ))}
            </select>
          </div>
          <div className="lg:w-4/5">
            <div className="w-full h-[165px] border sm:h-[240px] md:h-[320px] lg:h-[350px] xl:h-[400px] 2xl:h-[514px] relative">
              <Image
                className="object-contain cursor-pointer"
                src={`/products/Door/${selected}/highlight/1.png`}
                alt="highlight product 1"
                layout="fill"
              />
            </div>
            <div className="pt-[40px]">
              {selected === "ANGZDOOR" ? (
                <>
                  <h2>About Product</h2>
                  <p className="pt-[25px]">
                    ANGZDOOR menyediakan berbagai pintu rumah.
                    <br />
                    <br />
                    Berikut ini merupakan ecatalogue ANGZDOOR. Hubungi kami
                    untuk informasi lebih lanjut.
                  </p>
                </>
              ) : null}
              {selected === "TOP DOOR" ? (
                <>
                  <h2>About Product</h2>
                  <p className="pt-[25px]">
                    TOPDOOR menyediakan berbagai pintu rumah.
                    <br />
                    <br />
                    Berikut ini merupakan ecatalogue TOPDOOR. Hubungi kami untuk
                    informasi lebih lanjut.
                  </p>
                </>
              ) : null}
              {selected === "MATADOOR" ? (
                <>
                  <h2>About Product</h2>
                  <p className="pt-[25px]">
                    MATADOOR menyediakan pintu aluminium maupun pintu aluminium
                    sliding berkualitas premium. Memiliki berbagai macam motif
                    yang dapat disesuaikan dengan interior rumah Anda.
                    <br />
                    <br /> Berikut ini merupakan ecatalogue MATADOOR. Hubungi
                    kami untuk informasi lebih lanjut.
                  </p>
                  <h2 className="pt-[40px]">Product Advantages</h2>
                  <div className="flex flex-wrap justify-around md:justify-between gap-[20px] pt-[25px]">
                    <div className="flex flex-col text-center w-[160px]  md:w-1/4">
                      <p className="font-bold">Pemasangan Mudah</p>
                      <p className="pt-[10px]">
                        Pemasangan pintu mudah dan instruksi cara pasang mudah
                        di ikuti.
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px]  md:w-1/4">
                      <p className="font-bold">Motif Kayu</p>
                      <p className="pt-[10px]">
                        Memiliki motif yang menyerupai kayu, sehingga terlihat
                        familiar.
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px]  md:w-1/4">
                      <p className="font-bold">Full Aluminium</p>
                      <p className="pt-[10px]">
                        Rel dan engsel berbahan aluminium. Berbeda dengan
                        kompetitor yang menggunakan bahan besi yang dilapisi
                        oleh aluminium
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px]  md:w-1/4">
                      <p className="font-bold">Handle Model Gagang</p>
                      <p className="pt-[10px]">
                        Handle terlihat lebih elegan dan nyaman digunakan.
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px]  md:w-1/4">
                      <p className="font-bold">Kualitas Pintu Tebal</p>
                      <p className="pt-[10px]">
                        Ketebalan baik pintu maupun gagang lebih tebal dibanding
                        competitor, sehingga lebih kuat dan kokoh.
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px]  md:w-1/4">
                      <p className="font-bold">Double glass</p>
                      <p className="pt-[10px]">
                        Standar pintu kami menggunakan double glass. Tempered
                        double glass khusus tipe Daisy, Magnolia, dan Triangle.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col pt-[25px] w-full">
                    <h2>Aluminium Sliding Door</h2>
                    <div className="w-full flex overflow-x-scroll gap-[30px] xl:gap-0 py-[25px]">
                      {mataDoorSliding.map((door) => (
                        <div
                          className="flex flex-col items-center gap-[10px]"
                          key={door}
                        >
                          <div className="w-[110px] xl:w-[220px] h-[300px] relative flex-shrink-0">
                            <Image
                              className="object-contain cursor-pointer"
                              src={`/products/Door/${selected}/products/sliding/${door}.png`}
                              alt={door}
                              layout="fill"
                            />
                          </div>
                          <p>{door}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-[40px] flex flex-col md:flex-row">
                      <div className="flex justify-center pb-[20px]">
                        <div className="w-[220px] h-[300px] relative flex-shrink-0">
                          <Image
                            className="object-contain cursor-pointer"
                            src={`/products/Door/${selected}/products/sliding/PINTU ALUMINIUM.png`}
                            alt="spesifikasi pintu aluminium sliding"
                            layout="fill"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:pl-[40px] justify-center">
                        <p className="font-bold pb-[10px]">Specification</p>
                        <div className="flex flex-col md:flex-row gap-[20px] xl:gap-[50px] 2xl:gap-[100px]">
                          <div className="flex flex-col">
                            <p>Ukuran: 1480 mm X 2080 mm</p>
                            <p>Material: aluminium dan double glass</p>
                            <p>Pilihan (posisi dari luar atau depan):</p>
                            <p>Pintu kanan: posisi kunci di sebelah kanan</p>
                            <p>Pintu kiri: posisi kunci di sebelah kiri</p>
                          </div>
                          <div className="flex flex-col">
                            <p>Kelengkapan:</p>
                            <ul className="list-disc ml-[20px]">
                              <li>Daun pintu</li>
                              <li>{`Rel & cover pintu`}</li>
                              <li>Roda pintu</li>
                              <li>Anak kunci</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="pt-[40px]">Aluminium Door</h2>
                    <div className="w-full flex overflow-x-scroll gap-[30px] xl:gap-0 py-[25px] mt-[40px]">
                      {mataDoor.map((door) => (
                        <div
                          className="flex flex-col items-center gap-[10px]"
                          key={door}
                        >
                          <div className="w-[110px] xl:w-[220px] h-[300px] relative flex-shrink-0">
                            <Image
                              className="object-contain cursor-pointer"
                              src={`/products/Door/${selected}/products/door/${door}.png`}
                              alt={door}
                              layout="fill"
                            />
                          </div>
                          <p>{door}</p>
                        </div>
                      ))}
                    </div>
                    <div className="pt-[25px]">
                      <p className="font-bold pb-[10px]">Specification</p>
                      <div className="flex flex-col md:flex-row gap-[20px] md:gap-[100px]">
                        <div className="flex flex-col">
                          <p>Ukuran: 700 mm X 2000 mm (termasuk kusen)</p>
                          <p>Material: aluminium dan double glass</p>
                          <p>Pilihan (posisi dari luar atau depan):</p>
                          <p>Buka kanan: dorong masuk ke kanan</p>
                          <p>Buka kiri: dorong masuk ke kiri</p>
                        </div>
                        <div className="flex flex-col">
                          <p>Kelengkapan:</p>
                          <ul className="list-disc ml-[20px]">
                            <li>Daun pintu</li>
                            <li>3 pasang engsel aluminium tebal</li>
                            <li>1 set handle pintu tebal</li>
                            <li>Anak kunci</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div className="py-[40px] xl:pb-0">
              <h2>Read Our Catalog</h2>

              <div className="pt-[20px] flex flex-wrap gap-[20px]">
                {pdfList[0].map((obj, index) => (
                  <div
                    key={obj}
                    className="flex flex-col items-center gap-[8px] w-[180px]"
                    onClick={() => {
                      setPdf(obj);
                      setPdfLink(index);
                    }}
                  >
                    <div className="border w-[90px] h-[90px] xl:w-[150px] xl:h-[150px] relative">
                      <Image
                        className="object-contain cursor-pointer"
                        src={`/products/Door/${selected}/pdf/${obj}.png`}
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
                      src={`/products/Door/${selected}/pdf/${pdf}.pdf`}
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

export default DoorComponent;
