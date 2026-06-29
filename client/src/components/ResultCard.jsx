import ScoreCard from "./ScoreCard";
import StrengthCard from "./StrengthCard";
import RiskCard from "./RiskCard";

function ResultCard({ result }) {

  if (!result) return null;

  return (

    <div className="space-y-6">

      <ScoreCard
        score={result.score}
        recommendation={result.recommendation}
        
      />

      <div className="grid md:grid-cols-2 gap-6">

        <StrengthCard strengths={result.strengths} />

        <RiskCard risks={result.risks} />

      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">

          💡 AI Reasoning

        </h2>

        <p>{result.reasoning}</p>

      </div>

      <div className="bg-blue-50 rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">

          📋 Summary

        </h2>

        <p>{result.summary}</p>

      </div>

    </div>

  );
}

export default ResultCard;