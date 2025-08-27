// import React from 'react';
import { newsData } from "../data/mockData";

export default function News() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Community News</h1>
        <p className="page-subtitle">
          Stay updated with the latest community initiatives and success stories
        </p>
      </div>

      <div className="news-grid">
        {newsData.map((article) => (
          <div key={article.id} className="news-card">
            <div className="news-image">📰</div>
            <div className="news-content">
              <div className="news-date">{article.date}</div>
              <h3 className="news-title">{article.title}</h3>
              <p className="news-excerpt">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
