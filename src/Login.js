import React, { Component } from "react";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.uName = "";
    this.uPass = "";
    this.state = {
      validation: null
    };
  }
  uChange = e => {
    this.uName = e.target.value;
  };
  pChange = e => {
    this.uPass = e.target.value;
  };
  handleValidation = () => {
    if (this.uName === "Ben" && this.uPass === "123") {
      this.setState({ validation: true });
    } else {
      this.setState({ validation: false });
    }
  };
  authPrint = () => {
    if (this.state.validation === true) {
      return <h5 className="badge m-2 badge-success">SUCCESS!</h5>;
    } else if (this.state.validation === false) {
      return <h5 className="badge m-2 badge-warning">ERROR!</h5>;
    }
  };
  renderLogin = () => {
    return (
      <div className="container border">
        <h3 className="text-muted">Login</h3>
        Username:
        <input
          type="text"
          className="input-group form-control"
          onChange={this.uChange}
        />
        Password:
        <input
          type="text"
          className="input-group form-control"
          onChange={this.pChange}
        />
        <button
          onClick={this.handleValidation}
          className="btn btn-info m-1 btn-md"
        >
          Login
        </button>
        <br />
        {this.authPrint()}
      </div>
    );
  };
  handleRender = () => {
    return this.state.validation === true ? (
      <Home myName={this.uName} />
    ) : (
      this.renderLogin()
    );
  };
  render() {
    return <div className="container border">{this.handleRender()}</div>;
  }
}
