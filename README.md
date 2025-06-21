# TechStore - Modern E-commerce Website

A modern, responsive e-commerce website built with Next.js and Tailwind CSS. This project showcases a beautiful tech store with product listings, categories, and a fully responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Product Showcase**: Featured products with ratings, reviews, and pricing
- **Category Navigation**: Organized product categories with visual cards
- **Interactive Elements**: Hover effects, animations, and user interactions
- **Newsletter Subscription**: Email signup functionality
- **Search Functionality**: Product search bar in header
- **Shopping Cart**: Cart icon with item count
- **Mobile Menu**: Responsive navigation for mobile devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with Pages Router
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Images**: Unsplash (placeholder images)

## 📁 Project Structure

```
src/
├── pages/
│   ├── _app.js              # App wrapper component
│   ├── _document.js         # Custom HTML document
│   └── index.js             # Homepage component
├── components/
│   ├── Header.js            # Navigation header with search
│   ├── Hero.js              # Hero section with CTA
│   ├── Categories.js        # Product categories grid
│   ├── FeaturedProducts.js  # Featured products showcase
│   ├── Newsletter.js        # Email subscription section
│   └── Footer.js            # Footer with links and info
└── styles/
    └── globals.css          # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Background**: Light gray (#f9fafb)
- **Text**: Dark gray (#111827)
- **Accents**: Various colors for category cards

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Components

#### Header
- Sticky navigation with logo
- Search bar with icon
- User account and cart icons
- Mobile hamburger menu

#### Hero Section
- Gradient background
- Compelling headline and CTA
- Customer rating display
- Feature highlights
- Product image with floating price tags

#### Categories
- 6 main product categories
- Hover effects with image scaling
- Category icons and product counts
- Call-to-action buttons

#### Featured Products
- 8 featured products
- Product images with badges
- Star ratings and review counts
- Price comparison with discounts
- Quick add-to-cart functionality
- Wishlist buttons

#### Newsletter
- Email subscription form
- Gradient background
- Privacy notice

#### Footer
- Company information
- Quick links and customer service
- Contact details
- Social media links
- Legal links

## 🔧 Customization

### Adding New Products
Edit the `products` array in `src/components/FeaturedProducts.js`:

```javascript
const products = [
  {
    id: 9,
    name: 'New Product',
    price: 299,
    originalPrice: 399,
    rating: 4.5,
    reviews: 123,
    image: 'product-image-url',
    badge: 'New'
  }
]
```

### Adding New Categories
Edit the `categories` array in `src/components/Categories.js`:

```javascript
const categories = [
  {
    id: 7,
    name: 'New Category',
    icon: NewIcon,
    count: '50+ Products',
    color: 'bg-pink-500',
    image: 'category-image-url'
  }
]
```

### Styling
- Modify `src/styles/globals.css` for global styles
- Update `tailwind.config.js` for theme customization
- Use Tailwind utility classes for component styling

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly buttons
- Optimized images
- Collapsible navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions:
- Create an issue on GitHub
- Contact: support@techstore.com

---

Built with ❤️ using Next.js and Tailwind CSS 