import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Home, RefreshCw, AlertTriangle } from 'lucide-react'

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>500 - Server Error | TechStore</title>
        <meta name="description" content="Something went wrong on our end. Please try again." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Error Icon */}
              <div className="mb-8">
                <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-12 w-12 text-red-600" />
                </div>
              </div>
              
              {/* Error Number */}
              <div className="mb-8">
                <h1 className="text-9xl font-bold text-red-600">500</h1>
              </div>
              
              {/* Error Message */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Server Error
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Something went wrong on our end. We're working to fix this issue. 
                  Please try again in a few moments.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => window.location.reload()}
                  className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-3"
                >
                  <RefreshCw className="h-5 w-5" />
                  <span>Try Again</span>
                </button>
                
                <Link 
                  href="/"
                  className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-3"
                >
                  <Home className="h-5 w-5" />
                  <span>Go Home</span>
                </Link>
              </div>
              
              {/* Contact Support */}
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Need Help?
                </h3>
                <p className="text-gray-600 mb-4">
                  If this problem persists, please contact our support team.
                </p>
                <Link 
                  href="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default Custom500 