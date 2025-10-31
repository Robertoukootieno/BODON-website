# 📚 Complete Guide: Import & Deploy BODON Project to Vercel

## 🎯 Overview

This guide walks you through:
1. Importing the GitHub repository to Vercel
2. Configuring environment variables
3. Setting up the database
4. Deploying to production
5. Managing your live site

**Total Time: 45 minutes**

---

## ✅ PART 1: Import Project to Vercel (5 minutes)

### Step 1.1: Go to Vercel Dashboard
1. Open: https://vercel.com
2. Sign in with your GitHub account
3. Click: **Add New** (top right)
4. Select: **Project**

### Step 1.2: Select Repository
1. Look for: **BODON-website**
2. Click: **Import**
3. Wait for Vercel to load project details

### Step 1.3: Configure Project
1. **Project Name:** `bodon-website` (should be auto-filled)
2. **Framework Preset:** `Next.js` (should be auto-detected)
3. **Root Directory:** `./` (default)
4. Click: **Continue**

### Step 1.4: Environment Variables (Skip for Now)
1. You'll see: "Environment Variables" section
2. Click: **Continue** (we'll add them in Part 2)
3. Click: **Deploy**

**Status:** ✅ Project imported, deployment started

---

## ⏳ PART 2: Wait for Initial Build (5-10 minutes)

### What's Happening:
- Vercel is building your Next.js project
- Installing dependencies
- Running build process
- Deploying to CDN

### Monitor Progress:
1. Stay on deployment page
2. Watch build logs scroll
3. Look for: ✅ "Build completed successfully"

### If Build Fails:
- Check error message in logs
- Common issue: Missing environment variables
- Solution: Add variables in Part 3

**Status:** ⏳ Waiting for build to complete

---

## 🔧 PART 3: Add Environment Variables (10 minutes)

### Step 3.1: Go to Project Settings
1. Open: https://vercel.com/dashboard
2. Click: **bodon-website** project
3. Click: **Settings** (top menu)
4. Click: **Environment Variables** (left sidebar)

### Step 3.2: Add NEXTAUTH_URL
1. Click: **Add New**
2. **Name:** `NEXTAUTH_URL`
3. **Value:** `https://bodon-website.vercel.app`
4. **Environments:** Check all three:
   - ✓ Production
   - ✓ Preview
   - ✓ Development
5. Click: **Save**

### Step 3.3: Add NEXTAUTH_SECRET
1. Click: **Add New**
2. **Name:** `NEXTAUTH_SECRET`
3. **Value:** Generate with:
   ```bash
   openssl rand -base64 32
   ```
   (Copy the output)
4. **Environments:** Check all three
5. Click: **Save**

### Step 3.4: Add DATABASE_URL
1. Click: **Add New**
2. **Name:** `DATABASE_URL`
3. **Value:** Your PostgreSQL connection string
   - Format: `postgresql://user:password@host:port/bodon_tours`
   - Get from: Railway.app, Supabase, or AWS RDS
4. **Environments:** Check all three
5. Click: **Save**

### Step 3.5: Add Company Information (4 variables)
Repeat for each:

**COMPANY_NAME**
- Value: `Bodon Expedition Kenya`

**COMPANY_EMAIL**
- Value: `info@bodonexpedition.com`

**COMPANY_PHONE**
- Value: `+254-700-000000`

**COMPANY_ADDRESS**
- Value: `Nairobi, Kenya`

For each: Check all three environments, Click Save

### Step 3.6: Add Site Configuration (3 variables)
Repeat for each:

**SITE_URL**
- Value: `https://bodon-website.vercel.app`

**SITE_NAME**
- Value: `Bodon Expedition Kenya`

**SITE_DESCRIPTION**
- Value: `Discover Kenya's beauty with Bodon Expedition - Your premier safari and adventure expedition company`

For each: Check all three environments, Click Save

**Status:** ✅ All 10 variables added

---

## 🚀 PART 4: Redeploy with Environment Variables (5 minutes)

### Step 4.1: Go to Deployments
1. Click: **Deployments** (top menu)
2. Find: Latest deployment (top of list)
3. Status should show: ✅ Ready

### Step 4.2: Redeploy
1. Click: **...** (three dots) on latest deployment
2. Select: **Redeploy**
3. Click: **Redeploy** (confirm)

### Step 4.3: Monitor Build
1. Watch build logs
2. Look for: ✅ "Build completed successfully"
3. Wait for: ✅ "Ready" status

**Status:** ✅ Project redeployed with environment variables

---

## ✅ PART 5: Verify Deployment (5 minutes)

### Step 5.1: Visit Your Site
1. Open: https://bodon-website.vercel.app
2. Check: Site loads without errors
3. Verify: All pages work

### Step 5.2: Check Console for Errors
1. Press: **F12** (open developer tools)
2. Click: **Console** tab
3. Look for: Red error messages
4. If errors: Check environment variables

### Step 5.3: Test Database Connection
1. Look for: Any database-related errors
2. If errors: Verify DATABASE_URL is correct
3. Check: Database is running

### Step 5.4: Verify Environment Variables
1. Go back to: Settings → Environment Variables
2. Confirm: All 10 variables are set
3. Confirm: All have Production environment checked

**Status:** ✅ Deployment verified

---

## 📊 PART 6: Manage Your Live Site (Ongoing)

### View Deployments
- **URL:** https://vercel.com/dashboard/bodon-website/deployments
- See all deployment history
- Rollback to previous versions if needed

### View Analytics
- **URL:** https://vercel.com/dashboard/bodon-website/analytics
- Monitor traffic
- Check performance
- View error rates

### View Logs
- **URL:** https://vercel.com/dashboard/bodon-website/logs
- See real-time logs
- Debug issues
- Monitor performance

### Update Environment Variables
1. Go to: Settings → Environment Variables
2. Click: Variable to edit
3. Update value
4. Click: Save
5. Redeploy project

### Add Custom Domain (Optional)
1. Go to: Settings → Domains
2. Click: **Add Domain**
3. Enter: Your domain name
4. Follow: DNS configuration steps
5. Wait: DNS propagation (24 hours)

---

## 🔐 Security Best Practices

✅ **DO:**
- Use production keys (not test keys)
- Keep secrets in Vercel, not in code
- Use strong NEXTAUTH_SECRET
- Enable HTTPS (automatic with Vercel)
- Review environment variables regularly

❌ **DON'T:**
- Commit .env files to Git
- Share environment variables
- Use test keys in production
- Hardcode secrets in code
- Expose sensitive information

---

## 🆘 Troubleshooting

### Build Failed
**Problem:** Build shows ❌ Failed
**Solution:**
1. Check build logs for error message
2. Verify all environment variables are set
3. Check DATABASE_URL format
4. Redeploy

### Site Won't Load
**Problem:** https://bodon-website.vercel.app shows error
**Solution:**
1. Check browser console (F12)
2. Verify NEXTAUTH_URL is correct
3. Check database connection
4. Wait 5 minutes for DNS propagation

### Database Connection Error
**Problem:** "Cannot connect to database"
**Solution:**
1. Verify DATABASE_URL is correct
2. Check database is running
3. Test connection string locally
4. Verify database credentials

### Environment Variables Not Working
**Problem:** Variables not being used
**Solution:**
1. Verify variables are set in Vercel
2. Check all three environments are selected
3. Redeploy project
4. Clear browser cache

---

## 📋 Complete Checklist

- [ ] GitHub account connected to Vercel
- [ ] BODON-website repository imported
- [ ] Initial build completed
- [ ] NEXTAUTH_URL added
- [ ] NEXTAUTH_SECRET generated and added
- [ ] DATABASE_URL added
- [ ] COMPANY_NAME added
- [ ] COMPANY_EMAIL added
- [ ] COMPANY_PHONE added
- [ ] COMPANY_ADDRESS added
- [ ] SITE_URL added
- [ ] SITE_NAME added
- [ ] SITE_DESCRIPTION added
- [ ] Project redeployed
- [ ] Site loads without errors
- [ ] Database connection working
- [ ] All pages accessible
- [ ] ✅ Production ready!

---

## 🔗 Important Links

| Item | URL |
|------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| Your Project | https://vercel.com/dashboard/bodon-website |
| Your Site | https://bodon-website.vercel.app |
| GitHub Repo | https://github.com/Robertoukootieno/BODON-website |
| Vercel Docs | https://vercel.com/docs |

---

## 🎉 Success!

Your BODON website is now:
✅ Imported to Vercel
✅ Configured with environment variables
✅ Deployed to production
✅ Live at https://bodon-website.vercel.app
✅ Ready for traffic

**Congratulations!** 🚀

---

**Next Steps:**
1. Share your site with others
2. Monitor performance
3. Add custom domain (optional)
4. Set up monitoring and alerts
5. Configure backups

**Questions?** Check PRODUCTION_ENV_SETUP_GUIDE.md for more details.

