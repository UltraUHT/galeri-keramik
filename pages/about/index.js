import Head from "next/head";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/Whatsapp";
import AboutUs from "../../components/About";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us | Galeri Keramik</title>
        <meta
          name="description"
          content="GALERI KERAMIK menyediakan berbagai macam granite tile, keramik, sanitary, pintu PVC, pintu aluminium, tandon, bak cuci piring, dan lain-lain. Melayani pengiriman ke berbagai wilayah di Indonesia, baik ecer maupun partai. Lokasi di Baliwerti 118, Surabaya, Jawa Timur, Indonesia"
        />
        <link rel="icon" href="/icons/logo_tab.png" />
      </Head>
      <Navigation />
      <Whatsapp />
      <AboutUs />
      <Footer />
    </div>
  );
}
