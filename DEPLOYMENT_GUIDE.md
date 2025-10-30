# Bodon Expedition - Vercel Deployment Guide

## 🚀 Production Deployment Steps

### Step 1: Prepare Your Local Repository
Ensure all changes are committed and pushed to GitHub:

```bash
git status
git add .
git commit -m "Prepare for production deployment"
git push origin main
```

### Step 2: Install Vercel CLI (Optional but Recommended)
```bash
npm install -g vercel
```

### Step 3: Connect Your GitHub Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Search for and select your GitHub repository: `BODON-website`
5. Click **"Import"**

### Step 4: Configure Project Settings

**Framework Preset:** Next.js (should auto-detect)
**Root Directory:** ./ (default)
**Build Command:** `npm run build` (default)
**Output Directory:** `.next` (default)
**Install Command:** `npm install` (default)

### Step 5: Set Environment Variables

In the Vercel dashboard, go to **Settings** → **Environment Variables** and add:

#### Required Variables:
```
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=<generate-a-secure-random-string>
DATABASE_URL=<your-database-connection-string>
```

#### Payment Integration Variables:
```
STRIPE_SECRET_KEY=<your-stripe-secret-key>
STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
PAYPAL_CLIENT_ID=<your-paypal-client-id>
PAYPAL_CLIENT_SECRET=<your-paypal-client-secret>
```

#### M-Pesa Integration Variables:
```
MPESA_CONSUMER_KEY=<your-mpesa-consumer-key>
MPESA_CONSUMER_SECRET=<your-mpesa-consumer-secret>
MPESA_SHORTCODE=<your-mpesa-shortcode>
MPESA_PASSKEY=<your-mpesa-passkey>
```

#### Cloudinary Variables:
```
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
```

#### Email Configuration:
```
EMAIL_SERVER_HOST=<your-email-server-host>
EMAIL_SERVER_PORT=<your-email-server-port>
EMAIL_SERVER_USER=<your-email-server-user>
EMAIL_SERVER_PASSWORD=<your-email-server-password>
```

### Step 6: Add Custom Domain

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Click **"Add Domain"**
4. Enter your custom domain (e.g., `bodonexpedition.com`)
5. Follow the DNS configuration instructions:
   - Add the provided CNAME record to your domain registrar
   - Or update nameservers if using Vercel's DNS

### Step 7: Deploy

**Option A: Automatic Deployment (Recommended)**
- Push to main branch on GitHub
- Vercel automatically deploys on every push

**Option B: Manual Deployment via CLI**
```bash
vercel --prod
```

### Step 8: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Check all pages load correctly
3. Test forms and functionality
4. Verify images load properly
5. Check mobile responsiveness
6. Test payment integrations (if applicable)

## 📋 Pre-Deployment Checklist

- [ ] All code committed and pushed to GitHub
- [ ] `.vercelignore` file created
- [ ] Environment variables configured in Vercel
- [ ] Custom domain added and DNS configured
- [ ] Database migrations completed (if using Prisma)
- [ ] All images optimized and accessible
- [ ] Forms tested and working
- [ ] Payment integrations configured
- [ ] Email notifications configured
- [ ] Analytics/monitoring set up (optional)

## 🔒 Security Best Practices

1. **Never commit `.env` files** - Use Vercel's environment variables
2. **Use strong NEXTAUTH_SECRET** - Generate with: `openssl rand -base64 32`
3. **Enable HTTPS** - Vercel provides free SSL certificates
4. **Set up monitoring** - Use Vercel Analytics
5. **Regular backups** - Backup your database regularly
6. **Update dependencies** - Keep packages up to date

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify Node.js version compatibility

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records in your registrar
- Check Vercel domain settings

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check database firewall settings
- Ensure database is accessible from Vercel

### Images Not Loading
- Verify image paths are correct
- Check image domains in next.config.js
- Ensure images are in public folder

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Check your repository issues

---

**Deployment Date:** [Add date when deployed]
**Domain:** [Add your domain]
**Status:** [Add deployment status]

