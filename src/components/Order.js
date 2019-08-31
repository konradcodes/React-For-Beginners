import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key]; // The actual fish
    const count = this.props.order[key]; // Amount of the fish they are buying
    const isAvailable = fish && fish.status === 'available';
    // Make sure the fish is loaded before we continue
    if (!fish) return null;
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : 'fish'} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order); // Array of all fishes inside the order object
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key]; // The actual fish
      const count = this.props.order[key]; // Amount of the fish they are buying
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
      // Skip over that fish if its unavailable
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
