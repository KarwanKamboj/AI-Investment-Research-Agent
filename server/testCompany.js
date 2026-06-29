require("dotenv").config();

const { getCompanyProfile } = require("./services/companyService");

async function test() {
  const company = await getCompanyProfile("Microsoft");

  console.log(company);
}

test();