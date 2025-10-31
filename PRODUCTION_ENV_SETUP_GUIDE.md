# 🚀 Production Environment Variables Setup - BODON Website

## 📋 Complete Production Configuration

This guide provides real, production-ready environment variables for your BODON Expedition Kenya website.

---

## 🔐 REQUIRED VARIABLES (10 Total)

### 1. Authentication - NextAuth
```
NEXTAUTH_URL=https://bodon-website.vercel.app
NEXTAUTH_SECRET=<GENERATE_WITH_COMMAND_BELOW>
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```
Example output: `abc123def456ghi789jkl012mno345pqr678stu901vwx234yz`

---

### 2. Database - PostgreSQL
```
DATABASE_URL=postgresql://user:password@host:port/bodon_tours
```

**Setup Options:**

#### Option A: Railway.app (Recommended - Easiest)
1. Go to https://railway.app
2. Sign up with GitHub
3. Create new project → PostgreSQL
4. Copy connection string
5. Paste as DATABASE_URL

#### Option B: Supabase (Free Tier)
1. Go to https://supabase.com
2. Create new project
3. Go to Settings → Database
4. Copy connection string
5. Paste as DATABASE_URL

#### Option C: AWS RDS
1. Create PostgreSQL instance
2. Get connection string from AWS console
3. Paste as DATABASE_URL

**Format:**
```
postgresql://username:password@host.region.provider.com:5432/bodon_tours
```

---

### 3. Company Information

```
COMPANY_NAME=Bodon Expedition Kenya
COMPANY_EMAIL=info@bodonexpedition.com
COMPANY_PHONE=+254-700-000000
COMPANY_ADDRESS=Nairobi, Kenya
```

**Update with your actual:**
- Phone number (with country code)
- Physical address
- Contact email

---

### 4. Site Configuration

```
SITE_URL=https://bodon-website.vercel.app
SITE_NAME=Bodon Expedition Kenya
SITE_DESCRIPTION=Discover Kenya's beauty with Bodon Expedition - Your premier safari and adventure expedition company
```

**Note:** Update SITE_URL when you add custom domain

---

## ⚠️ OPTIONAL VARIABLES (Add Later if Needed)

### Stripe (Payment Processing)
```
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

**Setup:**
1. Go to https://dashboard.stripe.com
2. Get live keys (not test keys)
3. Create webhook endpoint
4. Add to Vercel

---

### PayPal (Payment Processing)
```
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
PAYPAL_MODE=live
```

**Setup:**
1. Go to https://developer.paypal.com
2. Create app
3. Get live credentials
4. Add to Vercel

---

### M-Pesa (Safaricom Mobile Money)
```
MPESA_CONSUMER_KEY=...
MPESA_CONSUMER_SECRET=...
MPESA_SHORTCODE=...
MPESA_PASSKEY=...
MPESA_ENVIRONMENT=production
```

**Setup:**
1. Register at https://developer.safaricom.co.ke
2. Create app
3. Get production credentials
4. Add to Vercel

---

### Cloudinary (Image Management)
```
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

**Setup:**
1. Go to https://cloudinary.com
2. Create account
3. Get API credentials
4. Add to Vercel

---

### Email (Gmail SMTP)
```
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_FROM=noreply@bodonexpedition.com
```

**Setup Gmail:**
1. Enable 2-factor authentication
2. Create app password: https://myaccount.google.com/apppasswords
3. Use app password (not regular password)
4. Add to Vercel

---

## 🚀 Adding to Vercel

### Step 1: Go to Vercel Dashboard
```
https://vercel.com/dashboard/bodon-website
```

### Step 2: Navigate to Environment Variables
1. Click: Settings
2. Click: Environment Variables
3. Click: Add New

### Step 3: Add Each Variable
For each variable:
1. Name: `VARIABLE_NAME`
2. Value: `your-value`
3. Select: Production, Preview, Development
4. Click: Save

### Step 4: Redeploy
1. Go to: Deployments
2. Click: Redeploy
3. Wait for build to complete

---

## ✅ Verification Checklist

- [ ] NEXTAUTH_URL set correctly
- [ ] NEXTAUTH_SECRET generated and added
- [ ] DATABASE_URL configured
- [ ] Company information updated
- [ ] Site configuration updated
- [ ] All variables added to Vercel
- [ ] Project redeployed
- [ ] Site loads without errors
- [ ] Database connection works
- [ ] No console errors

---

## 🔗 Important Links

- **Vercel Dashboard:** https://vercel.com/dashboard/bodon-website
- **Railway.app:** https://railway.app
- **Supabase:** https://supabase.com
- **Stripe:** https://dashboard.stripe.com
- **PayPal:** https://developer.paypal.com
- **M-Pesa:** https://developer.safaricom.co.ke
- **Cloudinary:** https://cloudinary.com
- **Gmail App Passwords:** https://myaccount.google.com/apppasswords

---

## 📝 Production Readiness

Your website is production-ready when:
✅ All 10 required variables are set
✅ Database is connected and working
✅ Site loads without errors
✅ All pages are accessible
✅ No console errors in browser

---

**Ready to deploy? Follow the steps above!** 🎉

