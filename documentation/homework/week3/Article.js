import React from 'react';
import './Article.css';

export default Article;

function Article(props) {
  const { article } = props;

  return (
    <div className='article'>
      <div key={article.id}>
        {article.title ? (
          <div>
            <img src='https://news.ycombinator.com/grayarrow.gif' />
            <a href={article.url}>{article.title}</a>
          </div>
        ) : null}
      </div>
      <p>points by {article.by.id}{' '}
      {getTimePassed(article.timeISO)} minutes ago | hide | comments</p>
    </div>
  );
}

function getTimePassed(dateStr) {
  const dateObj = new Date(new Date() - new Date(dateStr));
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();

  return (hours * 60 + minutes);
}
