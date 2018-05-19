# Lesson Plan Week 3 * Malmö * React

* show & discuss homework
* quick recap of week 2 material: any questions?
* introduce concept of class component
  * show minimal component: render
  * constructor
  * state, in general: what is it?
  * `this.setState()`
  * example: routing using state
* how fetch data with class component (click => fetch)
* together: fetch HN data and inject into

### Code

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
