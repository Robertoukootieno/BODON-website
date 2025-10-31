# 📸 Vercel Import & Deploy - Visual Step-by-Step Guide

## STEP 1: Go to Vercel Dashboard

**URL:** https://vercel.com

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Vercel Dashboard                       │
│  ┌─────────────────────────────────────┐│
│  │ Add New ▼                           ││
│  │ [Project] [Team] [Organization]     ││
│  └─────────────────────────────────────┘│
│                                         │
│  Your Projects:                         │
│  • bodon-website (if already imported)  │
│  • Other projects...                    │
└─────────────────────────────────────────┘
```

**Action:** Click **Add New** button (top right)

---

## STEP 2: Click "Add New" → "Project"

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Add New ▼                              │
│  ├─ Project                             │
│  ├─ Team                                │
│  └─ Organization                        │
└─────────────────────────────────────────┘
```

**Action:** Click **Project**

---

## STEP 3: Select Repository

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Import Project                         │
│                                         │
│  Select a Git Repository:               │
│  ┌─────────────────────────────────────┐│
│  │ Search repositories...              ││
│  │                                     ││
│  │ ✓ BODON-website                     ││
│  │   Robertoukootieno/BODON-website    ││
│  │                                     ││
│  │ • Other repositories...             ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

**Action:** Click **BODON-website**

---

## STEP 4: Configure Project

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Import Project                         │
│                                         │
│  Project Name:                          │
│  [bodon-website                    ]    │
│                                         │
│  Framework Preset:                      │
│  [Next.js                          ▼]   │
│                                         │
│  Root Directory:                        │
│  [./                               ]    │
│                                         │
│  [Continue]  [Cancel]                   │
└─────────────────────────────────────────┘
```

**Action:** Click **Continue**

---

## STEP 5: Environment Variables (Skip)

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Environment Variables                  │
│                                         │
│  Add environment variables:             │
│  ┌─────────────────────────────────────┐│
│  │ Name        │ Value                 ││
│  │ ─────────────────────────────────── ││
│  │ [Add New]                           ││
│  └─────────────────────────────────────┘│
│                                         │
│  [Continue]  [Cancel]                   │
└─────────────────────────────────────────┘
```

**Action:** Click **Continue** (we'll add variables later)

---

## STEP 6: Deploy

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Ready to Deploy                        │
│                                         │
│  Project: bodon-website                 │
│  Framework: Next.js                     │
│  Repository: BODON-website              │
│                                         │
│  [Deploy]  [Cancel]                     │
└─────────────────────────────────────────┘
```

**Action:** Click **Deploy**

---

## STEP 7: Monitor Build

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Deployment in Progress                 │
│                                         │
│  Building...                            │
│  ├─ Cloning repository...               │
│  ├─ Installing dependencies...          │
│  ├─ Running build...                    │
│  └─ Deploying...                        │
│                                         │
│  Status: ⏳ Building                    │
└─────────────────────────────────────────┘
```

**Action:** Wait for build to complete (5-10 minutes)

---

## STEP 8: Build Complete

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Deployment Complete                    │
│                                         │
│  ✅ Build completed successfully        │
│  ✅ Ready                               │
│                                         │
│  URL: https://bodon-website.vercel.app  │
│                                         │
│  [Visit]  [Settings]                    │
└─────────────────────────────────────────┘
```

**Action:** Click **Settings** to add environment variables

---

## STEP 9: Go to Environment Variables

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Settings                               │
│  ├─ General                             │
│  ├─ Environment Variables ◄─ Click here │
│  ├─ Domains                             │
│  ├─ Git                                 │
│  └─ Build & Development                 │
│                                         │
│  Environment Variables                  │
│  ┌─────────────────────────────────────┐│
│  │ [Add New]                           ││
│  │                                     ││
│  │ Name        │ Value                 ││
│  │ ─────────────────────────────────── ││
│  │ (empty)                             ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

**Action:** Click **Add New**

---

## STEP 10: Add First Variable (NEXTAUTH_URL)

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Add Environment Variable               │
│                                         │
│  Name:                                  │
│  [NEXTAUTH_URL                     ]    │
│                                         │
│  Value:                                 │
│  [https://bodon-website.vercel.app ]    │
│                                         │
│  Environments:                          │
│  ☑ Production                           │
│  ☑ Preview                              │
│  ☑ Development                          │
│                                         │
│  [Save]  [Cancel]                       │
└─────────────────────────────────────────┘
```

**Action:** 
1. Enter Name: `NEXTAUTH_URL`
2. Enter Value: `https://bodon-website.vercel.app`
3. Check all 3 environments
4. Click **Save**

---

## STEP 11: Add Second Variable (NEXTAUTH_SECRET)

**Repeat the process:**
1. Click **Add New**
2. Name: `NEXTAUTH_SECRET`
3. Value: `<output from: openssl rand -base64 32>`
4. Check all 3 environments
5. Click **Save**

---

## STEP 12: Add Remaining Variables

**Repeat for each:**
- DATABASE_URL
- COMPANY_NAME
- COMPANY_EMAIL
- COMPANY_PHONE
- COMPANY_ADDRESS
- SITE_URL
- SITE_NAME
- SITE_DESCRIPTION

**For each variable:**
1. Click **Add New**
2. Enter Name
3. Enter Value
4. Check all 3 environments
5. Click **Save**

---

## STEP 13: Go to Deployments

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Deployments                            │
│                                         │
│  Latest Deployment:                     │
│  ┌─────────────────────────────────────┐│
│  │ ✅ Ready                            ││
│  │ Commit: feat: add production env... ││
│  │ Date: Oct 31, 2025                  ││
│  │ [...]                               ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

**Action:** Click **...** (three dots) on latest deployment

---

## STEP 14: Redeploy

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Deployment Options                     │
│  ├─ Redeploy                            │
│  ├─ Promote to Production                │
│  ├─ View Source                         │
│  └─ Delete                              │
└─────────────────────────────────────────┘
```

**Action:** Click **Redeploy**

---

## STEP 15: Confirm Redeploy

**What you'll see:**
```
┌─────────────────────────────────────────┐
│  Redeploy                               │
│                                         │
│  Are you sure you want to redeploy?     │
│                                         │
│  [Redeploy]  [Cancel]                   │
└─────────────────────────────────────────┘
```

**Action:** Click **Redeploy**

---

## STEP 16: Monitor Redeploy

**Wait for build to complete** (5 minutes)

---

## STEP 17: Visit Your Site

**URL:** https://bodon-website.vercel.app

**What you should see:**
- ✅ Site loads without errors
- ✅ All pages accessible
- ✅ No console errors (F12)
- ✅ Database connected

---

## ✅ Success!

Your BODON website is now:
- ✅ Imported to Vercel
- ✅ Configured with environment variables
- ✅ Deployed to production
- ✅ Live and ready!

---

**Total Time: 45 minutes**
**Difficulty: Easy**
**Status: ✅ Complete** 🎉

