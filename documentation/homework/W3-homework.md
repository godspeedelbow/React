# Homework Week 3

Reuse the app from week 2 for this week. Don't forget to git commit and git push your changes from week 2 before you start changing it for week 3.

**NOTE**: you can find the solution to this homework here: [week 3 solution](week3/).

## Outline
Build an application thats loads and displays stories from Hacker News. The user should be able to decide which stories he/she wants to see.

You know from this weeks lesson how to update the state of a component using setState. This is what you will use to enable the user to decide which stories should be displayed.

## Instructions

- make a navigation bar for different types of HN stories: `top`, `new`, `show`, `ask`, `job`
  - add these items to the navbar (add a navbar if you don't have one yet, we have done it as a part of the week3 lecture)
  - when you click on one of the items, it should load the respective stories below. For example if you click on `job` the job stories should appear.
  - when you click another, the original stories should disappear and the new ones should be shown.

- fetch stories from Hacker News
  - use the following library code [getHNStories](W3-get-hn-stories.js) to fetch stories from HN
  - you need to install two packages. Make sure you execute this command in the root of your project (not in `/src` or anything else):
    ```
    npm install graphqlhub-schemas graphql --save
    ```
  - try to not worry about how exactly it is implemented but instead look at/run the example and try to figure out how it works:
    ```js
    /**
    * fetches HackerNews stories.
    * example:
    *   getHNStories('job')
    *    .then(console.log)
    *     .catch(console.error);
    **/
    ```

- BONUS:
show a "Loading ..." text when the data is loading
- To improve the user experience, show the user that the data is on the way by displaying a "Loading ..." text while the data is loading.

- BONUS 2: if there's an error from the API, show the error
- if there's an error show it on the page. You can test it by using the Chrome Developer Tools. Go to the Performance Tab, Press the gear button on the right and set Network to offline

## Scoring

You will be scored on:

- Completion
- Code organisation
- Cleanliness of code
- BONUS
