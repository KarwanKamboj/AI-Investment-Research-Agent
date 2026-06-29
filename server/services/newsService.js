const axios = require("axios");

const API_KEY = process.env.FINNHUB_API_KEY;

async function getCompanyNews(symbol) {
  try {
    const today = new Date();

    const from = new Date();
    from.setDate(today.getDate() - 30);

    const format = (date) => date.toISOString().split("T")[0];

    const response = await axios.get(
      `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${format(from)}&to=${format(today)}&token=${API_KEY}`
    );

    return response.data.slice(0, 5);
  } catch (error) {
    console.error("News API Error:", error.message);
    return [];
  }
}

module.exports = {
  getCompanyNews,
};