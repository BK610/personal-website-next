import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="Baileykane.co" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Baileykane.co" />
          <meta name="description" content="Baileykane.co" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ddd7fe" />
          <meta charset="UTF-8" />

          {/* <link rel="apple-touch-icon" href="/img/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          /> */}
          {/* <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          /> */}
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🅱️</text></svg>"
          ></link>

          <link
            rel="shortcut icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🅱️</text></svg>"
          />
          <link rel="manifest" href="/manifest.json" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://baileykane.co" />
          <meta name="twitter:title" content="Bailey Kane" />
          <meta
            name="twitter:description"
            content="Bailey Kane | Builder, engineer, artist"
          />
          <meta
            name="twitter:image"
            content="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🅱️</text></svg>"
          />
          <meta name="twitter:creator" content="@BK610" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Bailey Kane" />
          <meta
            property="og:description"
            content="Bailey Kane | Builder, engineer, artist"
          />
          <meta
            property="og:site_name"
            content="Bailey Kane's personal website"
          />
          <meta property="og:url" content="https://baileykane.co" />
          <meta
            property="og:image"
            content="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🅱️</text></svg>"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
