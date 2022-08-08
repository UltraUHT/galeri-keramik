import Head from "next/head";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Whatsapp from "../../../components/Whatsapp";
import WaterComponent from "../../../components/Water";
import { useRouter } from "next/router";
import LogoSelector from "../../../components/LogoSelector";

export default function Water() {
  const router = useRouter();
  const query = router.query;
  const tkey = query.tkey || "false";
  return (
    <div>
      <Head>
        <title>Jual Tandon Air, Pemanas Air Surabaya | Galeri Keramik</title>
        <meta
          name="description"
          content="GALERI KERAMIK menyediakan berbagai macam merk tandon air, water heater: ARISTON, PROFIL TANK, SOLAHART, TIRTA TANK. Melayani pengiriman ke berbagai wilayah di Indonesia, baik ecer maupun partai. Lokasi di Baliwerti 118, Surabaya, Jawa Timur, Indonesia"
        />
        <link rel="icon" href="/icons/logo_tab.png" />
      </Head>
      <Navigation />
      <Whatsapp />
      {tkey === "false" ? <WaterComponent /> : <LogoSelector />}
      <Footer />
    </div>
  );
}
