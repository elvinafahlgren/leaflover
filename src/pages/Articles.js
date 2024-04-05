import React from 'react';

const Articles = () => {
  // Placeholder for article content. You might want to fetch this from an API or define an array of articles.
  const articles = [
    { title: 'Watering Your Plants', content: 'Make sure to water your plants regularly...' },
    // Add more articles here
  ];

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Articles;
