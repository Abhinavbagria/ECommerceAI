import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Contact form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <Head>
        <title>Contact Us - TechStore</title>
        <meta name="description" content="Get in touch with TechStore. We're here to help with any questions about our products or services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="py-16">
          {/* Page Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions about our products or need support? We'd love to hear from you.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-3"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Company Info */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600">
                          123 Tech Street<br />
                          Digital City, DC 12345<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <Phone className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          +1 (555) 123-4567<br />
                          +1 (555) 987-6543
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <Mail className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          support@techstore.com<br />
                          sales@techstore.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <Clock className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">How can I track my order?</h3>
                      <p className="text-gray-600">You can track your order by logging into your account or using the tracking number provided in your order confirmation email.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">What is your return policy?</h3>
                      <p className="text-gray-600">We offer a 30-day return policy for most items. Products must be in original condition with all packaging included.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Do you ship internationally?</h3>
                      <p className="text-gray-600">Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">How can I get technical support?</h3>
                      <p className="text-gray-600">For technical support, please contact us through this form or call our support line during business hours.</p>
                    </div>
                  </div>
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

export default Contact 