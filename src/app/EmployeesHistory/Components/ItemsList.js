import React from 'react';

class ItemsList extends React.Component {
  state = { items: [] };

  componentWillReceiveProps(nextProps) {
    this.setState({ items: nextProps.items });
  }

  render() {
    const listItems = this.state.items.map((value, index) => {
      return (
        <li key={index}>
          {value}
        </li>
      );
    });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default ItemsList;
