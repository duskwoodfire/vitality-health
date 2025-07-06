'use client'
import Link from "next/link"
import { useState, type ReactNode, useEffect } from "react"
import { Menu, X, Home, ShoppingBag, Calendar, Activity } from "lucide-react"
import Image from "next/image"

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/merchandise", label: "Shop", icon: ShoppingBag },
    { href: "/consultation", label: "Consult", icon: Calendar },
    { href: "/health-track", label: "Track", icon: Activity },
    { href: "/health-track/diagnosis", label: "Diagnosis", icon: Activity },
    { href: "/mentalhealth", label: "Mental Health", icon: Activity },
    { href: "/pro", label: "Membership", icon: Activity },

  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-transparent shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/V.png" alt="HealthCare Logo" width={50} height={50} className="mr-2 rounded-full" />
                <span className="text-2xl font-bold text-black">Vitality</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-gray-500 hover:text-gray-900 transition duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src="/V.png" alt="HealthCare Logo" width={32} height={32} className="mr-2 rounded-full" />
                <Link href="/" className="text-2xl font-bold text-black">Vitality</Link>
              </div>
              <button
                type="button"
                className="p-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="mt-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center text-lg text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-6 w-6 text-black mr-3" aria-hidden="true" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full max-w-full">{children}</main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <p className="text-center text-sm text-gray-500">&copy; 2025 Vitality, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
