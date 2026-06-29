function NewsCard({ news }) {
  if (!news || news.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6">
        📰 Latest News
      </h2>

      <div className="space-y-6">

        {news.map((item, index) => (

          <div
            key={index}
            className="flex gap-5 border-b pb-5"
          >

            <img
              src={item.image}
              alt={item.headline}
              className="w-40 h-24 rounded-lg object-contain bg-gray-100 p-2"
            />

            <div className="flex-1">

              <h3 className="font-bold text-lg">
                {item.headline}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {item.summary}
              </p>

              <div className="flex items-center justify-between mt-3">

                <span className="text-sm text-gray-500">
                  {item.source}
                </span>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NewsCard;