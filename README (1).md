# NestFinder — AI-Powered Hostel Finder

A Generative-AI-style platform that helps university students find hostels
that match their budget, location, and required facilities using natural
language search.

## What's inside
- `index.html` — the entire app (HTML + CSS + JS in one file, no build step needed)
- 20 sample hostels across 8 Pakistani cities, covering major universities

## Run it locally
Just double-click `index.html` — it opens directly in any browser, no server needed.

## Deploy it (for your "Application Working Link")

### Option A — Netlify (easiest, ~2 minutes)
1. Go to https://app.netlify.com/drop
2. Drag the whole `hostel-finder` folder into the page
3. Netlify gives you a live link instantly — copy it for your submission

### Option B — GitHub Pages (for your "Code Deployment Link")
1. Create a new repo on GitHub, e.g. `nestfinder-ai`
2. Upload `index.html` and this `README.md` to the repo
3. Go to Settings → Pages → set source to `main` branch, root folder
4. GitHub gives you a live URL like `https://yourusername.github.io/nestfinder-ai/`
5. Use the repo link as your "Code Deployment Link" and the Pages URL as your
   "Application Working Link"

### Option C — Vercel
1. Push the folder to a GitHub repo
2. Go to https://vercel.com/new and import that repo
3. Deploy with default settings (no build command needed, it's static HTML)

## How the "AI" search works
The search bar accepts natural language like:
> "girls hostel in Lahore under 20k"
> "single room near FAST with AC"

A lightweight parser (`parseQuery` function in `index.html`) extracts intent —
budget, city, gender, university, facility — from the free-text query, similar
to how an LLM-based system would turn natural language into structured filters.

**To upgrade this to a real LLM-powered search** (recommended if you want extra
marks for "Generative AI"), replace the `parseQuery` function with a fetch call
to the Claude or OpenAI API that returns the same filter object as JSON. Example
prompt for the API: *"Extract city, budget (PKR), gender, university, and
facility from this student query. Return only JSON."*

## Team
Add your team members and roles here before submission.
