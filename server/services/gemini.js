const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

async function analyzeInvestment({ company, profile, news }) {

  const prompt = `
You are a Senior Equity Research Analyst.

Analyze the following company using the live company profile and latest news.

Company Name:
${company}

Company Profile:
${JSON.stringify(profile, null, 2)}

Latest News:
${news
  .map((item) => `• ${item.headline}\nSummary: ${item.summary}`)
  .join("\n\n")}

Return ONLY valid JSON.

IMPORTANT RULES:
- "score" MUST be an integer between 0 and 100.
- Do NOT return decimal values like 8.5 or 9.2.
- Recommendation must be ONLY one of:
  "Buy"
  "Hold"
  "Sell"

Return this exact JSON format:

{
  "company": "",
  "score": 85,
  "recommendation": "Buy",
  "strengths": [],
  "risks": [],
  "reasoning": "",
  "summary": ""
}
`;

  const completion = await client.chat.completions.create({
    model: "google/gemini-2.5-flash",

    messages: [
      {
        role: "system",
        content:
          "You are a professional investment analyst. Respond ONLY with valid JSON.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],

    temperature: 0.2,
    max_tokens: 1200,
  });

  const response = completion.choices[0].message.content;

  // Remove markdown if the model wraps the JSON
  const clean = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(clean);
}

module.exports = {
  analyzeInvestment,
};