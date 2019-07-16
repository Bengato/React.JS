import React, { Component } from "react";
import Shop from "./Shop.jsx";
import Item from "./itemClass";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        totalPrice: 0
    };
  }
  divClick = e => {
    //passing the item ID as dataset with data-prop
    this.props.sendItemToList(e.currentTarget.dataset.id);
  };
  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div
          key={item.id}
          className="alert alert-primary"
          onClick={this.divClick}
          data-id={item.id}
        >
          {item.toString()}
          <img style={{ margin: 2, height: 20, width: 20 }} src={item.imgSrc} />
        </div>
      );
    });
    return <div key="con">{itemList}</div>;
  }
}