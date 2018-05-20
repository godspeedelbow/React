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

