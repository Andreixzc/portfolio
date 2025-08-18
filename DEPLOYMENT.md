# 🚀 GitHub Pages Deployment Guide

## Quick Setup Steps:

### 1. **Push your code to GitHub**
```bash
git add .
git commit -m "Add portfolio with dark theme and all features"
git push origin main
```
(Replace `main` with `master` if your default branch is master)

### 2. **Enable GitHub Pages**
1. Go to your repository on GitHub: `https://github.com/Andreixzc/port`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push changes

### 3. **Your site will be available at:**
`https://andreixzc.github.io/port`

## ✅ What's Already Configured:

- **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- **Astro Config** updated for GitHub Pages
- **Production Build** tested and working
- **Static Assets** properly configured

## 🔧 Files Created for Deployment:

- `.github/workflows/deploy.yml` - Auto-deployment workflow
- Updated `astro.config.mjs` - GitHub Pages configuration
- `dist/` folder - Production build (auto-generated)

## 📝 Manual Deployment (Alternative):

If you prefer manual deployment:

1. Build the site: `npm run build`
2. The `dist/` folder contains your static files
3. Upload the contents of `dist/` to any static hosting service

## 🌟 Features Included in Your Portfolio:

✅ Dark theme with professional styling
✅ Profile picture and trivia images
✅ Font Awesome icons for skills
✅ Resume download link
✅ Responsive design
✅ Fast loading static site
✅ Professional animations and hover effects

## 🔄 Future Updates:

To update your live site, simply:
1. Make changes locally
2. `git add .`
3. `git commit -m "Update portfolio"`
4. `git push`
5. GitHub Actions will automatically rebuild and deploy!

---

**Your portfolio is ready to go live! 🎉**
