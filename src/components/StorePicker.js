import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="StoreName" />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
