import { useState } from "react";
import { newsData as initialData } from "../data/mockData";
// import img from "../assets/money.jpg";

type NewsArticle = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  likes: number;
  comments: number;
  liked: boolean;
};

export default function News() {
  const [news, setNews] = useState<NewsArticle[]>(
    initialData.map((item) => ({
      ...item,
      likes: 68,
      comments: 0,
      liked: false,
    }))
  );

  const handleLike = (id: number) => {
    setNews((prev) =>
      prev.map((article) =>
        article.id === id
          ? {
              ...article,
              likes: article.liked ? article.likes - 1 : article.likes + 1,
              liked: !article.liked,
            }
          : article
      )
    );
  };

  return (
    <div className="bg-green-50 min-h-screen p-4 md:p-10">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-green-900 mb-2">
          Community News
        </h1>
        <p className="text-green-700 text-lg">
          Stay updated with the latest community initiatives and success stories
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {news.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex items-center p-4 border-b border-green-100">
              <div className="bg-green-200 h-10 w-10 rounded-full flex items-center justify-center text-green-800 font-bold">
                📰
              </div>
              <div className="ml-4">
                <h3 className="text-green-900 font-semibold">
                  {article.title}
                </h3>
                <p className="text-sm text-green-500">{article.date}</p>
              </div>
            </div>

            {article.image && (
              <div className="w-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full max-h-80 object-cover"
                />
              </div>
            )}

            <div className="p-4 text-green-700">
              <p>{article.excerpt}</p>
            </div>

            <div className="px-4 pb-2 text-sm text-green-600 flex justify-between">
              <span>{article.likes} Likes</span>
              <span>{article.comments} Comments</span>
            </div>

            <div className="p-2 border-t border-green-100 flex justify-around text-green-700 text-sm">
              <button
                onClick={() => handleLike(article.id)}
                className={`flex-1 py-2 rounded-lg hover:bg-green-100 transition ${
                  article.liked ? "text-green-800 font-semibold" : ""
                }`}
              >
                👍 {article.liked ? "Liked" : "Like"}
              </button>
              <button className="flex-1 py-2 rounded-lg hover:bg-green-100 transition">
                💬 Comment
              </button>
              <button className="flex-1 py-2 rounded-lg hover:bg-green-100 transition">
                🔗 Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
