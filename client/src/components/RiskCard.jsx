function RiskCard({ risks }) {
  return (
    <div className="bg-red-50 rounded-xl shadow p-5">

      <h2 className="text-xl font-bold text-red-700 mb-3">

        ⚠ Risks

      </h2>

      <ul className="space-y-2">

        {risks.map((item, index) => (

          <li key={index}>• {item}</li>

        ))}

      </ul>

    </div>
  );
}

export default RiskCard;