import React, { Component } from 'react';
import getHNStories from './get-hn-stories';
import Article from './Article';

import 'ArticleList.css';

export default ArticleList;

class ArticleList extends Component {
  state = {
    data: [],
    fetching: false,
  }

  fetchData = (page) => {
    this.setState({ fetching: true })
    getHNStories(page)
      .then((data) => {
        this.setState({
          data,
          fetching: false
        });
      })
      .catch(console.error);
  }

  componentDidMount() {
    this.fetchData(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.fetchData(nextProps.page);
    }
  }

  render() {
    return (
      <div className='article-list'>
        <h1>{this.props.page}</h1>
        {
          this.state.fetching
            ? 'fetching data ...'
            : this.state.data.map((article) => <Article article={article}/>)
        }
      </div>
    );
  }
}
