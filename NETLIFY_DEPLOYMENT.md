# Netlify Deployment Guide for NexGen

This guide will walk you through deploying your NexGen project to Netlify.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your NexGen project pushed to a Git repository
- A Netlify account (free tier is sufficient)
- Node.js installed locally (for testing builds)

## Pre-Deployment Checklist

Before deploying, ensure:

- ✅ All code changes are committed to your Git repository
- ✅ The project builds successfully locally (`npm run build`)
- ✅ No TypeScript or linting errors
- ✅ All dependencies are listed in `package.json`
- ✅ `netlify.toml` is present and configured correctly
- ✅ `.gitignore` includes `dist` folder (build output)
- ✅ No sensitive data (API keys, secrets) is hardcoded in the source code

## Step-by-Step Deployment Instructions

### Method 1: Deploy via Netlify Dashboard (Recommended for First-Time Users)

#### Step 1: Prepare Your Repository
1. Ensure all your changes are committed and pushed to your Git repository:
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```
   (Replace `main` with your branch name if different)

#### Step 2: Sign Up / Log In to Netlify
1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Click "Sign up" or "Log in"
3. Choose to sign up with GitHub, GitLab, Bitbucket, or Email

#### Step 3: Create a New Site
1. Once logged in, click **"Add new site"** → **"Import an existing project"**
2. Choose your Git provider (GitHub, GitLab, or Bitbucket)
3. Authorize Netlify to access your repositories
4. Select your NexGen repository from the list

#### Step 4: Configure Build Settings
Netlify should auto-detect your settings, but verify:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** (leave empty unless your project is in a subdirectory)

These settings are already configured in `netlify.toml`, so Netlify will use them automatically.

#### Step 5: Deploy
1. Click **"Deploy site"**
2. Netlify will start building your site
3. Wait for the build to complete (usually 1-3 minutes)
4. Once successful, you'll see a green "Published" status

#### Step 6: Access Your Site
- Your site will be live at a URL like: `https://random-name-123456.netlify.app`
- You can change this URL in **Site settings** → **Change site name**

### Method 2: Deploy via Netlify CLI (For Advanced Users)

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify
```bash
netlify login
```
This will open your browser to authenticate.

#### Step 3: Initialize Netlify in Your Project
```bash
cd NexGen
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team (or create one)
- Site name (or press Enter for auto-generated)
- Build command: `npm run build`
- Directory to deploy: `dist`

#### Step 4: Deploy
```bash
# Deploy to production
netlify deploy --prod

# Or deploy a draft first to preview
netlify deploy
```

### Method 3: Drag & Drop Deployment (Quick Testing)

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to Netlify Dashboard → **"Add new site"** → **"Deploy manually"**

3. Drag and drop the `dist` folder onto the deployment area

4. Your site will be live immediately!

**Note:** This method doesn't enable continuous deployment. Use Method 1 or 2 for automatic deployments on every push.

## Post-Deployment Configuration

### Custom Domain Setup
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow the DNS configuration instructions

### Environment Variables (If Needed)
If your app uses environment variables:
1. Go to **Site settings** → **Environment variables**
2. Add your variables (e.g., API keys)
3. Redeploy your site

### Continuous Deployment
- **Automatic:** Every push to your main branch triggers a new deployment
- **Branch deploys:** Netlify creates preview deployments for pull requests
- **Deploy contexts:** Configure different settings for production, branch deploys, and deploy previews

## Troubleshooting

### Build Fails
1. Check the build logs in Netlify Dashboard
2. Ensure Node.js version is compatible (configured to use Node 20 in `netlify.toml`)
3. Verify all dependencies are in `package.json`
4. Check for TypeScript errors: `npm run build` locally
5. Ensure you're using the correct branch name (main/master)
6. **Case-sensitive imports:** If you're developing on Windows/Mac, ensure import paths match exact file names (Linux is case-sensitive). Example: `import Faq from './Faq'` not `'./FAQ'`

### 404 Errors on Routes
- The `netlify.toml` file includes redirect rules for SPA routing
- If you still see 404s, ensure the redirect rule is active

### Assets Not Loading
- Check that asset paths are relative (not absolute)
- Verify the `dist` folder contains all assets after build

### Build Timeout
- Netlify free tier has a 15-minute build timeout
- If your build takes longer, consider optimizing or upgrading

## Useful Netlify Features

### Deploy Previews
- Every pull request gets a unique preview URL
- Perfect for testing before merging

### Split Testing
- Test different versions of your site
- Available in **Site settings** → **Split testing**

### Forms
- Add Netlify Forms to your HTML forms
- No backend code needed

### Functions
- Deploy serverless functions alongside your site
- Create a `netlify/functions` directory

## Project Structure for Netlify

```
NexGen/
├── netlify.toml          # Netlify configuration (already created)
├── package.json          # Dependencies and build scripts
├── vite.config.ts        # Vite configuration
├── dist/                 # Build output (created during build)
└── src/                  # Source files
```

## Build Process

When you deploy, Netlify will:
1. Install dependencies: `npm install`
2. Run build command: `npm run build` (which runs `tsc -b && vite build`)
3. Publish the `dist` folder
4. Serve your site with SPA routing support

## Support

- Netlify Docs: [https://docs.netlify.com](https://docs.netlify.com)
- Netlify Community: [https://answers.netlify.com](https://answers.netlify.com)
- Vite Deployment Guide: [https://vitejs.dev/guide/static-deploy.html](https://vitejs.dev/guide/static-deploy.html)

---

**Your project is now ready for Netlify deployment!** 🚀

