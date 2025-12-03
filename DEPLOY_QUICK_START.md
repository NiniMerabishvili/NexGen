# Quick Deployment Guide - NexGen

## 🚀 Fast Track to Deploy

### Option 1: Netlify Dashboard (Easiest - 5 minutes)

1. **Push your code to Git:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Netlify:**
   - Visit [netlify.com](https://www.netlify.com)
   - Sign up/Login (use GitHub for easiest setup)

3. **Import your project:**
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider
   - Choose your NexGen repository
   - Click "Deploy site" (settings are auto-detected from `netlify.toml`)

4. **Done!** Your site will be live in 1-3 minutes.

### Option 2: Netlify CLI (For Developers)

```bash
# Install CLI globally
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd NexGen
netlify deploy --prod
```

### Option 3: Drag & Drop (Quick Test)

```bash
# Build locally
npm run build

# Then drag the 'dist' folder to netlify.com/drop
```

## ⚙️ Configuration Summary

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** 20 (configured in `netlify.toml`)
- **SPA Routing:** ✅ Configured (all routes redirect to index.html)

## 📋 Pre-Deployment Checklist

- [ ] Code committed and pushed to Git
- [ ] Build works locally (`npm run build`)
- [ ] No TypeScript errors
- [ ] `netlify.toml` exists in project root
- [ ] No hardcoded secrets/API keys

## 🔗 After Deployment

- Your site URL: `https://your-site-name.netlify.app`
- Change site name: Site settings → Change site name
- Custom domain: Site settings → Domain management
- View build logs: Deploys tab → Click on deployment

## 🆘 Need Help?

See `NETLIFY_DEPLOYMENT.md` for detailed instructions and troubleshooting.

