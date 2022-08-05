import Head from "next/head";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Whatsapp from "../../../components/Whatsapp";
import CeramicComponent from "../../../components/Ceramic";

export default function Ceramic() {
  return (
    <div>
      <Head>
        <title>Jual Keramik Surabaya | Galeri Keramik</title>
        <meta
          name="description"
          content="GALERI KERAMIK menyediakan berbagai macam merk keramik: HABITAT, HERKULES, IKAD, JUPITER, MILAN, PLATINUM, ROMAN. Melayani pengiriman ke berbagai wilayah di Indonesia, baik ecer maupun partai. Lokasi di Baliwerti 118, Surabaya, Jawa Timur, Indonesia"
        />
        <link rel="icon" href="/icons/logo_tab.png" />
      </Head>
      <Navigation />
      <Whatsapp />
      <CeramicComponent />
      <Footer />
    </div>
  );
}
