import type { Metadata } from 'next'
import { Inter, Merriweather_Sans, Lato, Source_Sans_3 } from 'next/font/google'

import '../styles/globals.css'
import 'aos/dist/aos.css'
import { Header } from '@/components/header'

import { Footer } from '@/components/footer'
import { FloatingIcon } from '@/components/common/floating-icon'

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
      <body suppressHydrationWarning={true}>
        <Header />

        {children}

        <FloatingIcon />

        <Footer />
      </body>
    </html>
  )
}
