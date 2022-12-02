import Head from "next/head";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Whyus from "../components/Whyus";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-MSH8C97",
};

TagManager.initialize(tagManagerArgs);

export default function Home() {
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
      <Navigation />
      <Whatsapp />
      <Hero />
      <Products />
      <Whyus />
      <Contact />
      <Footer />
    </div>
  );
}
