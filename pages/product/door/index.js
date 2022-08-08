import Head from "next/head";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Whatsapp from "../../../components/Whatsapp";
import DoorComponent from "../../../components/Door";
import { useRouter } from "next/router";
import LogoSelector from "../../../components/LogoSelector";

export default function Door() {
  const router = useRouter();
  const query = router.query;
  const tkey = query.tkey || "false";
  return (
    <div>
      <Head>
        <title>Jual Pintu Aluminium, PVC Surabaya | Galeri Keramik</title>
        <meta
          name="description"
          content="GALERI KERAMIK menyediakan berbagai macam merk pintu PVC, pintu aluminium: MATADOOR, ANGZDOOR, TOP DOOR . Melayani pengiriman ke berbagai wilayah di Indonesia, baik ecer maupun partai. Lokasi di Baliwerti 118, Surabaya, Jawa Timur, Indonesia"
        />
        <link rel="icon" href="/icons/logo_tab.png" />
      </Head>
      <Navigation />
      <Whatsapp />

      {tkey === "false" ? <DoorComponent /> : <LogoSelector />}
      <Footer />
    </div>
  );
}
