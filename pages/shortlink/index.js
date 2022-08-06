import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function ShortLink() {
  return (
    <div>
      <Head>
        <title>Galeri Keramik</title>
        <meta
          name="description"
          content="GALERI KERAMIK menyediakan berbagai macam granite tile, keramik, sanitary, pintu PVC, pintu aluminium, tandon, bak cuci piring, dan lain-lain. Melayani pengiriman ke berbagai wilayah di Indonesia, baik ecer maupun partai. Lokasi di Baliwerti 118, Surabaya, Jawa Timur, Indonesia"
        />
        <link rel="icon" href="/icons/logo_tab.png" />
      </Head>
      <div className="flex flex-col items-center py-[40px] px-4 text-center min-h-screen flex-grow relative">
        <div className="px-4 max-w-[360px] flex flex-col items-center pb-[60px]">
          <div className="flex items-center relative w-[240px] h-[110px] text-black">
            <Link href="/" passHref>
              <Image
                className="object-contain cursor-pointer"
                src="/icons/logo_black.svg"
                alt="galeri keramik logo"
                layout="fill"
              />
            </Link>
          </div>
          <p className="text-center">
            Menyediakan berbagai macam kebutuhan bangunan.
            <br /> Jalan. Baliwerti 118, Surabaya
          </p>
          <div className="flex flex-col pt-[60px] gap-[20px] w-full  text-[14px] text-white">
            <Link href="/">
              <a>
                <div className="bg-[#242424] p-4 rounded-xl w-full cursor-pointer shadow-md">
                  Website Galeri Keramik
                </div>
              </a>
            </Link>
            <a
              href="wa.me/+6285108889991"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#242424] p-4 rounded-xl w-full cursor-pointer shadow-md ">
                Informasi & Pemesanan - Whatsapp
              </div>
            </a>
            <a
              href="https://goo.gl/maps/aR41chWgBJKxXgxv8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#242424] p-4 rounded-xl w-full cursor-pointer shadow-md ">
                Google Maps - Jalan Baliwerti 118 Surabaya
              </div>
            </a>
            <a
              href="https://www.instagram.com/galerikeramik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#242424] p-4 rounded-xl w-full cursor-pointer shadow-md ">
                Instagram - @galerikeramik
              </div>
            </a>
            <a
              href="https://www.tokopedia.com/galerikeramik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className=" bg-[#242424] p-4 rounded-xl w-full cursor-pointer shadow-md ">
                Tokopedia - Galeri Keramik
              </div>
            </a>
          </div>
        </div>
        <div className="bg-[#242424] py-3 absolute bottom-0 w-full">
          <p className="text-white text-center w-full text-[12px]">
            {`© 2022 Galeri Keramik`}
          </p>
        </div>
      </div>
    </div>
  );
}
