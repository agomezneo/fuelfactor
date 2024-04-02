import type { Metadata } from "next";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics  } from '@next/third-parties/google'
import { OwnersProvider } from "@/context/OwnersContext";
import { ProductsProvider } from "@/context/ProductsContext";
import { Inter } from "next/font/google";
import "@/styles/theme/globals.scss";
import Header from "@/components/headers/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuel Factor X España | Optimización Avanzada Motor y Planeta",
  description: "Descubre la solución integral que transformará tu forma de usar combustible sin dejarlo. Nuestro aditivo FFX mejora la combustión del motor, prolongando su vida útil y reduciendo el desgaste. Aumenta la economía de combustible y potencia mientras reduces emisiones nocivas. FFX: la respuesta eco-eficiente que tu vehículo necesita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_TAG_MANAGER}`} />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id='fb-pixel' strategy='afterInteractive'>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL}');
          fbq('track', 'PageView');
        `}
      </Script>
      <body className={inter.className}>
      <OwnersProvider>
      <ProductsProvider>
        {/* <Header /> */}
        <main>
          {children}
        </main>
        </ProductsProvider>
      </OwnersProvider>
      </body>
    </html>
  );
}
