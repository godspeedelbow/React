import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Menu from './Menu';

import './App.css';

class App extends Component {
  state = {
    page: 'top'
  }

  changePage = (page) => {
    this.setState({
      page,
    });
  }

  render() {
    return (
      <div className="app">
        <Menu changePage={this.changePage} />
        <ArticleList page={this.state.page} />
      </div>
    );
  }
}

export default App;
