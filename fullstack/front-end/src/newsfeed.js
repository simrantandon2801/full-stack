import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=books&pageSize=12&apiKey=54ea02845098435db89492a2f4c4a5ba`)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleRefresh = () => {
    axios.get(`https://newsapi.org/v2/everything?q=books&pageSize=12&apiKey=54ea02845098435db89492a2f4c4a5ba`)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleRefresh}>Refresh</button>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
