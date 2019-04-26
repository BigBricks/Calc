import React, { Component } from "react";
import Keypad from "./Keypad/index";
import * as math from "mathjs";
import "./App.css";

class App extends Component {
  state = {
    view: "",
    memory: ""
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

        // this.setState({ view: `${math.eval(result)}` });

        this.setState({ view: `${Evaluate(result)}` });
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
    } else if (parseInt(e) > -Infinity) {
      this.setState({ view: this.state.view + e });
    } else if (e === "**") {
      let memory = parseInt(this.state.view) * parseInt(this.state.view);
      this.setState({
        memory: "",
        view: String(memory)
      });
    } else if (
      (e === "/" || e === "*" || e === "-" || e === "+") &&
      parseInt(this.state.view) > -Infinity
    ) {
      let memory = this.state.view + e;
      this.setState({
        memory: memory,
        view: " "
      });
    } else {
      let end = this.state.view.slice(-1);
      if (end !== e) {
        this.setState({ view: this.state.view + e });
      }
    }
  };
  evaluate = () => {
    try {
      // this.setState({
      //   memory: `${math.eval(this.state.memory + this.state.view)}`,
      //   view: ""
      // });
      this.setState({
        memory: `${Evaluate(this.state.memory + this.state.view)}`,
        view: ""
      });
    } catch (e) {
      this.setState({ view: "" });
    }
  };
  clear = () => {
    this.setState({ view: "", memory: "" });
  };
  render() {
    let view = this.state.view !== "" ? this.state.view : this.state.memory;
    return (
      <div className="App">
        <Keypad onClick={this.onClick} view={view} />
      </div>
    );
  }
}

function Evaluate(string) {
  console.log(string);
  let array = string.split("");
  let acc = "";
  let first = 0;
  let operand = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i] === " ") {
      continue;
    } else if (typeof parseInt(array[i]) === "number") {
      acc += array[i];
    } else if (
      operand !== "" &&
      (array[i] === "+" ||
        array[i] === "-" ||
        array[i] === "*" ||
        array[i] === "/")
    ) {
      first = Operator(array[i], first, acc);
      acc = "";
      operand = "";
    }
    if (array[i] === "+") {
      console.log(parseInt(acc));
      first = parseInt(acc);
      acc = "";
      operand = "+";
    } else if (array[i] === "-") {
      console.log(parseInt(acc));
      first = parseInt(acc);
      acc = "";
      operand = "-";
    } else if (array[i] === "*") {
      console.log(parseInt(acc));
      first = parseInt(acc);
      acc = "";
      operand = "*";
    } else if (array[i] === "/") {
      console.log(parseInt(acc));
      first = parseInt(acc);
      acc = "";
      operand = "/";
    }
  }
  if (parseInt(acc) > -Infinity) {
    first = Operator(operand, first, acc);
    acc = "";
    operand = "";
    return first;
  } else {
    first = Operator(operand, first, acc);
    acc = "";
    operand = "";
    return first;
  }
}

function Operator(item, first, acc) {
  let total = first;
  console.log("first", first);
  console.log("acc", acc);
  console.log("item", item);
  switch (item) {
    case "+":
      total += parseInt(acc);
      break;
    case "-":
      total -= parseInt(acc);
      break;
    case "/":
      total /= parseInt(acc);
      break;
    case "*":
      total *= parseInt(acc);
      break;
  }
  return total;
}
// Bugs currently:
// 1. Percent operator takes whole of value to convert into decimal. This is not a finished operand.
export default App;
