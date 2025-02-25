import React from 'react';
    import articles from './articlesData'; // Assuming articlesData is where articles are stored

    const HomePage = () => {
      return (
        <div className="homepage">
          {articles.map(article => (
            <div key={article.id} className="article-card">
              <h2>{article.title}</h2> {/* Corrected to use 'title' instead of 'name' */}
              <img src={article.imageUrl} alt={article.title} /> {/* Ensure image URL is correct */}
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      );
    };

    export default HomePage;