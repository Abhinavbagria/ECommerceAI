'use client'

import React from 'react'
import { Star, Heart, ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 999,
    originalPrice: 1099,
    rating: 4.8,
    reviews: 1247,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'New'
  },
  {
    id: 2,
    name: 'MacBook Air M2',
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 892,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Best Seller'
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    price: 349,
    originalPrice: 399,
    rating: 4.7,
    reviews: 2156,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Sale'
  },
  {
    id: 4,
    name: 'Canon EOS R6',
    price: 2499,
    originalPrice: 2799,
    rating: 4.6,
    reviews: 543,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Limited'
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 399,
    originalPrice: 449,
    rating: 4.8,
    reviews: 1678,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Popular'
  },
  {
    id: 6,
    name: 'iPad Pro 12.9"',
    price: 1099,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 934,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Trending'
  },
  {
    id: 7,
    name: 'Samsung Galaxy S24',
    price: 899,
    originalPrice: 999,
    rating: 4.6,
    reviews: 1123,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Hot'
  },
  {
    id: 8,
    name: 'Dell XPS 13',
    price: 1299,
    originalPrice: 1499,
    rating: 4.5,
    reviews: 756,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    badge: 'Deal'
  }
]

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and trending technology products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card group overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors duration-200">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full btn-primary flex items-center justify-center space-x-2 text-sm">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-green-600 font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-3">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 