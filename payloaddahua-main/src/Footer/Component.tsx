// Update the import path below if the actual location is different
// import { getCachedGlobal } from '../../utilities/getGlobals' // <-- Adjust path as needed
import Link from 'next/link'
import React from 'react'

// Use 'any' if Footer type is not available
// import type { Footer } from '@/payload-types'

// import { ThemeSelector } from '../../providers/Theme/ThemeSelector'
// import { CMSLink } from '../../components/Link'
// import { Logo } from '../../components/Logo/Logo'

export async function Footer() {
  // Use 'any' if Footer type is not available
  // const footerData: any = await getCachedGlobal('footer', 1)()

  // const navItems: any[] = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          {/* If Logo requires an image prop, pass it here: <Logo image={...} /> */}
          {/* <Logo /> */}
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          {/* <ThemeSelector /> */}
          <nav className="flex flex-col md:flex-row gap-4">
            {/* {navItems.map((item: any, i: number) => { */}
              {/* return <CMSLink className="text-white" key={i} {...item.link} />
            })} */}
          </nav>
        </div>
      </div>
    </footer>
  )
}
