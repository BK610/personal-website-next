import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="BaileyKane.co" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="BaileyKane.co" />
          <meta name="description" content="BaileyKane.co" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#ddd7fe" />

          <link rel="apple-touch-icon" href="/img/touch-icon-iphone.png" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            sizes="32x32"
            type="image/png"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://baileykane.co" />
          <meta name="twitter:title" content="Bailey Kane" />
          <meta name="twitter:description" content="Bailey Kane PWA" />
          <meta
            name="twitter:image"
            content="https://baileykane.co/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@BK610" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Bailey Kane PWA" />
          <meta property="og:description" content="Bailey Kane PWA" />
          <meta property="og:site_name" content="Bailey Kane" />
          <meta property="og:url" content="https://baileykane.co" />
          <meta
            property="og:image"
            content="https://baileykane.co/apple-touch-icon.png"
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
