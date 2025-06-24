import { HeaderClient } from './Component.client'
import React from 'react'
import type { Media, Navbar } from '@/payload-types'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
const payload = await getPayload({ config: configPromise })
const result = await payload.find({
  collection: 'categories',
  depth: 1,
  limit: 12,
  overrideAccess: false,
})
const categories = result.docs
export async function Header() {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' })
  const logo = settings.logo as Media
  const telephone = settings.Telephone
  const favicon = settings.favicon as Media
  const email = settings.Email
  const navbarData = await payload.find({
    collection: 'navbar',
    limit: 100,
  })
  const navbar = navbarData.docs as Navbar[]

  return (
    <HeaderClient
      logo={logo}
      favicon={favicon}
      telephone={telephone}
      email={email}
      navbar={navbar}
      categories={categories}
    />
  )
}
