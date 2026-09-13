# Hostel Finder — Backend (keeps the Groq API key secret)

This tiny server's ONLY job is to hide your Groq API key from the public.
Your frontend (index.html / script.js) never sees the real key — it just
calls this server, and this server calls Groq using the key from `.env`.

## One-time setup (do this once)

1. Make sure Node.js is installed. Check by running:
   ```
   node --version
   ```
   If that gives an error, download and install Node.js from https://nodejs.org (choose the "LTS" version).

2. Open a terminal INSIDE this `backend` folder, then run:
   ```
   npm install
   ```
   This downloads the small libraries the server needs (only needs to be done once).

3. Copy `.env.example` to a new file called exactly `.env` (no `.example` at the end).

4. Open `.env` and replace `paste_your_real_groq_key_here` with your actual Groq key
   from https://console.groq.com/keys.

## Running it (do this every time you want to test/demo)

In a terminal, inside this `backend` folder, run:
```
npm start
```

You should see:
```
✅ Backend running at http://localhost:3000
```

**Leave this terminal window open** while you use the app — it needs to keep running
in the background. Your frontend (opened separately via Live Server) will talk to it.

## Important: never upload `.env` to GitHub

The `.gitignore` file in this folder already excludes `.env` and `node_modules/`
from git, so as long as you don't manually force-add them, your real key will
never be pushed to your public repo — only `server.js`, `package.json`, and
`.env.example` (which has no real key in it) will be visible publicly.
