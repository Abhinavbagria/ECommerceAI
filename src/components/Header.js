'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X, User, Sparkles } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300">
                TechStore
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link href="/" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-700/50 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-700/50 relative group">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/categories" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-700/50 relative group">
                Categories
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-700/50 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-700/50 relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-200"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-700/50">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-700/50 relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                  3
                </span>
              </button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-gray-700/50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 py-4 space-y-2 bg-gray-800/90 backdrop-blur-sm rounded-lg m-2 border border-gray-700/50">
                <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-200">
                  Home
                </Link>
                <Link href="/products" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-200">
                  Products
                </Link>
                <Link href="/categories" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-200">
                  Categories
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-200">
                  About
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-700/50 transition-all duration-200">
                  Contact
                </Link>
                <div className="pt-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent bg-gray-800/50 text-white placeholder-gray-400 transition-all duration-200"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header 