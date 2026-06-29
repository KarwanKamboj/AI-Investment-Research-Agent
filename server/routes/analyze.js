const express = require("express");
const router = express.Router();

const { runInvestmentAgent } = require("../agents/investmentAgent");

router.post("/", async (req, res) => {
  console.log("✅ Request received");

  try {
    const { company } = req.body;

    console.log("Company:", company);

    const result = await runInvestmentAgent(company);

    console.log("AI Response:", result.analysis);

    res.json({
      success: true,
      profile: result.profile,
      news: result.news,
      analysis: result.analysis,
    });

  } catch (error) {
    console.error("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;