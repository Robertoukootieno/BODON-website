# 🚀 Production Setup - BODON Website

## 📋 Required Environment Variables

Add these to Vercel before deploying:

### Authentication
```
NEXTAUTH_URL=https://bodon-website.vercel.app
NEXTAUTH_SECRET=<generate: openssl rand -base64 32>
```

### Database
```
DATABASE_URL=postgresql://user:password@host:port/database
```

### Company Information
```
COMPANY_NAME=Bodon Expedition Kenya
COMPANY_EMAIL=info@bodonexpedition.com
COMPANY_PHONE=+254-XXX-XXXXXX
COMPANY_ADDRESS=Nairobi, Kenya
```

### Site Configuration
```
SITE_URL=https://bodon-website.vercel.app
SITE_NAME=Bodon Expedition Kenya
SITE_DESCRIPTION=Discover Kenya's beauty with Bodon Expedition
```

---

## 🔧 Setup Steps

### 1. Generate NEXTAUTH_SECRET
```bash
openssl rand -base64 32
```
Copy the output.

### 2. Set Up Production Database
Choose one:
- **Railway.app** (easiest): https://railway.app
- **Supabase** (free tier): https://supabase.com
- **AWS RDS**: https://aws.amazon.com/rds

Get your PostgreSQL connection string.

### 3. Add to Vercel
1. Go to: https://vercel.com/dashboard/bodon-website
2. Settings → Environment Variables
3. Add each variable above
4. Select: Production, Preview, Development
5. Click: Save

### 4. Redeploy
1. Go to: Deployments
2. Click: Redeploy
3. Wait for build to complete

---

## ✅ Optional Variables (Add Later if Needed)

### Stripe
```
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### PayPal
```
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
PAYPAL_MODE=live
```

### M-Pesa
```
MPESA_CONSUMER_KEY=...
MPESA_CONSUMER_SECRET=...
MPESA_SHORTCODE=...
MPESA_PASSKEY=...
MPESA_ENVIRONMENT=production
```

### Cloudinary
```
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

### Email (Gmail)
```
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_FROM=noreply@bodonexpedition.com
```

---

## 📝 Checklist

- [ ] Generated NEXTAUTH_SECRET
- [ ] Set up production database
- [ ] Have DATABASE_URL
- [ ] Updated COMPANY_PHONE
- [ ] Updated COMPANY_ADDRESS
- [ ] Added all variables to Vercel
- [ ] Redeployed project
- [ ] Tested site is working

---

## 🎯 What You Need to Tell Me

To help you set up production, please provide:

1. **Production Database:**
   - Which provider? (Railway, Supabase, AWS RDS, etc.)
   - Do you have the connection string?

2. **Company Information:**
   - Correct phone number?
   - Correct address?

3. **Payment Gateways:**
   - Using Stripe? (yes/no)
   - Using PayPal? (yes/no)
   - Using M-Pesa? (yes/no)

4. **Email:**
   - Need email functionality? (yes/no)
   - If yes, which provider? (Gmail, SendGrid, etc.)

5. **Images:**
   - Using Cloudinary? (yes/no)

---

## 🚀 Next Steps

1. **Tell me what you need** (answer the questions above)
2. **I'll help you get credentials** for each service
3. **Add to Vercel**
4. **Deploy**
5. **Live!** 🎉

---

**What do you want to set up first?**

