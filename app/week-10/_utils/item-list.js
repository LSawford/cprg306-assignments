import React from "react";
import Item from "./item";

const ItemList = ({ items, onItemSelect }) => {
  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg">Shopping List</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
