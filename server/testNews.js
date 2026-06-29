require("dotenv").config();

const { getCompanyNews } = require("./services/newsService");

async function test() {
  const news = await getCompanyNews("MSFT");

  console.log(news);
}

test();