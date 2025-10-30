# 🚀 Bodon Expedition - Production Deployment Checklist

## Quick Start - 5 Steps to Go Live

### ✅ Step 1: Verify GitHub Repository
- [ ] All code is committed: `git status` (should be clean)
- [ ] Latest changes pushed: `git push origin main`
- [ ] Repository is public and accessible

### ✅ Step 2: Create Vercel Account & Connect Repository
1. Go to https://vercel.com
2. Sign up or log in with GitHub
3. Click "Add New" → "Project"
4. Select "Import Git Repository"
5. Find and import: `Robertoukootieno/BODON-website`

### ✅ Step 3: Configure Environment Variables
In Vercel Dashboard → Your Project → Settings → Environment Variables

**Add these variables:**

```
# Authentication
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=<generate-secure-string>

# Database (if using)
DATABASE_URL=<your-database-url>

# Payment Gateways
STRIPE_SECRET_KEY=<your-key>
STRIPE_PUBLISHABLE_KEY=<your-key>
PAYPAL_CLIENT_ID=<your-id>
PAYPAL_CLIENT_SECRET=<your-secret>

# M-Pesa (if using)
MPESA_CONSUMER_KEY=<your-key>
MPESA_CONSUMER_SECRET=<your-secret>
MPESA_SHORTCODE=<your-code>
MPESA_PASSKEY=<your-passkey>

# Cloudinary (if using)
CLOUDINARY_CLOUD_NAME=<your-name>
CLOUDINARY_API_KEY=<your-key>
CLOUDINARY_API_SECRET=<your-secret>

# Email (if using)
EMAIL_SERVER_HOST=<your-host>
EMAIL_SERVER_PORT=<your-port>
EMAIL_SERVER_USER=<your-user>
EMAIL_SERVER_PASSWORD=<your-password>
```

### ✅ Step 4: Add Custom Domain
1. In Vercel Dashboard → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain: `yourdomain.com`
4. Choose DNS provider:
   - **Option A:** Use Vercel's nameservers (easiest)
   - **Option B:** Add CNAME record to your registrar

**If using CNAME:**
- Add CNAME record: `yourdomain.com` → `cname.vercel-dns.com`
- Wait 24-48 hours for DNS propagation

### ✅ Step 5: Deploy & Verify
1. Vercel automatically deploys when you push to main
2. Check deployment status in Vercel Dashboard
3. Visit your domain: `https://yourdomain.com`
4. Test all pages and functionality

---

## 📋 Pre-Deployment Verification

### Code Quality
- [ ] No console errors in development
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Images display properly
- [ ] Mobile responsive design works
- [ ] No broken links

### Functionality
- [ ] Navigation works on all pages
- [ ] Contact form functional
- [ ] Booking system works (if applicable)
- [ ] Payment integration ready (if applicable)
- [ ] Email notifications configured (if applicable)

### Performance
- [ ] Build completes without errors
- [ ] No TypeScript errors: `npm run type-check`
- [ ] Linting passes: `npm run lint`
- [ ] Images optimized

### Security
- [ ] No sensitive data in code
- [ ] Environment variables not committed
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Security headers configured

---

## 🔑 Important Information

### Your Domain
- **Domain:** [Enter your domain here]
- **Registrar:** [Enter registrar name]
- **Nameservers:** [Vercel or your registrar]

### Vercel Project
- **Project Name:** bodon-expedition
- **GitHub Repo:** Robertoukootieno/BODON-website
- **Deployment URL:** [Will be provided by Vercel]

### Database (if applicable)
- **Provider:** [e.g., PostgreSQL, MongoDB]
- **Connection String:** [Stored in environment variables]

---

## 🆘 Common Issues & Solutions

### Domain Not Working
**Problem:** Domain shows Vercel default page
**Solution:** 
- Wait 24-48 hours for DNS propagation
- Verify DNS records in your registrar
- Check Vercel domain settings

### Build Fails
**Problem:** Deployment fails with build error
**Solution:**
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Run `npm run build` locally to test

### Images Not Loading
**Problem:** Images show broken icon
**Solution:**
- Verify image paths are correct
- Check images are in `public/` folder
- Verify image domains in `next.config.js`

### Database Connection Error
**Problem:** Database connection fails
**Solution:**
- Verify DATABASE_URL is correct
- Check database firewall allows Vercel IPs
- Test connection string locally

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Issues:** https://github.com/Robertoukootieno/BODON-website/issues

---

## ✨ After Deployment

- [ ] Monitor application in Vercel Analytics
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure backups for database
- [ ] Set up monitoring alerts
- [ ] Plan regular security updates
- [ ] Document deployment process

---

**Status:** Ready for deployment ✅
**Last Updated:** 2025-10-30

