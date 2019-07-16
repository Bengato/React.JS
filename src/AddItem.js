import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./counter";
import Cube from "./cube";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myItem: "",
      myQuantity: 0,
      List: [""]
    };
  }
  getItem = e => {
    this.setState({ myItem: e });
  };
  getCount = e => {
    this.setState({ myQuantity: e });
  };
  handleSave = () => {
    let temp = this.state.myItem + " : " + this.state.myQuantity;
    this.setState(prevState => ({
      List: [...prevState.List, temp]
    }));
  };
  render() {
    let renderList = this.state.List.map((item, index) => {
      if (index !== 0) {
        return (
          <div className="m-2 float-left">
            <span className="badge badge-primary">{index}</span>. {item}
            <br />
          </div>
        );
      }
    });
    return (
      <div className="container border">
        <Cube sendData={this.getItem} />
        <Counter sendData={this.getCount} />
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={this.handleSave}
        >
          SAVE
        </button>
        <div>
          <h3 className="text-muted">Product : Quantity</h3>
          <br />
          {renderList}
        </div>
      </div>
    );
  }
}
