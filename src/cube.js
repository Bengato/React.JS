import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Cube extends Component {
  constructor(props) {
    super(props);
    this.ph = "";
    this.state = {
      edit: false,
      myText: "Item:"
    };
  }
  handleE = () => {
    if (this.ph === "Item:") {
      this.ph = "";
    }
    this.setState({ edit: true });
  };
  handleS = () => {
    if (!this.ph) {
      this.ph = "Item:";
      this.setState({ myText: this.ph });
    }
    this.setState({ edit: false });
    this.props.sendData(this.ph);
  };
  textChanged = e => {
    this.ph = e.target.value;
    this.setState({ myText: this.ph });
  };
  rInput = () => {
    return (
      <div className="container">
        <input
          type="text"
          onChange={this.textChanged}
          value={this.ph ? this.ph : ""}
        />
        <button
          type="button"
          className="btn btn-success m-2 btn-sm"
          onClick={this.handleS}
        >
          SAVE
        </button>
      </div>
    );
  };
  rNormal = () => {
    return (
      <div className="container">
        <label className="txtLbl">{this.state.myText}</label>
        <button
          type="button"
          className="btn btn-secondary m-2 btn-sm"
          onClick={this.handleE}
        >
          EDIT
        </button>
      </div>
    );
  };
  render() {
    if (this.state.edit) {
      return this.rInput();
    } else {
      return this.rNormal();
    }
  }
}
