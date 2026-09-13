// server.js
// A tiny backend whose only job is to keep the Groq API key secret.
// The frontend (script.js) calls THIS server instead of calling Groq
// directly — the key never leaves this server, never touches the browser,
// and is never visible in the public GitHub repo.

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

app.use(cors());          // allow the frontend (a different port) to call this server
app.use(express.json());  // parse JSON request bodies

// Health check — visiting http://localhost:3000 in a browser should show this
app.get("/", (req, res) => {
  res.send("Hostel Finder backend is running. POST your query to /api/parse-query");
});

app.post("/api/parse-query", async (req, res) => {
  const { query, cityList, uniList } = req.body;

  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "Missing 'query' in request body" });
  }
  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: "GROQ_API_KEY is not set on the server. Add it to your .env file." });
  }

  const systemPrompt = `You are a search-intent extractor for a Pakistani student hostel finder app. The person's search text may be in English, Roman Urdu, or Urdu script. Extract:
- budget: maximum rent in PKR as a number, or null
- city: the single most relevant city from this list, or null: ${cityList || ""}
- gender: "Boys", "Girls", or null
- university: the single most relevant university from this list, or null: ${uniList || ""}
- facilities: array made only of these words when mentioned: wifi, mess, ac, fan, laundry, gym, cctv, security, generator, parking

Respond with ONLY a raw JSON object, no markdown formatting, no explanation. Example: {"budget":15000,"city":"Rawalpindi","gender":"Girls","university":"Arid Agriculture University","facilities":["mess"]}`;

  try {
    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0,
        max_tokens: 300,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: query }
        ]
      })
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      throw new Error(`Groq API error ${groqResponse.status}: ${errText}`);
    }

    const data = await groqResponse.json();
    const text = (data.choices?.[0]?.message?.content || "").trim();
    const cleaned = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    res.json({
      budget: parsed.budget || null,
      city: parsed.city || null,
      gender: parsed.gender || null,
      university: parsed.university || null,
      facilities: Array.isArray(parsed.facilities) ? parsed.facilities : []
    });
  } catch (err) {
    console.error("Error calling Groq:", err.message);
    res.status(500).json({ error: "AI parsing failed", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
  console.log(`   Frontend should call: http://localhost:${PORT}/api/parse-query`);
});
