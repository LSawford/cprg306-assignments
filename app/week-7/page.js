"use client"; // Add this directive at the top for client-side rendering

import React, { useState } from 'react';
import NewItem from './new-item.js'; // Assuming NewItem is the form for adding a new item
import ItemList from './item-list.js'; // List to display items
import itemsData from './items.json'; // Import the initial items from a JSON file

function Page() {
  // Initialize the state with the data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler for adding a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]); // Add the new item to the state
  };

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      {/* Pass handleAddItem to NewItem component */}
      <NewItem onAddItem={handleAddItem} />
      {/* Pass items state to ItemList component */}
      <ItemList items={items} />
    </main>
  );
}

export default Page;
