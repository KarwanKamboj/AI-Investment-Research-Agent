function CompanyCard({ profile }) {
  if (!profile) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <div className="flex items-center gap-6">

        <img
          src={profile.logo}
          alt={profile.name}
          className="w-20 h-20 rounded-full border"
        />

        <div>

          <h2 className="text-3xl font-bold">
            {profile.name}
          </h2>

          <p className="text-gray-500">
            {profile.symbol}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div>
          <span className="font-semibold">Industry:</span>
          <p>{profile.finnhubIndustry}</p>
        </div>

        <div>
          <span className="font-semibold">Country:</span>
          <p>{profile.country}</p>
        </div>

        <div>
          <span className="font-semibold">Exchange:</span>
          <p>{profile.exchange}</p>
        </div>

        <div>
          <span className="font-semibold">IPO:</span>
          <p>{profile.ipo}</p>
        </div>

        <div>
          <span className="font-semibold">Market Cap:</span>
          <p>${(profile.marketCapitalization / 1000000).toFixed(2)} Trillion</p>
        </div>

        <div>
          <span className="font-semibold">Website:</span>

          <a
            href={profile.weburl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            Visit
          </a>

        </div>

      </div>

    </div>
  );
}

export default CompanyCard;