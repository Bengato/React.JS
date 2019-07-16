import React, { Component } from "react";

export default class Pixel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Color: [
        "secondary",
        "dark",
        "warning",
        "success",
        "danger",
        "primary",
        ""
      ],
      Index: 0
    };
  }
  handleTag = () => {
    return (
      "badge d-inline-block float-left  badge-" +
      this.state.Color[this.state.Index]
    );
  };
  handleClick = () => {
    if (this.state.Index === 6) {
      this.setState(prevState => ({
        Index: 0
      }));
    } else {
      this.setState(prevState => ({
        Index: prevState.Index + 1
      }));
    }
  };
  render() {
    return (
      <h3>
        <span className={this.handleTag()} onClick={this.handleClick}>
          {" "}
        </span>
      </h3>
    );
  }
}
