# 🚀 Adding Environment Variables to Vercel - Step by Step

## 📍 Step 1: Go to Vercel Dashboard

1. Open: https://vercel.com/dashboard
2. Find: **bodon-website** project
3. Click on it to open

---

## 📍 Step 2: Navigate to Environment Variables

1. Click: **Settings** (top menu)
2. Click: **Environment Variables** (left sidebar)
3. You should see a form to add variables

---

## 📍 Step 3: Add Required Variables (10 Total)

### Variable 1: NEXTAUTH_URL
```
Name: NEXTAUTH_URL
Value: https://bodon-website.vercel.app
Environments: ✓ Production ✓ Preview ✓ Development
```
Click: **Save**

---

### Variable 2: NEXTAUTH_SECRET
```
Name: NEXTAUTH_SECRET
Value: <your-generated-secret>
Environments: ✓ Production ✓ Preview ✓ Development
```
**Generate secret first:**
```bash
openssl rand -base64 32
```
Click: **Save**

---

### Variable 3: DATABASE_URL
```
Name: DATABASE_URL
Value: postgresql://user:password@host:port/bodon_tours
Environments: ✓ Production ✓ Preview ✓ Development
```
Click: **Save**

---

### Variable 4: COMPANY_NAME
```
Name: COMPANY_NAME
Value: Bodon Expedition Kenya
Environments: ✓ Production ✓ Preview ✓ Development
```
Click: **Save**

---

### Variable 5: COMPANY_EMAIL
```
Name: COMPANY_EMAIL
Value: info@bodonexpedition.com
Environments: ✓ Production ✓ Preview ✓ Development
```
Click: **Save**

---

### Variable 6: COMPANY_PHONE
```
Name: COMPANY_PHONE
Value: +254-700-000000
Environments: ✓ Production ✓ Preview ✓ Development
```
Click: **Save**

---

### Variable 7: COMPANY_ADDRESS
```
Name: COMPANY_ADDRESS
Value: Nairobi, Kenya
Environments: ✓ Production ✓ Preview ✓ Development
```
Click: **Save**

---

### Variable 8: SITE_URL
```
Name: SITE_URL
Value: https://bodon-website.vercel.app
Environments: ✓ Production ✓ Preview ✓ Development
```
Click: **Save**

---

### Variable 9: SITE_NAME
```
Name: SITE_NAME
Value: Bodon Expedition Kenya
Environments: ✓ Production ✓ Preview ✓ Development
```
Click: **Save**

---

### Variable 10: SITE_DESCRIPTION
```
Name: SITE_DESCRIPTION
Value: Discover Kenya's beauty with Bodon Expedition - Your premier safari and adventure expedition company
Environments: ✓ Production ✓ Preview ✓ Development
```
Click: **Save**

---

## 📍 Step 4: Verify All Variables Added

Go back to Environment Variables page and verify you see:
- [ ] NEXTAUTH_URL
- [ ] NEXTAUTH_SECRET
- [ ] DATABASE_URL
- [ ] COMPANY_NAME
- [ ] COMPANY_EMAIL
- [ ] COMPANY_PHONE
- [ ] COMPANY_ADDRESS
- [ ] SITE_URL
- [ ] SITE_NAME
- [ ] SITE_DESCRIPTION

---

## 📍 Step 5: Redeploy Project

1. Click: **Deployments** (top menu)
2. Find: Latest deployment
3. Click: **...** (three dots)
4. Click: **Redeploy**
5. Wait for build to complete (2-5 minutes)

---

## 📍 Step 6: Verify Deployment

1. Wait for deployment to complete
2. Click on the deployment to view logs
3. Look for: ✅ Build successful
4. Visit: https://bodon-website.vercel.app
5. Check: Site loads without errors

---

## ✅ Verification Checklist

- [ ] All 10 variables added to Vercel
- [ ] All variables set to Production, Preview, Development
- [ ] Project redeployed
- [ ] Build completed successfully
- [ ] Site loads at https://bodon-website.vercel.app
- [ ] No console errors in browser
- [ ] Database connection working
- [ ] All pages accessible

---

## 🆘 Troubleshooting

### Build Failed
- Check Vercel build logs
- Verify DATABASE_URL is correct
- Verify NEXTAUTH_SECRET is set
- Check for TypeScript errors

### Site Won't Load
- Check browser console for errors
- Verify NEXTAUTH_URL is correct
- Check database connection
- Wait 5 minutes for DNS propagation

### Database Connection Error
- Verify DATABASE_URL format
- Check database is running
- Verify firewall allows Vercel IPs
- Test connection string locally

---

## 🎉 Success!

Your BODON website is now production-ready with:
✅ Authentication configured
✅ Database connected
✅ Company information set
✅ Site configuration complete
✅ Ready for custom domain

---

**Next: Add custom domain (optional)**

