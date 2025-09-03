# Bodon Tours Kenya

A modern, professional tour company website built with Next.js 14, featuring secure payment integration including M-Pesa, PayPal, and credit card processing.

## Features

- 🌍 **Modern Design**: Professional, responsive design optimized for tour companies
- 💳 **Secure Payments**: Multiple payment gateways (M-Pesa, PayPal, Stripe)
- 🔐 **User Authentication**: Secure login and registration system
- 📱 **Mobile Responsive**: Optimized for all devices
- 🎨 **Beautiful UI**: Custom design system with Tailwind CSS
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🔍 **SEO Optimized**: Built-in SEO best practices
- 📊 **Admin Dashboard**: Comprehensive booking and tour management
- 🌟 **User Reviews**: Customer testimonials and rating system

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe, PayPal, M-Pesa integration
- **Image Management**: Cloudinary
- **Email**: Nodemailer
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bodon-tours
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Fill in your environment variables in the `.env` file.

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Environment Variables

See `.env.example` for all required environment variables including:

- Database connection
- Payment gateway credentials (Stripe, PayPal, M-Pesa)
- Email configuration
- Authentication secrets
- Cloudinary settings

## Payment Integration

### M-Pesa (Safaricom)
- Integrated with Safaricom's Daraja API
- Supports STK Push for seamless payments
- Real-time payment confirmation

### PayPal
- PayPal REST SDK integration
- Support for both sandbox and live environments
- Secure payment processing

### Stripe
- Credit/debit card processing
- PCI compliant
- Webhook support for payment confirmation

## Project Structure

```
src/
├── app/                 # Next.js 14 app directory
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components
│   ├── forms/          # Form components
│   └── sections/       # Page sections
├── lib/                # Utility libraries
├── types/              # TypeScript type definitions
├── utils/              # Helper functions
└── hooks/              # Custom React hooks
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@bodontours.com or create an issue in this repository.
