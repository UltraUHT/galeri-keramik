import React from "react";
import Image from "next/image";

function Whyus() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-20">
      <div className="flex flex-col justify-center items-center w-full px-4 py-2 2xl:px-0 gap-[30px] max-w-[500px] md:max-w-[640px] lg:max-w-[840px]  xl:max-w-[980px] 2xl:max-w-[1280px] border-t pt-[20px]">
        <h2>Why Us</h2>
        <div className="flex flex-col md:flex-row gap-[20px] w-full items-center md:items-start">
          <div className="flex flex-col items-center gap-[8px] md:w-1/3 ">
            <div className="md:flex px-4 items-center text-black">
              <Image
                className="object-contain cursor-pointer "
                src="/whyus/1.svg"
                alt="galeri keramik why us 1"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-center text-[16px] md:text-[24px]">
              Quality Products
            </h2>
            <p className="text-center w-[250px] md:w-full">
              Kami selalu memastikan bahwa produk yang kami jual merupakan
              produk pilihan yang berkualitas.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[8px] md:w-1/3">
            <div className="md:flex px-4 items-center text-black py-[5px]">
              <Image
                className="object-contain cursor-pointer "
                src="/whyus/2.svg"
                alt="galeri keramik why us 2"
                width={40}
                height={40}
              />
            </div>
            <h2 className="text-center text-[16px] md:text-[24px]">
              Trusted Seller
            </h2>
            <p className="text-center w-[250px] md:w-full">
              Sebagai toko bahan bangunan, kepercayaan dari pelanggan setia kami
              membuat perusahaan kami berkembang pesat.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[8px] md:w-1/3">
            <div className="md:flex px-4 items-center text-black">
              <Image
                className="object-contain cursor-pointer "
                src="/whyus/3.svg"
                alt="galeri keramik why us 3"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-center text-[16px] md:text-[24px]">
              Competitive Price
            </h2>
            <p className="text-center w-[250px] md:w-full">
              {` Mengutamakan kepuasaan pelanggan, kami selalu memberikan harga
            terbaik & kompetitif dengan kualitas tinggi kepada pelanggan.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
