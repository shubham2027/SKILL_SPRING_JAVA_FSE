import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const { itemname, Itemname, price, Price, items } = this.props;

    // If items array is passed as props
    if (items) {
      return (
        <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '60%', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ backgroundColor: '#008080', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{item.itemname || item.Itemname}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{item.price || item.Price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    // Default rendering as table row when itemname and price props are passed
    return (
      <tr style={{ backgroundColor: this.props.index % 2 === 0 ? '#f2f2f2' : 'white' }}>
        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{itemname || Itemname}</td>
        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>{price || Price}</td>
      </tr>
    );
  }
}

export default Cart;
