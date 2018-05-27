# Homework Week 4

week 4 homework:
- make your own game, choose any game

## Outline

Build a small game in the browser using React. You have two weeks to do this because it can be quite involved.

Game is a lot about state and how to present and interact with that state. You now know how maintain state and update state through React components. This is all you need to build a simple game.

Example games, made in React:
- hangman (for example: https://github.com/class-ideas/react-hangman)
- snake (for example: https://github.com/tomocchino/react-snake)
- tetris (for example: https://godspeedelbow.github.io/tetris-react/)

Keep in mind that single player games are often much easier to make than multi player games.

## Instructions

1. decide which game you want to make. Tip: games that a turn based are easier to make because there's nothing happening 'automatically'. E.g. in Tetris, the blocks fall down every single second, but in Hangman you can wait as long as you want before you guess a new letter.

2. analyse the game and **write it down**. Answer these questions:
  - is it a one- or two-player game?
  - what is the goal of the game?
  - what is _in_ the game? what are the entities, the _things_ it consists of?
  - what can a player _do_ in this game?
  - what are the **rules** of the game?
  - what are the states the game can be in?
    - what is the begin state? what is the end state? are there any intermediate states?
    - how doe the game progress from one state to the next? what actions can the player take? If you can write it down like a formula, that's always smart to do. E.g:
      - Hangman: `Action: guess letter` => `Change state: reveal letter in word` || `Change state: decrease countdown`
      - Tetris: `Action: spin falling piece` => `Change state: turn falling piece clockwise`
    - based on how the game progresses, which intermediate states can the game be in?
  - what does the game look like?
    - does the game look very different for different states? or is just slight differenes, like a chess piece moved on a board.
    - does it involve graphics, or just text?
      - How complicated are the graphics?
      - Can you get away with presenting text instead of graphics, and then later add the graphics? (e.g. in Hangman, you could instead of showing a picture of man hanging, show a count down, which decreases on each mistake. When it's 0, it's game over)
  - how does the player start over again?

3. look at your analyse and check if you didn't add any unnecessary complexity. Make it as simple as it can be, in the beginning. You can always add complexity later.

4. start with the first state the game is in and build the presentation for that game. E.g. an empty Tic Tac Toe board.
  - draw what is looks like out on a piece of paper
  - identify which components and sub-components there are
  - build it using React stateless components (functions). There's no need for state yet.

5. based on the possible actions that the user can take in this state, update the presentation components
  - add some conditionals. For example, in Tic Tac Toe, each cell can be in three states: `o`, `x`, or empty. Add a conditional to a Tic Tac Toe cell so that it can render its three states.
  -  pass fake data into this component to pretend there is game state and adapt your component to render that state correctly.
  - keep changing the data until you are sure that your component handles all possible game states for this moment in the game (player has taken first action), e.g. each Tic Tac Toe cell can render each of its three possible states.

6. add handlers to the game so the player can interact with the game by changing its state, e.g. choose a letter in Hangman.
  - decide which action you want to program first
  - how does this action change the state? e.g. in Hangman, when the user chooses a letter, the following states change:
    - it's no longer possible to choose this letter
    - if the letter is in the word, the "revealed word" is updated to include the letter. if _not_, the "countdown counter" is decreased with one
    - if the "countdown counter" is now 0, the game is over. if _not_, the player can choose a letter.
  - write a `class` component that wraps the stateless presentational component, you made earlier. this component will keep track of the game state.
  - define what the initial state is of your component, e.g. in Hangman:
    `this.setState({ word: getRandomWord(), countDown: 5, turns: 0 }`
  - define a method on this class, e.g. in Hangman `guessLetter(letter)`, that updates the state.
  - decide how the player will interact with game: will they press a button, click on something?
    - pass the action method to the presentational component. In the presentational component, get it from the `props` and add it to the `onClick` handler of the relevant presentational (sub)component, e.g. each cell in Tic Tac Toe should have an onClick handler, so that when the player clicks it, a `o` or `x` can be added to that cell.

7. go back to step 5 and keep iterating until you can effectively **play the game**

8. design the end state of the game, the `<GameOver />` component
  - when the game has gotten to the end, the player has won or lost.
  - make a presentational component to display either of two states
  - add the abililty to start over, by creating an action `restart()`, passing it down to the `<GameOver />` component. When the user clicks this action, the game should go back to its initial state.

## Scoring

You will be scored on:

- Completion
- Code organisation
- Cleanliness of code
- BONUS
