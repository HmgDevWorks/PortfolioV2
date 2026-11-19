import Script from 'next/script';

// Google Tag Manager container of the portfolio (public ID, not a secret).
const GTM_ID = 'GTM-P8K46Z5D';

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-tag" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
            </Script>
        </>
    );
}
