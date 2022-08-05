import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const graniteTiles = [
  {
    id: 1,
    name: "AMERICAN STANDARD",
    link: ["AMERICAN STANDARD 2022"],
    pdf: [
      "https://drive.google.com/file/d/1YNuonU5hRNiQEcaPm_F2karIWMAYNG2c/preview",
    ],
  },
  {
    id: 2,
    name: "COTTO",
    link: ["COTTO CATALOGUE"],
    pdf: [
      "https://drive.google.com/file/d/10NVybGrzAcjT1clMUlQWpxwhN4UCH0Hb/preview",
    ],
  },
  {
    id: 3,
    name: "FLIESSEN",
    link: ["fließen BROCHURE 2022"],
    pdf: [
      "https://drive.google.com/file/d/15J7KJ36G8658uKgDaWITth9N_PhoQpmr/preview",
    ],
  },
  {
    id: 4,
    name: "ROCA",
    link: ["ROCA SANITARY"],
    pdf: [
      "https://drive.google.com/file/d/1oa1aK4zob_uIse5D7zW4-U2AwpSQrWgw/preview",
    ],
  },
  {
    id: 5,
    name: "SANDIMAS OULU",
    link: ["Sandimas Oulu Sanitary 2022"],
    pdf: [
      "https://drive.google.com/file/d/18LCnmQ-0Ld5VO50RCwdZCriARLYdRR7u/preview",
    ],
  },
  {
    id: 6,
    name: "TOTO",
    link: [
      "TOTO Fitting Catalog February 2022",
      "TOTO Sanitary Catalog February 2022",
    ],
    pdf: [
      "https://drive.google.com/file/d/1uly-ANfEsFSPXr9zA5I_Slf1T9l2-EmE/preview",
      "https://drive.google.com/file/d/13PUc8yjKnQut1Pd7JBJ2LYHTGYBmO9z3/preview",
    ],
  },
];

function SanitaryComponent() {
  const router = useRouter();
  const query = router.query;
  const brand = query.brand || "AMERICAN STANDARD";
  const [selected, setSelected] = useState(brand);
  const [selectedIndex, setSelectedIndex] = useState("0");

  const selectedLogo = graniteTiles.filter((obj) => obj.name === brand);
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
                    SANITARY
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
                router.push({
                  pathname: "/product/sanitary/",
                  query: { brand: e.target.value.replace(/[0-9]/g, "") },
                });
                setPdf("");
              }}
            >
              {graniteTiles.map((obj, index) => (
                <option key={obj.id} value={obj.name + index}>
                  {obj.name}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:w-4/5">
            <div className="w-full h-[165px] border sm:h-[240px] md:h-[320px] lg:h-[350px] xl:h-[400px] 2xl:h-[514px] relative">
              <Image
                className="object-contain cursor-pointer"
                src={`/products/Sanitary/${brand}/highlight/1.png`}
                alt="highlight product 1"
                layout="fill"
              />
            </div>
            <div className="pt-[40px]">
              <h2>About Product</h2>
              {brand === "AMERICAN STANDARD" ? (
                <p className="pt-[25px]">
                  Selama lebih dari 140 tahun American Standard telah memimpin
                  dalam pengembangan produk kamar mandi dan dapur yang inovatif
                  yang telah menetapkan dan menetapkan kembali standar hidup
                  sehat, bertanggung jawab dan indah.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue AMERICAN STANDARD. Hubungi
                  kami untuk informasi lebih lanjut.
                </p>
              ) : null}
              {brand === "FLIESSEN" ? (
                <>
                  <p className="pt-[25px]">
                    fließen shower drain adalah saringan pembuangan air yang
                    berbentuk persegi panjang yang ditempatkan di area shower.
                    Memiliki desain yang seamless membuat saringan air tidak
                    hanya berfungsi sebagai tempat pembuangan, tetapi juga untuk
                    meningkatkan estetika area shower.
                    <br />
                    <br />
                    Linear drain kami diproduksi menggunakan bahan stainless
                    steel 304 food grade sehingga lebih kokoh dan aman dari
                    korosi. Bentuk dan ukuran linear drain kami sudah
                    disesuaikan dengan kamar mandi di Indonesia pada umumnya.
                    Memiliki 2 ukuran yaitu 90cm dan 100 cm yang dapat
                    disesuaikan dengan lebar kamar mandi Anda. Selain itu produk
                    kami kompatibel dengan floor drain ukuran 4 inch pada
                    umumnya, sehingga pemasangan lebih mudah.
                  </p>
                  <h2 className="pt-[40px]">Product Advantages</h2>
                  <div className="flex flex-wrap  justify-around md:justify-between gap-y-[20px] md:gap-[20px] pt-[25px]">
                    <div className="flex flex-col text-center w-[160px] md:w-1/4">
                      <p className="font-bold">Pemasangan mudah dan cepat</p>
                      <p className="pt-[10px]">
                        Tidak perlu tukang khusus untuk memasangnya.
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px] md:w-1/4">
                      <p className="font-bold">Fleksibel</p>
                      <p className="pt-[10px]">
                        fließen shower drain dapat ditempatkan di sudut mana
                        saja.
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px] md:w-1/4">
                      <p className="font-bold">Tampilan mewah</p>
                      <p className="pt-[10px]">
                        Perubahan kecil tetapi akan berdampak besar pada suasana
                        kamar mandi, terlihat semakin elegan
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px] md:w-1/4">
                      <p className="font-bold">Higienis</p>
                      <p className="pt-[10px]">
                        Handle terlihat lebih elegan dan nyaman digunakan.
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px] md:w-1/4">
                      <p className="font-bold">Kualitas Pintu Tebal</p>
                      <p className="pt-[10px]">
                        Kotoran atau rambut tidak akan langsung terlihat karena
                        dan tidak akan membuat kesan jorok.
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px] md:w-1/4">
                      <p className="font-bold">Mudah dibersihkan</p>
                      <p className="pt-[10px]">
                        Hanya perlu mengangkat penutup atas saja untuk
                        membersihkan secara rutin.
                      </p>
                    </div>
                    <div className="flex flex-col text-center w-[160px] md:w-1/4">
                      <p className="font-bold">Stainless Steel 304</p>
                      <p className="pt-[10px]">Kuat dan aman dari korosi.</p>
                    </div>
                  </div>
                  <div className="flex flex-col pt-[25px] w-full">
                    <div className="w-full flex justify-center xl:justify-start py-[25px]">
                      <div className="w-full h-[215px] sm:h-[280px] md:h-[380px] xl:h-[500px] 2xl:h-[620px] relative flex-shrink-0">
                        <Image
                          className="object-contain cursor-pointer"
                          src={`/products/Sanitary/${brand}/products/fliessen.png`}
                          alt="fliessen image"
                          layout="fill"
                        />
                      </div>
                    </div>
                    <h2>Specification</h2>
                    <div className="flex flex-col xl:flex-row items-center py-[20px]">
                      <div className="flex">
                        <div className="w-[300px] h-[230px] sm:w-[400px] sm:h-[310px] md:w-[500px] md:h-[390px] relative flex-shrink-0">
                          <Image
                            className="object-contain cursor-pointer"
                            src={`/products/Sanitary/${brand}/products/fliessen 1.png`}
                            alt="fliessen image 1"
                            layout="fill"
                          />
                        </div>
                      </div>
                      <div className="pt-[40px] xl:pt-0 xl:pl-[40px]">
                        <div className="flex">
                          <div className="flex flex-col">
                            <p>Material: Stainless Steel 304</p>
                            <div className="flex">
                              <p>Size: </p>
                              <div className="pl-[4px]">
                                <p>1000 mm x 115 mm x 20 mm</p>
                                <p>900 mm x 115 mm x 20 mm</p>
                              </div>
                            </div>
                            <div className="flex">
                              <p>Type: </p>
                              <div className="pl-[4px]">
                                <p>Lubang tengah</p>
                                <p>Lubang samping</p>
                              </div>
                            </div>
                            <div className="flex">
                              <p>Outlet: </p>
                              <div className="pl-[4px]">
                                <p>
                                  4 Inch (Cocok Dengan Floor Drain /Saringan Got
                                  Lantai TOTO, San-Ei, Onda, Aer, dan lain-lain)
                                </p>
                                <p>Belum Termasuk Floor Drain</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {brand === "ROCA" ? (
                <p className="pt-[25px]">
                  ROCA menyediakan berbagai macam produk kamar mandi.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue ROCA. Hubungi kami untuk
                  informasi lebih lanjut.
                </p>
              ) : null}
              {brand === "SANDIMAS OULU" ? (
                <p className="pt-[25px]">
                  OULU menyediakan berbagai macam produk kamar mandi.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue OULU. Hubungi kami untuk
                  informasi lebih lanjut.
                </p>
              ) : null}
              {brand === "TOTO" ? (
                <p className="pt-[25px]">
                  TOTO adalah produsen toilet terbesar di dunia yang didirikan
                  pada tahun 1917 di Jepang. Didorong oleh semangat kesempurnaan
                  Jepang, perusahaan tidak hanya mempelopori pengembangan
                  peralatan saniter modern, tetapi juga mengubah cara menikmati
                  kamar mandi.
                  <br />
                  <br />
                  Berikut ini merupakan ecatalogue TOTO. Hubungi kami untuk
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
                        src={`/products/Sanitary/${brand}/pdf/${obj}.png`}
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
                      src={`/products/Sanitary/${brand}/pdf/${pdf}.pdf`}
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

export default SanitaryComponent;
