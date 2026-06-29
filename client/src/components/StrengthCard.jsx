function StrengthCard({ strengths }) {
  return (
    <div className="bg-green-50 rounded-xl shadow p-5">

      <h2 className="text-xl font-bold text-green-700 mb-3">

        ✅ Strengths

      </h2>

      <ul className="space-y-2">

        {strengths.map((item, index) => (

          <li key={index}>✔ {item}</li>

        ))}

      </ul>

    </div>
  );
}

export default StrengthCard;