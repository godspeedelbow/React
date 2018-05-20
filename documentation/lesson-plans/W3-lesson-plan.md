# Lesson Plan Week 3 * Malmö * React

* show & discuss homework
* quick recap of week 2 material: any questions?
* what is state?
* introduce concept of class component
  * show minimal component: render
  * constructor
  * `this.setState()`
  * example: routing using state
* how fetch data with class component (click => fetch)
* together: fetch HN data and inject into

### Code

`<Counter />` example
```js
class Counter extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      counter: 0,
      running: true,
    };

    setInterval(() => {
      if (!this.state.running) return;
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
  }

  render() {
    return (
      <div className="Counter">
        counter: {this.state.counter}
        <button onClick={() => this.setState({ counter: 0 })}>reset</button>
        { this.state.running
          ? <button onClick={() => this.setState({ running: false })}>pause</button>
          : <button onClick={() => this.setState({ running: true })}>continue</button>
        }
      </div>
    );
  }
}
```

Use this code to fetch Hacker News stories (put it in a file and import it):

```js
/**
 * fetches HackerNews stories.
 * example:
 *   getHNStories('job')
 *     .then(console.log)
 *     .catch(console.error);
 */
import { HackerNews } from 'graphqlhub-schemas';
import { GraphQLSchema, graphql } from 'graphql';

const schema = new GraphQLSchema({
  query: HackerNews.QueryObjectType
});

function getHNStories(storyType = 'top') {
  const storyField = `${storyType}Stories`;
  const query = `
    {
      ${storyField} {
        id
        by {
          id
        }
        timeISO
        text
        url
        title
      }
    }
  `;

  return graphql(schema, query)
    .then((result) => {
      if (result.errors) {
        throw new Error(result.errors);
      }

      return result.data[storyField]; // return an array of HN articles
    });
}

export default getHNStories;
```
