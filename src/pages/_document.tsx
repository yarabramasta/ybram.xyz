import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Wix+Madefor+Text:ital,wght@0,400;0,500;1,400;1,500&amp;display=swap"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=stardom@400&amp;display=swap"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-TDWSC6N"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TSBVP73X0Z"
        />
        <Script
          id="G-TSBVP73X0Z"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-TSBVP73X0Z');`
          }}
        />
        <Script
          id="GTM-TDWSC6N"
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-TDWSC6N');`
          }}
        />
      </Head>
      <body className="overflow-x-hidden bg-neutral-950 font-sans text-neutral-50 antialiased">
        <Main />
        <NextScript />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDWSC6N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
