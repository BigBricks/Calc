import React, { Component } from "react";
import "./keypad.css";

export default class Keypad extends Component {
  render() {
    return (
      <div className="container">
        <div className="item-header">{this.props.view}</div>
        <button
          className="btn silver"
          name="AC"
          onClick={e => this.props.onClick(e.target.name)}
        >
          AC
        </button>
        <button
          className="btn silver"
          name="+/-"
          onClick={e => this.props.onClick(e.target.name)}
        >
          +/-
        </button>
        <button
          className="btn silver"
          name="%"
          onClick={e => this.props.onClick(e.target.name)}
        >
          %
        </button>
        <button
          className="btn orange"
          name="/"
          onClick={e => this.props.onClick(e.target.name)}
        >
          ÷
        </button>

        <button
          className="btn"
          name="7"
          onClick={e => this.props.onClick(e.target.name)}
        >
          7
        </button>
        <button
          className="btn"
          name="8"
          onClick={e => this.props.onClick(e.target.name)}
        >
          8
        </button>
        <button
          className="btn"
          name="9"
          onClick={e => this.props.onClick(e.target.name)}
        >
          9
        </button>
        <button
          className="btn orange"
          name="*"
          onClick={e => this.props.onClick(e.target.name)}
        >
          x
        </button>

        <button
          className="btn"
          name="4"
          onClick={e => this.props.onClick(e.target.name)}
        >
          4
        </button>
        <button
          className="btn"
          name="5"
          onClick={e => this.props.onClick(e.target.name)}
        >
          5
        </button>
        <button
          className="btn"
          name="6"
          onClick={e => this.props.onClick(e.target.name)}
        >
          6
        </button>
        <button
          className="btn orange"
          name="-"
          onClick={e => this.props.onClick(e.target.name)}
        >
          -
        </button>

        <button
          className="btn"
          name="1"
          onClick={e => this.props.onClick(e.target.name)}
        >
          1
        </button>
        <button
          className="btn"
          name="2"
          onClick={e => this.props.onClick(e.target.name)}
        >
          2
        </button>
        <button
          className="btn"
          name="3"
          onClick={e => this.props.onClick(e.target.name)}
        >
          3
        </button>
        <button
          className="btn orange"
          name="+"
          onClick={e => this.props.onClick(e.target.name)}
        >
          +
        </button>

        <button
          className="btn"
          name="0"
          onClick={e => this.props.onClick(e.target.name)}
        >
          0
        </button>
        <button
          className="btn"
          name="**"
          onClick={e => this.props.onClick(e.target.name)}
        >
          ^2
        </button>
        <button
          className="btn"
          name="."
          onClick={e => this.props.onClick(e.target.name)}
        >
          .
        </button>
        <button
          className="btn orange"
          name="="
          onClick={e => this.props.onClick(e.target.name)}
        >
          =
        </button>
      </div>
    );
  }
}
