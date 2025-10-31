# ⚡ Vercel Quick Reference Card

## 🎯 6-Part Process (45 minutes total)

### Part 1: Import (5 min)
```
1. Go to: https://vercel.com
2. Click: Add New → Project
3. Select: BODON-website
4. Click: Import
5. Click: Deploy
```

### Part 2: Build (5-10 min)
```
Wait for build to complete
Watch logs for: ✅ Build completed successfully
```

### Part 3: Add Variables (10 min)
```
Settings → Environment Variables
Add 10 variables (see list below)
For each: Check Production, Preview, Development
```

### Part 4: Redeploy (5 min)
```
Deployments → Click ... → Redeploy
Wait for build to complete
```

### Part 5: Verify (5 min)
```
Visit: https://bodon-website.vercel.app
Check: No errors in console (F12)
Test: All pages work
```

### Part 6: Manage (Ongoing)
```
Monitor deployments
View analytics
Update variables as needed
```

---

## 📋 10 Environment Variables to Add

| # | Name | Value | Notes |
|---|------|-------|-------|
| 1 | NEXTAUTH_URL | https://bodon-website.vercel.app | Auth URL |
| 2 | NEXTAUTH_SECRET | `openssl rand -base64 32` | Generate this |
| 3 | DATABASE_URL | postgresql://... | From Railway/Supabase |
| 4 | COMPANY_NAME | Bodon Expedition Kenya | Company name |
| 5 | COMPANY_EMAIL | info@bodonexpedition.com | Company email |
| 6 | COMPANY_PHONE | +254-700-000000 | Company phone |
| 7 | COMPANY_ADDRESS | Nairobi, Kenya | Company address |
| 8 | SITE_URL | https://bodon-website.vercel.app | Site URL |
| 9 | SITE_NAME | Bodon Expedition Kenya | Site name |
| 10 | SITE_DESCRIPTION | Discover Kenya's beauty... | Site description |

---

## 🔗 Important URLs

| Purpose | URL |
|---------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| Your Project | https://vercel.com/dashboard/bodon-website |
| Your Site | https://bodon-website.vercel.app |
| GitHub Repo | https://github.com/Robertoukootieno/BODON-website |
| Deployments | https://vercel.com/dashboard/bodon-website/deployments |
| Settings | https://vercel.com/dashboard/bodon-website/settings |
| Environment Vars | https://vercel.com/dashboard/bodon-website/settings/environment-variables |

---

## 🚀 Quick Commands

### Generate NEXTAUTH_SECRET
```bash
openssl rand -base64 32
```

### Check Git Status
```bash
git status
```

### Push Changes
```bash
git add .
git commit -m "message"
git push origin main
```

---

## ✅ Verification Checklist

- [ ] Project imported to Vercel
- [ ] Initial build completed
- [ ] All 10 variables added
- [ ] All variables have 3 environments checked
- [ ] Project redeployed
- [ ] Site loads at https://bodon-website.vercel.app
- [ ] No errors in browser console
- [ ] Database connection working
- [ ] All pages accessible
- [ ] Ready for production!

---

## 🆘 Quick Troubleshooting

### Build Failed
```
Check: Build logs for error message
Fix: Add missing environment variables
Retry: Redeploy
```

### Site Won't Load
```
Check: Browser console (F12)
Verify: NEXTAUTH_URL is correct
Wait: 5 minutes for DNS
```

### Database Error
```
Verify: DATABASE_URL format
Check: Database is running
Test: Connection string locally
```

### Variables Not Working
```
Verify: Variables set in Vercel
Check: All 3 environments selected
Redeploy: Project
Clear: Browser cache
```

---

## 📊 Vercel Dashboard Navigation

### Main Menu (Top)
- **Deployments** - View all deployments
- **Analytics** - View traffic & performance
- **Logs** - View real-time logs
- **Settings** - Configure project

### Settings Menu (Left Sidebar)
- **General** - Project info
- **Environment Variables** - Add/edit variables
- **Domains** - Add custom domain
- **Git** - Git configuration
- **Build & Development** - Build settings
- **Functions** - Serverless functions
- **Monitoring** - Performance monitoring

---

## 🔐 Security Reminders

✅ **DO:**
- Use production keys
- Keep secrets in Vercel
- Use strong NEXTAUTH_SECRET
- Enable HTTPS (automatic)

❌ **DON'T:**
- Commit .env to Git
- Share environment variables
- Use test keys in production
- Hardcode secrets

---

## 📞 Getting Help

### For Detailed Steps
👉 **VERCEL_IMPORT_AND_DEPLOY_GUIDE.md**

### For Environment Setup
👉 **PRODUCTION_ENV_SETUP_GUIDE.md**

### For Quick Start
👉 **SETUP_PRODUCTION_NOW.md**

### For Verification
👉 **PRODUCTION_CHECKLIST.md**

---

## 🎉 Success Indicators

✅ Site loads without errors
✅ All pages accessible
✅ Database connected
✅ No console errors
✅ Environment variables working
✅ Ready for production traffic

---

**Total Time: 45 minutes**
**Difficulty: Easy**
**Status: Ready to Deploy** 🚀

