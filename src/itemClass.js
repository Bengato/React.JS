export default class Item {
  constructor(id, name, price, imgSrc) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imgSrc = imgSrc;
  }
  toString = () => {
    return `${this.name} - ${this.price}$ `;
  };
}
