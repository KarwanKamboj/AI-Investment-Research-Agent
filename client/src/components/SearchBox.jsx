function SearchBox({ company, setCompany, analyzeCompany, loading }) {
  const companies = [
    "Apple",
    "Microsoft",
    "Tesla",
    "Amazon",
    "Nvidia",
    "Google",
    "Meta",
  ];

  return (
    <div className="w-full">
      {/* Search Box */}
      <div className="flex gap-4 justify-center">
        <input
          type="text"
          placeholder="Enter Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border rounded-lg p-3 w-96 shadow-md"
        />

        <button
          onClick={analyzeCompany}
          disabled={!company || loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {/* Suggested Companies */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {companies.map((item) => (
          <button
            key={item}
            onClick={() => {
              setCompany(item);
              analyzeCompany(item);
            }}
            className="bg-white px-4 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBox;
