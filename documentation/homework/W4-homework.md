# Homework Week 4

## Outline
From the provided starting code you are going to build a tic-tac-toe game.
The provided code gives you some basic components and css to work with.
Your goal is to building a fully functional tic-tac-toe game by using the state and props in react. 
When you are done the state of the app will be in the top of your app. Components further down the app-tree will recieve through the props passed down.
Following the lifting state pattern which we discussed in class. Here's a link if you want to read more about it. [Lifting state](https://reactjs.org/docs/lifting-state-up.html)

Try not to think too far ahead but try to follow the instructions step by step. If you get stuck think, google, ask a friend , ask in slack!

Good luck and happy coding!

## Instructions 
* Start by having a good look at the provided code. The code starts inside Game.js. For now we have put all the logic here. This is usually not a good idea. Here, however we hope that it will help you get a better overview of what is happening. 

* The provided code contains three components: 
 - Game
 - Board
 - Square
They currently contain no state. Board renders the 9 squares in three distinct rows.
Since no of the components has any state the app isn't interactive at all. That is super boring!

* We'll start small by making ````<Cell/>```` interactive. So instead of using the ````props.value````. Change it so it starts of empty and becomes and ````X```` when the user clicks it. If you are stuck, think about how we have implemented other components which contain and can update state.


* Lifting state up: Add a constructor to the Board component and set its initial state to contain an array with 9 nulls, corresponding to the 9 cells:
```Array(9).fill(null)```
```
[
  null,null,null,
  null,null,null,
  null,null,null
]
```
This will represent the state of the board: Later it might look something like:
```
[
  'X', null, 'X',
  'O', 'X', 'O',
  'O', null, null
]
```
Pass the relevant part of the state down to the respective Cell.

* Now we need to change what happens when a cell is clicked. The Board component now stores which squares are filled, which means we need some way for Cell to update the state of Board. Since component state is considered private, we can’t update Board’s state directly from Cell. 

Define a function handleClick in Board and pass it down to cell as a prop. Call the function when the user clicks a Cell. 

The function can be a mock function for now 
```
function handleClick (i) {
    console.log('You clicked cell number: ',i)
}
```
Make sure to call it with the index/number off the Cell before you pass it down.
```
() => this.handleClick(i) 
```

* Implement the handleClick to update the Board

* Making the players take turns: We want to enable the players to take turns. Update Board so that it uses state to determine if the next click should make a cell a 'X' or a 'O'. Tip: it should be enough to use a boolean value.

  
* We have a game! But it never ends...
- Use the provided calculateWinner function to determine if someone has won the game.
``` 
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
} 
```
- Display a message that the game is over and who won ('X' or 'O').
Bonus 1: - Make it so that cells can no longer be changed when the game is over.
Bonus 2: - Fix the "bugg" that players can change the values in cells by clicking on them 

## Scoring

You will be scored on:

- Completion
- Code organisation
- Cleanliness of code
- BONUS
