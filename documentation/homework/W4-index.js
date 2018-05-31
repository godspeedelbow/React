import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class Cell extends React.Component {
  render() {
    return <button className="cell">{this.props.value}</button>;
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: new Array(9).fill(null)
    };
  }
  renderCell(i) {
    return <Cell value={this.state.cells[i]} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className="board-row">
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
        <div className="board-row">
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: new Array(9).fill(null)
    };
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board cells={this.state.cells} />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
