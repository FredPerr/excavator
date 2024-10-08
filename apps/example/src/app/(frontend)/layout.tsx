import React from "react"
import '../../styles/globals.css'
import configPromise from '@payload-config'
import { headers as getHeaders } from 'next/headers'
import { parseCookies } from 'payload'
import { getRequestLanguage } from '@payloadcms/ui/utilities/getRequestLanguage'
import { createClientConfig, getRequestTheme } from '@fredperr/excavator/cms'
//import { mergeOpenGraph } from '@fredperr/excavator/next/seo'
import { Providers } from './providers'
import { Poppins } from 'next/font/google'
import { Metadata } from 'next'

const PoppinsFont = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const config = await configPromise
  const clientConfig = createClientConfig(config)
  const headers = getHeaders()
  const cookies = parseCookies(headers)

  const theme = getRequestTheme({
    config,
    cookies,
    headers,
    acceptedThemes: ['dark', 'light'],
  })

  const languageCode = getRequestLanguage({
    headers,
    cookies,
    defaultLanguage: config.localization === false ? 'en' : config.localization.defaultLocale,
  })

  return (
    <html lang={languageCode} dir="ltr" data-theme={theme} className={PoppinsFont.className}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="Excavator" />
        <meta name="application-name" content="Excavator" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Providers config={clientConfig} theme={theme}>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  description: 'Excavator Demo project for Payload CMS and Next.js',
  title: 'Excavator',
  metadataBase: process.env.NEXT_PUBLIC_SERVER_URL?.includes('://localhost')
    ? new URL(process.env.NEXT_PUBLIC_SERVER_URL)
    : null,
  openGraph: mergeOpenGraph({
    siteName: 'Excavator',
    title: 'Excavator',
    description: 'Excavator Demo project for Payload CMS and Next.js',
    images: [
      {
        url: process.env.NEXT_PUBLIC_SERVER_URL
          ? `${process.env.NEXT_PUBLIC_SERVER_URL}/open-graph.jpg`
          : '/open-graph.jpg',
      },
    ],
    url: process.env.NEXT_PUBLIC_SERVER_URL,
    type: 'website',
    alternateLocale: ['en', 'fr'],
  }),
  twitter: {
    card: 'summary_large_image',
    creator: '@fredperr',
  },
}
