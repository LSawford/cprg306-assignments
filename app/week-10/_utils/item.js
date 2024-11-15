import React from 'react';

function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="p-4 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-700"
      onClick={() => onSelect(name)}
    >
      <h2 className="text-lg font-bold">{name}</h2>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}

export default Item;
