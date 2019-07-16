import React, { Component } from "react";
import Add from "./AddItem";
import Student from "./Student";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.css";
import Paint from "./Paint";
import Shop from "./Shop.jsx";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Login"
    };
  }
  handlePage = e => {
    this.setState({ page: e.target.value });
    this.turnPage();
  };
  turnPage = () => {
    if (this.state.page === "Counter") {
      return <Add />;
    } else if (this.state.page === "Student") {
      return <Student name="Ben" age="26" hasCar={true} />;
    } else if (this.state.page === "Paint") {
      return <Paint />;
    } else if (this.state.page === "Shop") {
      return <Shop />;
    } else {
      return <Login />;
    }
  };
  render() {
    return (
      <div className="App border">
        <header className="App-header">
          <nav className="navbar navbar-light bg-light">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.handlePage}
              value="Login"
            >
              Login
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.handlePage}
              value="Shop"
            >
              Shop
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.handlePage}
              value="Counter"
            >
              Counter
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              onClick={this.handlePage}
              value="Student"
            >
              Student
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0 "
              onClick={this.handlePage}
              value="Paint"
            >
              Paint
            </button>
          </nav>
          {this.turnPage()}
        </header>
      </div>
    );
  }
}
