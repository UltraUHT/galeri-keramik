import React from "react";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-between items-center w-full max-w-[500px] md:max-w-[640px] xl:max-w-[980px] 2xl:max-w-[1280px] py-[25px]">
        <h2 className="text-center md:text-left w-full">About Us</h2>
      </div>
      <div className="w-full h-[600px] xl:h-[1000px] relative flex flex-col items-center justify-center">
        <div className="absolute w-full h-full">
          <Image
            className="object-cover w-full h-full z-0"
            src="/about/1.png"
            layout="fill"
            alt="about page image"
          />
        </div>
        <div className="z-10 w-full max-w-[500px] md:max-w-[640px] xl:max-w-[980px] 2xl:max-w-[1280px] relative flex items-center justify-center text-white">
          <div className="w-full h-[500px] xl:h-[600px] flex justify-center items-center backdrop-filter backdrop-blur-[8px] bg-white/20">
            <div className="w-full flex flex-col justify-center items-center gap-[20px] max-w-[800px] animate-fadeDown">
              <h2 className="hidden md:flex drop-shadow-sm">About Us</h2>
              <p className="text-[16px] md:text-[19px] xl:text-[24px] font-medium drop-shadow-sm px-4 xl:px-0">
                GALERI KERAMIK merupakan perusahaan yang menyediakan berbagai
                macam kebutuhan pembangunan dari berbagai merek. Kami melayani
                penjualan partai besar dan eceran baik untuk proyek pemerintah,
                swasta, kontraktor, pengembang, maupun perorangan dengan
                kualitas yang dapat dipercaya, harga bersaing dan pelayanan yang
                memuaskan.
                <br />
                <br /> Kami telah melayani penjualan di berbagai wilayah
                Indonesia selama lebih dari 22 tahun menyediakan berbagai macam
                granite tile, keramik, sanitary, pintu PVC, pintu aluminium,
                tandon, bak cuci piring, dan lain-lain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
