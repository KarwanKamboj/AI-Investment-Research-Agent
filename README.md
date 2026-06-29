# 🤖 AI Investment Research Agent

An AI-powered investment research platform that combines **real-time financial data**, **latest market news**, and **Large Language Models (LLMs)** to generate intelligent investment recommendations.

🔗 **Live Demo:** https://ai-investment-research-agent-xi.vercel.app/

---

## ✨ Features

* 🔍 Search any publicly traded company
* 📈 Real-time company profile
* 📰 Latest market news
* 🤖 AI-powered investment analysis
* 📊 Investment score (0–100)
* ✅ Strengths & Risks
* 💡 AI-generated reasoning
* 📋 Executive summary
* 🎨 Responsive modern UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS

### Backend

* Node.js
* Express.js

### AI

* Google Gemini 2.5 Flash (via OpenRouter)

### APIs

* Finnhub API

### Deployment

* Vercel
* Render

---

### Latest News

![News](screenshots/news.png)

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/KarwanKamboj/AI-Investment-Research-Agent.git
```

### Install Dependencies

```bash
cd server
npm install

cd ../client
npm install
```

### Environment Variables

Create a `.env` file inside the **server** directory.

```env
OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY
FINNHUB_API_KEY=YOUR_FINNHUB_API_KEY
PORT=5000
```

### Run Backend

```bash
cd server
npm run dev
```

### Run Frontend

```bash
cd client
npm run dev
```

---

## 🚀 Future Enhancements

* 📈 Interactive stock charts
* ⭐ Watchlist functionality
* 📊 Financial ratio analysis
* 🌙 Dark mode
* 📄 Export analysis as PDF
* 🔐 User authentication
* 📱 Improved mobile experience

---

## 👨‍💻 Author

**Karwan**

Built as part of an AI-powered investment research assignment using React, Node.js, Express, Finnhub API, and Google Gemini.
