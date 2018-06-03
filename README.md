> Please help us improve and share your feedback! If you find better tutorials
or links, please share them by [opening a pull request](https://github.com/HackYourFuture/React/pulls).

# HackYourFuture - Malmö - React

In this 5 week module we will learn React!

## Planning
| Week | Topic | Read | In Class | Homework |
| ---- | ----- | ---- | -------- | -------- |
| 1. | React Components | [JSX](https://reactjs.org/docs/introducing-jsx.html), [Elements](https://reactjs.org/docs/rendering-elements.html), [Components and Props](https://reactjs.org/docs/components-and-props.html) | [W1 Lesson Plan](documentation/lesson-plans/W1-lesson-plan.md) | [W1 Homework](documentation/homework/W1-homework.md) |
| 2. | Dynamic components | [JSX](https://reactjs.org/docs/introducing-jsx.html) | [W2 Lesson Plan](documentation/lesson-plans/W2-lesson-plan.md) | [W2 Homework](documentation/homework/W2-homework.md) |
| 3. | Class Components and state | [Components and Props](https://reactjs.org/docs/components-and-props.html), [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) | [W3 Lesson Plan](documentation/lesson-plans/W3-lesson-plan.md) | [W3 Homework](documentation/homework/W3-homework.md) |
| 4. | Building a game | [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)| [W4 Lesson Plan](documentation/lesson-plans/W4-lesson-plan.md) | [W4 Homework](documentation/homework/W4-homework.md) |
| 5. | Building a game: part 2 | [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) | TBD | [W5 Homework](documentation/homework/W5-homework.md) |

## Handing in homework
Take a look at [this video](https://www.youtube.com/watch?v=-o0yomUVVpU&index=2&list=PLVYDhqbgYpYUGxRdtQdYVE5Q8h3bt6SIA) made by Daan, he explains how your homework needs to be handed in.

Also review the Git [workflow material](https://github.com/HackYourFuture/Git/blob/master/Lecture-3.md) from the JavaScript3 module, use this as a reference.

## Some background information about React and JS

Watch this video from Facebook about why they started React:

https://youtu.be/nYkdrAPrdcw

Also be sure you're familiar with ES6-syntax. See this video about ES6 (the video is in Node, but the syntax for React is the same):

https://www.lynda.com/Node-js-tutorials/Switching-ES6-Node-js/546100-2.html

This is a handy reference of all features of ES6:

http://es6-features.org

Please *do not worry about understanding all*. However, do make sure you understand the following, as we'll be using them a lot:

- http://es6-features.org/#Constants
- http://es6-features.org/#ObjectMatchingShorthandNotation
- http://es6-features.org/#RestParameter
- http://es6-features.org/#SpreadOperator

Read about React here:

https://facebook.github.io/react/

## Learning examples

### Counter [[source](/examples/counter)]

Demonstrates:

1. Most basic implementation of component state
2. Handler functions bound to `onClick`

![Clocks Example Screenshot](/documentation/example-screenshots/counter.png)

### Clocks [[source](/examples/clocks)]

Follows the React docs clock example [here](https://reactjs.org/docs/state-and-lifecycle.html). Uses [momentjs](https://github.com/moment/moment) and [moment-timezone](https://github.com/moment/moment-timezone) for datetime functionality.

Demonstrates:

1. Using both state and props in a component tree
2. Passing event handlers as props
3. Rendering components in a loop
4. Conditional JSX rendering (header count)
5. State-bound lifecycle and lifecycle events (clock interval)

![Clocks Example Screenshot](/documentation/example-screenshots/clocks.png)

## Real world example

Have a look at Mattijn's real world React project:

https://github.com/mattijnlahuis/beertools

*The HackYourFuture curriculum is subject to CC BY copyright. This means you can freely use our materials, but just make sure to give us credit for it :)*
