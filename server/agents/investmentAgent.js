const { getCompanyProfile } = require("../services/companyService");
const { getCompanyNews } = require("../services/newsService");
const { analyzeInvestment } = require("../services/gemini");

async function runInvestmentAgent(company) {
  // Get company profile
  const profile = await getCompanyProfile(company);

  if (!profile) {
    throw new Error("Company not found");
  }

  // Get latest news
  const news = await getCompanyNews(profile.symbol);

  // Ask AI
  const analysis = await analyzeInvestment({
    company,
    profile,
    news,
  });

  return {
    profile,
    news,
    analysis,
  };
}

module.exports = {
  runInvestmentAgent,
};