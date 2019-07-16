import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.sName = "";
    this.sAge = "";
    this.sCar = "";
    this.state = {
      edit: true,
      stName: "",
      stAge: "",
      stCar: ""
    };
  }
  nChange = e => {
    this.sName = e.target.value;
  };
  aChange = e => {
    this.sAge = e.target.value;
  };
  cChange = e => {
    this.sCar = e.target.value;
  };
  handleInput = () => {
    return (
      <div className="container border">
        Name:
        <input
          type="text"
          className="input-group form-control"
          onChange={this.nChange}
        />
        Age:
        <input
          type="text"
          className="input-group form-control"
          onChange={this.aChange}
        />
        Do you own a car?:
        <input
          type="text"
          className="input-group form-control"
          onChange={this.cChange}
        />
        <button
          onClick={this.handleStudent}
          className="btn btn-info m-1 btn-md"
        >
          Submit
        </button>
      </div>
    );
  };
  handleStudent = () => {
    this.setState({ stName: this.sName });
    this.setState({ stAge: this.sAge });
    this.setState({ stCar: this.sCar === "yes" ? true : false });
    this.setState({ edit: false });
  };
  handleDetails = () => {
    return (
      <div className="container border">
        <h5>Hi, my name is {this.state.stName}</h5>
        <h5>I'm {this.state.stAge} years old</h5>
        <h5>And I {this.state.stCar ? "own" : "don't own"} a car!</h5>
      </div>
    );
  };
  handleRender = () => {
    if (this.state.edit === true) {
      return this.handleInput();
    } else {
      return this.handleDetails();
    }
  };
  render() {
    return <div className="container border">{this.handleRender()}</div>;
  }
}
