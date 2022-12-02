import "../styles/globals.css";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-MSH8C97",
};

TagManager.initialize(tagManagerArgs);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
