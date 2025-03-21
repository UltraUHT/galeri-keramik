import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const graniteTiles = [
  {
    id: 1,
    name: "ARISTON",
    link: ["Catalogue Ariston 2024"],
    pdf: [
      "https://drive.google.com/file/d/1clJ1gXJzhsevah0UC1MwxTKnYILLuLf8/preview",
    ],
  },
  {
    id: 2,
    name: "PROFIL TANK",
    link: ["2024_PE", "2024_BPE", "2024_PRO", "2024_STONE", "2024_PS", "2024_ST", "2024_TDA", "Profil Tank 2024"],
    pdf: [
      "https://drive.google.com/file/d/15mRy0S6Ygs-VVfJ0VjxjLqWYlYB_3BnW/preview",
      "https://drive.google.com/file/d/1B3Ep-xS9-cpcXGIwwbk76zKwy3tQGxx0/preview",
      "https://drive.google.com/file/d/1l3hHDrS63im64ElbLbirEcp43LU_h6uz/preview",
      "https://drive.google.com/file/d/11xhPIoUfso9XbuJY7WCzD-7J7LVO5WAS/preview",
      "https://drive.google.com/file/d/12d865T2Z6lEG1KSw-VSEsEom5kwQT6ok/preview",
      "https://drive.google.com/file/d/1Skqvg2yU9BU4ZsgAjctbpV4poLKMf-M1/preview",
      "https://drive.google.com/file/d/1uOZ18_FXp96Kp7PqwR-VbBn9WzRkORGC/preview",
      "https://drive.google.com/file/d/1i6TpbBH4w2zW-UvbXJLYsvgNcBo6ZqYl/preview",
    ],
  },
  {
    id: 3,
    name: "SOLAHART",
    link: ["Brosur Solahart SL Series A5", "Brosur Sole A4"],
    pdf: [
      "https://drive.google.com/file/d/1-VdAaKj-mr0jjz4K5oxizw2P2-kCdUch/preview",
      "https://drive.google.com/file/d/1fKXzTYynI36BLNy4WpBQ4dMIVyxqC37L/preview",
    ],
  },
  {
    id: 4,
    name: "TIRTA TANK",
    link: ["TIRTA WATER TANK"],
    pdf: [
      "https://drive.google.com/file/d/1q5ptaiWigA51CS9n8jWUQwNtwzyYhiYv/preview",
    ],
  },
];

const mainImage = (props) => {
  return (
    <Image
      className="object-contain cursor-pointer"
      src={`/products/Water Appliances/${props}/highlight/1.png`}
      alt="highlight product 1"
      layout="fill"
    />
  );
};

function WaterComponent() {
  const router = useRouter();
  const query = router.query;
  const brand = query.brand || "ARISTON";
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
                  pathname: "/product/water-appliances/",
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
            {brand}
            <div className="w-full h-[165px] border sm:h-[240px] md:h-[320px] lg:h-[350px] xl:h-[400px] 2xl:h-[514px] relative">
              {brand === "ARISTON" ? mainImage("ARISTON") : null}
              {brand === "PROFIL TANK" ? mainImage("PROFIL TANK") : null}
              {brand === "SOLAHART" ? mainImage("SOLAHART") : null}
              {brand === "TIRTA TANK" ? mainImage("TIRTA TANK") : null}
            </div>
            <div className="pt-[40px]">
              <h2>About Product</h2>
              {brand === "ARISTON" ? (
                <p className="pt-[25px]">
                  ARISTON adalah spesialis global dalam pemanas air dan pemanas.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue ARISTON. Hubungi kami untuk
                  informasi lebih lanjut.
                </p>
              ) : null}
              {brand === "SOLAHART" ? (
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
              {brand === "PROFIL TANK" ? (
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
              {brand === "TIRTA TANK" ? (
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
                        src={`/products/Water Appliances/${brand}/pdf/${brand}.png`}
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
                      src={`/products/Water Appliances/${brand}/pdf/${pdf}.pdf`}
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

export default WaterComponent;
