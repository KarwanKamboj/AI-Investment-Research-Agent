import { useState } from "react";

import CompanyCard from "../components/CompanyCard";
import NewsCard from "../components/NewsCard";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Loading from "../components/Loading";
import ResultCard from "../components/ResultCard";

function Home() {
  const [company, setCompany] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [profile, setProfile] = useState(null);
  const [news, setNews] = useState([]);

  const analyzeCompany = async (companyName = company) => {
    if (!companyName) return;

    setLoading(true);

    setResult(null);
    setProfile(null);
    setNews([]);

    try {
      const response = await fetch(
        "https://ai-investment-agent-yjee.onrender.com/api/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            company: companyName,
          }),
        },
      );

      const data = await response.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      setProfile(data.profile);
      setNews(data.news);
      setResult(data.analysis);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-10">
      <Header />

      <SearchBox
        company={company}
        setCompany={setCompany}
        analyzeCompany={analyzeCompany}
        loading={loading}
      />

      {loading && <Loading />}

      {profile && <CompanyCard profile={profile} />}

      {result && <ResultCard result={result} />}

      {news.length > 0 && <NewsCard news={news} />}
    </div>
  );
}

export default Home;
