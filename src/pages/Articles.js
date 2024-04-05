import React from 'react';
import '../styles/Articles.css';
import articles from '../data/articlesMock';

const Articles = () => {
  return (
    <div className="articles-container">
      {articles.map((article, index) => (
        <div key={index} className="article">
          <h2>{article.title}</h2>
          {article.imageUrl && <img src={articles.imageUrl} alt={articles.title} />}
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
