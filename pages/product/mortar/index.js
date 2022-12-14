import Head from "next/head";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Whatsapp from "../../../components/Whatsapp";
import MortarComponent from "../../../components/Mortar";
import { useRouter } from "next/router";
import LogoSelector from "../../../components/LogoSelector";

export default function Mortar() {
  const router = useRouter();
  const query = router.query;
  const tkey = query.tkey || "false";
  return (
    <div>
      <Head>
        <title>Jual Semen Surabaya | Galeri Keramik</title>
        <meta
          name="description"
          content="GALERI KERAMIK menyediakan berbagai macam merk semen / mortar: AM, MU, SIKA. Melayani pengiriman ke berbagai wilayah di Indonesia, baik ecer maupun partai. Lokasi di Baliwerti 118, Surabaya, Jawa Timur, Indonesia"
        />
        <link rel="icon" href="/icons/logo_tab.png" />
      </Head>
      <Navigation />
      <Whatsapp />

      {tkey === "false" ? <MortarComponent /> : <LogoSelector />}
      <Footer />
    </div>
  );
}
