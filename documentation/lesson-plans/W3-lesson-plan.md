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

// use Counter like a normal component: <Counter />
// it doesn't take any props
class Counter extends Component {
  // declare properties like this, for example the initial state
  state = {
    counter: 0,
    running: true,
  }

  // declare methods like this
  constructor(props) {
    // you always need this guy if you have a constructor in
    // a React component. React throws an error without it.
    super(props);

    // not needed anymore
    // this.state = {
    //   counter: 0,
    //   running: true,
    // };

    // every second, check if the counter is running
    // if it is, increment the counter
    setInterval(() => {
      if (this.state.running) {
        this.increaseCounter();
      }
    }, 1000);
  }

  // increase counter by one
  // NOTE: uses a arrow function, which binds this, yay!
  // see: https://codeburst.io/good-bad-and-ugly-parts-es6-class-arrow-functions-and-react-1ead4fa2c763
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  resetCounter = () => { // arrow function!
    this.setState({
      counter: 0,
    });
  }

  toggleRunning = () => { // arrow function!
    this.setState({
      running: !this.state.running
    });
  }
// the render function contains every to convert
  // this.props and this.state into presentation:
  // HTML and React elements
  render() {
    return (
      <div className="Counter">
        counter: {this.state.counter}
        <button onClick={this.resetCounter}>reset</button>
        { this.state.running
          ? <button onClick={this.toggleRunning}>pause</button>
          : <button onClick={this.toggleRunning}>continue</button>
        }
      </div>
    );
  }
}
```

