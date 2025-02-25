import React from 'react';

    const ArticleCard = ({ article }) => {
      return (
        <div className="article-card">
          <h2>{article.title}</h2> {/* Updated to use article.title */}
          <img src={article.imageUrl} alt={article.title} /> {/* Ensure the image URL is correct */}
          <p>{article.description}</p>
        </div>
      );
    };

    export default ArticleCard;