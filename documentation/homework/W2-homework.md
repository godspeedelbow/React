# Homework Week 1

Fork this repository and base your week 2 homework on [create react app](https://github.com/facebook/create-react-app#quick-overview).

See instructions on how to get started with "create react app":
[https://github.com/facebook/create-react-app#quick-overview](https://github.com/facebook/create-react-app#quick-overview)

When you are done issue a PR with your homework as explained in [this video](https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA) made by Daan.

## Outline

Show articles from [Hacker News](https://news.ycombinator.com/), based on real data from their API.

You know from this weeks lesson how to inject data into a component and how to create multiple components from an array. This is what you are going today with the Hackers News data.

## Instructions

- Check out the file with the [Hacker News articles data](W2-data.js). Try to understand what the structure is of the data, so that you know how you can use it.

- Copy the Hacker News articles data file to your own create-react-app repository, in the `src` directory. `import` it in `src/App.js` and print its contents with `console.log`. Verify that when you open chrome dev tools in your browser, check out the Console tab and reload the page you see the data is printed.

- In your project, create a component `Article.js` that prints `title` from `props`. In `App`, map the HN data to `Article`s. Verify that all articles get printed in the browser.

- Add more fields to the `Article` component (check out the data to see _what_ is there). Verify that they get printed.

- Make it look nice with CSS. You can create an `Article.css` that you `import` in `Article.js`.

- BONUS: Create an intermediate component between `App.js` and `Article.js`, called `ArticleList.js`. In `App`, you use/compose only `ArticleList`, ie. `<ArticleList />`. In `ArticleList` you `import` the data, map over it and compose `Article.js`.
  - before:
  `<App /> => multiple <Article />`
  - after:
  `<App /> => <ArticleList /> => multiple <Article />`

## Scoring

You will be scored on:

- Composition
- Code organisation
- Cleanliness of code
