# 🛍️ NextShop

A modern, full-stack e-commerce platform built with **Next.js**, featuring server-side rendering, secure JWT authentication, Stripe payments, and a clean responsive UI.

🔗 **Live Demo:** [next-shop-bay.vercel.app](https://next-shop-bay.vercel.app)

---

## ✨ Features

- 🔐 **User Authentication** — Secure registration & login with JWT + crypto-js
- 🛒 **Shopping Cart** — Add, remove, and manage cart items with persistent state
- 📦 **Product Catalog** — Browse and search products with dynamic routing
- 💳 **Stripe Checkout** — Secure payment processing with order creation & invoicing
- 📋 **Order Management** — Track and manage orders post-checkout
- 🔔 **Toast Notifications** — Real-time feedback using react-toastify
- 📊 **Loading Indicators** — Smooth page transitions with react-top-loading-bar
- 📱 **Responsive Design** — Fully optimized for mobile and desktop

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 12, React 18, TailwindCSS |
| Backend | Next.js API Routes (serverless) |
| Database | MongoDB (via Mongoose) |
| Auth | JWT, crypto-js |
| Payments | Stripe, react-stripe-checkout |
| Deployment | Vercel |

---

## 📁 Project Structure

```
NextShop/
├── components/        # Reusable UI components
├── middleware/        # Auth & request middleware
├── models/            # Mongoose data models
├── pages/
│   ├── api/           # Serverless API routes
│   └── ...            # App pages (SSR)
├── public/            # Static assets
├── styles/            # Global styles
├── next.config.js
└── tailwind.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- MongoDB URI
- Stripe API keys

### Installation

```bash
# Clone the repository
git clone https://github.com/Kunal0007/NextShop.git
cd NextShop

# Install dependencies
npm install
# or
yarn install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Run Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy 🚀
