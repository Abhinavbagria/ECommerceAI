'use client'

import React from 'react'
import { ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative section-gradient py-24 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/40 to-indigo-400/10 rounded-full blur-3xl opacity-60 animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-400/30 to-primary-400/10 rounded-full blur-3xl opacity-60 animate-pulse z-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 drop-shadow-lg">
                Discover Amazing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500 animate-gradient-x">Tech Products</span>
              </h1>
              <p className="text-2xl text-gray-700 max-w-lg font-medium">
                Shop the latest technology and gadgets with unbeatable prices and fast shipping.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow" />
                ))}
              </div>
              <span className="text-primary-700 font-semibold">4.9/5 from 10,000+ customers</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-3 flex items-center justify-center space-x-2 shadow-xl">
                <span>Shop Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary text-lg px-8 py-3 flex items-center justify-center space-x-2">
                Learn More
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50K+</div>
                <div className="text-primary-400 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-primary-400 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">Free</div>
                <div className="text-primary-400 text-sm">Shipping</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative z-10 glass shadow-2xl p-4">
              <img
                src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
                alt="Latest Tech Products"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white/80 glass p-4 shadow-lg">
              <div className="text-gray-800">
                <div className="text-sm font-medium">New Arrival</div>
                <div className="text-lg font-bold text-primary-600">$299</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/80 glass p-4 shadow-lg">
              <div className="text-gray-800">
                <div className="text-sm font-medium">Best Seller</div>
                <div className="text-lg font-bold text-primary-600">$199</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 