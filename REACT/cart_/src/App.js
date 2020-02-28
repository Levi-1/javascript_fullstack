import React, { Component } from 'react';

class Cart extends Component {
  constructor (props) {
    super (props)
    this.state = {
      goods: [
        { id: 1, text: '你不知道的javaScript', price: 66},
        { id: 2, text: '你不知道的vue', price: 59},
        { id: 3, text: '你不知道的react', price: 63}
      ],
      cart: []
    }
    this.addToCart = this.addToCart.bind(this)
  }
  addToCart (good) {
    const newcart = [...this.state.cart]
    const idx = newcart.findIndex(c => c.text === good.text)
    const item = newcart[idx]
    if (item) {
      newcart.splice(idx, 1, {id: item.id, text: item.text, price: item.price, count: item.count + 1})
    } else {
      newcart.push({...good, count: 1})
    }
    this.setState({
      cart: [...newcart]
    })
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.state.goods.map(good => (
              <li key = {good.id}>
                {good.text}
                <button onClick={() => this.addToCart(good)}>+</button>
                ￥{good.price}
              </li>
            ))}
          </ul>
        </div>
        <div>
              {/* {this.state.cart.map(good => (
                <li key = {good.id}>{good.text}
                  <button>-</button>
                  {good.count}
                  <button>+</button>
                  ￥
                  {good.price * good.count}
                </li>
              ))} */}
              
        </div>
      </div>
    )
  }
}

export default Cart;
