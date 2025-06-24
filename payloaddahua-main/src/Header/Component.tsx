// or Component.client.tsx (depending on which one is used)

// Modify the Header component to remove the top navbar
// Keep only the bottom white navbar with the Payload logo

import React from 'react'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header>
      {/* Remove the top black navbar (with Dahua logo) */}
      
      {/* Keep only this bottom white navbar with Payload logo */}
      <div className="bg-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/payload-logo.png" alt="Payload Logo" className="h-8" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-800 hover:text-red-600 transition-colors text-sm font-medium">
              Products
            </Link>
            <Link href="/technologies" className="text-gray-800 hover:text-red-600 transition-colors text-sm font-medium">
              Technologies
            </Link>
            <Link href="/solutions" className="text-gray-800 hover:text-red-600 transition-colors text-sm font-medium">
              Solutions
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/contact"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
