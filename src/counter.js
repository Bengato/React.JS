import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myNum: 0
    };
  }
  handleSend = () => {
    this.props.sendData(this.state.myNum);
  };
  handleP = () => {
    this.setState(
      prevState => ({
        myNum: prevState.myNum + 1
      }),
      () => {
        this.handleSend();
      }
    );
  };
  handleM = () => {
    if (this.state.myNum > 0) {
      this.setState(
        prevState => ({
          myNum: prevState.myNum - 1
        }),
        () => {
          this.handleSend();
        }
      );
    }
  };
  handleR = () => {
    this.setState({ myNum: 0 }, () => {
      this.handleSend();
    });
  };
  renderTag = () => {
    let tags = "badge m-2 badge-";
    tags += this.state.myNum === 0 ? "warning" : "primary";
    return tags;
  };
  render() {
    return (
      <div className="container">
        <div>
          Quantity :
          <span className={this.renderTag()}> {this.state.myNum}</span>
          <br />
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={this.handleP}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={this.handleM}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-danger m-2"
            onClick={this.handleR}
          >
            RESET
          </button>
        </div>
      </div>
    );
  }
}
