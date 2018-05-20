# Homework Week 3
Reuse the app from week 2 for this week. Don't forget to git commit and git push your changes from week 2 before you start changing it for week 3.

## Outline
Build an application thats loads and displays stories from Hacker News. The user should be able to decide which stories he/she wants to see.

You know from this weeks lesson how to update the state of a component using setState. This is what you will use to enable the user to decide which stories should be displayed.

## Instructions

- make a navigation bar for different types of HN stories: `top`, `new`, `show`, `ask`, `job`
  - add these items to the navbar (add a navbar if you don't have one yet, we have done it as a part of the week3 lecture)
  - when you click on one of the items, it should load the respective stories below. For example if you click on `job` the job stories should appear. Use the HN data from the week2 exercise. 
  - when you click another, the original stories should disappear and the new ones should be shown. Once again using the HN data from week2. 

- fetch stories from Hacker News 
  - use the following library code to fetch stories from HN, try to not worry about how exactly it is implemented but instead look at/run the example and try to figure out how it works: 
```/**
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
 - Change your app so that instead of using the static HN data from week2, it loads the relevant data from HN based on what the user chooses.
 
- BONUS: 
show a "Loading ..." text when the data is loading
- To improve the user experience, show the user that the data is on the way by displaying a "Loading ..." text while the data is loading.   

- BONUS 2: if there's an error from the API, show the error
- if there's an error show it on the page. You can test it by using the Chrome Developer Tools. Go to the Performance Tab and set Network to offline
  
## Scoring

You will be scored on:

- Completion
- Code organisation
- Cleanliness of code
- BONUS
