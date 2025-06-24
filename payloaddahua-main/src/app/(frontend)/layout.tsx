import React from 'react'
import './styles.css'
import './animations.css'
import { HeaderClient } from '@/Header/Component.client'
import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import { getPayload } from 'payload'

export const metadata = {
  description: 'Advanced security solutions for modern businesses and homes.',
  title: 'Dahua Vision Technology - Security Solutions',
}

const payload = await getPayload({ config: configPromise })
const favicon = (await payload.findGlobal({ slug: 'site-settings' })).favicon as Media

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <body className="min-h-screen font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden" suppressHydrationWarning={true}>
      {/* You cannot use <head> here, but you can use metadata export for title/description/favicon */}
      <HeaderClient 
        logo={favicon?.url ? { url: favicon.url, alt: favicon.alt } : undefined} 
      />
      <main>{children}</main>
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-50 via-white to-white dark:from-gray-900/50 dark:via-gray-900 dark:to-black opacity-70"></div>
    </body>
  )
}
