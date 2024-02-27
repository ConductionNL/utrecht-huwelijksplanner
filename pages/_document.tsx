import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="svg"
          href="https://gemeente.leiden.nl/typo3conf/ext/leiden_template/Resources/Public/Images/favicon/favicon-96x96.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
