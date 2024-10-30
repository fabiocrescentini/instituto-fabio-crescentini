import type { Metadata } from 'next'
import { Inter, Merriweather_Sans, Lato, Source_Sans_3 } from 'next/font/google'

import '../styles/globals.css'
import 'aos/dist/aos.css'
import { Header } from '@/components/header'

import { Footer } from '@/components/footer'
import { FloatingIcon } from '@/components/common/floating-icon'
import { FacebookPixel } from '../components/analytics'
import Analytics from '@/components/analytics/Analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-merriweather',
})
const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '700', '900'],
})

const source = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Instituto Fabio Crescentini',
    default: 'Instituto Fabio Crescentini',
  },
  description:
    'Cirurgião do aparelho digestivo, Gastroenterologista, Hepatologista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${lato.variable} ${source.variable} ${merriweather.variable} font-sans`}
    >
      <head>
        <Analytics />
      </head>

      <body suppressHydrationWarning={true}>
        <Header />

        {children}

        <FloatingIcon />

        <Footer />

        <FacebookPixel />

        {/* <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${FB_PIXEL_ID});
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript> */}
      </body>
    </html>
  )
}
