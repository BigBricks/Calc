import React, { Component } from "react";
import Keypad from "./Keypad/index";
import * as math from "mathjs";
import "./App.css";

class App extends Component {
  state = {
    view: ""
  };
  onClick = e => {
    if (e === "=") {
      this.evaluate();
    } else if (e === "+/-") {
      let split = this.state.view.split("");

      let result = "";

      let type = false;

      if (split.length <= 1) {
        result = "-" + this.state.view;

        this.setState({ view: result });
      }

      for (let i = split.length; i > 0; i--) {
        if (isNaN(parseInt(split[i]))) {
          result =
            this.state.view.substr(0, i) + "-" + this.state.view.substr(i);

          this.setState({ view: result });

          type = true;

          break;
        }
      }

      if (type === false) {
        result = "-" + this.state.view.substr(0);

        this.setState({ view: result });
      }

      if (result === "") {
        result = "-" + this.state.view.substr(0);

        this.setState({ view: result });
      }
    } else if (e === "%") {
      if (math.eval(this.state.view) === undefined) {
        return this.setState({ view: "" });
      } else {
        let result = `${this.state.view}/100`;

        this.setState({ view: `${math.eval(result)}` });
      }
      // let split = this.state.view.split("");

      // let result = "";

      // let type = false;

      // if (split.length <= 1) {
      //   result = `${this.state.view}/100`;

      //   this.setState({ view: math.eval(result) });
      // }

      // for (let i = split.length; i > 0; i--) {
      //   if (isNaN(parseInt(split[i]))) {
      //     result =
      //       this.state.view.substr(0, i) + `${this.state.view.substr(i) / 100}`;

      //     this.setState({ view: result });

      //     type = true;

      //     break;
      //   }
      // }

      // if (type === false) {
      //   result = `${this.state.view}/100`;

      //   this.setState({ view: math.eval(result) });
      // }
    } else if (e === "AC") {
      this.clear();
    } else if (typeof parseInt(e) === Number) {
      this.setState({ view: this.state.view + e });
    } else {
      let end = this.state.view.slice(-1);
      if (end !== e) {
        this.setState({ view: this.state.view + e });
      }
    }
  };
  evaluate = () => {
    try {
      this.setState({ view: `${math.eval(this.state.view)}` });
    } catch (e) {
      this.setState({ view: "" });
    }
  };
  clear = () => {
    this.setState({ view: "" });
  };
  render() {
    return (
      <div className="App">
        <Keypad onClick={this.onClick} view={this.state.view} />
      </div>
    );
  }
}

// Bugs currently:
// 1. Percent operator takes whole of value to convert into decimal. This is not a finished operand.
export default App;
