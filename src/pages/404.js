import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Home, ArrowLeft, Search } from 'lucide-react'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | TechStore</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* 404 Number */}
              <div className="mb-8">
                <h1 className="text-9xl font-bold text-primary-600">404</h1>
              </div>
              
              {/* Error Message */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Oops! Page Not Found
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The page you're looking for doesn't exist or has been moved. 
                  Don't worry, we'll help you find what you're looking for.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  href="/"
                  className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-3"
                >
                  <Home className="h-5 w-5" />
                  <span>Go Home</span>
                </Link>
                
                <button 
                  onClick={() => window.history.back()}
                  className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-3"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Go Back</span>
                </button>
              </div>
              
              {/* Search Section */}
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Search for Products
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Try searching for what you were looking for
                </p>
              </div>
              
              {/* Popular Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Popular Pages
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/products"
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Products
                  </Link>
                  <Link 
                    href="/categories"
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Categories
                  </Link>
                  <Link 
                    href="/contact"
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/about"
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default Custom404 