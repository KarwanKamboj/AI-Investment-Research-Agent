function ScoreCard({ score, recommendation }) {
  const recommendationText = recommendation.toLowerCase();

  const isPositive =
    recommendationText.includes("buy") || recommendationText.includes("invest");

  const color = isPositive ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center">
      <div>
        <h2 className={`text-3xl font-bold ${color}`}>{recommendation}</h2>

        <p className={`mt-2 font-semibold text-xl ${color}`}>
          {isPositive ? "🟢 INVEST" : "🔴 PASS"}
        </p>
      </div>

      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          {Math.round(score)}/100
        </h1>

        <p className="text-gray-500 mt-2">Investment Score</p>
      </div>
    </div>
  );
}

export default ScoreCard;
