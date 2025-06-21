'use client'

import React from 'react'
import { Smartphone, Laptop, Headphones, Camera, Watch, Tablet } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Smartphones',
    icon: Smartphone,
    count: '150+ Products',
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Laptops',
    icon: Laptop,
    count: '80+ Products',
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Headphones',
    icon: Headphones,
    count: '120+ Products',
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Cameras',
    icon: Camera,
    count: '90+ Products',
    color: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    name: 'Smartwatches',
    icon: Watch,
    count: '60+ Products',
    color: 'bg-yellow-500',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 6,
    name: 'Tablets',
    icon: Tablet,
    count: '70+ Products',
    color: 'bg-indigo-500',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
]

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of technology products organized by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.count}</p>
                  </div>
                </div>
                
                <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 backdrop-blur-sm">
                  Explore {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-3">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  )
}

export default Categories 