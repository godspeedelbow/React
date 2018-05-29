import React from 'react';
import 'Menu.css';

export default Menu;

function Menu(props) {
  const { changePage } = props;

  return (
    <header className="app-header">
      <p>
        <a className='main-title' href='https://news.ycombinator.com/news'>Hacker News</a> |
        <a onClick={() => changePage('top')}>Top</a> |
        <a onClick={() => changePage('new')}>New</a> |
        <a onClick={() => changePage('show')}>Show</a> |
        <a onClick={() => changePage('ask')}>Ask</a> |
        <a onClick={() => changePage('job')}>Jobs</a> |
      </p>
    </header>
  );
}
