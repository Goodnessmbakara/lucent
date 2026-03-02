# Lucent Landing Page - Deployment Guide

**Deploy to:** Vercel
**Domain:** getlucent.vercel.app
**Status:** ✅ Ready for deployment

---

## Quick Deploy (30 seconds)

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy from project directory
cd lucent-landing
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? lucent-landing
# - Directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

### Option 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import Git Repository (or upload folder)
4. Select `lucent-landing` folder
5. Click "Deploy"

---

## Project Configuration

### Build Settings
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### Environment Variables
None required for basic deployment.

### Domain Settings
**Current:** `lucent-landing.vercel.app` (auto-assigned)
**Custom:** `getlucent.vercel.app` (if available)

To set custom domain:
1. Go to Project Settings → Domains
2. Add domain: `getlucent.vercel.app`
3. Vercel will auto-configure

---

## Pre-Deployment Checklist

✅ **Code:** All changes committed (7907dcb)
✅ **Assets:** All logos, mockups, social media assets in place
✅ **Favicon:** Updated to `/logos/lucent/favicon-32.svg`
✅ **Meta Tags:** Open Graph and Twitter Cards configured
✅ **Domain:** Set to `getlucent.vercel.app` in meta tags
✅ **Build Test:** Run `npm run build` locally first

---

## Build Test (Local)

```bash
cd lucent-landing

# Install dependencies
npm install

# Test development server
npm run dev
# Should open http://localhost:3000

# Test production build
npm run build
# Should create dist/ folder

# Preview production build
npm run preview
# Should open http://localhost:4173
```

**Expected Output:**
```
dist/
├── assets/
│   ├── hero/
│   └── social/
├── logos/
├── mockups/
├── index.html
└── [other build files]
```

---

## Vercel Configuration File

Create `vercel.json` in project root (optional, Vercel auto-detects Vite):

```json
{
  "version": 2,
  "name": "lucent-landing",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## Post-Deployment

### 1. Test Deployment
Visit: `https://getlucent.vercel.app`

**Check:**
- ✅ Page loads correctly
- ✅ Logo appears in navigation
- ✅ Transaction preview visual loads
- ✅ Feature showcase displays
- ✅ Browser extension mockup shows
- ✅ All buttons work
- ✅ Smooth scroll navigation works

### 2. Test Social Sharing
- Share on Twitter → Check preview card
- Share on Facebook → Check Open Graph image
- Share on LinkedIn → Check description

### 3. Test on Mobile
- Open on iPhone/Android
- Check responsive design
- Test touch interactions

### 4. Verify Assets Load
```bash
# Check assets in browser console
https://getlucent.vercel.app/logos/lucent/favicon-32.svg
https://getlucent.vercel.app/assets/hero/transaction-preview.svg
https://getlucent.vercel.app/assets/hero/feature-showcase.svg
https://getlucent.vercel.app/mockups/browser-extension.svg
https://getlucent.vercel.app/assets/social/og-image.svg
https://getlucent.vercel.app/assets/social/twitter-card.svg
```

---

## Continuous Deployment

Vercel automatically deploys on git push if connected to repository.

**Setup Auto-Deploy:**
1. Go to Project Settings → Git
2. Connect to GitHub repository
3. Select `main` branch for production
4. Save

**Workflow:**
```bash
# Make changes
git add .
git commit -m "Update landing page"
git push origin main

# Vercel auto-deploys in ~30 seconds
# Check https://getlucent.vercel.app
```

---

## Custom Domain (Optional)

### Add Custom Domain
1. Purchase domain (e.g., `lucent.com`)
2. Go to Vercel Project → Settings → Domains
3. Add domain: `lucent.com` and `www.lucent.com`
4. Update DNS records at domain registrar:

```
Type    Name    Value
CNAME   www     cname.vercel-dns.com
A       @       76.76.21.21 (Vercel IP)
```

### Update Meta Tags
After custom domain is set:
1. Update `index.html` meta tags
2. Replace `getlucent.vercel.app` with `lucent.com`
3. Commit and push

---

## Performance Optimization

### Already Optimized
✅ SVG assets (scalable, small file size)
✅ Vite build (optimized, tree-shaken)
✅ CDN fonts (Google Fonts)
✅ Minimal dependencies (TypeScript only)

### Future Optimizations
- Convert SVGs to PNG for social cards (better compatibility)
- Add image optimization for hero assets
- Enable Vercel Analytics
- Add loading states

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Assets Not Loading
- Check file paths in components (should be `/assets/...` not `./assets/...`)
- Verify files exist in `public/` directory
- Check browser console for 404 errors

### Meta Tags Not Showing
- Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- Clear social media caches (can take 24 hours)

### Favicon Not Showing
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- Clear browser cache
- Check favicon path is correct: `/logos/lucent/favicon-32.svg`

---

## Deployment URLs

**Vercel Deployment:** https://getlucent.vercel.app
**Preview Deployments:** https://lucent-landing-[hash].vercel.app
**Custom Domain:** (To be configured)

---

## Support & Resources

**Vercel Docs:** https://vercel.com/docs
**Vite Docs:** https://vitejs.dev/guide/
**Project README:** `./README.md`
**Brand Assets:** `../LUCENT_BRAND_ASSETS_FINAL.md`

---

## Git Status

**Current Branch:** main
**Latest Commit:** 7907dcb - Integrate visual assets and update for Vercel deployment
**Remote:** (To be configured)

---

## Next Steps After Deployment

1. **Share Link:**
   - Tweet: "Check out Lucent: https://getlucent.vercel.app"
   - Post to Stacks Discord
   - Share in grant application

2. **Monitor Performance:**
   - Enable Vercel Analytics
   - Check page load times
   - Monitor asset loading

3. **Collect Feedback:**
   - Share with Stacks community
   - Gather user feedback
   - Iterate on design

4. **Update Documentation:**
   - Add deployment URL to README
   - Update grant application with live link
   - Create demo video using deployed site

---

**Deployment Ready!** 🚀

Run `vercel` from the `lucent-landing` directory to deploy in 30 seconds.

**Questions?** Check Vercel docs or project README.
