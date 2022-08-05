import Head from "next/head";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Whatsapp from "../../../components/Whatsapp";
import GraniteComponent from "../../../components/Granite";

export default function Granite() {
  return (
    <div>
      <Head>
        <title>Jual Granite Tile Surabaya | Galeri Keramik</title>
        <meta
          name="description"
          content="GALERI KERAMIK menyediakan berbagai macam merk granite tile: EFATA, ESSENZA, FICO, GRANITO, INDOGRESS, INFINITI, NIRO, PORTINO, ROMAN GRANIT, SANDIMAS, SUMMIT, TITANIUM, VALENTINO GRESS, VENUS TILES, VINCENZA. Melayani pengiriman ke berbagai wilayah di Indonesia, baik ecer maupun partai. Lokasi di Baliwerti 118, Surabaya, Jawa Timur, Indonesia"
        />
        <link rel="icon" href="/icons/logo_tab.png" />
      </Head>
      <Navigation />
      <Whatsapp />
      <GraniteComponent />
      <Footer />
    </div>
  );
}
