/**
 * fetches HackerNews stories.
 * example:
 *   import getHNStories from './get-hn-stories';
 *
 *   // inside your component, do:
 *   getHNStories('job')
 *     .then(data => console.log(data)) // or, this.setState({ data: data })
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
