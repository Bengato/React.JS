import React, { Component } from "react";
import ItemsC from "./ItemsC";
import Item from "./itemClass";
import Cart from "./Cart";
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        new Item(
          1,
          "T-Shirt",
          20,
          "https://cdn.shopify.com/s/files/1/2143/3217/products/500_74e71875-c865-465d-8e22-3b1e199f7e65_grande.png?v=1549915912"
        ),
        new Item(
          2,
          "Pants",
          30,
          "https://static1.squarespace.com/static/56c206b3c2ea510748cb4394/56d4929b4c2f8513ee0baf0c/571ff81d044262a0b473040b/1549049150638/GenIIUniformPant.png?format=500w"
        ),
        new Item(
          3,
          "Boots",
          40,
          "https://a248.e.akamai.net/f/248/9086/10h/wolverine-o.scene7.com/is/image/WolverineWorldWide/WBSM-W40491-032317-F17-000?wid=388&hei=320&op_usm=0.5,1&fmt=png-alpha&qlt=70"
        )
      ],
      itemsList: [],
      cartPrice: 0
    };
  }

  getItemToCart = itemToMove => {
    this.setState(
      {
        itemsList: [
          ...this.state.itemsList,
          this.state.items.filter(item => item.id == itemToMove)[0]
        ]
      },
      () => {
        let addPrice = this.state.itemsList.filter(
          item => item.id == itemToMove
        )[0].price;
        this.setState({ cartPrice: this.state.cartPrice + addPrice });
        let newItems = this.state.items.filter(item => item.id != itemToMove);
        this.setState({ items: newItems });
      }
    );
  };
  getItemToList = itemToMove => {
    this.setState(
      {
        items: [
          ...this.state.items,
          this.state.itemsList.filter(item => item.id == itemToMove)[0]
        ]
      },
      () => {
        let deductPrice = this.state.itemsList.filter(
          item => item.id == itemToMove
        )[0].price;
        this.setState({ cartPrice: this.state.cartPrice - deductPrice });
        let newItems = this.state.itemsList.filter(
          item => item.id != itemToMove
        );
        this.setState({ itemsList: newItems });
      }
    );
  };
  renderTags = () => {
    var tags = "badge badge-";
    tags += this.state.cartPrice === 0 ? "secondary" : "primary";
    return tags;
  };
  render() {
    return (
      <div style={{ margin: 20 }}>
        <div className="alert alert-secondary">
          <h1 className="text-muted">Shop</h1>
          <ItemsC
            key="1"
            items={this.state.items}
            sendItemToCart={this.getItemToCart}
          />
        </div>
        <div className="alert alert-secondary">
          <h1 className="text-muted">Cart</h1>
          <Cart
            key="2"
            items={this.state.itemsList}
            sendItemToList={this.getItemToList}
          />
          <span className={this.renderTags()}>
            Total Price: {this.state.cartPrice}$
          </span>
        </div>
        
      </div>
    );
  }
}
