const axios = require("axios");

const API_KEY = process.env.FINNHUB_API_KEY;

async function getCompanyProfile(company) {
  try {
    // Search for company symbol
    const searchResponse = await axios.get(
      `https://finnhub.io/api/v1/search?q=${company}&token=${API_KEY}`
    );

    if (!searchResponse.data.result.length) {
      return null;
    }

    const symbol = searchResponse.data.result[0].symbol;

    // Get company profile
    const profileResponse = await axios.get(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`
    );

    return {
      symbol,
      ...profileResponse.data,
    };
  } catch (error) {
    console.error("Company API Error:", error.message);
    return null;
  }
}

module.exports = {
  getCompanyProfile,
};