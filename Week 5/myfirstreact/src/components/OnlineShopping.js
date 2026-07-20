import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.CartItems = [
      { itemname: "Laptop", price: 80000 },
      { itemname: "TV", price: 120000 },
      { itemname: "Washing Machine", price: 50000 },
      { itemname: "Mobile", price: 30000 },
      { itemname: "Fridge", price: 65000 }
    ];
  }

  render() {
    return (
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <h1 style={{ color: '#008080' }}>Items Information</h1>
        <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '60%', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ backgroundColor: '#008080', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.CartItems.map((item, index) => (
              <Cart
                key={index}
                index={index}
                itemname={item.itemname}
                Itemname={item.itemname}
                price={item.price}
                Price={item.price}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
