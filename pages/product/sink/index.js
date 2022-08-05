import Head from "next/head";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Whatsapp from "../../../components/Whatsapp";
import SinkComponent from "../../../components/Sink";

export default function Sink() {
  return (
    <div>
      <Head>
        <title>Jual Wastafel, Bak Cuci Piring Surabaya | Galeri Keramik</title>
        <meta
          name="description"
          content="GALERI KERAMIK menyediakan berbagai macam merk wastafek, bak cuci piring: FICO, ROYAL . Melayani pengiriman ke berbagai wilayah di Indonesia, baik ecer maupun partai. Lokasi di Baliwerti 118, Surabaya, Jawa Timur, Indonesia"
        />
        <link rel="icon" href="/icons/logo_tab.png" />
      </Head>
      <Navigation />
      <Whatsapp />
      <SinkComponent />
      <Footer />
    </div>
  );
}
