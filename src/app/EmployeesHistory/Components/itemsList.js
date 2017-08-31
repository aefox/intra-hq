import React from 'react';

const ItemsList = props => {
  const listItems = props.items.map((value, index) => {
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
};

export default ItemsList;
