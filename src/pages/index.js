import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>TechStore - Modern E-commerce</title>
        <meta name="description" content="Your one-stop shop for the latest technology and gadgets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Categories />
          <FeaturedProducts />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  )
} 