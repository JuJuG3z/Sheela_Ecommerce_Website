import React from 'react';
    import ArticleCard from '../components/ArticleCard';

    const HomePage = ({ articles }) => {
      return (
        <div className="homepage">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      );
    };

    export default HomePage;