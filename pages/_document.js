import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,300&family=Ubuntu:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="./assets/" />
        <title>Title Content</title>
        <meta name="title" content="Title Content" />
        <meta name="description" content="Description Content" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="./assets/Mego-inu.jpg" /> */}
        <meta property="og:title" content="Title Content" />
        <meta property="og:description" content="Description Content" />
        {/* <meta property="og:image" content="./assets/Mego-inu.jpg" /> */}
        {/* <meta property="twitter:card" content="./assets/Mego-inu.jpg" /> */}
        {/* <meta property="twitter:url" content="./assets/Mego-inu.jpg" /> */}
        <meta property="twitter:title" content="Title Content" />
        <meta property="twitter:description" content="Description Content" />
        {/* <meta property="twitter:image" content="./assets/Mego-inu.jpg" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
