import Head from "next/head";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Whyus from "../components/Whyus";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";

export default function Home() {
  return (
    <div>
      <Script id="gtagscript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MSH8C97');`,
          }}
        ></Script>
      <Head>
        
        <title>Galeri Keramik</title>
        <meta
          name="description"
          content="GALERI KERAMIK menyediakan berbagai macam granite tile, keramik, sanitary, pintu PVC, pintu aluminium, tandon, bak cuci piring, dan lain-lain. Melayani pengiriman ke berbagai wilayah di Indonesia, baik ecer maupun partai. Lokasi di Baliwerti 118, Surabaya, Jawa Timur, Indonesia"
        />
        <link rel="icon" href="/icons/logo_tab.png" />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSH8C97"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Navigation />
        <Whatsapp />
        <Hero />
        <Products />
        <Whyus />
        <Contact />
        <Footer />
      </body>
    </div>
  );
}
